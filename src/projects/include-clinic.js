import { a, html, img } from "../shared.js";

const includeAsset = (file) => a("Include Design", file);

const wireframeStages = [
  {
    title: "Lo-Fi Wireframes",
    body: "Early layouts helped define the page structure, content hierarchy, and main user paths before visual styling was added.",
    image: includeAsset("Lo-Fi.png"),
    teamTitle: "Team Lo-Fi Wireframes",
    teamImage: includeAsset("teamLoFi.png"),
  },
  {
    title: "Mid-Fi Wireframes",
    body: "The mid-fidelity stage refined spacing, navigation, and section placement so the experience could feel clearer and more usable.",
    image: includeAsset("Mid-Fi.png"),
  },
  {
    title: "Hi-Fi Wireframes",
    body: "The high-fidelity design brought the clinic's purple visual system into the interface with more polished components and page details.",
    image: includeAsset("Hi-fi.png"),
  },
];

const overviewItems = [
  ["The Product", "A redesigned website for Juvenile Caduceus Clinic, a student-run clinic at UC Davis that aims to deliver high-quality care and assistance to the underprivileged youth and older adolescents."],
  ["The Goal", "Create an accessible and trustworthy website experience that communicates who the clinic serves, their history, and how they aim to keep it alive."],
  ["The Problem", "The clinic's existing website needed a clearer structure, consistent visual system, and a more approachable way for visitors to find important healthcare information."],
  ["Project Duration", "Two academic quarters."],
  ["My Role", "I was responsible for creating the Home page from start to end alongside the #include Davis design team and design leads."],
  ["My Responsibilities", "My task included competitive analysis, user persona, Lo-fidelity, mid-fidelity, and hi-fidelity prototypes."],
];

const userUnderstandingItems = [
  {
    title: "User Research",
    body: "Our research showed that many Davis students struggle to find free or affordable healthcare that meets the needs of a diverse community.",
  },
  {
    title: "Pain Points",
    points: [
      "Many students struggle to find affordable healthcare plans around Davis.",
      "Students often do not know where to begin when looking for healthcare resources.",
      "Some students do not have insurance and are unsure where to start looking for coverage.",
    ],
  },
];

const teammateWorkImages = [
  ["Design Archetech", includeAsset("Design Archetech.png")],
  ["User Flow", includeAsset("User Flow.png")],
  ["User Testing", includeAsset("usabilitytesting.png")],
  ["Teammate Hi-Fi", includeAsset("Teammate Hi-Fi.png")],
];

const refiningImages = [
  ["Home Page", includeAsset("home1.png")],
  ["Home Page", includeAsset("Home2.png")],
  ["Home Page", includeAsset("Home3.png")],
  ["Home Page", includeAsset("Home4.png")],
  ["Partnership", includeAsset("committee.png")],
  ["Events", includeAsset("committee2.png")],
];

const presentationImages = [
  ["Presentation 1", includeAsset("Presentation1.JPG")],
  ["Presentation 2", includeAsset("presentation2.JPG")],
];

function previewCard(title, image, alt, classes = "", imageClasses = "h-[15rem] w-full object-contain") {
  return html`<button
    type="button"
    data-preview-title="${title}"
    data-preview-src="${image}"
    data-preview-alt="${alt}"
    class="group overflow-hidden border border-[#d9c9e6]/35 bg-[#fbf7ff] p-3 text-left shadow-[0_18px_46px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:border-[#caa8df] hover:shadow-[0_22px_52px_rgba(0,0,0,0.34)] ${classes}"
    aria-label="Open ${title} larger"
  >
    <span class="block overflow-hidden bg-[#fbf7ff]">
      <img src="${image}" alt="${alt}" class="${imageClasses} transition duration-300 group-hover:scale-[1.02]" />
    </span>
    <span class="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#805b99]">${title}</span>
    <span class="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7aae]">Click to expand</span>
  </button>`;
}

function wireframePreview(title, image, wide = false) {
  return previewCard(
    title,
    image,
    `${title} for the Student Run Clinic redesign`,
    `mx-auto block w-full ${wide ? "max-w-[34rem]" : "max-w-[24rem]"}`,
    `max-h-[22rem] object-contain ${wide ? "w-full" : "w-full sm:w-[190%] sm:max-w-none sm:-translate-x-[23.7%]"}`,
  );
}

