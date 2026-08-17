import { html, img } from "../shared.js";

export function resumePage() {
  return html`
    <main class="min-h-screen bg-[#071827] px-5 pb-12 pt-32 text-[#f4f8fb] sm:px-6 md:px-8">
      <section class="mx-auto max-w-[1180px]">
        <div class="flex flex-col gap-4 border-b border-[#26485a] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold text-[#86d8ff]">Resume</p>
            <h1 class="mt-2 text-4xl font-semibold tracking-tight text-[#f4f8fb]">Chinomso Augustine</h1>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="${img.resume}" target="_blank" rel="noopener noreferrer" class="rounded-full border border-[#31566a] px-5 py-3 text-sm font-semibold text-[#f4f8fb] transition hover:bg-[#0f2a3a]">Open PDF</a>
            <a href="${img.resume}" download class="rounded-full bg-[#f4f8fb] px-5 py-3 text-sm font-semibold text-[#0f2a3a] transition hover:bg-[#d8e6ee]">Download</a>
          </div>
        </div>

        <div class="mt-6 h-[78vh] overflow-hidden border border-[#26485a] bg-[#0f2a3a]">
          <iframe src="${img.resume}#view=FitH&toolbar=1&navpanes=0" title="Chinomso Augustine resume" class="h-full w-full bg-white"></iframe>
        </div>
      </section>
    </main>
  `;
}
