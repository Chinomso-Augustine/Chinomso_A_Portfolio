import { html, img } from "../shared.js";

const googleColors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];
const projectTags = ["UI/UX Design", "Product Strategy", "Interaction Design"];
const metrics = [
  ["Primary goal", "Find help faster", "#4285F4"],
  ["Core user", "UC Davis students", "#0F9D58"],
  ["Experience", "Search → compare → book", "#F4B400"],
];

function colorWord(text) {
  return `<span aria-label="${text}" class="inline-flex flex-wrap">${text
    .split("")
    .map((letter, index) => `<span style="color:${googleColors[index % googleColors.length]}">${letter}</span>`)
    .join("")}</span>`;
}

function colorDots() {
  return `<div class="flex items-center gap-2" aria-hidden="true">${googleColors
    .map((color) => `<span class="h-2.5 w-2.5 rounded-full" style="background-color:${color}"></span>`)
    .join("")}</div>`;
}

function sectionVisual(images = []) {
  if (!images.length) return "";

  return html`<div class="space-y-4">
    ${images
      .map(
        (image) => html`<figure class="overflow-hidden rounded-[28px] border border-[#5f8fc8]/35 bg-[#f8fafd] shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${image.featured ? "lg:-mt-8 lg:shadow-[0_28px_80px_rgba(0,0,0,0.35)]" : ""}">
          <div class="bg-[#f8fafd] p-5">
            <div class="${image.featured ? "h-[18rem] overflow-hidden" : ""} rounded-2xl">
              <img
                src="${image.src}"
                alt="${image.alt}"
                class="${image.featured ? "w-full -translate-y-8 rounded-2xl" : "h-72 w-full rounded-2xl object-contain"}"
              />
            </div>
          </div>
          <figcaption class="border-t border-[#e8eaed] bg-white px-5 py-3 text-xs font-medium text-[#5f6368]">${image.caption}</figcaption>
        </figure>`,
      )
      .join("")}
  </div>`;
}

function detailSection({ title, body, bullets, images }) {
  return html`<section class="border-t border-[#5f8fc8]/30 py-12">
    <div class="${images?.length ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-start" : ""}">
      <div>
        ${colorDots()}
        <h2 class="font-sans mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f8fafd]">${title}</h2>
        <p class="mt-4 max-w-3xl text-[16px] leading-8 text-[#c8d7e8]">${body}</p>
        ${
          bullets
            ? `<ul class="mt-6 grid gap-3 text-[15px] text-[#e8f0fe]">${bullets
                .map((item) => `<li class="flex gap-3 rounded-2xl border border-[#5f8fc8]/30 bg-white/8 p-4 shadow-sm"><span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1a73e8]"></span><span>${item}</span></li>`)
                .join("")}</ul>`
            : ""
        }
      </div>
      ${sectionVisual(images)}
    </div>
  </section>`;
}

