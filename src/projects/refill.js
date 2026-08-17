import { a, html } from "../shared.js";

const asset = (file) => a("Refil", file);

function metaItem(label, value) {
  return html`<div class="border border-[#8eeaf0]/35 bg-white/10 px-4 py-3 backdrop-blur-sm">
    <p class="text-[11px] uppercase tracking-[0.14em] text-[#8eeaf0]">${label}</p>
    <p class="mt-1 text-sm font-medium text-white">${value}</p>
  </div>`;
}

function visualRail(images, layout) {
  const groupedLayout = images.every((image) => image.group);
  const multiImageLayout = images.length > 1;

  if (groupedLayout) {
    const grouped = images.reduce((groups, image) => {
      groups[image.group] = groups[image.group] || [];
      groups[image.group].push(image);
      return groups;
    }, {});

    return html`<div class="space-y-4">
      ${Object.entries(grouped)
        .map(
          ([groupName, groupImages]) => html`<div class="border border-[#8eeaf0]/35 bg-white/8 p-3">
            <p class="mb-3 text-sm font-semibold text-[#8eeaf0]">${groupName}</p>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              ${groupImages
                .map(
                  (image) => html`<figure class="overflow-hidden border border-[#cce9ec] bg-white p-3">
                    <img src="${image.src}" alt="${image.alt}" class="h-72 w-full bg-white object-contain" />
                    <figcaption class="border-t border-[#cce9ec] bg-[#f5fcfd] px-3 py-2 text-[11px] text-[#507982]">${image.caption}</figcaption>
                  </figure>`,
                )
                .join("")}
            </div>
          </div>`,
        )
        .join("")}
    </div>`;
  }

  if (layout === "teamRow") {
    return html`<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
      ${images
        .map(
          (image) => html`<figure class="overflow-hidden border border-[#b8dfe3] bg-white p-2">
            <img src="${image.src}" alt="${image.alt}" class="h-72 w-full bg-white object-contain" />
            <figcaption class="border-t border-[#cce9ec] bg-[#f5fcfd] px-3 py-2 text-[11px] text-[#507982]">${image.caption}</figcaption>
          </figure>`,
        )
        .join("")}
    </div>`;
  }

  return html`<div class="${multiImageLayout ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "space-y-3"}">
    ${images
      .map(
        (image) => html`<figure class="overflow-hidden border border-[#b8dfe3] bg-white p-3">
          <img
            src="${image.src}"
            alt="${image.alt}"
            class="${multiImageLayout ? "h-72 w-full bg-white object-contain" : "max-h-[36rem] w-full bg-white object-contain"}"
          />
          <figcaption class="border-t border-[#cce9ec] bg-[#f5fcfd] px-3 py-2 text-[11px] text-[#507982]">${image.caption}</figcaption>
        </figure>`,
      )
      .join("")}
  </div>`;
}

