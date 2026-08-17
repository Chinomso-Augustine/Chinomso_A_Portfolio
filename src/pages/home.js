import { footer, html, img } from "../shared.js";

const projects = [
  {
    tags: ["Healthcare", "UI/UX", "Team"],
    title: "Student Run Clinic",
    description: "A collaborative redesign of a UC Davis student-run clinic website with research, wireframes, and high-fidelity homepage work.",
    image: img.clinicHero,
    href: "#/student-run-clinic",
    imageClass: "object-cover object-top",
  },
  {
    tags: ["Student Services", "SaaS", "UX"],
    title: "CampusConnect",
    description: "A trusted search-and-book hub that helps UC Davis students find, compare, and book peer services faster.",
    image: img.campus,
    href: "#/case1",
  },
  {
    tags: ["AI", "Career", "Web"],
    title: "Pathfinder",
    description: "An AI-supported career direction platform for college and graduate students who need clarity before applying.",
    image: img.pathfinder,
    href: "#/jobmadeeasy",
  },
  {
    tags: ["Industrial", "Fabrication", "Rhino"],
    title: "Parklet Design",
    description: "A modular streetside study space built through sketching, Rhino modeling, fabrication, and physical prototyping.",
    image: img.parklet,
    href: "#/parklet",
    imageClass: "object-cover",
  },
  {
    tags: ["Product", "Accessibility", "Campus"],
    title: "Accessible Water Fountain",
    description: "A retrofit fountain mouthpiece designed around inclusive hydration, reusable bottles, and campus feasibility.",
    image: img.fountain,
    href: "#/refill",
  },
];

const skills = [
  ["Design", ["Wireframing", "UX Research", "Personas", "User Flow", "Prototyping", "Accessibility"]],
  ["Tools", ["Figma", "Illustrator", "Photoshop", "Lightroom", "Rhino 8", "Notion"]],
  ["Code", ["HTML", "Tailwind CSS", "JavaScript", "C", "C++", "Assembly"]],
];

function projectCard(project) {
  return html`<a href="${project.href}" class="group overflow-hidden rounded-[8px] border border-[#26485a] bg-[#08131d] transition duration-300 hover:-translate-y-1 hover:border-[#4d7a93] hover:bg-[#0b1a26]">
    <div class="overflow-hidden border-b border-[#162f40] bg-[#0f2a3a]">
      <img src="${project.image}" alt="${project.title}" class="h-72 w-full ${project.imageClass || "object-cover object-center"} bg-[#0f2a3a] p-0 transition duration-500 group-hover:scale-[1.03] sm:h-80 lg:h-[22rem]" />
    </div>
    <div class="p-6 sm:p-7">
      <div class="flex flex-wrap gap-2">
        ${project.tags.map((tag) => `<span class="rounded-[8px] bg-[#102946] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#62a8ff]">${tag}</span>`).join("")}
      </div>
      <h3 class="mt-6 text-3xl font-semibold tracking-tight text-[#f4f8fb]">${project.title}</h3>
      <p class="mt-4 min-h-[4rem] text-[15px] leading-7 text-[#c4d3dc]">${project.description}</p>
    </div>
  </a>`;
}

function skillGroup([title, items]) {
  return html`<article class="border border-[#26485a] bg-[#0f2a3a] p-5">
    <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-[#7fc7e8]">${title}</h3>
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
            <p class="text-sm font-semibold text-[#86d8ff]">Chinomso Augustine - UI/UX Designer and UI Engineer</p>
            <h1 class="mt-5 max-w-4xl text-5xl font-semibold leading-[0.93] tracking-tight text-[#f4f8fb] sm:text-6xl md:text-7xl">
              Designing thoughtful digital and physical experiences.
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-[#c4d3dc]">
              I turn research, sketches, systems, and code into interfaces that feel clear, purposeful, and human.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#/" class="rounded-full bg-[#f4f8fb] px-5 py-3 text-sm font-semibold text-[#0f2a3a] transition hover:bg-[#d8e6ee]">View Projects</a>
              <a href="#/about" class="rounded-full border border-[#31566a] px-5 py-3 text-sm font-semibold text-[#f4f8fb] transition hover:bg-[#0f2a3a]">About Me</a>
            </div>
            <p class="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-[#7fc7e8]">Scroll to explore</p>
          </div>
          <figure class="overflow-hidden border border-[#26485a] bg-[#0f2a3a] p-3 shadow-[0_24px_70px_rgba(24,23,19,0.08)]">
            <img src="${img.profile}" alt="Chinomso Augustine portrait" class="h-[34rem] w-full object-cover object-[center_28%]" />
          </figure>
        </section>

        <section class="mx-auto max-w-[1180px] border-t border-[#26485a] px-5 py-14 sm:px-6 md:px-8">
          <div class="grid gap-8 md:grid-cols-[0.38fr_0.62fr] md:items-end">
            <div>
              <h2 class="text-4xl font-semibold tracking-tight text-[#f4f8fb]">Selected Projects</h2>
              <p class="mt-4 text-[15px] leading-7 text-[#c4d3dc]">A curated set of UI/UX, product, physical design, and front-end work.</p>
            </div>
            <div class="grid grid-cols-2 gap-px border border-[#26485a] bg-[#26485a] sm:grid-cols-4">
              ${[
                ["5", "Projects"],
                ["3", "Digital products"],
                ["2", "Physical builds"],
                ["1", "Healthcare redesign"],
              ]
                .map(([value, label]) => `<div class="bg-[#0f2a3a] p-5"><p class="text-3xl font-semibold text-[#f4f8fb]">${value}</p><p class="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7fc7e8]">${label}</p></div>`)
                .join("")}
            </div>
          </div>
          <div class="mt-10 grid gap-7 lg:grid-cols-2">${projects.map(projectCard).join("")}</div>
        </section>

        <section class="mx-auto grid max-w-[1180px] gap-10 border-t border-[#26485a] px-5 py-14 sm:px-6 md:px-8 lg:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-[#7fc7e8]">Capabilities</p>
            <h2 class="mt-3 text-4xl font-semibold tracking-tight text-[#f4f8fb]">Design, tools, and code working together.</h2>
          </div>
          <div class="grid gap-4">${skills.map(skillGroup).join("")}</div>
        </section>

        <section class="mx-auto grid max-w-[1180px] gap-8 border-t border-[#26485a] px-5 py-14 sm:px-6 md:px-8 lg:grid-cols-4">
          ${[
            ["Community", "#Include, NSBE, ColorStack"],
            ["Healthcare", "Certified Nursing Assistant"],
            ["Athletics", "Former marathon runner and team captain"],
            ["Photography", "Portraits, events, and sports"],
          ]
            .map(([title, text]) => `<article class="border border-[#26485a] bg-[#0f2a3a] p-5"><h3 class="text-lg font-semibold text-[#f4f8fb]">${title}</h3><p class="mt-3 text-sm leading-6 text-[#c4d3dc]">${text}</p></article>`)
            .join("")}
        </section>
        ${footer()}
      </main>
    </div>
  `;
}
