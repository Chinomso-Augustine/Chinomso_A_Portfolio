import { footer, html, img } from "../shared.js";

const projects = [
  {
    tags: ["Industrial", "Fabrication", "Rhino"],
    title: "Parklet Design",
    description: "A modular streetside study space built through sketching, Rhino modeling, fabrication, and physical prototyping.",
    image: img.parklet,
    href: "#/parklet",
    imageClass: "object-cover",
  },
  {
    tags: ["Healthcare", "UI/UX", "Team"],
    title: "Student Run Clinic",
    description: "A collaborative redesign of a UC Davis student-run clinic website with research, wireframes, and high-fidelity homepage work.",
    image: img.clinicHero,
    href: "#/student-run-clinic",
    imageClass: "object-cover object-top",
  },
  {
    tags: ["Product", "Accessibility", "Campus"],
    title: "Accessible Water Fountain",
    description: "A retrofit fountain mouthpiece designed around inclusive hydration, reusable bottles, and campus feasibility.",
    image: img.fountain,
    href: "#/refill",
  },
  {
    tags: ["Student Services", "SaaS", "UX"],
    title: "CampusConnect",
    description: "A trusted search-and-book hub that helps UC Davis students find, compare, and book peer services faster.",
    image: img.campus,
    href: "#/case1",
  },
];

const skills = [
  ["Design", ["Wireframing", "UX Research", "Personas", "User Flow", "Prototyping", "Accessibility"]],
  ["Tools", ["Figma", "Illustrator", "Photoshop", "Lightroom", "Rhino 8", "Notion", "Miro"]],
  ["Code", ["HTML", "Tailwind CSS", "JavaScript", "C", "C++"]],
];

function projectCard(project) {
  return html`<a href="${project.href}" class="group overflow-hidden rounded-[8px] border border-[#26485a] bg-[#08131d] transition duration-300 hover:-translate-y-1 hover:border-[#4d7a93] hover:bg-[#0b1a26]">
    <div class="overflow-hidden border-b border-[#162f40] bg-[#0f2a3a]">
      <img src="${project.image}" alt="${project.title}" class="h-52 w-full ${project.imageClass || "object-cover object-center"} bg-[#0f2a3a] p-0 transition duration-500 group-hover:scale-[1.03] sm:h-60 lg:h-72" />
    </div>
    <div class="p-4 sm:p-5">
      <div class="flex flex-wrap gap-2">
        ${project.tags.map((tag) => `<span class="rounded-[8px] bg-[#2b2414] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d6a84f]">${tag}</span>`).join("")}
      </div>
      <h3 class="mt-4 text-2xl font-semibold tracking-tight text-[#f4f8fb] sm:text-[1.6rem]">${project.title}</h3>
      <p class="mt-3 min-h-[3.75rem] text-sm leading-6 text-[#c4d3dc]">${project.description}</p>
    </div>
  </a>`;
}

function skillGroup([title, items]) {
  return html`<article class="border border-[#26485a] bg-[#0f2a3a] p-5">
    <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-[#d6a84f]">${title}</h3>
    <div class="mt-4 flex flex-wrap gap-2">
      ${items.map((skill) => `<span class="rounded-full border border-[#26485a] bg-[#071827] px-3 py-1.5 text-sm font-medium text-[#d8e6ee]">${skill}</span>`).join("")}
    </div>
  </article>`;
}

export function homePage() {
  return html`
    <div class="min-h-screen bg-[#071827] text-[#f4f8fb]">
      <main>
        <section class="mx-auto grid min-h-[88vh] max-w-[1180px] gap-10 px-5 pb-16 pt-32 sm:px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p class="text-sm font-semibold text-[#d6a84f]">Chinomso Augustine - UI/UX Designer and UI Engineer</p>
            <h1 class="mt-5 max-w-4xl font-[Manrope] text-5xl font-semibold leading-[0.98] tracking-normal text-[#f4f8fb] sm:text-6xl md:text-7xl">
              Designing thoughtful digital and physical experiences.
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-[#c4d3dc]">
I focus on designing intuitive, user-centered products that prioritize clarity, usability, and purpose. 
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#/" class="rounded-full bg-[#f4f8fb] px-5 py-3 text-sm font-semibold text-[#0f2a3a] transition hover:bg-[#d8e6ee]">View Projects</a>
              <a href="#/about" class="rounded-full border border-[#31566a] px-5 py-3 text-sm font-semibold text-[#f4f8fb] transition hover:bg-[#0f2a3a]">About Me</a>
            </div>
            <p class="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-[#d6a84f]">Scroll to explore</p>
          </div>
          <figure class="overflow-hidden rounded-[8px] border border-[#26485a] bg-[#0f2a3a] shadow-[0_24px_70px_rgba(24,23,19,0.08)]">
            <img src="${img.profile}" alt="Chinomso Augustine portrait" class="h-[34rem] w-full object-cover object-[center_28%]" />
          </figure>
        </section>

        <section class="mx-auto max-w-[1180px] border-t border-[#26485a] px-5 py-14 sm:px-6 md:px-8">
           
            <div class="grid grid-cols-1 gap-px border border-[#26485a] bg-[#26485a] sm:grid-cols-3">
              ${[
                ["4", "Projects"],
                ["2", "Digital products"],
                ["2", "Physical builds"]
              ]
                .map(([value, label]) => `<div class="bg-[#0f2a3a] p-5"><p class="text-3xl font-semibold text-[#f4f8fb]">${value}</p><p class="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d6a84f]">${label}</p></div>`)
                .join("")}
            </div>

          <div class="mt-9 grid gap-6 lg:grid-cols-2">${projects.map(projectCard).join("")}</div>
        </section>

        <section class="mx-auto grid max-w-[1180px] gap-10 border-t border-[#26485a] px-5 py-14 sm:px-6 md:px-8 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#d6a84f]">Skills</p>
            <h2 class="mt-3 text-4xl font-semibold tracking-tight text-[#f4f8fb]">Design, tools, and code working together.</h2>
          </div>
          <div class="grid gap-4">${skills.map(skillGroup).join("")}</div>
        </section>

     
        ${footer()}
      </main>
    </div>
  `;
}
