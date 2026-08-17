import { a, html, img } from "../shared.js";

const photos = [
  "Sanjith1.JPG",
  "Sanjith2.JPG",
  "Sanjith3.JPG",
  "Baseball2.JPEG",
  "DSC02840.JPG",
  "Jovani1.JPG",
  "Jovania2.JPG",
  "Rachel1.JPG",
  "Rachel2.JPG",
  "Raj1.JPG",
  "Saj1.JPG",
  "Saj2.JPG",
  "Saj3.jpg",
  "Saj4.JPEG",
  "Sanjith4.JPG",
  "Sanjith5.JPG",
  "baseball1.JPEG",
];

function infoPanel(title, content) {
  return html`<section class="border border-[#26485a] bg-[#0f2a3a] p-6">
    <h2 class="text-2xl font-semibold tracking-tight text-[#f4f8fb]">${title}</h2>
    <div class="mt-4 space-y-3 text-[15px] leading-7 text-[#c4d3dc]">${content}</div>
  </section>`;
}

function clubCard(title, text, image, alt) {
  return html`<article class="border border-[#26485a] bg-[#0f2a3a]">
    <img src="${image}" alt="${alt}" class="h-52 w-full object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-[#f4f8fb]">${title}</h3>
      <p class="mt-2 text-sm leading-7 text-[#c4d3dc]">${text}</p>
    </div>
  </article>`;
}

export function aboutPage() {
  return html`
    <div class="min-h-screen bg-[#071827] text-[#f4f8fb]">
      <section class="mx-auto grid max-w-[1180px] gap-10 px-5 pb-14 pt-32 sm:px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold text-[#86d8ff]">About Me</p>
          <h1 class="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight text-[#f4f8fb] sm:text-6xl md:text-7xl">Chinomso Augustine</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-[#c4d3dc]">
            I am a UI/UX Designer and UI Engineer studying at the University of California, Davis, majoring in Design with a minor in Computer Science.
          </p>
        </div>
        <figure class="overflow-hidden border border-[#26485a] bg-[#0f2a3a] p-3 shadow-[0_24px_70px_rgba(24,23,19,0.08)]">
          <img src="${img.profile}" alt="Chinomso Augustine portrait" class="h-[30rem] w-full object-cover object-center" />
        </figure>
      </section>

      <main class="mx-auto max-w-[1180px] space-y-10 px-5 pb-16 sm:px-6 md:px-8">
        <section class="grid gap-6 border-t border-[#26485a] pt-10 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#7fc7e8]">Profile</p>
            <h2 class="mt-3 text-4xl font-semibold tracking-tight text-[#f4f8fb]">Design shaped by people, systems, and care.</h2>
          </div>
          <p class="text-[16px] leading-8 text-[#c4d3dc]">
            I focus on designing intuitive, user-centered applications that prioritize clarity, usability, and purpose. My work moves between digital interfaces, physical product concepts, photography, and front-end implementation.
          </p>
        </section>

        ${infoPanel(
          "Community and Leadership",
          html`<p>I stay involved in student communities where design, collaboration, and representation are central. These experiences strengthened how I communicate ideas and work across different teams.</p>
          <div class="mt-5 grid gap-4 md:grid-cols-3">
            ${clubCard("#Include", "At UC Davis, I collaborate on client-based projects and serve as one of the club photographers for events and board activities.", img.include1, "#Include club activity")}
            ${clubCard("NSBE", "As an active member of the National Society of Black Engineers, I support communication efforts and participate in development and networking events.", img.nsbe, "NSBE event")}
            ${clubCard("ColorStack", "As former Project Manager, I hosted work sessions with my cohort and led collaboration for projects supporting Black and Latinx students in STEM.", img.colorstack, "ColorStack collaboration session")}
          </div>
          <div class="mt-4 overflow-hidden border border-[#26485a] bg-[#0f2a3a]"><img src="${img.include2}" alt="#Include team and board moments" class="h-64 w-full object-cover" /></div>`,
        )}

        <div class="grid gap-6 md:grid-cols-2">
          ${infoPanel("Athletics and Fitness", "<p>I am a former <strong>marathon runner</strong>, captain of my high school soccer and <strong>cross-country</strong> teams, and I competed in track and field. These experiences taught me discipline, teamwork, and perseverance.</p>")}
          ${infoPanel("Healthcare Experience", "<p>I am a <strong>Certified Nursing Assistant (CNA)</strong>. Healthcare work strengthened my empathy, responsibility, and human-centered approach to problem-solving.</p>")}
        </div>

        <section class="border-t border-[#26485a] pt-10">
          <div class="mb-5">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#7fc7e8]">Photography</p>
            <h2 class="mt-3 text-4xl font-semibold tracking-tight text-[#f4f8fb]">Photography Work</h2>
          </div>
          <div class="overflow-hidden">
            <div class="photography-marquee-track flex w-max gap-4">
              ${[...photos, ...photos]
                .map((file) => `<article class="group w-52 shrink-0 overflow-hidden border border-[#26485a] bg-[#0f2a3a] transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:w-72 md:w-80"><img src="${a("about-me", "Photos", file)}" alt="Photography work" class="h-72 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96" /></article>`)
                .join("")}
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}
