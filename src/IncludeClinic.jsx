import { useState } from "react";
import { Link } from "react-router-dom";

const includeAsset = (...pathSegments) =>
  import.meta.env.BASE_URL + pathSegments.map(encodeURIComponent).join("/");

const heroImage = includeAsset("Include Design", "HeroImage.png");
const personaImage = includeAsset("Include Design", "Persona.png");
const meetTeamImage = includeAsset("Include Design", "Meet the Team.png");
const wireframeStages = [
  {
    title: "Lo-Fi Wireframes",
    body: "Early layouts helped define the page structure, content hierarchy, and main user paths before visual styling was added.",
    image: includeAsset("Include Design", "Lo-Fi.png"),
    teamTitle: "Team Lo-Fi Wireframes",
    teamImage: includeAsset("Include Design", "teamLoFi.png"),
  },
  {
    title: "Mid-Fi Wireframes",
    body: "The mid-fidelity stage refined spacing, navigation, and section placement so the experience could feel clearer and more usable.",
    image: includeAsset("Include Design", "Mid-Fi.png"),
  },
  {
    title: "Hi-Fi Wireframes",
    body: "The high-fidelity design brought the clinic’s purple visual system into the interface with more polished components and page details.",
    image: includeAsset("Include Design", "Hi-fi.png"),
  },
];

const refiningImages = [
  {
    id: "homepage-1",
    title: "Home Page",
    image: includeAsset("Include Design", "home1.png"),
  },
  {
    id: "homepage-2",
    title: "Home Page",
    image: includeAsset("Include Design", "Home2.png"),
  },
  {
    id: "homepage-3",
    title: "Home Page",
    image: includeAsset("Include Design", "Home3.png"),
  },
  {
    id: "homepage-4",
    title: "Home Page",
    image: includeAsset("Include Design", "Home4.png"),
  },
  {
    title: "Partnership",
    image: includeAsset("Include Design", "committee.png"),
  },
  {
    title: "Events",
    image: includeAsset("Include Design", "committee2.png"),
  },
];

const teammateWorkImages = [
  {
    title: "Design Archetech",
    image: includeAsset("Include Design", "Design Archetech.png"),
  },
  {
    title: "User Flow",
    image: includeAsset("Include Design", "User Flow.png"),
  },
  {
    title: "User Testing",
    image: includeAsset("Include Design", "usabilitytesting.png"),
  },
  {
    title: "Teammate Hi-Fi",
    image: includeAsset("Include Design", "Teammate Hi-Fi.png"),
  },
];

const presentationImages = [
  {
    title: "Presentation 1",
    image: includeAsset("Include Design", "Presentation1.JPG"),
  },
  {
    title: "Presentation 2",
    image: includeAsset("Include Design", "presentation2.JPG"),
  },
];

const clubImage = {
  title: "Club Image",
  image: includeAsset("Include Design", "Clubimage.JPG"),
};

const overviewItems = [
  {
    title: "The Product",
    body: "A redesigned website for Juvenile Caduceus Clinic, a student-run clinic at UC Davis that aims to deliver high-quality care and assistance to the underprivileged youth and older adolescents.",
  },
  {
    title: "The Goal",
    body: "Create an accessible and trustworthy website experience that communicates who the clinic serves, their history, and how they aim to keep it alive.",
  },
  {
    title: "The Problem",
    body: "The clinic’s existing website needed a clearer structure, consistent visual system, and a more approachable way for visitors to find important healthcare information.",
  },
  {
    title: "Project Duration",
    body: "Two academic quarters.",
  },
  {
    title: "My Role",
    body: "I was responsible for creating the Home page from start to end alongside the #include Davis design team and design leads.",
  },
  {
    title: "My Responsibilities",
    body: "My task included competitive analysis, user persona, Lo-fidelity, mid-fidelity, and hi-fidelity prototypes.",
  },
];

const userUnderstandingItems = [
  {
    title: "User Research",
    body: "Our research showed that many Davis students struggle to find free or affordable healthcare that meets the needs of a diverse community.",
  },
  {
    title: "Pain Points",
    points: [
      "Many students struggle to find affordable healthcare plans around Davis.",
      "Students often do not know where to begin when looking for healthcare resources.",
      "Some students do not have insurance and are unsure where to start looking for coverage.",
    ],
  },
];

