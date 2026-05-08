import { Link } from "react-router-dom";

const modelingImageUrl = import.meta.env.BASE_URL + "rhino-modeling.png";
const sketchImageUrl = import.meta.env.BASE_URL + "rhino-sketch.png";
const aiImageUrl = import.meta.env.BASE_URL + "rhino-ai.png";

function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex h-9 items-center rounded-md border border-[#9db9c5] bg-white px-4 text-xs font-semibold text-[#1f4f5f] transition hover:bg-[#eef5f8] hover:text-[#173a47]"
    >
      Back to Home
    </Link>
  );
}

function StepCard({ step, title, text, image, alt }) {
  return (
    <section className="border-t border-[#c8d9e0] py-10">
      <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5a7a86]">Step {step}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#183a47]">{title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#32535f]">{text}</p>
        </div>
        <figure className="overflow-hidden border border-[#bfd1d8] bg-white p-2">
          <img src={image} alt={alt} className="max-h-[30rem] w-full bg-white object-contain" />
        </figure>
      </div>
    </section>
  );
}

export default function LearningRhino8() {
  return (
    <div className="min-h-screen bg-[#eaf1f4] text-[#163843]">
      <section className="border-b border-[#c7d9e0] bg-[linear-gradient(140deg,#cde2e7_0%,#e8f3f6_52%,#f6fbfc_100%)] px-6 pb-14 pt-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6d78]">Project 02</p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-tight text-[#173a47] md:text-7xl">
            Learning Rhino 8
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#31515c]">
            First Rhino 8 project for Design 50 at UC Davis (Professor Hyemi Kang). The assignment
            challenged me to translate abstract concepts like fragmented, radiating, and aggregating
            into a 3D form. I chose splintered and flowing, with the final direction leaning into flowing.
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#31515c]">
            This process helped me learn how to build consistent rhythmic patterns and navigate a 3D
            workspace for the first time. It was a foundational introduction to digital fabrication, and
            I am looking forward to pushing complexity further in my next build.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Course</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">Design 50</p>
            </div>
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Tool</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">Rhino 8</p>
            </div>
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Direction</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">Splintered → Flowing</p>
            </div>
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Focus</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">3D Workflow Fundamentals</p>
            </div>
          </div>

          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <StepCard
          step="1"
          title="Sketch Exploration"
          text="I started by exploring abstract form direction through sketching. This phase helped me test how fragmented and flowing qualities could coexist before moving into modeling."
          image={sketchImageUrl}
          alt="Chinomso Augustine Project 1 Sketch"
        />

        <StepCard
          step="2"
          title="Early Digital Build"
          text="Next, I translated the concept into Rhino and began shaping structured repetitions. This stage focused on controlling rhythm, spacing, and form consistency."
          image={aiImageUrl}
          alt="Chinomso Augustine Design 50 Project 1 A1"
        />

        <StepCard
          step="3"
          title="Refined Rhino Modeling"
          text="In the final stage, I refined the form toward a clearer flowing outcome. The result demonstrates my first full 3D workflow and foundational digital fabrication thinking."
          image={modelingImageUrl}
          alt="Chinomso Augustine Design 50 Project 1 Modeling"
        />
      </main>
    </div>
  );
}
