import * as THREE from "three";
import { Rhino3dmLoader } from "three/addons/loaders/3DMLoader.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import rhinoScriptUrl from "rhino3dm/rhino3dm.js?url";
import rhinoWasmUrl from "rhino3dm/rhino3dm.wasm?url";

function disposeObject(object) {
  const resources = new Set();
  object.traverse((child) => {
    if (child.geometry) resources.add(child.geometry);
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.filter(Boolean).forEach((material) => {
      Object.values(material).forEach((value) => {
        if (value?.isTexture) resources.add(value);
      });
      resources.add(material);
    });
  });
  resources.forEach((resource) => resource.dispose());
}

function applyRhinoDisplayColors(model) {
  const coloredMaterials = new Map();

  model.traverse((object) => {
    if (!object.isMesh) return;

    const displayColor = object.userData.attributes?.drawColor;
    if (!displayColor) return;

    const color = new THREE.Color().setRGB(
      displayColor.r / 255,
      displayColor.g / 255,
      displayColor.b / 255,
      THREE.SRGBColorSpace,
    );
    const sourceMaterials = Array.isArray(object.material) ? object.material : [object.material];
    const materials = sourceMaterials.map((sourceMaterial) => {
      if (!sourceMaterial?.color) return sourceMaterial;

      const key = `${sourceMaterial.uuid}:${color.getHexString()}`;
      if (!coloredMaterials.has(key)) {
        const coloredMaterial = sourceMaterial.clone();
        coloredMaterial.color.copy(color);
        coloredMaterials.set(key, coloredMaterial);
      }
      return coloredMaterials.get(key);
    });

    object.material = Array.isArray(object.material) ? materials : materials[0];
  });
}

