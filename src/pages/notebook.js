import { a } from "../shared.js";

const notebookEntries = [
  {
    file: "Joints.pdf",
    description: "Wood joint practice",
    width: 534,
    height: 904,
  },
  {
    file: "shoelace.pdf",
    description: "Shoe lace ideas",
    width: 792,
    height: 1051,
  },
];

export function notebookPage() {
  return `
    <div class="min-h-screen bg-[#071827] text-[#f4f8fb]">
      <main class="mx-auto max-w-[1180px] px-3 pb-13 pt-32 sm:px-6 md:px-8">
        <section class="mx-auto max-w-4xl border-b border-[#26485a] pb-10 text-center">
          <p class="text-sm font-semibold text-[#d6a84f]">Note book</p>
          <h1 class="mt-3 text-5xl font-semibold leading-[0.98] tracking-normal text-[#f4f8fb] sm:text-6xl md:text-5xl">Mini projects and process</h1>
          <p class="mx-auto mt-6 max-w-2xl text-md leading-8 text-[#c4d3dc]">Mini documentation of rough idea, sketches, and practice projects</p>
        </section>

        <section class="flex flex-wrap justify-center gap-6 py-6">
          ${notebookEntries.map(({ file, description, width, height }) => `
            <article class="max-w-full" style="width: ${width / 2}pt">
              <iframe src="${a("Notebook", file)}#view=FitH&toolbar=0&navpanes=0" title="${description}" class="block w-full border-0" style="aspect-ratio: ${width} / ${height}"></iframe>
              <p class="p-1 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d6a84f]">${description}</p>
            </article>
          `).join("")}
        </section>
      </main>
    </div>
  `;
}
