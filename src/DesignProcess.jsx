import { useState } from "react";
import { Link } from "react-router-dom";

const asset = (...pathSegments) =>
  import.meta.env.BASE_URL + pathSegments.map(encodeURIComponent).join("/");

const journeyMaps = [
  {
    title: "Journey Map 1",
    image: asset("other-images", "journey-map-1.jpg"),
    alt: "Ammunition Firm Tour journey map sample",
  },
  {
    title: "Journey Map 2",
    image: asset("other-images", "journey-map-2.jpg"),
    alt: "Spin Scooter improved journey map sample",
  },
];

function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f0a383]/45"
    >
      Back to Home
    </Link>
  );
}

function ProcessSection({ eyebrow, title, description, children }) {
  return (
    <section className="border-t border-[#d8cbed] py-10">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e0a12f]">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#2f285a]">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#5a5474]">{description}</p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function JourneyMapCard({ map, onPreview }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-[#d8cbed] bg-white shadow-[0_18px_45px_rgba(64,38,78,0.1)] transition duration-300 hover:shadow-[0_28px_70px_rgba(64,38,78,0.2)]">
      <div className="bg-[#f2edfb] p-3">
        <img
          src={map.image}
          alt={map.alt}
          className="w-full rounded-2xl bg-white object-contain"
        />
      </div>
      <figcaption className="flex flex-col gap-3 border-t border-[#d8cbed] bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-semibold text-[#2f285a]">{map.title}</span>
        <button
          type="button"
          onClick={() => onPreview(map)}
          className="w-fit rounded-full bg-[#e0a12f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b97d1f] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#edc56c]/45"
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
    <div className="min-h-screen bg-[#f8f3ff] text-[#2f285a]">
      <section className="border-b border-[#d8cbed] bg-[linear-gradient(140deg,#2f285a_0%,#625aa0_52%,#f8f3ff_100%)] px-5 pb-14 pt-32 text-white sm:px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e0a12f]">Process Archive</p>
          <h1 className="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl md:tracking-[-0.05em]">
            Design Process
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#eee9ff]">
            Some branches of design work from different classes.
          </p>

          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:px-16">
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
          <div className="flex min-h-[18rem] items-center justify-center rounded-3xl border border-dashed border-[#c7bce0] bg-white/55 p-8 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#756b91]">Empty Section</p>
              <p className="mt-3 text-2xl font-semibold text-[#2f285a]">More design process samples coming soon.</p>
            </div>
          </div>
        </ProcessSection>
      </main>

      {previewMap ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#211a3a]/90 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewMap.title} full screen preview`}
        >
          <button
            type="button"
            onClick={() => setPreviewMap(null)}
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2f285a] shadow-lg transition hover:bg-[#f8f3ff] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#edc56c]"
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
