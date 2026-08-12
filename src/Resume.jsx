import resumePdf from "./assets/about-me/My Resume.pdf";

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#edf4f7] px-5 pb-12 pt-32 text-[#173a47] sm:px-6 md:px-16">
      <section className="mx-auto max-w-5xl border border-[#cbdce3] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 border-b border-[#d6e4e9] pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#173a47] sm:text-4xl">
              Resume
            </h1>
            <p className="mt-2 text-sm text-[#395d69]">
              Chinomso Augustine
            </p>
          </div>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit border border-[#b8ccd4] px-5 py-3 text-sm font-semibold text-[#173a47] transition hover:bg-[#eef6f9]"
          >
            Open PDF
          </a>
        </div>

        <div className="mt-5 h-[78vh] overflow-hidden border border-[#cbdce3] bg-[#eef6f9]">
          <iframe
            src={`${resumePdf}#view=FitH&toolbar=1&navpanes=0`}
            title="Chinomso Augustine resume"
            className="h-full w-full bg-white"
          />
        </div>
      </section>
    </main>
  );
}