export function includeClinicPage() {
  return html`<div class="min-h-screen bg-[#1d1028] text-[#fbf7ff]">
    <header class="relative flex min-h-[68vh] items-end overflow-hidden border-b border-[#d9c9e6]/30 bg-[#4a2f68] px-5 pb-12 pt-32 text-white sm:min-h-[84vh] sm:px-6 sm:pb-16 md:px-16">
      <img src="${img.clinicHero}" alt="" aria-hidden="true" class="absolute inset-0 h-[110%] w-full -translate-y-10 object-cover object-top" />
      <div class="relative z-10 mx-auto w-full max-w-6xl">
        <a href="#/" class="inline-flex h-11 translate-y-8 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d]">Back to Home</a>
      </div>
    </header>

    <main class="mx-auto w-full max-w-[90rem] px-5 pb-0 sm:w-[90vw] sm:px-0">
      <section id="meet-the-team" class="scroll-mt-40 py-14">
        <div class="mx-auto max-w-6xl text-center">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#caa8df]">01</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Meet the Team</h2>
          <p class="mx-auto mt-4 max-w-3xl leading-7 text-[#d9c9e6]">These are the designers and developers involved in this project</p>
          <figure class="mx-auto mt-6 w-full max-w-5xl overflow-hidden border border-[#d9c9e6]/35 bg-[#fbf7ff] p-3 shadow-[0_18px_46px_rgba(0,0,0,0.28)]">
            <img src="${includeAsset("Meet the Team.png")}" alt="#include Davis Student Run Clinic design team" class="w-full object-contain" />
          </figure>
        </div>
      </section>

      <section id="project-overview" class="scroll-mt-40 py-14">
        <div class="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div class="flex flex-col justify-center">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#caa8df]">02</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Project Overview</h2>
            <p class="mt-5 max-w-md leading-7 text-[#d9c9e6]">A collaborative clinic website redesign by designers and developers at #Include, a design club at UC Davis.</p>
          </div>
          <div class="grid gap-px overflow-hidden border border-[#d9c9e6]/30 bg-[#d9c9e6]/30 shadow-[0_18px_46px_rgba(0,0,0,0.24)] md:grid-cols-2 xl:grid-cols-3">
            ${overviewItems.map(([title, body]) => `<article class="bg-white/8 p-5 md:p-7"><h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[#f0d8ff]">${title}</h3><p class="mt-3 text-[13px] leading-6 text-[#d9c9e6]">${body}</p></article>`).join("")}
          </div>
        </div>
      </section>

      <section id="understanding-the-user" class="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-40 border-y border-[#d9c9e6]/30 bg-[#281638] px-5 py-12 sm:px-[5vw]">
        <div class="mx-auto max-w-[90rem]">
          <div class="grid lg:grid-cols-2">
            <div class="lg:col-start-2 lg:text-right">
              <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#caa8df]">03</p>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Understanding the User</h2>
              <p class="mt-5 leading-7 text-[#d9c9e6] lg:ml-auto">This section showcases the steps we took to understand our users and guide our ideation</p>
            </div>
          </div>
          <div class="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="grid gap-5">
              ${userUnderstandingItems
                .map((item) => {
                  const content = item.points
                    ? `<ul class="mt-3 space-y-2 text-[13px] leading-6 text-[#d9c9e6]">${item.points.map((point) => `<li class="flex gap-2"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#caa8df]"></span><span>${point}</span></li>`).join("")}</ul>`
                    : `<p class="mt-3 text-[13px] leading-6 text-[#d9c9e6]">${item.body}</p>`;
                  return `<article class="border border-[#d9c9e6]/30 bg-white/8 p-6 shadow-[0_18px_46px_rgba(0,0,0,0.24)] md:p-7"><h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[#f0d8ff]">${item.title}</h3>${content}</article>`;
                })
                .join("")}
            </div>
            <article class="border border-[#d9c9e6]/30 bg-white/8 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.24)] md:p-6">
              <h3 class="text-sm font-semibold uppercase tracking-[0.08em] text-[#f0d8ff]">Persona</h3>
              <figure class="mx-auto mt-4 max-w-[30rem] overflow-hidden border border-[#eadff2] bg-[#fbf7ff]">
                <img src="${includeAsset("Persona.png")}" alt="User persona for the Student Run Clinic redesign" class="h-full w-full object-contain" />
              </figure>
            </article>
          </div>
        </div>
      </section>

      <section id="starting-the-design" class="scroll-mt-40 border-t border-[#d9c9e6]/30 py-14">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#caa8df]">04</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Starting the Design</h2>
        <p class="mt-5 max-w-2xl leading-7 text-[#d9c9e6]">I moved from low-fidelity wireframes into more detailed mid-fidelity and high-fidelity screens, using each step to clarify the homepage structure.</p>
        <div class="mt-8 space-y-8">
          ${wireframeStages
            .map(
              (stage, index) => html`<article class="grid gap-6 md:items-center lg:grid-cols-2">
                <div class="grid gap-4 ${stage.teamImage ? "sm:grid-cols-2 lg:col-span-2" : ""} ${index % 2 === 1 && !stage.teamImage ? "lg:order-2" : ""}">
                  ${wireframePreview(stage.title, stage.image)}
                  ${stage.teamImage ? wireframePreview(stage.teamTitle, stage.teamImage, true) : ""}
                </div>
                <div class="border-l-4 border-[#caa8df] bg-white/8 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.24)] md:p-6 ${stage.teamImage ? "order-first lg:col-span-2" : ""}">
                  <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#caa8df]">0${index + 1}</p>
                  <h3 class="mt-2 text-xl font-semibold text-[#f0d8ff]">${stage.title}</h3>
                  <p class="mt-3 text-sm leading-6 text-[#d9c9e6]">${stage.body}</p>
                </div>
              </article>`,
            )
            .join("")}
        </div>
        <div class="mt-10 border-t border-[#d9c9e6]/30 pt-8">
          <h3 class="text-2xl font-semibold text-[#f0d8ff]">Teammate's work</h3>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-[#d9c9e6]">Additional design artifacts from my teammates helped guide the structure, flow, and testing direction for the final experience.</p>
          <div class="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            ${teammateWorkImages.map(([title, image]) => previewCard(title, image, `${title} teammate design artifact`, "", "h-[14rem] w-full object-contain")).join("")}
          </div>
        </div>
      </section>

      <section id="refining-the-design" class="scroll-mt-40 border-t border-[#d9c9e6]/30 py-14">
        <div class="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div class="lg:col-span-2 lg:text-right">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#caa8df]">05</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Refining the Design</h2>
            <p class="mt-5 max-w-4xl leading-7 text-[#d9c9e6] lg:ml-auto">This stage brought together multiple homepage explorations and committee page iterations as the interface became more polished and aligned with the clinic's visual direction.</p>
          </div>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          ${refiningImages.map(([title, image]) => previewCard(title, image, `${title} design iteration`, "", "h-[15rem] w-full object-contain sm:w-[125%] sm:max-w-none sm:-translate-x-[10%]")).join("")}
        </div>
      </section>

      <section id="presentation" class="scroll-mt-40 border-t border-[#d9c9e6]/30 pt-14 pb-0">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#caa8df]">06</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Presentation</h2>
          <p class="mt-5 leading-7 text-[#d9c9e6]">We presented the final design direction and shared our process with the organization and design team.</p>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          ${presentationImages
            .map(
              ([title, image]) => html`<button type="button" data-preview-title="${title}" data-preview-src="${image}" data-preview-alt="${title} for the Student Run Clinic case study" class="group overflow-hidden text-left transition hover:-translate-y-1" aria-label="Open ${title} larger">
                <span class="block overflow-hidden"><img src="${image}" alt="${title} for the Student Run Clinic case study" class="w-full object-contain transition duration-300 group-hover:scale-[1.02]" /></span>
                <span class="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#caa8df]">${title}</span>
                <span class="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d9c9e6]">Click to expand</span>
              </button>`,
            )
            .join("")}
        </div>
        <button type="button" data-preview-title="Club Image" data-preview-src="${includeAsset("Clubimage.JPG")}" data-preview-alt="Club group after the Student Run Clinic presentation" class="group mt-6 block w-full overflow-hidden text-left transition hover:-translate-y-1" aria-label="Open club image larger">
          <span class="block overflow-hidden"><img src="${includeAsset("Clubimage.JPG")}" alt="Club group after the Student Run Clinic presentation" class="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-[26rem]" /></span>
        </button>
      </section>
    </main>
  </div>`;
}
