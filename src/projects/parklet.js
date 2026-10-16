import { a, caseStudyNav, html } from "../shared.js";

const parkletAsset = (file) => a("Parklet", file);

const images = {
  hero: parkletAsset("Graphics.png"),
  sketch: parkletAsset("Sketch.png"),
  rhino: parkletAsset("Screenshot 2026-06-04 at 3.27.20 PM copy.png"),
  floorplan: parkletAsset("Floorplan Dim copy.png"),
  smallScale: parkletAsset("Small scale.png"),
  printing: parkletAsset("Printing.png"),
  processOne: parkletAsset("Process 1.png"),
  groupWork: parkletAsset("Group work.png"),
  groupTwo: parkletAsset("Group2.png"),
  fdOne: parkletAsset("FD1.png"),
  fdTwo: parkletAsset("FD2.png"),
};

function metaCard(label, value) {
  return html`<div class="border border-[#d5c6ad]/30 bg-white/8 px-4 py-3 backdrop-blur-sm">
    <p class="text-[11px] uppercase tracking-[0.16em] text-[#e7b07d]">${label}</p>
    <p class="mt-1 text-sm font-semibold text-[#fffaf2]">${value}</p>
  </div>`;
}

function sectionHeader(kicker, title, body = "") {
  return html`<div>
    <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#c6653e]">${kicker}</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-[#fffaf2] md:text-5xl">${title}</h2>
    ${body ? `<p class="mt-4 max-w-3xl text-[15px] leading-7 text-[#d5c6ad]">${body}</p>` : ""}
  </div>`;
}

function imageFrame(src, alt, caption, tall = false, fill = false, fillHeight = "") {
  return html`<figure class="overflow-hidden rounded-[8px] border border-[#d5c6ad]/35 bg-[#fffaf2] shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
    <div class="flex items-center justify-center bg-[#e7eee2]">
      <img src="${src}" alt="${alt}" class="${fill ? `${fillHeight || (tall ? "h-[34rem]" : "h-80")} object-cover` : `${tall ? "max-h-[42rem]" : "max-h-[34rem]"} object-contain`} w-full" />
    </div>
  </figure>`;
}

function processStep({ number, title, body, image, alt, caption, reverse, fill = false, imageSpan = "md:col-span-8" }) {
  return html`<section class="border-t border-[#d5c6ad]/30 py-12">
    <div class="grid gap-7 md:grid-cols-12 md:items-start">
      <div class="md:col-span-4 ${reverse ? "md:order-2" : ""}">
        <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#c6653e]">Step ${number}</p>
        <h3 class="mt-2 text-2xl font-semibold text-[#fffaf2]">${title}</h3>
        <p class="mt-3 text-[15px] leading-7 text-[#d5c6ad]">${body}</p>
      </div>
      <div class="${imageSpan} ${reverse ? "md:order-1" : ""}">
        ${imageFrame(image, alt, caption, true, fill, "h-[42rem]")}
      </div>
    </div>
  </section>`;
}