function studyBand({ title, body, bullets, images, reverse, imageLayout }) {
  if (imageLayout === "teamRow") {
    return html`<section class="border-t border-[#8eeaf0]/30 py-10">
      <h2 class="text-2xl font-semibold text-[#f5fcfd]">${title}</h2>
      ${body ? `<p class="mt-3 max-w-3xl text-sm leading-6 text-[#cce9ec]">${body}</p>` : ""}
      <div class="mt-5">${visualRail(images, imageLayout)}</div>
    </section>`;
  }

  return html`<section class="border-t border-[#8eeaf0]/30 py-10">
    <div class="grid gap-6 md:grid-cols-12 md:items-start">
      <div class="md:col-span-4 ${reverse ? "md:order-2" : "md:order-1"}">
        <h2 class="text-2xl font-semibold text-[#f5fcfd]">${title}</h2>
        ${body ? `<p class="mt-3 text-sm leading-6 text-[#cce9ec]">${body}</p>` : ""}
        ${
          bullets
            ? `<ul class="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-[#cce9ec]">${bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
            : ""
        }
      </div>
      <div class="md:col-span-8 ${reverse ? "md:order-1" : "md:order-2"}">${visualRail(images, imageLayout)}</div>
    </div>
  </section>`;
}

export function refillPage() {
  return html`<div class="min-h-screen bg-[#05313a] text-[#f5fcfd]">
    <section class="border-b border-[#8eeaf0]/30 bg-[linear-gradient(140deg,#041e24_0%,#073f4a_52%,#05313a_100%)] px-5 pb-14 pt-32 text-white sm:px-6 md:px-16">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#8eeaf0]">Case Study</p>
        <h1 class="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">Accessible Water Fountain</h1>
        <p class="mt-4 max-w-2xl text-lg text-[#f5fcfd]">Retrofitting public fountains for inclusive, everyday hydration.</p>
        <p class="mt-6 max-w-2xl text-sm leading-6 text-[#ddf5f7]">A retrofit mouthpiece that makes existing fountains easier to use for direct drinking and reusable bottle filling.</p>
        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          ${metaItem("Role", "UI/UX + Product Design")}
          ${metaItem("Project Type", "Physical Product Concept")}
          ${metaItem("Scope", "Research + Prototyping")}
          ${metaItem("Context", "UC Davis")}
        </div>
        <a href="#/" class="mt-8 inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d]">Back to Home</a>
      </div>
    </section>

    <main class="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
      ${studyBand({
        title: "Overview",
        body: "A retrofit concept for making existing campus fountains more accessible, useful, and affordable to upgrade.",
        images: [
          { src: asset("Fountain Graphic.png"), alt: "Accessible water fountain concept render", caption: "Retrofit fountain concept" },
          { src: asset("Work2.png"), alt: "Water fountain process frame 2", caption: "Prototyping" },
        ],
      })}
      ${studyBand({
        title: "Value Proposition",
        body: "The design improves everyday hydration without requiring full fountain replacement.",
        bullets: ["Fits existing fountain systems.", "Supports drinking and bottle filling.", "Encourages reusable bottle habits."],
        images: [
          { src: asset("Work1.png"), alt: "Process and value framing visual 1", caption: "More prototyping" },
          { src: asset("Work3.png"), alt: "Process and value framing visual 3", caption: "More prototyping" },
        ],
        reverse: true,
      })}
      ${studyBand({
        title: "How Might We",
        body: "We focused ideation around access, refill behavior, and campus feasibility.",
        bullets: ["Improve access for more users.", "Add refill behavior cleanly.", "Keep adoption realistic."],
        images: [{ src: asset("Crazy 8.png"), alt: "Crazy 8 ideation sheet", caption: "Early ideation (Crazy 8)" }],
      })}
      ${studyBand({
        title: "Design and Prototyping",
        body: "Three prototype rounds tested form, fit, water flow, and installation clarity.",
        bullets: ["Prototype 1: basic geometry.", "Prototype 2: fit and comfort.", "Prototype 3: cleaner final form."],
        images: [
          { src: asset("Proto1.png"), alt: "Prototype 1 - image 1", caption: "Prototype 1 (Image 1)", group: "Prototype 1" },
          { src: asset("Proto1.2.png"), alt: "Prototype 1 - image 2", caption: "Prototype 1 (Image 2)", group: "Prototype 1" },
          { src: asset("Proto2.png"), alt: "Prototype 2 - image 1", caption: "Prototype 2 (Image 1)", group: "Prototype 2" },
          { src: asset("Proto2.2.png"), alt: "Prototype 2 - image 2", caption: "Prototype 2 (Image 2)", group: "Prototype 2" },
          { src: asset("Proto3.png"), alt: "Prototype 3 - image 1", caption: "Prototype 3 (Image 1)", group: "Prototype 3" },
          { src: asset("Proto3.2.png"), alt: "Prototype 3 - image 2", caption: "Prototype 3 (Image 2)", group: "Prototype 3" },
        ],
        reverse: true,
      })}
      ${studyBand({
        title: "Validation and Next Step",
        body: "Presented at a research conference and received strong feedback for campus relevance.",
        images: [
          { src: asset("Pres1.png"), alt: "Presentation board at research conference", caption: "Research conference presentation" },
          { src: asset("press2.JPG"), alt: "Presentation moment 2", caption: "Presentation snapshot" },
          { src: asset("Press3.png"), alt: "Presentation moment 3", caption: "Project showcase visual" },
          { src: asset("press4.png"), alt: "Team presenting project outcome", caption: "Project communication and outreach" },
        ],
      })}
      ${studyBand({
        title: "Project Team",
        images: [
          { src: asset("Chinomso.png"), alt: "Team member Chinomso", caption: "Chinomso Augustine" },
          { src: asset("Devin.png"), alt: "Team member Devin", caption: "Devin Bangayan" },
          { src: asset("Marilyn.png"), alt: "Team member Marilyn", caption: "Marilyn Bangayan" },
          { src: asset("Crow.JPG.jpg"), alt: "Team member Crow", caption: "Crow Raya" },
        ],
        imageLayout: "teamRow",
      })}
    </main>
  </div>`;
}
