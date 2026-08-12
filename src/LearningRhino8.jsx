import { Link } from "react-router-dom";
import { assetUrl } from "./assets";

const modelingImageUrl = assetUrl("other-images", "rhino-modeling.png");
const sketchImageUrl = assetUrl("other-images", "rhino-sketch.png");
const aiImageUrl = assetUrl("other-images", "rhino-ai.png");

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

function StepCard({ step, title, text, image, alt }) {
  return (
    <section className="border-t border-[#d4d6cf] py-10">
      <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a6c84c]">Step {step}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#2b2d2f]">{title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#5d625d]">{text}</p>
        </div>
        <figure className="overflow-hidden border border-[#d4d6cf] bg-white p-2">
          <img src={image} alt={alt} className="max-h-[30rem] w-full bg-white object-contain" />
        </figure>
      </div>
    </section>
  );
}

export default function LearningRhino8() {
  return (
    <div className="min-h-screen bg-[#f2f2ee] text-[#2b2d2f]">
      <section className="border-b border-[#d4d6cf] bg-[linear-gradient(140deg,#2b2d2f_0%,#5c6461_52%,#f2f2ee_100%)] px-5 pb-14 pt-32 text-white sm:px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#cde96a]">Project 02</p>
          <h1 className="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            Learning Rhino 8
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#f0f2ea]">
            First Rhino 8 project for Design 50 at UC Davis (Professor Hyemi Kang). The assignment
            challenged me to translate abstract concepts like fragmented, radiating, and aggregating
            into a 3D form. I chose splintered and flowing, with the final direction leaning into flowing.
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#f0f2ea]">
            This process helped me learn how to build consistent rhythmic patterns and navigate a 3D
            workspace for the first time. It was a foundational introduction to digital fabrication, and
            I am looking forward to pushing complexity further in my next build.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-[#d4d6cf] bg-[#f8f8f2] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#5c6461]">Course</p>
              <p className="mt-1 text-sm font-medium text-[#2b2d2f]">Design 50</p>
            </div>
            <div className="border border-[#d4d6cf] bg-[#f8f8f2] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#5c6461]">Tool</p>
              <p className="mt-1 text-sm font-medium text-[#2b2d2f]">Rhino 8</p>
            </div>
            <div className="border border-[#d4d6cf] bg-[#f8f8f2] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#5c6461]">Direction</p>
              <p className="mt-1 text-sm font-medium text-[#2b2d2f]">Splintered → Flowing</p>
            </div>
            <div className="border border-[#d4d6cf] bg-[#f8f8f2] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#5c6461]">Focus</p>
              <p className="mt-1 text-sm font-medium text-[#2b2d2f]">3D Workflow Fundamentals</p>
            </div>
          </div>

          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
        <StepCard
          step="1"
          title="Exploration"
          text="I started by exploring abstract form direction using 6x4 postcards. This phase helped me test how fragmented and flowing qualities could coexist before moving into modeling."
          image={sketchImageUrl}
          alt="Chinomso Augustine Project 1 Sketch"
        />

        <StepCard
          step="2"
          title="Early Digital Build with Adobe Illustrator"
          text="Next, I created a step by step approach on how to reconstruct my favorite design among the 6 designs. It also showcases different sides of my product. This stage focused on controlling rhythm, spacing, and form consistency."
          image={aiImageUrl}
          alt="Chinomso Augustine Design 50 Project 1 A1"
        />

        <StepCard
          step="3"
          title="Rhino Modeling"
          text="In the final stage, I used Rhino 8 to construct the product, adding more layers. The result demonstrates my first full 3D workflow and foundational digital fabrication thinking."
          image={modelingImageUrl}
          alt="Chinomso Augustine Design 50 Project 1 Modeling"
        />
      </main>
    </div>
  );
}
