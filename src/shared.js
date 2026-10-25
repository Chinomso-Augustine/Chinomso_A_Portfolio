function a(...path) {
  const encodedPath = path.map((segment) => encodeURIComponent(segment)).join("/");
  const builtBundle = /\/assets\/index-[^/]+\.js/.test(import.meta.url);
  const base = builtBundle
    ? new URL(/* @vite-ignore */ "../src/assets/", import.meta.url)
    : new URL(/* @vite-ignore */ "./assets/", import.meta.url);

  return new URL(encodedPath, base).href;
}

const img = {
  profile: a("about-me", "Photos", "PP.JPG"),
  aboutPortrait: a("about-me", "chinowithcamera.JPG"),
  resume: a("about-me", "Chinomso Augustine UX Resume copy.pdf"),
  include1: a("about-me", "Include1.JPG"),
  include2: a("about-me", "Include2.JPG"),
  idsa: a("about-me", "IDSA.JPG"),
  nsbe: a("about-me", "NSBE.JPG"),
  colorstack: a("about-me", "Colorstack.JPG"),
  fountain: a("Refil", "Fountain Graphic.png"),
  journeyOne: a("other-images", "journey-map-1.jpg"),
  journeyTwo: a("other-images", "journey-map-2.jpg"),
  parklet: a("Parklet", "Graphics.png"),
  clinicHero: a("Include Design", "HeroImage.png"),
  neuronHomepage: a("neuron-edge-ai", "NEA Homepag.png"),
  neuronOriginalSiteOne: a("neuron-edge-ai", "Old Site1.png"),
  neuronOriginalSiteTwo: a("neuron-edge-ai", "Oldsite2.png"),
  neuronNavigation: a("neuron-edge-ai", "Nav.png"),
  neuronFinalTeam: a("neuron-edge-ai", "final1.png"),
  neuronFinalBlogs: a("neuron-edge-ai", "final2.png"),
  neuronFinalSolutions: a("neuron-edge-ai", "final3.png"),
};

function html(strings, ...values) {
  return strings.reduce((out, part, index) => out + part + (values[index] ?? ""), "");
}

function footer() {
  return html`
    <footer class="mt-16 border-t border-[#26485a] bg-[#071827] text-[#f4f8fb]">
      <div class="border-t border-[#16384b]">
        <div class="home-container flex w-full flex-col gap-3 py-5 text-sm text-[#d6a84f] md:flex-row md:items-center md:justify-between">
          <p>Based in Davis, CA - Available remote and hybrid</p>
          <p>© 2026 Chinomso Augustine</p>
        </div>
      </div>
    </footer>
  `;
}

function heroPage({ theme, eyebrow, title, subtitle, body, meta = [], back = true }) {
  return html`
    <section class="border-b ${theme.border} ${theme.hero} px-5 pb-14 pt-32 text-white sm:px-6 md:px-16">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] ${theme.accent}">${eyebrow}</p>
        <h1 class="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">${title}</h1>
        <p class="mt-4 max-w-2xl text-lg text-white">${subtitle}</p>
        <p class="mt-6 max-w-3xl text-[15px] leading-7 text-white/85">${body}</p>
        ${meta.length ? `<div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">${meta.map(([label, value]) => `<div class="border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm"><p class="text-[11px] uppercase tracking-[0.14em] ${theme.accent}">${label}</p><p class="mt-1 text-sm font-medium text-white">${value}</p></div>`).join("")}</div>` : ""}
        ${back ? `<a href="#/" class="mt-8 inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d]">Back to Home</a>` : ""}
      </div>
    </section>
  `;
}

function imageCard(src, alt, label, color = "blue") {
  const border = color === "teal" ? "border-[#b8dfe3]" : color === "green" ? "border-[#d4d6cf]" : color === "tan" ? "border-[#d5c6ad]" : "border-[#c7d6e7]";
  return `<figure class="overflow-hidden border ${border} bg-white p-2 shadow-[0_14px_36px_rgba(22,54,67,0.08)]"><img src="${src}" alt="${alt}" class="h-72 w-full bg-white object-contain" /><figcaption class="border-t ${border} bg-white px-3 py-2 text-[11px] text-[#4f6780]">${label}</figcaption></figure>`;
}

function basicSection(title, text, content = "", tone = "blue") {
  const border = tone === "teal" ? "border-[#b8dfe3]" : tone === "green" ? "border-[#d4d6cf]" : tone === "tan" ? "border-[#d5c6ad]" : "border-[#c7d6e7]";
  const heading = tone === "teal" ? "text-[#073f4a]" : tone === "green" ? "text-[#2b2d2f]" : tone === "tan" ? "text-[#24352d]" : "text-[#183b63]";
  const body = tone === "teal" ? "text-[#3e6870]" : tone === "green" ? "text-[#5d625d]" : tone === "tan" ? "text-[#53634f]" : "text-[#415a73]";
  return `<section class="border-t ${border} py-10"><h2 class="text-2xl font-semibold ${heading}">${title}</h2><p class="mt-3 max-w-3xl text-[15px] leading-7 ${body}">${text}</p><div class="mt-5">${content}</div></section>`;
}

function chips(items, tone = "blue") {
  const border = tone === "teal" ? "border-[#b8dfe3] text-[#3e6870]" : "border-[#c7d6e7] text-[#415a73]";
  return `<div class="grid gap-3 sm:grid-cols-3">${items.map((item) => `<div class="border ${border} bg-white px-4 py-3 text-sm">${item}</div>`).join("")}</div>`;
}

function previewButton(title, image, alt) {
  return `<button type="button" data-preview-title="${title}" data-preview-src="${image}" data-preview-alt="${alt}" class="group overflow-hidden border border-[#d9c9e6] bg-white p-3 text-left shadow-[0_16px_40px_rgba(58,25,78,0.06)] transition hover:-translate-y-1 hover:border-[#805b99]"><span class="block overflow-hidden bg-[#fbf7ff]"><img src="${image}" alt="${alt}" class="h-[15rem] w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></span><span class="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#805b99]">${title}</span><span class="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7aae]">Click to expand</span></button>`;
}

