import { a, html } from "../shared.js";

const notebookEntries = [
  {
    file: a("Joints.pdf"),
    description: "Wood joint practice",
  },
];

// Renders one notebook entry card, currently used for the Joints preview.
function notebookCard(entry) {
  return html`<article class="w-fit overflow-hidden border border-[#d6a84f]">
    <iframe src="${entry.file}" class="h-123"></iframe>
    <div class="p-1">
      <p class="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d6a84f] text-center">${entry.description}</p>
    </div>
  </article>`;
}

// Renders the Notebook page where mini projects, notes, and process work live.
export function notebookPage() {
  return html`
    <div class="min-h-screen bg-[#071827] text-[#f4f8fb]">
      <main class="mx-auto max-w-[1180px] px-3 pb-13 pt-32 sm:px-6 md:px-8">
        <!-- Page intro: centers the Notebook title and explains the archive purpose. -->
        <section class="mx-auto max-w-4xl border-b border-[#26485a] pb-10 text-center">
          <p class="text-sm font-semibold text-[#d6a84f]">Note book</p>
          <h1 class="mt-3 text-5xl font-semibold leading-[0.98] tracking-normal text-[#f4f8fb] sm:text-6xl md:text-5xl">Mini projects and process</h1>
          <p class="mx-auto mt-6 max-w-2xl text-md leading-8 text-[#c4d3dc]">Mini documentation of rough idea, sketches, and practice projects</p>
        </section>

        <!-- Notebook entries: shows uploaded notes/sketches or a fallback empty state. -->
        <section class="py-3">
          ${
            notebookEntries.length
              ? `<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${notebookEntries.map(notebookCard).join("")}</div>`
              : `<div class="rounded-[2px] bg-[#0f2a3a] p-4 text-center">
                  <p class="mx-auto mt-3 max-w-xl text-sm leading-3 text-[#c4d3dc]">Notes and sketches will appear here as the archive grows.</p>
                </div>`
          }
        </section>
      </main>
    </div>
  `;
}
