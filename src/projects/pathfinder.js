import { a, html } from "../shared.js";

const asset = (file) => a("other-images", file);

function metaItem(label, value) {
  return html`<div class="border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
    <p class="text-[11px] uppercase tracking-[0.14em] text-[#ffd28a]">${label}</p>
    <p class="mt-1 text-sm font-medium text-white">${value}</p>
  </div>`;
}

function imageCard(src, alt, label) {
  return html`<figure class="overflow-hidden border border-[#6d8eb0]/45 bg-[#f7fbff] p-2 shadow-[0_18px_44px_rgba(2,10,24,0.28)]">
    <img src="${src}" alt="${alt}" class="h-72 w-full bg-white object-contain" />
    <figcaption class="border-t border-[#d8e4f1] bg-[#f7fbff] px-3 py-2 text-[11px] text-[#4f6780]">${label}</figcaption>
  </figure>`;
}

function section(title, text, content) {
  return html`<section class="border-t border-[#6d8eb0]/35 py-10">
    <h2 class="text-2xl font-semibold text-[#f7fbff]">${title}</h2>
    <p class="mt-3 max-w-3xl text-[15px] leading-7 text-[#c7d6e7]">${text}</p>
    <div class="mt-5">${content}</div>
  </section>`;
}

function infoGrid(items, cols = "sm:grid-cols-3") {
  return `<div class="grid gap-3 ${cols}">${items.map((item) => `<div class="border border-[#6d8eb0]/35 bg-white/8 px-4 py-3 text-sm text-[#d8e4f1]">${item}</div>`).join("")}</div>`;
}

export function pathfinderPage() {
  return html`<div class="min-h-screen bg-[#0c2440] text-[#f7fbff]">
    <section class="border-b border-[#6d8eb0]/35 bg-[linear-gradient(140deg,#071827_0%,#183b63_52%,#0c2440_100%)] px-5 pb-14 pt-32 text-white sm:px-6 md:px-16">
      <div class="mx-auto max-w-6xl">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#ffd28a]">Case Study</p>
        <h1 class="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">Pathfinder</h1>
        <p class="mt-4 max-w-2xl text-lg text-[#f7fbff]">Career discovery platform for college and graduate students.</p>
        <p class="mt-6 max-w-3xl text-[15px] leading-7 text-[#e5eff8]">Pathfinder helps students discover career directions first, then find and apply to opportunities that align with their real experience.</p>
        <div class="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          ${metaItem("Role", "UI/UX Designer")}
          ${metaItem("Project Type", "AI + UX Case Study")}
          ${metaItem("Platform", "Web + Mobile")}
          ${metaItem("Focus", "Career Discovery + Confidence")}
        </div>
        <div class="mt-8">
          <a href="#/" class="inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d]">Back to Home</a>
        </div>
      </div>
    </section>

    <main class="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
      ${section(
        "Overview",
        "Pathfinder helps undergraduate and graduate students discover career paths before applying. The platform uses AI to analyze resume content, suggest relevant roles, and recommend how to tailor resumes for those roles.",
        `${infoGrid(["AI role suggestions from resume content", "Job and internship matching by fit", "Tailored resume guidance per role"])}
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          ${imageCard(asset("Laptop 1.png"), "Pathfinder homepage on laptop", "Homepage (Laptop 1)")}
          ${imageCard(asset("mobile2.png"), "Pathfinder homepage on mobile", "Homepage (Mobile 2)")}
        </div>`,
      )}
      ${section(
        "Problem",
        "Many students delay applications because they are unsure which roles fit their background.",
        infoGrid(["Unclear direction reduces application confidence", "Students miss roles they already qualify for", "Generic job boards assume users already know their path"]),
      )}
      ${section(
        "Audience",
        "Primary users are college undergraduates and graduate students actively seeking internships or entry-level jobs.",
        infoGrid(["College undergraduates exploring first internships", "Graduate students seeking focused career alignment", "Users who need direction before applying"]),
      )}
      ${section(
        "Persona: Sanjith",
        "Sanjith (20, Computer Science) started with one career goal, then changed direction after real project experience. He now needs a clear, realistic next path.",
        `${infoGrid(["Name: Sanjith", "Age: 20", "Major: Computer Science", "Problem: No clear next career direction"], "sm:grid-cols-4")}
        <div class="mt-4 border border-[#6d8eb0]/35 bg-white/8 px-4 py-4 text-sm text-[#d8e4f1]">
          <p class="font-semibold text-[#f7fbff]">Behaviors</p>
          <ul class="mt-2 list-disc space-y-1 pl-5">
            <li>Hesitates to apply for internships because he is unsure of his career goals.</li>
            <li>Avoids career fairs because they feel unhelpful without clear focus.</li>
            <li>Overthinks his options and delays decisions.</li>
          </ul>
        </div>
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          ${imageCard(asset("Laptop2.png"), "Pathfinder dashboard on laptop", "Body / Dashboard (Laptop 2)")}
          ${imageCard(asset("mobile1.png"), "Pathfinder dashboard on mobile", "Body / Dashboard (Mobile 1)")}
        </div>`,
      )}
      ${section(
        "Hypothesis",
        "If students are shown career paths based on their actual experience, they will apply faster and with more confidence.",
        infoGrid(["Discovery before application", "Confidence through relevance", "Clearer long-term career vision"]),
      )}
      ${section(
        "Design Direction",
        "Unlike listing-first platforms, Pathfinder prioritizes career discovery first, then presents opportunities aligned to discovered direction.",
        `${infoGrid(["Career discovery first", "Opportunity matching second", "Suggests roles users may not have considered"])}
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          ${imageCard(asset("Laptop3.png"), "Pathfinder additional screen 1 on laptop", "Additional Screen (Laptop 3)")}
          ${imageCard(asset("lapt4.png"), "Pathfinder additional screen 2 on laptop", "Additional Screen (Laptop 4)")}
        </div>`,
      )}
    </main>
  </div>`;
}