function caseStudyNav({ nextHref, nextLabel, variant = "navy" }) {
  const variants = {
    clinic: {
      button: "border-[#d9c9e6]/30 bg-white/8 text-[#f0d8ff] hover:bg-white/12",
      accent: "text-[#caa8df]",
    },
    neuron: {
      button: "border-[#1d3b70] bg-[#0b2558] text-white hover:border-[#ff5b00] hover:bg-[#102f63]",
      accent: "text-[#ff5b00]",
    },
    parklet: {
      button: "border-[#d5c6ad]/30 bg-white/8 text-[#fffaf2] hover:bg-white/12",
      accent: "text-[#e7b07d]",
    },
    refill: {
      button: "border-[#8eeaf0]/35 bg-white/10 text-[#f5fcfd] hover:bg-white/15",
      accent: "text-[#8eeaf0]",
    },
    navy: {
      button: "border-[#26485a] bg-[#0f2a3a] text-[#f4f8fb] hover:bg-[#173f4d]",
      accent: "text-[#d6a84f]",
    },
  };
  const theme = variants[variant] || variants.navy;
  const buttonClass = `inline-flex h-10 items-center whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition ${theme.button}`;

  return html`<nav aria-label="Case study navigation" class="flex flex-wrap items-center gap-3 py-10">
    <a href="#/" class="${buttonClass}">View all case studies</a>
    <a href="${nextHref}" class="${buttonClass}"><span class="mr-2 ${theme.accent}">Next:</span>${nextLabel}</a>
  </nav>`;
}

function openPreview(title, src, alt, style = "default") {
  const modal = document.createElement("div");
  const isPlain = style === "plain";
  const isBeyondGallery = style === "beyond";
  modal.className = isPlain
    ? "fixed inset-0 z-[70] flex items-center justify-center bg-black/55 p-0"
    : isBeyondGallery
      ? "beyond-preview-overlay"
      : "fixed inset-0 z-[70] flex items-center justify-center bg-[#160720]/88 p-4 backdrop-blur-sm";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = isPlain
    ? `<button type="button" class="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-2xl leading-none text-white shadow-[0_10px_28px_rgba(0,0,0,0.25)]" aria-label="Close preview">&times;</button><img src="${src}" alt="${alt}" class="relative mx-auto max-h-[86vh] max-w-[86vw] object-contain" />`
    : isBeyondGallery
      ? `<button type="button" class="beyond-preview-close" aria-label="Close preview">&times;</button><figure class="beyond-preview-figure"><figcaption class="beyond-preview-caption">${title}</figcaption><img src="${src}" alt="${alt}" class="beyond-preview-image" /></figure>`
      : `<button type="button" class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white text-2xl leading-none text-[#4a2f68] shadow-[0_12px_30px_rgba(0,0,0,0.25)]" aria-label="Close preview">&times;</button><figure class="max-h-[88vh] w-full max-w-4xl overflow-auto bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.35)]"><figcaption class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#4a2f68]">${title}</figcaption><img src="${src}" alt="${alt}" class="mx-auto max-h-[78vh] w-full object-contain" /></figure>`;
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("button")) modal.remove();
  });
  document.body.appendChild(modal);
}

export { a, html, img, footer, heroPage, imageCard, basicSection, chips, previewButton, caseStudyNav, openPreview };
