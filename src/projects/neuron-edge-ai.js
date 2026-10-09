import { caseStudyNav, html, img } from "../shared.js";

const meta = [
  ["Role", "Front-End Developer and Website Manager"],
  ["Company", "Neuron Edge AI"],
  ["Duration", "Summer 2027"],
  ["Collaboration", "Remote collaboration with CEO and startup team"],
];

const overviewPanels = [
  ["The Product", "A live website for Neuron Edge AI's products, services, and vision."],
  ["The Goal", "Create a clear website that showcase the company's services."],
  ["My Role", "Developed the entire front-end build, maintain constant communication and feedback loop with the CEO, and manage website post-launch updates."],
];

const challenges = [
  "Unfinished WordPress starting point.",
  "No sitemap or design system.",
  "Source material mostly in one technical PDF.",
];

const sitemap = ["NIA", "Physical AI", "Solutions", "Teams", "Stay Connected", "Vision", "Contact"];

const originalScreenshots = [
  {
    src: img.neuronOriginalSiteOne,
    alt: "Original Neuron Edge AI WordPress website screenshot",
  },
  {
    src: img.neuronOriginalSiteTwo,
    alt: "Second original Neuron Edge AI WordPress website screenshot",
  },
];

const navigationScreenshot = {
  src: img.neuronNavigation,
  alt: "Final Neuron Edge AI website navigation screenshot",
};

const outcomes = [
  "Live production website",
  "Approved by CEO and team",
  "Supports core company areas",
  "Maintained after launch",
];

const finalScreenshots = [
  {
    src: img.neuronHomepage,
    alt: "Final Neuron Edge AI homepage screenshot",
  },
  {
    src: img.neuronFinalTeam,
    alt: "Final Neuron Edge AI website team advisor section screenshot",
  },
  {
    src: img.neuronFinalBlogs,
    alt: "Final Neuron Edge AI website stay connected page screenshot",
  },
  {
    src: img.neuronFinalSolutions,
    alt: "Final Neuron Edge AI website solutions page screenshot",
  },
];

function sectionHeader(number, title, body = "") {
  return html`<div class="max-w-3xl">
    <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#ff5b00]">${number}</p>
    <h2 class="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl md:text-5xl">${title}</h2>
    ${body ? `<p class="mt-5 text-[15px] leading-7 text-[#c7d2e4]">${body}</p>` : ""}
  </div>`;
}

function screenshotFigure({ src, alt }, classes = "", imageClasses = "h-auto object-contain") {
  return html`<figure class="w-full ${classes}">
    <img src="${src}" alt="${alt}" loading="lazy" class="w-full ${imageClasses}" />
  </figure>`;
}

function panel(title, body, classes = "") {
  return html`<article class="rounded-[8px] border border-[#1d3b70] bg-[#0b2558] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.2)] md:p-6 ${classes}">
    <h3 class="text-sm font-semibold uppercase tracking-[0.14em] text-[#ff5b00]">${title}</h3>
    <p class="mt-3 text-sm leading-6 text-[#c7d2e4]">${body}</p>
  </article>`;
}

function bulletList(items, color = "#ff5b00") {
  return html`<ul class="grid gap-3">
    ${items
      .map(
        (item) => html`<li class="flex gap-3 rounded-[8px] border border-[#1d3b70] bg-[#0b2558] p-4 text-sm leading-6 text-[#c7d2e4] shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
          <span class="mt-2 h-2 w-2 shrink-0 rounded-full" style="background:${color}"></span>
          <span>${item}</span>
        </li>`,
      )
      .join("")}
  </ul>`;
}

