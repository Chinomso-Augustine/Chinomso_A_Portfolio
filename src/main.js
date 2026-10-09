import { aboutPage } from "./pages/about.js";
import { homePage } from "./pages/home.js";
import { notebookPage } from "./pages/notebook.js";
import { resumePage } from "./pages/resume.js";
import { campusConnectPage } from "./projects/campus-connect.js";
import { includeClinicPage } from "./projects/include-clinic.js";
import { neuronEdgeAiPage } from "./projects/neuron-edge-ai.js";
import { parkletPage } from "./projects/parklet.js";
import { refillPage } from "./projects/refill.js";
import { handleContactSubmit, html, openPreview } from "./shared.js";

const root = document.querySelector("#root");

const routes = {
  "/": homePage,
  "/about": aboutPage,
  "/notebook": notebookPage,
  "/resume": resumePage,
  "/case1": campusConnectPage,
  "/refill": refillPage,
  "/parklet": parkletPage,
  "/student-run-clinic": includeClinicPage,
  "/neuron-edge-ai": neuronEdgeAiPage,
};

const navItems = [
  ["Projects", "#/"],
  ["About Me", "#/about"],
  ["Note book", "#/notebook"],
  ["Resume", "#/resume"],
  ["Contact", "mailto:chinomsoaugustine073@gmail.com"],
];

function path() {
  return window.location.hash.replace(/^#/, "") || "/";
}

function render() {
  const route = routes[path()] || notFoundPage;
  root.innerHTML = `${pointerMarkup()}${siteNav()}${route()}`;
  root.querySelectorAll("[data-contact-form]").forEach((form) => form.addEventListener("submit", handleContactSubmit));
  root.querySelectorAll("[data-preview-src]").forEach((button) => {
    button.addEventListener("click", () => openPreview(button.dataset.previewTitle, button.dataset.previewSrc, button.dataset.previewAlt, button.dataset.previewStyle));
  });
  updateActiveNav();
  window.scrollTo(0, 0);
}

function siteNav() {
  const isNeuronEdge = path() === "/neuron-edge-ai";
  const headerClass = isNeuronEdge
    ? "fixed inset-x-0 top-0 z-50 border-b border-[#12305f] bg-[#061a44]/94 backdrop-blur-xl"
    : "fixed inset-x-0 top-0 z-50 border-b border-[#26485a] bg-[#071827]/92 backdrop-blur-xl";
  const brandClass = isNeuronEdge
    ? "shrink-0 text-sm font-semibold tracking-tight text-white hover:text-[#ff5b00]"
    : "shrink-0 text-sm font-semibold tracking-tight text-[#f4f8fb] hover:text-[#d6a84f]";
  const brandMutedClass = isNeuronEdge ? "hidden font-medium text-[#a9b5c8] sm:inline" : "hidden font-medium text-[#9fb6c5] sm:inline";
  const listClass = isNeuronEdge
    ? "flex w-max items-center gap-1 rounded-full border border-[#1d3b70] bg-[#0b2558]/88 p-1 shadow-[0_10px_34px_rgba(0,0,0,0.22)] sm:w-auto sm:justify-end"
    : "flex w-max items-center gap-1 rounded-full border border-[#26485a] bg-[#0f2a3a]/85 p-1 shadow-[0_10px_34px_rgba(24,23,19,0.08)] sm:w-auto sm:justify-end";

  return html`
    <header class="${headerClass}">
      <div class="mx-auto flex min-h-16 w-full max-w-[1180px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8">
        <a href="#/" class="${brandClass}" aria-label="Chinomso Augustine home">
          Chinomso Augustine <span class="${brandMutedClass}">- Designer and UI Engineer</span>
        </a>
        <nav aria-label="Main navigation" class="w-full overflow-x-auto [-webkit-overflow-scrolling:touch] sm:w-auto">
          <ul class="${listClass}">
            ${navItems.map(([label, href]) => `<li><a data-nav href="${href}" class="${navClass(isNeuronEdge)}">${label}</a></li>`).join("")}
          </ul>
        </nav>
      </div>
    </header>
  `;
}

function navClass(isNeuronEdge = false) {
  return isNeuronEdge
    ? "block shrink-0 rounded-full px-3 py-2 text-xs font-semibold text-[#e7eef8] transition hover:bg-[#ff5b00] hover:text-white sm:px-4 sm:text-sm"
    : "block shrink-0 rounded-full px-3 py-2 text-xs font-semibold text-[#d8e6ee] transition hover:bg-[#f4f8fb] hover:text-[#0f2a3a] sm:px-4 sm:text-sm";
}

function updateActiveNav() {
  const isNeuronEdge = path() === "/neuron-edge-ai";
  root.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === `#${path()}`) {
      link.className = isNeuronEdge
        ? navClass(true).replace("text-[#e7eef8] transition hover:bg-[#ff5b00] hover:text-white", "bg-[#ff5b00] text-white shadow-sm")
        : navClass().replace("text-[#d8e6ee] transition hover:bg-[#f4f8fb] hover:text-[#0f2a3a]", "bg-[#f4f8fb] text-[#0f2a3a] shadow-sm");
    }
  });
}

function notFoundPage() {
  return `<main class="min-h-screen bg-[#071827] px-5 pb-12 pt-32 text-[#f4f8fb] sm:px-6 md:px-16"><div class="mx-auto max-w-4xl border border-[#26485a] bg-[#0f2a3a] p-8"><h1 class="text-3xl font-semibold">Page not found</h1><a href="#/" class="mt-6 inline-flex rounded-full bg-[#f4f8fb] px-5 py-3 text-sm font-semibold text-[#0f2a3a]">Return Home</a></div></main>`;
}

function pointerMarkup() {
  return `<div class="pointer-cursor" aria-hidden="true"></div>`;
}

function setupPointerTrail() {
  const canUseCustomPointer = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
  if (!canUseCustomPointer) return;

  let lastParticleTime = 0;
  window.addEventListener("pointermove", (event) => {
    const cursor = document.querySelector(".pointer-cursor");
    if (!cursor) return;
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    const now = performance.now();
    if (now - lastParticleTime <= 25) return;
    const particle = document.createElement("span");
    const hue = Math.floor((event.clientX / window.innerWidth) * 240 + 120);
    const size = 20 + Math.random() * 14;
    particle.className = "pointer-particle";
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `hsl(${hue}, 100%, 65%)`;
    particle.style.boxShadow = `0 0 18px hsl(${hue}, 100%, 65%)`;
    document.body.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
    lastParticleTime = now;
  });
}

window.addEventListener("hashchange", render);
render();
setupPointerTrail();
