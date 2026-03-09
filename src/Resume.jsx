import { Link } from "react-router-dom";
import { useState } from "react";

const resumeFileName = "Chinomso Augustine's Resume -3.pdf";
const resumePdfUrl = `${import.meta.env.BASE_URL}${encodeURIComponent(
  resumeFileName
)}`;

export default function Resume() {
  const [zoom, setZoom] = useState(100);

  const zoomOut = () => setZoom((value) => Math.max(75, value - 25));
  const zoomIn = () => setZoom((value) => Math.min(200, value + 25));
  const resetZoom = () => setZoom(100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-slate-900 px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-blue-200 rounded-xl p-6 md:p-8 shadow-sm shadow-blue-100/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">Resume</h1>
              <p className="text-sm text-blue-900/80 mt-2">
                UI/UX Designer and UI Engineer
              </p>
               <div className="mt-8">
            <Link
              to="/"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition"
            >
              ← Back to Home
            </Link>
          </div>
            </div>

            <a
              href={resumePdfUrl}
              download
              className="w-fit px-4 py-2 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={zoomOut}
              className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              -
            </button>
            <span className="text-sm text-blue-900/80 w-14 text-center">{zoom}%</span>
            <button
              onClick={zoomIn}
              className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              +
            </button>
            <button
              onClick={resetZoom}
              className="px-3 py-1.5 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Reset
            </button>
          </div>

          <div className="rounded-lg border border-blue-200 overflow-hidden bg-blue-50">
            <div className="hidden md:block">
              <iframe
                src={`${resumePdfUrl}#zoom=${zoom}`}
                title="Chinomso Augustine Resume"
                className="w-full h-[75vh]"
              />
            </div>
            <div className="md:hidden p-6 text-center">
              <p className="text-sm text-blue-900/80">
                Your browser may not render PDF previews inline.
              </p>
              <a
                href={resumePdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm"
              >
                Open Resume PDF
              </a>
            </div>
          </div>

          <div className="mt-4 md:hidden">
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition"
            >
              Open Full PDF
            </a>
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