export default function IncludeClinic() {
  const [selectedWireframe, setSelectedWireframe] = useState(null);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#281638]">
      <header className="relative flex min-h-[84vh] items-end overflow-hidden border-b border-[#d9c9e6] bg-[#4a2f68] px-6 pb-16 pt-32 text-white md:px-16">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-[110%] w-full -translate-y-10 object-cover object-top"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <Link
            to="/"
            className="inline-flex h-11 translate-y-8 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f0a383]/45"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-[90vw] max-w-[90rem] px-0 pb-0">
        <section id="meet-the-team" className="scroll-mt-40 py-14">
          <div className="mx-auto max-w-6xl text-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#805b99]">
                01
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Meet the Team
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#665470]">
                These are the designers and developers involved in this project 
              </p>
            </div>

            <figure className="mx-auto mt-6 w-full max-w-5xl overflow-hidden border border-[#d9c9e6] bg-white p-3 shadow-[0_16px_40px_rgba(58,25,78,0.06)]">
              <img
                src={meetTeamImage}
                alt="#include Davis Student Run Clinic design team"
                className="w-full object-contain"
              />
            </figure>
          </div>
        </section>

        <section id="project-overview" className="scroll-mt-40 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#805b99]">
                02
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Project Overview
              </h2>
              <p className="mt-5 max-w-md leading-7 text-[#665470]">
                A collaborative clinic website redesign by designers and developers at #Include, a design club at UC Davis. 
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#d9c9e6] bg-[#d9c9e6] shadow-[0_16px_40px_rgba(58,25,78,0.06)] md:grid-cols-2 xl:grid-cols-3">
              {overviewItems.map((item) => (
                <article key={item.title} className="bg-white p-5 md:p-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4a2f68]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#665470]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="understanding-the-user" className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-40 border-y border-[#d9c9e6] bg-[#f0e7f6] px-[5vw] py-12">
          <div className="mx-auto max-w-[90rem]">
            <div className="grid lg:grid-cols-2">
              <div className="lg:col-start-2 lg:text-right">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#805b99]">
                  03
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  Understanding the User
                </h2>
                <p className="mt-5 leading-7 text-[#665470] lg:ml-auto">
                  This section showcases the steps we took to understand our users and guide our ideation 
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-5">
                {userUnderstandingItems.map((item) => (
                  <article key={item.title} className="border border-[#d9c9e6] bg-white p-6 shadow-[0_16px_40px_rgba(58,25,78,0.06)] md:p-7">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4a2f68]">
                      {item.title}
                    </h3>
                    {item.points ? (
                      <ul className="mt-3 space-y-2 text-[13px] leading-6 text-[#665470]">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#805b99]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-[13px] leading-6 text-[#665470]">{item.body}</p>
                    )}
                  </article>
                ))}
              </div>

              <article className="border border-[#d9c9e6] bg-white p-5 shadow-[0_16px_40px_rgba(58,25,78,0.06)] md:p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#4a2f68]">
                  Persona
                </h3>
                <figure className="mx-auto mt-4 max-w-[30rem] overflow-hidden border border-[#eadff2] bg-[#fbf7ff]">
                  <img
                    src={personaImage}
                    alt="User persona for the Student Run Clinic redesign"
                    className="h-full w-full object-contain"
                  />
                </figure>
              </article>
            </div>
          </div>
        </section>

        <section id="starting-the-design" className="scroll-mt-40 border-t border-[#d9c9e6] py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#805b99]">
            04
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Starting the Design
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-[#665470]">
            I moved from low-fidelity wireframes into more detailed mid-fidelity and high-fidelity
            screens, using each step to clarify the homepage structure.
          </p>

          <div className="mt-8 space-y-8">
            {wireframeStages.map((stage, index) => (
              <article
                key={stage.title}
                className="grid gap-6 md:items-center lg:grid-cols-2"
              >
                <div
                  className={`grid gap-4 ${stage.teamImage ? "sm:grid-cols-2 lg:col-span-2" : ""
                    } ${index % 2 === 1 && !stage.teamImage ? "lg:order-2" : ""}`}
                >
                  <WireframePreview
                    title={stage.title}
                    image={stage.image}
                    onOpen={() => setSelectedWireframe(stage)}
                  />
                  {stage.teamImage && (
                    <WireframePreview
                      title={stage.teamTitle}
                      image={stage.teamImage}
                      wide
                      onOpen={() =>
                        setSelectedWireframe({
                          title: stage.teamTitle,
                          image: stage.teamImage,
                        })
                      }
                    />
                  )}
                </div>

                <div className={`border-l-4 border-[#805b99] bg-[#fbf7ff] p-5 shadow-[0_12px_30px_rgba(58,25,78,0.05)] md:p-6 ${stage.teamImage ? "order-first lg:col-span-2" : ""
                  }`}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#805b99]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#4a2f68]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#665470]">{stage.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-[#d9c9e6] pt-8">
            <h3 className="text-2xl font-semibold text-[#4a2f68]">
              Teammate&apos;s work
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#665470]">
              Additional design artifacts from my teammates helped guide the structure, flow, and
              testing direction for the final experience.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {teammateWorkImages.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="group overflow-hidden border border-[#d9c9e6] bg-white p-3 text-left shadow-[0_16px_40px_rgba(58,25,78,0.06)] transition hover:-translate-y-1 hover:border-[#805b99] hover:shadow-[0_20px_46px_rgba(58,25,78,0.12)]"
                  onClick={() => setSelectedWireframe(item)}
                  aria-label={`Open ${item.title} larger`}
                >
                  <span className="block overflow-hidden bg-[#fbf7ff]">
                    <img
                      src={item.image}
                      alt={`${item.title} teammate design artifact`}
                      className="h-[14rem] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                    />
                  </span>
                  <span className="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#805b99]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7aae]">
                    Click to expand
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="refining-the-design" className="scroll-mt-40 border-t border-[#d9c9e6] py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="lg:col-span-2 lg:text-right">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#805b99]">
                05
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Refining the Design
              </h2>
              <p className="mt-5 max-w-4xl leading-7 text-[#665470] lg:ml-auto">
                This stage brought together multiple homepage explorations and committee page
                iterations as the interface became more polished and aligned with the clinic’s visual
                direction.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {refiningImages.map((item) => (
              <button
                key={item.id ?? item.title}
                type="button"
                className="group overflow-hidden border border-[#d9c9e6] bg-white p-3 text-left shadow-[0_16px_40px_rgba(58,25,78,0.06)] transition hover:-translate-y-1 hover:border-[#805b99] hover:shadow-[0_20px_46px_rgba(58,25,78,0.12)]"
                onClick={() => setSelectedWireframe(item)}
                aria-label={`Open ${item.title} larger`}
              >
                <span className="block overflow-hidden bg-[#fbf7ff]">
                  <img
                    src={item.image}
                    alt={`${item.title} design iteration`}
                    className="h-[15rem] w-[125%] max-w-none -translate-x-[10%] object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                </span>
                <span className="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#805b99]">
                  {item.title}
                </span>
                <span className="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7aae]">
                  Click to expand
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="presentation" className="scroll-mt-40 border-t border-[#d9c9e6] pt-14 pb-0">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#805b99]">
              06
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Presentation
            </h2>
            <p className="mt-5 leading-7 text-[#665470]">
              We presented the final design direction and shared our process with the organization
              and design team.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {presentationImages.map((item) => (
              <button
                key={item.title}
                type="button"
                className="group overflow-hidden text-left transition hover:-translate-y-1"
                onClick={() => setSelectedWireframe(item)}
                aria-label={`Open ${item.title} larger`}
              >
                <span className="block overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} for the Student Run Clinic case study`}
                    className="w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                </span>
                <span className="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#805b99]">
                  {item.title}
                </span>
                <span className="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7aae]">
                  Click to expand
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="group mt-6 block w-full overflow-hidden text-left transition hover:-translate-y-1"
            onClick={() => setSelectedWireframe(clubImage)}
            aria-label="Open club image larger"
          >
            <span className="block overflow-hidden">
              <img
                src={clubImage.image}
                alt="Club group after the Student Run Clinic presentation"
                className="h-[26rem] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </span>
          </button>
        </section>
      </main>

      {selectedWireframe && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#160720]/88 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedWireframe.title}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white text-2xl leading-none text-[#4a2f68] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#f0e7f6]"
            onClick={() => setSelectedWireframe(null)}
            aria-label="Close expanded wireframe"
          >
            ×
          </button>

          <figure className="max-h-[88vh] w-full max-w-4xl overflow-auto bg-white p-4 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <figcaption className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#4a2f68]">
              {selectedWireframe.title}
            </figcaption>
            <img
              src={selectedWireframe.image}
              alt={`${selectedWireframe.title} enlarged`}
              className="mx-auto max-h-[78vh] w-full object-contain"
            />
          </figure>
        </div>
      )}
    </div>
  );
}

function WireframePreview({ title, image, onOpen, wide = false }) {
  return (
    <button
      type="button"
      className={`group mx-auto block w-full overflow-hidden border border-[#d9c9e6] bg-white p-3 text-left shadow-[0_16px_40px_rgba(58,25,78,0.06)] transition hover:-translate-y-1 hover:border-[#805b99] hover:shadow-[0_20px_46px_rgba(58,25,78,0.12)] ${wide ? "max-w-[34rem]" : "max-w-[24rem]"
        }`}
      onClick={onOpen}
      aria-label={`Open ${title} larger`}
    >
      <span className="block overflow-hidden">
        <img
          src={image}
          alt={`${title} for the Student Run Clinic redesign`}
          className={`max-h-[22rem] max-w-none object-contain transition duration-300 group-hover:scale-[1.02] ${wide ? "w-full" : "w-[190%] -translate-x-[23.7%]"
            }`}
        />
      </span>
      <span className="mt-3 block text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#805b99]">
        {title}
      </span>
      <span className="mt-1 block text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a7aae]">
        Click to expand
      </span>
    </button>
  );
}