export function parkletPage() {
  const overviewCards = [
    ["Seating", "Layered surfaces support individual studying and small-group collaboration."],
    ["Accessibility", "A clear circulation path keeps the sidewalk edge open and approachable."],
    ["Experience", "Rhythmic ribs create shade, enclosure, and a stronger street presence."],
  ];

  return html`<div class="min-h-screen bg-[#1f2c25] text-[#fffaf2]">
    <section class="px-5 pb-14 pt-32 sm:px-6 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-[#c6653e]">Industry Design Case Study</p>
            <h1 class="mt-3 text-4xl leading-[0.9] font-semibold tracking-tight sm:text-5xl md:text-7xl">Parklet Design</h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-[#d5c6ad]">A modular streetside parklet concept designed for studying and gathering.</p>
            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              ${metaCard("Role", "Industrial Design + Fabrication")}
              ${metaCard("Tools", "Sketching, Rhino 8, Laser Cutting")}
              ${metaCard("Focus", "Public Seating + Spatial Experience")}
              ${metaCard("Material", "Layered cardboard")}
            </div>
            <a href="#/" class="mt-8 inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d]">Back to Home</a>
          </div>
          <figure class="overflow-hidden rounded-[8px] border border-[#d5c6ad]/35 bg-[#fffaf2] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
            <img src="${images.hero}" alt="Rendered parklet concept on a sidewalk" class="h-80 w-full object-cover sm:h-[34rem]" />
          </figure>
        </div>
      </div>
    </section>

    <main class="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
      <section class="border-y border-[#d5c6ad]/30 py-12">
        <div class="grid gap-8 md:grid-cols-12">
          <div class="md:col-span-5">
            ${sectionHeader(
              "Overview",
              "An additional study space for students",
              `Have you ever visited your favorite coffee shop to study, only to realize there’s no space left and wish you could create more? 
              When an opportunity to design additional seating for a public space came up in my design class, 
              I convinced my team to focus on Temple Coffee in Downtown Davis, my favorite study spot. 
              Using Rhino 8 for 3D modeling, my team and I designed a cardboard structure that provides 
              seating and shade while feeling architectural.`,
            )}
          </div>
          <div class="grid gap-4 sm:grid-cols-3 md:col-span-7">
            ${overviewCards
              .map(
                ([label, body]) => html`<div class="border border-[#d5c6ad]/30 bg-white/8 p-5">
                  <p class="text-sm font-semibold text-[#fffaf2]">${label}</p>
                  <p class="mt-3 text-sm leading-6 text-[#d5c6ad]">${body}</p>
                </div>`,
              )
              .join("")}
          </div>
        </div>
      </section>

      ${processStep({
        number: "01",
        title: "Sketching the spatial language",
        body: `Each member started with individual sketches that explores different ideas. Some of my sketches were inspired 
        by objects around me such as my mouse. After modeling our top three, we selected one model to further iterate on.`,
        image: images.sketch,
        alt: "Parklet concept sketches",
        caption: "Early form exploration and dimension studies",
        imageSpan: "md:col-span-7",
      })}
      ${processStep({
        number: "02",
        title: "Translating the concept into Rhino",
        body: `Collaborating as a team, we iterated our selected model over and over, applying our professor's feedback.
        The iteration phase allowed us to test the overall user circulation, seating rhythm, and potential materials.`,
        image: images.rhino,
        alt: "Parklet model in Rhino",
        caption: "Digital model, plan, elevation, and perspective views",
        reverse: true,
      })}
      ${processStep({
        number: "03",
        title: "The Dimensions",
        body: `As a feasible solution that can be translated into reality, we included dimensions.`,
        image: images.floorplan,
        alt: "Parklet floor plan with dimensions",
        caption: "Dimensioned plan and module layout",
      })}

      <section class="border-t border-[#d5c6ad]/30 py-12">
        ${sectionHeader(
          "Fabrication",
          "From digital model to physical prototype.",
          `Due to limited materials, we were only allowed to build one side of our model. 
          With the cardboard pieces precisely cut, the fun part began. We started assembling the small-scale model first, followed by 
          the full-scale model. After a few days, our model was ready for presentation.
          `,
        )}
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          ${imageFrame(images.printing, "Laser cutting parklet pieces", "Laser cutting repeated rib components", true)}
          ${imageFrame(images.processOne, "Assembling large parklet prototype pieces", "Building and checking larger form pieces", true)}
          ${imageFrame(images.groupWork, "Parklet fabrication group work", "Group assembly and fit checks", true)}
          ${imageFrame(images.groupTwo, "Parklet prototype assembly progress", "Prototype pieces coming together", true)}
        </div>
      </section>

      <section class="border-t border-[#d5c6ad]/30 py-12">
        ${sectionHeader(
          "Final Result",
          "Final Design",
          `The final model communicated our idea perfectly. We created a model that extends public space for users to 
          enjoy without fighting for space. Our model ensured to accommodate different users like those that stand 
          while working, seats, and are on wheelchairs.`,
        )}
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          ${imageFrame(images.fdOne, "Final parklet model detail one", "Final model detail", true, true)}
          ${imageFrame(images.fdTwo, "Final parklet model detail two", "Final model detail", true, true)}
        </div>
        <div class="mt-4">
          ${imageFrame(images.smallScale, "Small scale parklet model", "Small scale physical model", true, true)}
        </div>
        <figure class="mt-4 overflow-hidden rounded-[8px] border border-[#d5c6ad]/35 bg-[#fffaf2] shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
          <img src="${images.hero}" alt="Final rendered parklet concept" class="max-h-[42rem] w-full object-cover" />
        </figure>
      </section>
      ${caseStudyNav({ nextHref: "#/student-run-clinic", nextLabel: "Student Run Clinic", variant: "parklet" })}
    </main>
  </div>`;
}
