import { Link, useParams } from "react-router-dom";

const publicFileUrl = (...pathSegments) =>
  import.meta.env.BASE_URL + pathSegments.map(encodeURIComponent).join("/");

const documents = {
  typography: {
    title: "Typography Project",
    description: "A type-focused poster study exploring hierarchy, scale, and visual contrast.",
    pdf: publicFileUrl("DI", "Typography Project.pdf"),
    image: publicFileUrl("DI", "typography-project.jpg"),
  },
  "digital-illustrations": {
    title: "Digital Illustrations",
    description: "A multi-page illustration series exploring color systems, form, and everyday objects.",
    pdf: publicFileUrl("DI", "Digital Illustrations.pdf"),
    image: publicFileUrl("DI", "digital-illustrations.jpg"),
  },
  "event-poster": {
    title: "Event Poster",
    description: "A bold event poster composition using sports imagery, layered color, and scale.",
    pdf: publicFileUrl("DI", "My Event Poster.pdf"),
    image: publicFileUrl("DI", "event-poster.jpg"),
  },
  zine: {
    title: "Zine",
    description: "A visual zine exploring time pressure, workflow, and collage-based storytelling.",
    pdf: publicFileUrl("DI", "zine-preview.pdf"),
    image: publicFileUrl("DI", "zine.jpg"),
  },
};

export default function DocumentViewer() {
  const { documentId } = useParams();
  const document = documents[documentId];
  const pdfPreviewUrl = `${document?.pdf || ""}#view=FitH&toolbar=1&navpanes=0`;

  if (!document) {
    return (
      <main className="min-h-screen bg-[#edf4f7] px-6 pb-12 pt-32 text-[#173a47] md:px-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#cbdce3] bg-white p-8">
          <h1 className="text-3xl font-semibold">Document not found</h1>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf4f7] px-6 pb-12 pt-32 text-[#173a47] md:px-16">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-2xl border border-[#cbdce3] bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#597381]">
            Digital Illustrations / Graphic Design
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{document.title}</h1>
              <p className="mt-3 max-w-2xl text-[#395d69]">{document.description}</p>
            </div>
            <a
              href={document.pdf}
              download
              className="inline-flex w-fit rounded-full border border-[#b8ccd4] px-5 py-3 text-sm font-semibold text-[#173a47] transition hover:bg-[#eef6f9]"
            >
              Download PDF
            </a>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-[#cbdce3] bg-white shadow-sm">
          <div className="h-[72vh] overflow-auto bg-[#eef6f9] [-webkit-overflow-scrolling:touch] md:h-[78vh]">
            <iframe
              src={pdfPreviewUrl}
              title={`${document.title} PDF preview`}
              className="h-full min-h-[720px] w-full bg-white md:min-h-0"
            />
          </div>
          <div className="flex flex-col gap-3 border-t border-[#d6e4e9] bg-white p-4 text-sm text-[#395d69] sm:flex-row sm:items-center sm:justify-between">
            <p>If your mobile browser does not scroll embedded PDFs smoothly, use the direct PDF link.</p>
            <a
              href={document.pdf}
              className="inline-flex w-fit rounded-full bg-[#173a47] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f2b35]"
            >
              Open PDF
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
