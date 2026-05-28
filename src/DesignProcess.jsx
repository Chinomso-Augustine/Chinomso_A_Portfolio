import { useState } from "react";
import { Link } from "react-router-dom";

const asset = (...pathSegments) =>
  import.meta.env.BASE_URL + pathSegments.map(encodeURIComponent).join("/");

const journeyMaps = [
  {
    title: "Journey Map 1",
    image: asset("journey-map-1.jpg"),
    alt: "Ammunition Firm Tour journey map sample",
  },
  {
    title: "Journey Map 2",
    image: asset("journey-map-2.jpg"),
    alt: "Spin Scooter improved journey map sample",
  },
];

function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex h-11 items-center rounded-full bg-[#1a73e8] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1558b0]"
    >
      Back to Home
    </Link>
  );
}

function ProcessSection({ eyebrow, title, description, children }) {
  return (
    <section className="border-t border-[#d8cfe2] py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#795f8b]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#2f1f39]">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#5e4b67]">{description}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function JourneyMapCard({ map, onPreview }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-[#d9cde2] bg-white shadow-[0_18px_45px_rgba(64,38,78,0.1)] transition duration-300 hover:shadow-[0_28px_70px_rgba(64,38,78,0.2)]">
      <div className="bg-[#fbf8fd] p-3">
        <img
          src={map.image}
          alt={map.alt}
          className="w-full rounded-2xl bg-white object-contain"
        />
      </div>
      <figcaption className="flex flex-col gap-3 border-t border-[#eadff0] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-semibold text-[#2f1f39]">{map.title}</span>
        <button
          type="button"
          onClick={() => onPreview(map)}
          className="w-fit rounded-full bg-[#7b3fa0] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5e2f7a] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#a978c7]/45"
        >
          View Full Screen
        </button>
      </figcaption>
    </figure>
  );
}

export default function DesignProcess() {
  const [previewMap, setPreviewMap] = useState(null);

  return (
    <div className="min-h-screen bg-[#f5eef8] text-[#2f1f39]">
      <section className="border-b border-[#d8cfe2] bg-[linear-gradient(140deg,#ead8f2_0%,#f7effa_52%,#fffafe_100%)] px-6 pb-14 pt-32 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#795f8b]">Process Archive</p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-[-0.05em] text-[#2f1f39] md:text-7xl">
            Design Process
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5e4b67]">
            Some branches of design work from different classes.
          </p>

          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-16 md:px-16">
        <ProcessSection
          eyebrow="Section 01"
          title="Journey Map Samples"
          description="Sample journey maps I created."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {journeyMaps.map((map) => (
              <JourneyMapCard key={map.title} map={map} onPreview={setPreviewMap} />
            ))}
          </div>
        </ProcessSection>

        <ProcessSection eyebrow="Section 02" title="More Process Work">
          <div className="flex min-h-[18rem] items-center justify-center rounded-3xl border border-dashed border-[#c9b7d4] bg-white/55 p-8 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7896]">Empty Section</p>
              <p className="mt-3 text-2xl font-semibold text-[#3a2843]">More design process samples coming soon.</p>
            </div>
          </div>
        </ProcessSection>
      </main>

      {previewMap ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1f1028]/90 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewMap.title} full screen preview`}
        >
          <button
            type="button"
            onClick={() => setPreviewMap(null)}
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2f1f39] shadow-lg transition hover:bg-[#f5eef8] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d8b7ec]"
          >
            Close
          </button>
          <img
            src={previewMap.image}
            alt={previewMap.alt}
            className="max-h-[92vh] max-w-[96vw] rounded-2xl bg-white object-contain p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
          />
        </div>
      ) : null}
    </div>
  );
}
