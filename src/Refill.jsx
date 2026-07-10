import { Link } from "react-router-dom";

const asset = (file) => import.meta.env.BASE_URL + "Refil/" + encodeURIComponent(file);

function MetaItem({ label, value }) {
  return (
    <div className="border border-[#b8dfe3] bg-[#f5fcfd] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.14em] text-[#0f6975]">{label}</p>
      <p className="mt-1 text-sm font-medium text-[#073f4a]">{value}</p>
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
          <div key={groupName} className="border border-[#b8dfe3] bg-white p-3">
            <p className="mb-3 text-sm font-semibold text-[#0f6975]">{groupName}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {groupImages.map((image) => (
                <figure key={image.src} className="overflow-hidden border border-[#cce9ec] bg-white p-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-full bg-white object-contain"
                  />
                  <figcaption className="border-t border-[#cce9ec] bg-[#f5fcfd] px-3 py-2 text-[11px] text-[#507982]">
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
          <figure key={image.src} className="overflow-hidden border border-[#b8dfe3] bg-white p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="h-72 w-full bg-white object-contain"
            />
            <figcaption className="border-t border-[#cce9ec] bg-[#f5fcfd] px-3 py-2 text-[11px] text-[#507982]">
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
        <figure key={image.src} className="overflow-hidden border border-[#b8dfe3] bg-white p-3">
          <img
            src={image.src}
            alt={image.alt}
            className={multiImageLayout ? "h-72 w-full bg-white object-contain" : "max-h-[36rem] w-full bg-white object-contain"}
          />
          <figcaption className="border-t border-[#cce9ec] bg-[#f5fcfd] px-3 py-2 text-[11px] text-[#507982]">
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
      <section className="border-t border-[#b8dfe3] py-10">
        <h2 className="text-2xl font-semibold text-[#073f4a]">{title}</h2>
        {body ? <p className="mt-3 max-w-3xl text-sm leading-6 text-[#3e6870]">{body}</p> : null}
        <div className="mt-5">
          <VisualRail images={images} layout={imageLayout} />
        </div>
      </section>
    );
  }

  const contentOrder = reverse ? "md:order-2" : "md:order-1";
  const visualOrder = reverse ? "md:order-1" : "md:order-2";

  return (
    <section className="border-t border-[#b8dfe3] py-10">
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className={`md:col-span-4 ${contentOrder}`}>
          <h2 className="text-2xl font-semibold text-[#073f4a]">{title}</h2>
          {body ? <p className="mt-3 text-sm leading-6 text-[#3e6870]">{body}</p> : null}
          {bullets ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-[#3e6870]">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={`md:col-span-8 ${visualOrder}`}>
          <VisualRail images={images} layout={imageLayout} />
        </div>
      </div>
    </section>
  );
}

export default function Refill() {
  return (
    <div className="min-h-screen bg-[#edf9fb] text-[#073f4a]">
      <section className="border-b border-[#b8dfe3] bg-[linear-gradient(140deg,#073f4a_0%,#0f6975_50%,#edf9fb_100%)] text-white px-6 pb-14 pt-32 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8eeaf0]">Case Study</p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-tight text-white md:text-7xl">
            Accessible Water Fountain
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#f5fcfd]">
            Retrofitting public fountains for inclusive, everyday hydration.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-[#ddf5f7]">
            A retrofit mouthpiece that makes existing fountains easier to use for direct drinking and reusable bottle filling.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem label="Role" value="UI/UX + Product Design" />
            <MetaItem label="Project Type" value="Physical Product Concept" />
            <MetaItem label="Scope" value="Research + Prototyping" />
            <MetaItem label="Context" value="UC Davis" />
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f0a383]/45"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <StudyBand
          title="Overview"
          body="A retrofit concept for making existing campus fountains more accessible, useful, and affordable to upgrade."
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
          body="The design improves everyday hydration without requiring full fountain replacement."
          bullets={[
            "Fits existing fountain systems.",
            "Supports drinking and bottle filling.",
            "Encourages reusable bottle habits.",
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
          body="We focused ideation around access, refill behavior, and campus feasibility."
          bullets={[
            "Improve access for more users.",
            "Add refill behavior cleanly.",
            "Keep adoption realistic.",
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
          body="Three prototype rounds tested form, fit, water flow, and installation clarity."
          bullets={[
            "Prototype 1: basic geometry.",
            "Prototype 2: fit and comfort.",
            "Prototype 3: cleaner final form.",
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
          body="Presented at a research conference and received strong feedback for campus relevance."
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
