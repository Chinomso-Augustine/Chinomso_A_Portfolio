import * as THREE from "three";

// Adapted from the supplied clustered-lighting example.
// Change the scene here; background placement and opacity live in styles.css.
const settings = {
  grid: 30,
  spacing: 5,
  smallRadius: 0.5,
  bigRadius: 6,
  waveHeight: 4,
  waveSpeed: 1.5,
  lightPower: 45,
  lightDistance: 9,
  fallbackLights: 16,
  cameraZoom: 0.85, // Values below 1 show more of the colored grid.
  topInset: 0, // Space above the large spheres as a fraction of the viewport height.
  framesPerSecond: 30,
};

const bigPositions = [
  new THREE.Vector3(-9, settings.bigRadius, -9),
  new THREE.Vector3(9, settings.bigRadius, -9),
  new THREE.Vector3(-9, settings.bigRadius, 9),
  new THREE.Vector3(9, settings.bigRadius, 9),
];

const releasedRenderers = new WeakSet();

async function releaseRenderer(renderer) {
  if (releasedRenderers.has(renderer)) return;
  releasedRenderers.add(renderer);
  if (renderer.isWebGPURenderer) {
    if (renderer.hasInitialized()) await renderer.dispose();
    renderer.backend.device?.destroy();
  } else {
    renderer.dispose();
    renderer.forceContextLoss();
  }
  renderer.domElement.remove();
}

async function createRenderer(isCancelled) {
  if (globalThis.navigator?.gpu) {
    let renderer;
    try {
      const [{ WebGPURenderer }, { ClusteredLighting }] = await Promise.all([
        import("three/webgpu"),
        import("three/addons/lighting/ClusteredLighting.js"),
      ]);
      if (isCancelled()) return null;
      renderer = new WebGPURenderer({ alpha: true, antialias: true });
      await renderer.init();
      const clustered = renderer.backend.isWebGPUBackend === true;
      if (clustered) {
        // Larger tiles keep the decorative scene's cluster buffers modest.
        renderer.lighting = new ClusteredLighting(settings.grid ** 2, 64, 16, 32);
      }
      return { renderer, clustered };
    } catch (error) {
      if (renderer) await releaseRenderer(renderer);
      if (!isCancelled()) console.warn("Using the lighter homepage lighting effect:", error);
    }
  }

  if (isCancelled()) return null;
  return {
    renderer: new THREE.WebGLRenderer({ alpha: true, antialias: true }),
    clustered: false,
  };
}

function createScene(clustered) {
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 0.08));
  scene.add(new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000).rotateX(-Math.PI / 2),
    new THREE.MeshPhongMaterial({ color: 0x2a2a2a, shininess: 80 }),
  ));

  const bigGeometry = new THREE.SphereGeometry(settings.bigRadius, 64, 32);
  const bigMaterial = new THREE.MeshPhongMaterial({ color: 0xdddddd, shininess: 80 });
  for (const position of bigPositions) {
    const sphere = new THREE.Mesh(bigGeometry, bigMaterial);
    sphere.position.copy(position);
    scene.add(sphere);
  }

  // The entire colored grid is one draw call, including in the WebGL fallback.
  const spheres = new THREE.InstancedMesh(
    new THREE.SphereGeometry(settings.smallRadius, 16, 8),
    new THREE.MeshBasicMaterial(),
    settings.grid ** 2,
  );
  spheres.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  spheres.frustumCulled = false;
  scene.add(spheres);

  const balls = [];
  const color = new THREE.Color();
  const span = (settings.grid - 1) * settings.spacing;
  for (let xIndex = 0; xIndex < settings.grid; xIndex++) {
    for (let zIndex = 0; zIndex < settings.grid; zIndex++) {
      const x = xIndex * settings.spacing - span / 2;
      const z = zIndex * settings.spacing - span / 2;
      const distance = Math.min(...bigPositions.map(position => Math.hypot(x - position.x, z - position.z)));
      if (distance < settings.bigRadius + 1) continue;

      // Wrap the rainbow around the center, with red facing the camera.
      const hue = THREE.MathUtils.euclideanModulo(Math.atan2(z, x) / (Math.PI * 2) - 1 / 6, 1);
      color.setHSL(hue, 1, 0.5);
      spheres.setColorAt(balls.length, color);
      balls.push({ x, z, phase: (xIndex + zIndex) * 0.5, color: color.clone(), distance, light: null });
    }
  }
  spheres.count = balls.length;
  spheres.instanceColor.needsUpdate = true;

  // Clustered shading uses every light. The fallback lights the central spheres
  // with the nearest lights while keeping the complete colored grid visible.
  const litBalls = clustered ? balls : [...balls].sort((a, b) => a.distance - b.distance).slice(0, settings.fallbackLights);
  for (const ball of litBalls) {
    const light = new THREE.PointLight(ball.color, 1, settings.lightDistance);
    light.power = settings.lightPower;
    light.position.set(ball.x, settings.smallRadius, ball.z);
    scene.add(light);
    ball.light = light;
  }

  const dummy = new THREE.Object3D();
  function updateWave(time) {
    balls.forEach((ball, index) => {
      const y = settings.smallRadius + (0.5 + 0.5 * Math.sin(time * settings.waveSpeed + ball.phase)) * settings.waveHeight;
      dummy.position.set(ball.x, y, ball.z);
      dummy.updateMatrix();
      spheres.setMatrixAt(index, dummy.matrix);
      if (ball.light) ball.light.position.y = y;
    });
    spheres.instanceMatrix.needsUpdate = true;
  }
  updateWave(0);
  return { scene, updateWave, bigGeometry };
}

