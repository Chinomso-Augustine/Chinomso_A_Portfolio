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
  resume: a("about-me", "My Resume.pdf"),
  include1: a("about-me", "Include1.JPG"),
  include2: a("about-me", "Include2.JPG"),
  nsbe: a("about-me", "NSBE.JPG"),
  colorstack: a("about-me", "Colorstack.JPG"),
  campus: a("campconnect", "Camp.png"),
  valueProp: a("campconnect", "VP.png"),
  services: a("campconnect", "Services .png"),
  providers: a("campconnect", "Providers.png"),
  fountain: a("Refil", "Fountain Graphic.png"),
  pathfinder: a("other-images", "Laptop 1.png"),
  journeyOne: a("other-images", "journey-map-1.jpg"),
  journeyTwo: a("other-images", "journey-map-2.jpg"),
  parklet: a("Parklet", "Graphics.png"),
  clinicHero: a("Include Design", "HeroImage.png"),
};

function html(strings, ...values) {
  return strings.reduce((out, part, index) => out + part + (values[index] ?? ""), "");
}

function footer() {
  return html`
    <footer class="mt-16 border-t border-[#26485a] bg-[#071827] text-[#f4f8fb]">
      <div class="mx-auto grid w-full max-w-[1180px] gap-10 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p class="text-sm uppercase tracking-[0.16em] text-[#8bc8e8]">Let's Build Something</p>
          <h2 class="mt-3 max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#f4f8fb] md:text-5xl">Have a project worth designing?</h2>
          <p class="mt-5 max-w-lg text-sm leading-7 text-[#c4d3dc]">
            I am currently open to UI/UX design, product design, and front-end opportunities where thoughtful research and polished interfaces matter.
          </p>
          <div class="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
            <a href="mailto:chinomsoaugustine073@gmail.com" class="rounded-full bg-[#f4f8fb] px-5 py-3 text-[#0f2a3a] transition hover:bg-[#d8e6ee]">Get in touch</a>
            <a href="https://www.linkedin.com/in/chinomso-augustine-ba9a29258/" target="_blank" rel="noreferrer" class="rounded-full border border-[#31566a] px-5 py-3 text-[#f4f8fb] transition hover:bg-white/10">LinkedIn</a>
          </div>
        </div>
        <div>
          <p class="text-sm uppercase tracking-[0.16em] text-[#8bc8e8]">Send me a message</p>
          <form data-contact-form class="mt-5 grid gap-3 sm:grid-cols-2">
            <input type="text" name="firstName" placeholder="First Name" required class="${inputClass()}" />
            <input type="text" name="lastName" placeholder="Last Name" required class="${inputClass()}" />
            <input type="email" name="email" placeholder="Email Address *" required class="${inputClass()} sm:col-span-2" />
            <textarea name="message" placeholder="Message" required class="min-h-32 border border-[#31566a] bg-[#0a2030] px-4 py-3 text-sm text-[#f4f8fb] placeholder:text-[#8bc8e8] focus:border-[#f4f8fb] focus:outline-none sm:col-span-2"></textarea>
            <button type="submit" class="h-11 rounded-full bg-[#8bc8e8] px-4 text-sm font-semibold text-[#071827] transition hover:bg-[#f4f8fb] sm:col-span-2">Send message</button>
          </form>
        </div>
      </div>
      <div class="border-t border-[#16384b]">
        <div class="mx-auto flex w-full max-w-[1180px] flex-col gap-3 px-6 py-5 text-sm text-[#8bc8e8] md:flex-row md:items-center md:justify-between md:px-8">
          <p>Based in Davis, CA - Available remote and hybrid</p>
          <p>© 2026 Chinomso Augustine</p>
        </div>
      </div>
    </footer>
  `;
}

function inputClass() {
  return "h-11 border border-[#31566a] bg-[#0a2030] px-4 text-sm text-[#f4f8fb] placeholder:text-[#8bc8e8] focus:border-[#f4f8fb] focus:outline-none";
}

function handleContactSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const subject = encodeURIComponent(`Portfolio Contact - ${firstName} ${lastName}`.trim());
  const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:chinomsoaugustine073@gmail.com?subject=${subject}&body=${body}`;
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

function openPreview(title, src, alt) {
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 z-[70] flex items-center justify-center bg-[#160720]/88 p-4 backdrop-blur-sm";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `<button type="button" class="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white text-2xl leading-none text-[#4a2f68] shadow-[0_12px_30px_rgba(0,0,0,0.25)]" aria-label="Close preview">&times;</button><figure class="max-h-[88vh] w-full max-w-4xl overflow-auto bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.35)]"><figcaption class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#4a2f68]">${title}</figcaption><img src="${src}" alt="${alt}" class="mx-auto max-h-[78vh] w-full object-contain" /></figure>`;
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("button")) modal.remove();
  });
  document.body.appendChild(modal);
}

export { a, html, img, footer, handleContactSubmit, heroPage, imageCard, basicSection, chips, previewButton, openPreview };