export function neuronEdgeAiPage() {
  return html`<div class="min-h-screen bg-[#061a44] text-white">
    <header class="relative overflow-hidden border-b border-[#12305f] bg-[#061a44] px-5 pb-14 pt-32 sm:px-6 md:px-16">
      <div class="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.24em] text-[#ff5b00]">Case Study</p>
          <h1 class="mt-3 text-4xl leading-[0.92] font-semibold tracking-normal text-white sm:text-5xl md:text-7xl">Neuron Edge AI</h1>
          <p class="mt-5 max-w-2xl text-xl font-semibold leading-tight text-white sm:text-2xl">Website build for an AI robotics startup</p>
          <p class="mt-5 max-w-3xl text-[15px] leading-7 text-[#c7d2e4]">I turned an unfinished WordPress concept into a responsive react website with direct CEO feedback.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="https://neuronedgeai.com/" target="_blank" rel="noopener noreferrer" class="inline-flex h-11 items-center rounded-full bg-[#ff5b00] px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#061a44]">Visit Live Website</a>
            <a href="#/" class="inline-flex h-11 items-center rounded-full border border-[#315076] px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#061a44]">Back to Projects</a>
          </div>
        </div>
      
          <div class="grid gap-5">
            <a href="https://neuronedgeai.com/" target="_blank" rel="noopener noreferrer" class="block transition hover:-translate-y-1" aria-label="Visit the live Neuron Edge AI website">
            <img src="${img.neuronHomepage}" alt="Neuron Edge AI homepage screenshot" class="w-full object-contain" fetchpriority="high" />
          </a>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            ${meta.map(([label, value]) => `<div class="rounded-[8px] border border-[#1d3b70] bg-[#0b2558] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.18)]"><p class="text-[11px] uppercase tracking-[0.14em] text-[#ff5b00]">${label}</p><p class="mt-2 text-sm font-semibold leading-6 text-white">${value}</p></div>`).join("")}
          </div>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-5 pb-0 sm:px-6 md:px-16">
      <section id="project-overview" class="scroll-mt-32 border-b border-[#12305f] py-14">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          ${sectionHeader(
            "01",
            "Project Overview",
            "I joined Neuron Edge AI as an unpaid web development intern to create its public website. As an early startup, many of the task were unclear including my role. Additionally, the startup needed a quick website to gain attention to their services. I took on the ownership of building the site from scratch to finish.",
          )}
          <div class="grid gap-4 md:grid-cols-2">
            ${overviewPanels.map(([title, body], index) => panel(title, body, index === 2 ? "md:col-span-2" : "")).join("")}
          </div>
        </div>
      </section>

      <section id="starting-point" class="scroll-mt-32 border-b border-[#12305f] py-14">
        <div class="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <div>
            <div class="grid gap-3">${bulletList(challenges)}</div>
            <a href="https://original.neuronedgeai.com" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex h-11 items-center rounded-full border border-[#ff5b00] px-5 text-sm font-semibold text-white transition hover:bg-[#ff5b00]">View Original WordPress Website</a>
          </div>
          <div>
            ${sectionHeader(
              "02",
              "Turning an incomplete concept into a clear direction",
              "The site began as an unfinished WordPress build with no clear sitemap, design system, or presentation requirements. Due to urgent need for a website, I immediately started conducting a competitive analysis to understand the structure and feature of exiting robotic website.",
            )}
          </div>
        </div>
        <div class="mt-10 grid gap-8 md:grid-cols-2">
          ${originalScreenshots.map((image) => screenshotFigure(image)).join("")}
        </div>
      </section>

      <section id="organizing-information" class="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-32 border-b border-[#12305f] bg-[#071f50] px-5 py-14 sm:px-6 md:px-16">
        <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            ${sectionHeader(
              "03",
              "Organizing site content",
              "With only six pages of the company's brief, I used AI to help analyze the document, identify key information, and shape the site's structure.",
            )}
            <p class="mt-5 max-w-3xl text-[15px] leading-7 text-[#c7d2e4]">The final structure became NIA -> Physical AI -> Solutions -> Teams -> Stay Connected -> Vision -> Contact.</p>
          </div>
          <div class="rounded-[8px] border border-[#1d3b70] bg-[#0b2558] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.2)] md:p-6">
            <h3 class="text-sm font-semibold uppercase tracking-[0.16em] text-[#ff5b00]">Final Website Navigation</h3>
            <div class="mt-6 grid gap-3 sm:grid-cols-2">
              ${sitemap
                .map(
                  (item, index) => html`<div class="flex items-center gap-3 rounded-[8px] bg-[#102f63] p-3">
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff5b00] text-xs font-bold text-white">${String(index + 1).padStart(2, "0")}</span>
                    <span class="text-sm font-semibold text-white">${item}</span>
                  </div>`,
                )
                .join("")}
            </div>
          </div>
          <div class="lg:col-span-2">
            ${screenshotFigure(navigationScreenshot)}
          </div>
        </div>
      </section>

      <section id="final-result" class="scroll-mt-32 border-b border-[#12305f] py-14">
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            ${sectionHeader(
              "04",
              "A production website and an ongoing responsibility",
              "The final site gave Neuron Edge AI a more cohesive public presence and a flexible foundation for future updates.",
            )}
          </div>
          <div class="lg:pt-8">
            ${bulletList(outcomes)}
          </div>
        </div>
        <div class="mt-10 grid gap-8 md:grid-cols-2">
          ${finalScreenshots.map((image) => screenshotFigure(image)).join("")}
        </div>
      </section>

      <section id="reflection" class="scroll-mt-32 border-b border-[#12305f] py-14">
        <div class="grid gap-8 lg:grid-cols-[0.65fr_1fr]">
          ${sectionHeader("05", "What I learned")}
          <div class="rounded-[8px] border-l-4 border-[#ff5b00] bg-[#0b2558] p-5 shadow-[0_16px_34px_rgba(0,0,0,0.2)] md:p-7">
            <p class="text-[16px] leading-8 text-[#c7d2e4]">This project taught me to clarify direction early, document key decisions, and build reusable patterns that make future pivots easier.</p>
          </div>
        </div>
      </section>

      ${caseStudyNav({ nextHref: "#/parklet", nextLabel: "Parklet Design", variant: "neuron" })}
    </main>
  </div>`;
}