function releaseScene(scene) {
  const resources = new Set();
  scene.traverse((object) => {
    if (object.isInstancedMesh) object.dispose();
    if (object.geometry) resources.add(object.geometry);
    if (object.material) resources.add(object.material);
  });
  resources.forEach(resource => resource.dispose());
  scene.clear();
}

function startBackground(container, renderer, clustered) {
  const { scene, updateWave, bigGeometry } = createScene(clustered);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const camera = new THREE.PerspectiveCamera(50, 1, 1, 400);
  camera.zoom = settings.cameraZoom;
  const target = new THREE.Vector3(0, 6, 0);
  let disposed = false;
  let lastFrameTime = null;
  let animationTime = 0;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1;
  container.appendChild(renderer.domElement);

  function renderFrame() {
    if (!disposed && !document.hidden) renderer.render(scene, camera);
  }

  function animate(time) {
    if (disposed || document.hidden || reducedMotion.matches) return;
    if (lastFrameTime !== null && time - lastFrameTime < 1000 / settings.framesPerSecond) return;
    const elapsed = lastFrameTime === null ? 0 : Math.min((time - lastFrameTime) / 1000, 0.1);
    lastFrameTime = time;
    animationTime += elapsed;
    updateWave(animationTime);
    renderFrame();
  }

  function updateAnimation() {
    lastFrameTime = null;
    renderer.setAnimationLoop(document.hidden || reducedMotion.matches ? null : animate);
    renderFrame();
  }

  function resize() {
    if (disposed) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setSize(width, height, false);
    camera.clearViewOffset();
    camera.aspect = width / height;
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
    const radius = Math.hypot(9, 9) + settings.bigRadius;
    const distance = radius / Math.sin(Math.min(verticalFov, horizontalFov) / 2) * 1.15;
    camera.position.set(36, 12, 36).setLength(Math.max(Math.hypot(36, 12, 36), distance)).add(target);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    // Align the visible top of the spheres with the top of any screen size.
    const vertices = bigGeometry.getAttribute("position");
    const point = new THREE.Vector3();
    let highestPoint = -Infinity;
    for (const position of bigPositions) {
      for (let index = 0; index < vertices.count; index++) {
        point.fromBufferAttribute(vertices, index).add(position).project(camera);
        highestPoint = Math.max(highestPoint, point.y);
      }
    }
    const topGap = (1 - highestPoint) / 2 - settings.topInset;
    camera.setViewOffset(width, height, 0, height * topGap, width, height);
    renderFrame();
  }

  const observer = new ResizeObserver(resize);
  function stopBackground() {
    if (disposed) return;
    disposed = true;
    observer.disconnect();
    document.removeEventListener("visibilitychange", updateAnimation);
    reducedMotion.removeEventListener("change", updateAnimation);
    renderer.setAnimationLoop(null);
    if (clustered) renderer.lighting.getNode(scene).dispose();
    releaseScene(scene);
    void releaseRenderer(renderer);
  }

  try {
    observer.observe(container);
    document.addEventListener("visibilitychange", updateAnimation);
    reducedMotion.addEventListener("change", updateAnimation);
    resize();
    updateAnimation();
  } catch (error) {
    stopBackground();
    throw error;
  }
  return stopBackground;
}

export default function mountHomeBackground(container) {
  let disposed = false;
  let stopBackground = () => {};
  createRenderer(() => disposed)
    .then((result) => {
      if (!result) return;
      if (disposed) {
        void releaseRenderer(result.renderer);
        return;
      }
      try {
        stopBackground = startBackground(container, result.renderer, result.clustered);
      } catch (error) {
        void releaseRenderer(result.renderer);
        throw error;
      }
    })
    .catch((error) => {
      if (!disposed) console.warn("The homepage background is unavailable:", error);
    });

  return () => {
    disposed = true;
    stopBackground();
  };
}