export function campusConnectPage() {
  return html`<div class="min-h-screen bg-[#0b2341] text-[#f8fafd]">
    <section class="relative overflow-hidden border-b border-[#5f8fc8]/30 bg-[#0b2341] px-5 pb-16 pt-32 sm:px-6 md:px-16">
      <div class="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#1a73e8]/18"></div>
      <div class="pointer-events-none absolute -left-24 bottom-6 h-64 w-64 rounded-full bg-[#f4b400]/14"></div>
      <div class="relative mx-auto max-w-6xl">
        <div>
          <div class="inline-flex items-center gap-3 rounded-full border border-[#5f8fc8]/35 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c8d7e8] shadow-sm backdrop-blur-sm">
            ${colorDots()} Case Study
          </div>
          <h1 class="font-sans mt-6 text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl md:text-7xl md:tracking-[-0.06em]">
            ${colorWord("Campus")}<span class="text-[#f8fafd]">Connect</span>
          </h1>
          <p class="mt-5 max-w-2xl text-xl font-medium tracking-tight text-[#e8f0fe] sm:text-2xl sm:tracking-[-0.03em]">Student services, simplified into one trusted search-and-book hub.</p>
          <p class="mt-5 max-w-3xl text-[16px] leading-8 text-[#c8d7e8]">Rebuilt with Google-inspired design thinking: generous white space, soft borders, clear hierarchy, and color used only to guide attention.</p>
          <div class="mt-8 flex flex-wrap gap-3 text-sm text-[#e8f0fe]">
            ${projectTags
              .map((tag, index) => `<span class="rounded-full border border-[#5f8fc8]/35 bg-white/10 px-4 py-2 shadow-sm" style="box-shadow:inset 0 -2px 0 ${googleColors[index % googleColors.length]}">${tag}</span>`)
              .join("")}
            <a href="https://project-campusconnect.vercel.app" target="_blank" rel="noreferrer" class="rounded-full border border-[#5f8fc8]/35 bg-white/10 px-4 py-2 font-semibold text-[#8ab4f8] shadow-sm transition hover:bg-white/15" style="box-shadow:inset 0 -2px 0 #0F9D58">Explore Project Live</a>
          </div>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="#/" class="inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d]">Back to Home</a>
          </div>
        </div>
      </div>
    </section>

    <main id="case-details" class="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
      <section class="grid gap-4 py-10 md:grid-cols-3">
        ${metrics
          .map(
            ([label, value, color]) => html`<article class="rounded-[28px] border border-[#5f8fc8]/30 bg-white/8 p-6 shadow-sm">
              <span class="block h-1.5 w-12 rounded-full" style="background-color:${color}"></span>
              <p class="mt-5 text-sm font-medium text-[#c8d7e8]">${label}</p>
              <h2 class="font-sans mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f8fafd]">${value}</h2>
            </article>`,
          )
          .join("")}
      </section>
      ${detailSection({
        title: "Overview",
        body: "CampusConnect helps students find and book peer services without relying on scattered chats and word-of-mouth. The product is designed to reduce search time and increase trust in student providers.",
        images: [{ src: img.campus, alt: "CampusConnect home screen overview", caption: "Overview screen", featured: true }],
      })}
      ${detailSection({
        title: "Value Proposition",
        body: "The value is straightforward: lower cost, better access, and clearer trust signals.",
        bullets: ["Affordable options aligned with student budgets.", "Visibility for student providers to grow demand.", "Trust signals that speed up booking decisions."],
        images: [{ src: img.valueProp, alt: "CampusConnect value proposition visual", caption: "Value proposition" }],
      })}
      ${detailSection({
        title: "Core Problem",
        body: "The challenge is not availability of services; it is discoverability and confidence. Students need one place where options are easy to compare and credible enough to book.",
        bullets: ["Service information is fragmented across informal channels.", "Off-campus alternatives are often priced too high.", "Providers have limited ways to reach new clients consistently."],
      })}
      ${detailSection({
        title: "How Might We",
        body: "To guide ideation, I reframed the problem into focused opportunity prompts that kept design decisions user-centered and outcome-oriented.",
        bullets: ["How might we help students find trusted services quickly on campus?", "How might we make peer providers feel credible before first contact?", "How might we shorten the path from discovery to confirmed booking?"],
      })}
      ${detailSection({
        title: "Solution Direction",
        body: "I focused the product around a fast path from search to booking: structured categories, transparent pricing, and profile-level trust indicators. This keeps the experience simple while solving the key friction points.",
      })}
      ${detailSection({
        title: "Key Screens",
        body: "The experience is centered on three high-leverage screens that support the core journey from discovery to action.",
        bullets: ["Home screen for category-based discovery.", "Listings screen for quick comparison.", "Provider profile for trust and booking."],
        images: [
          { src: img.services, alt: "CampusConnect service listing screen", caption: "Service screen" },
          { src: img.providers, alt: "CampusConnect provider profile screen", caption: "Provider screen" },
        ],
      })}
      <section class="border-t border-[#5f8fc8]/30 py-12">
        <div class="rounded-[32px] border border-[#5f8fc8]/30 bg-white/8 p-6 md:p-8">
          ${colorDots()}
          <h2 class="font-sans mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#f8fafd]">Visual System</h2>
          <p class="mt-4 max-w-3xl text-[16px] leading-8 text-[#c8d7e8]">The redesign leans on a simple Google-like system: white surfaces, soft gray dividers, rounded cards, direct copy, and primary actions in blue.</p>
          <div class="mt-7 grid gap-4 md:grid-cols-4">
            ${[
              ["#4285F4", "Trust / action"],
              ["#DB4437", "Urgency / alerts"],
              ["#F4B400", "Highlights"],
              ["#0F9D58", "Success / availability"],
            ]
              .map(([color, label]) => `<div class="rounded-3xl border border-[#5f8fc8]/30 bg-white/10 p-4"><span class="block h-12 rounded-2xl" style="background-color:${color}"></span><p class="mt-3 text-sm font-medium text-[#e8f0fe]">${label}</p></div>`)
              .join("")}
          </div>
        </div>
      </section>
    </main>
  </div>`;
}
