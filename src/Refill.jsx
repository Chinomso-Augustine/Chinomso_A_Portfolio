import { Link } from "react-router-dom";

const asset = (file) => import.meta.env.BASE_URL + encodeURIComponent(file);

function MetaItem({ label, value }) {
  return (
    <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">{label}</p>
      <p className="mt-1 text-sm font-medium text-[#193946]">{value}</p>
    </div>
  );
}

function VisualRail({ images, layout }) {
  const prototypeGroupedLayout = images.every((image) => image.group);
  const multiImageLayout = images.length > 1;

  if (prototypeGroupedLayout) {
    const grouped = images.reduce((acc, image) => {
      if (!acc[image.group]) acc[image.group] = [];
      acc[image.group].push(image);
      return acc;
    }, {});

    return (
      <div className="space-y-4">
        {Object.entries(grouped).map(([groupName, groupImages]) => (
          <div key={groupName} className="border border-[#bfd1d8] bg-white p-3">
            <p className="mb-3 text-sm font-semibold text-[#2a5563]">{groupName}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {groupImages.map((image) => (
                <figure key={image.src} className="overflow-hidden border border-[#d3e1e6] bg-white p-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-48 w-full bg-white object-contain"
                  />
                  <figcaption className="border-t border-[#dce7eb] bg-[#f4f9fb] px-3 py-2 text-xs text-[#4f6c78]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "teamRow") {
    return (
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {images.map((image) => (
          <figure key={image.src} className="overflow-hidden border border-[#bfd1d8] bg-white p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="h-60 w-full bg-white object-contain"
            />
            <figcaption className="border-t border-[#dce7eb] bg-[#f4f9fb] px-3 py-2 text-xs text-[#4f6c78]">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className={multiImageLayout ? "grid grid-cols-1 gap-3 sm:grid-cols-2" : "space-y-3"}>
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden border border-[#bfd1d8] bg-white p-2">
          <img
            src={image.src}
            alt={image.alt}
            className={multiImageLayout ? "h-48 w-full bg-white object-contain" : "max-h-[28rem] w-full bg-white object-contain"}
          />
          <figcaption className="border-t border-[#dce7eb] bg-[#f4f9fb] px-3 py-2 text-xs text-[#4f6c78]">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function StudyBand({ title, body, bullets, images, reverse, imageLayout }) {
  if (imageLayout === "teamRow") {
    return (
      <section className="border-t border-[#c8d9e0] py-10">
        <h2 className="text-2xl font-semibold text-[#183944]">{title}</h2>
        {body ? <p className="mt-3 text-[15px] leading-7 text-[#32535f]">{body}</p> : null}
        <div className="mt-5">
          <VisualRail images={images} layout={imageLayout} />
        </div>
      </section>
    );
  }

  const contentOrder = reverse ? "md:order-2" : "md:order-1";
  const visualOrder = reverse ? "md:order-1" : "md:order-2";

  return (
    <section className="border-t border-[#c8d9e0] py-10">
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className={`md:col-span-7 ${contentOrder}`}>
          <h2 className="text-2xl font-semibold text-[#183944]">{title}</h2>
          {body ? <p className="mt-3 text-[15px] leading-7 text-[#32535f]">{body}</p> : null}
          {bullets ? (
            <ul className="mt-4 list-disc space-y-1 pl-6 text-[15px] text-[#32535f]">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={`md:col-span-5 ${visualOrder}`}>
          <VisualRail images={images} layout={imageLayout} />
        </div>
      </div>
    </section>
  );
}

export default function Refill() {
  return (
    <div className="min-h-screen bg-[#eaf1f4] text-[#163843]">
      <section className="border-b border-[#c7d9e0] bg-[linear-gradient(140deg,#cde2e7_0%,#e8f3f6_52%,#f6fbfc_100%)] px-6 pb-14 pt-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6d78]">Case Study</p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-tight text-[#173a47] md:text-7xl">
            Accessible Water Fountain
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#335460]">
            Retrofitting public fountains for inclusive, everyday hydration.
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#31515c]">
            This project redesigns existing drinking fountains with a retrofit mouthpiece that supports
            both direct drinking and easy bottle filling. The concept focuses on access, sustainability,
            and practical campus adoption.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem label="Role" value="UI/UX + Product Design" />
            <MetaItem label="Project Type" value="Physical Product Concept" />
            <MetaItem label="Scope" value="Research + Prototyping" />
            <MetaItem label="Context" value="UC Davis" />
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex h-9 items-center rounded-md border border-[#9db9c5] bg-white px-4 text-xs font-semibold text-[#215365] transition hover:bg-[#eef5f8] hover:text-[#173a47]"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <StudyBand
          title="Overview"
          body="Many campus fountains still support only one interaction pattern and are not optimized for modern reusable bottle habits. Our team explored a retrofit approach instead of full replacement, so institutions can improve access with lower implementation cost."
          images={[
            {
              src: asset("Fountain Graphic.png"),
              alt: "Accessible water fountain concept render",
              caption: "Retrofit fountain concept",
            },
            {
              src: asset("Work2.png"),
              alt: "Water fountain process frame 2",
              caption: "Prototyping",
            },
          ]}
        />

        <StudyBand
          title="Value Proposition"
          body="The concept creates value by improving utility of existing infrastructure while preserving simplicity in day-to-day use."
          bullets={[
            "Improves water access without replacing existing fountain systems.",
            "Supports both direct use and reusable bottle filling in one form.",
            "Promotes sustainability through easier refill behavior.",
          ]}
          images={[
            {
              src: asset("Work1.png"),
              alt: "Process and value framing visual 1",
              caption: "More prototyping",
            },
            {
              src: asset("Work3.png"),
              alt: "Process and value framing visual 3",
              caption: "More prototyping",
            },
          ]}
          reverse
        />

        <StudyBand
          title="How Might We"
          body="To focus ideation, we reframed the challenge into practical opportunity prompts that balanced accessibility and feasibility."
          bullets={[
            "How might we improve fountain access for more body types and use cases?",
            "How might we add bottle-fill behavior without disrupting existing use?",
            "How might we make adoption feasible for campus facilities teams?",
          ]}
          images={[
            {
              src: asset("Crazy 8.png"),
              alt: "Crazy 8 ideation sheet",
              caption: "Early ideation (Crazy 8)",
            },
          ]}
        />

        <StudyBand
          title="Design and Prototyping"
          body="We iterated through multiple prototype generations to test ergonomics, attachment strategy, and water flow behavior. Each pass reduced complexity while improving confidence in real-world installation."
          bullets={[
            "Prototype 1 explored core geometry and compatibility.",
            "Prototype 2 improved fit and interaction comfort.",
            "Prototype 3 refined manufacturability and visual clarity.",
          ]}
          images={[
            {
              src: asset("Proto1.png"),
              alt: "Prototype 1 - image 1",
              caption: "Prototype 1 (Image 1)",
              group: "Prototype 1",
            },
            {
              src: asset("Proto1.2.png"),
              alt: "Prototype 1 - image 2",
              caption: "Prototype 1 (Image 2)",
              group: "Prototype 1",
            },
            {
              src: asset("Proto2.png"),
              alt: "Prototype 2 - image 1",
              caption: "Prototype 2 (Image 1)",
              group: "Prototype 2",
            },
            {
              src: asset("Proto2.2.png"),
              alt: "Prototype 2 - image 2",
              caption: "Prototype 2 (Image 2)",
              group: "Prototype 2",
            },
            {
              src: asset("Proto3.png"),
              alt: "Prototype 3 - image 1",
              caption: "Prototype 3 (Image 1)",
              group: "Prototype 3",
            },
            {
              src: asset("Proto3.2.png"),
              alt: "Prototype 3 - image 2",
              caption: "Prototype 3 (Image 2)",
              group: "Prototype 3",
            },
          ]}
          reverse
        />

        <StudyBand
          title="Validation and Next Step"
          body="The project progressed from course work to conference-level presentation and received positive faculty feedback for campus relevance. The next step is implementation planning with stakeholders and funding alignment."
          images={[
            {
              src: asset("Pres1.png"),
              alt: "Presentation board at research conference",
              caption: "Research conference presentation",
            },
            {
              src: asset("press2.JPG"),
              alt: "Presentation moment 2",
              caption: "Presentation snapshot",
            },
            {
              src: asset("Press3.png"),
              alt: "Presentation moment 3",
              caption: "Project showcase visual",
            },
            {
              src: asset("press4.png"),
              alt: "Team presenting project outcome",
              caption: "Project communication and outreach",
            },
          ]}
        />

        <StudyBand
          title="Project Team"
          images={[
            {
              src: asset("Chinomso.png"),
              alt: "Team member Chinomso",
              caption: "Chinomso Augustine",
            },
            {
              src: asset("Devin.png"),
              alt: "Team member Devin",
              caption: "Devin Bangayan",
            },
            {
              src: asset("Marilyn.png"),
              alt: "Team member Marilyn",
              caption: "Marilyn Bangayan",
            },
            {
              src: asset("Crow.JPG.jpg"),
              alt: "Team member Crow",
              caption: "Crow Raya",
            },
          ]}
          imageLayout="teamRow"
        />
      </main>
    </div>
  );
}