export default function mountRhinoViewer(container) {
  const status = container.querySelector("[data-rhino-status]");
  const figure = container.closest("figure");
  const resetButton = figure.querySelector("[data-rhino-reset]");
  const viewSelect = figure.querySelector("[data-rhino-view]");
  const fullscreenButton = figure.querySelector("[data-rhino-fullscreen]");
  const modelCard = container.closest(".beyond-model-card");
  let disposed = false;
  let frame = 0;
  let radius = 0;
  let interacting = false;
  const initialZoom = Math.max(Number(container.dataset.initialZoom) || 1, 0.1);

  function setStatus(message) {
    if (disposed) return;
    status.textContent = message;
    status.hidden = !message;
    container.setAttribute("aria-busy", String(message.startsWith("Loading") || message.startsWith("Preparing")));
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } catch (error) {
    console.error("Could not start the Rhino viewer:", error);
    setStatus("3D preview is unavailable on this device.");
    return () => {};
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#0f2a3a");
  const originalMaterialSettings = new WeakMap();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000);
  camera.up.set(0, 0, 1);
  camera.position.set(10, -10, 8);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.domElement.setAttribute("role", "img");
  renderer.domElement.setAttribute("aria-label", `${container.dataset.modelTitle} interactive 3D model`);
  container.appendChild(renderer.domElement);

  const controls = new TrackballControls(camera, renderer.domElement);
  controls.staticMoving = true;
  controls.multiTouchRoll = true;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x516575, 2.5));
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, -2, 3);
  scene.add(light);

  function setDisplayStyle(style) {
    const ghosted = style === "ghosted";
    scene.traverse((object) => {
      if (!object.isMesh) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.filter(Boolean).forEach((material) => {
        if (!originalMaterialSettings.has(material)) {
          originalMaterialSettings.set(material, {
            opacity: material.opacity,
            transparent: material.transparent,
            depthWrite: material.depthWrite,
          });
        }

        const original = originalMaterialSettings.get(material);
        material.opacity = ghosted ? original.opacity * 0.42 : original.opacity;
        material.transparent = ghosted || original.transparent;
        material.depthWrite = ghosted ? false : original.depthWrite;
        material.needsUpdate = true;
      });
    });
    requestRender();
  }

  function changeDisplayStyle() {
    setDisplayStyle(viewSelect.value);
  }
  viewSelect.addEventListener("change", changeDisplayStyle);

  function syncFullscreenButton() {
    const isFullscreen = document.fullscreenElement === modelCard;
    document.body.classList.toggle("rhino-fullscreen-active", isFullscreen);
    fullscreenButton.textContent = isFullscreen ? "Exit full screen" : "Full screen";
    fullscreenButton.setAttribute(
      "aria-label",
      `${isFullscreen ? "Exit full screen for" : "Expand"} ${container.dataset.modelTitle}${isFullscreen ? "" : " card to full screen"}`,
    );
  }

  function toggleFullscreen() {
    const fullscreenAction = document.fullscreenElement === modelCard
      ? document.exitFullscreen()
      : modelCard.requestFullscreen();
    fullscreenAction.catch(() => {
      if (!disposed) setStatus("Full-screen mode is unavailable here.");
    });
  }

  if (!modelCard?.requestFullscreen || !document.exitFullscreen) {
    fullscreenButton.hidden = true;
  } else {
    fullscreenButton.addEventListener("click", toggleFullscreen);
    document.addEventListener("fullscreenchange", syncFullscreenButton);
  }

  // Render only when the view changes, keeping the rest of the homepage idle.
  function requestRender() {
    if (disposed || frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (disposed) return;
      controls.update();
      renderer.render(scene, camera);
    });
  }
  controls.addEventListener("change", requestRender);

  function startInteraction() {
    interacting = true;
    controls.handleResize();
    requestRender();
  }
  function endInteraction() {
    interacting = false;
    requestRender();
  }
  function moveInteraction() {
    if (interacting) requestRender();
  }
  controls.addEventListener("start", startInteraction);
  controls.addEventListener("end", endInteraction);
  document.addEventListener("pointermove", moveInteraction);
  renderer.domElement.addEventListener("pointercancel", endInteraction);
  window.addEventListener("blur", endInteraction);

  function fitModel() {
    if (!radius) return;
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
    const distance = radius / Math.sin(Math.min(verticalFov, horizontalFov) / 2) * 1.15 / initialZoom;
    camera.up.set(0, 0, 1);
    camera.position.set(1, -1, 0.8).normalize().multiplyScalar(distance);
    camera.near = radius / 1000;
    camera.far = distance + radius * 100;
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.minDistance = radius * 0.15;
    controls.maxDistance = distance * 10;
    controls.update();
    requestRender();
  }

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height || disposed) return;
    renderer.setSize(width, height, false);
    controls.handleResize();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    fitModel();
    requestRender();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();
  resetButton.addEventListener("click", fitModel);

  // Bundle the installed reader and WASM together instead of relying on a CDN.
  const manager = new THREE.LoadingManager();
  manager.setURLModifier((url) => {
    if (url === "rhino3dm.js") return rhinoScriptUrl;
    if (url === "rhino3dm.wasm") return rhinoWasmUrl;
    return url;
  });
  manager.onLoad = requestRender;
  const loader = new Rhino3dmLoader(manager).setWorkerLimit(1);
  setStatus("Loading model…");

  loader.load(
    container.dataset.modelSrc,
    (model) => {
      if (disposed) {
        disposeObject(model);
        return;
      }
      const hiddenObjects = new Set((container.dataset.hiddenObjects || "").split(","));
      model.traverse((child) => {
        if (hiddenObjects.has(child.userData.attributes?.id)) child.visible = false;
      });
      applyRhinoDisplayColors(model);
      model.updateMatrixWorld(true);
      const box = new THREE.Box3();
      model.traverseVisible((child) => {
        if (!child.geometry) return;
        child.geometry.computeBoundingBox();
        box.union(child.geometry.boundingBox.clone().applyMatrix4(child.matrixWorld));
      });
      if (box.isEmpty()) {
        disposeObject(model);
        setStatus("This model has no geometry to display.");
        return;
      }
      const center = box.getCenter(new THREE.Vector3());
      const centeredModel = new THREE.Group();
      centeredModel.position.copy(center).negate();
      centeredModel.add(model);
      radius = Math.max(box.getSize(new THREE.Vector3()).length() / 2, 0.001);
      scene.add(centeredModel);
      fitModel();
      resetButton.disabled = false;
      viewSelect.disabled = false;
      setStatus("");
    },
    (event) => {
      if (!event.lengthComputable) return;
      const percent = Math.round(event.loaded / event.total * 100);
      setStatus(percent === 100 ? "Preparing model…" : `Loading model… ${percent}%`);
    },
    (error) => {
      if (disposed) return;
      console.error("Could not load the Rhino model:", error);
      setStatus("Could not load this model. Please reload to try again.");
    },
  );

  return () => {
    disposed = true;
    observer.disconnect();
    cancelAnimationFrame(frame);
    resetButton.removeEventListener("click", fitModel);
    viewSelect.removeEventListener("change", changeDisplayStyle);
    fullscreenButton.removeEventListener("click", toggleFullscreen);
    document.removeEventListener("fullscreenchange", syncFullscreenButton);
    document.removeEventListener("pointermove", moveInteraction);
    renderer.domElement.removeEventListener("pointercancel", endInteraction);
    window.removeEventListener("blur", endInteraction);
    controls.dispose();
    manager.abort();
    loader.dispose();
    if (loader.workerSourceURL) URL.revokeObjectURL(loader.workerSourceURL);
    disposeObject(scene);
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };
}
