import { Link } from "react-router-dom";

const overviewImageUrl = import.meta.env.BASE_URL + "campconnect/Camp.png";
const valuePropImageUrl = import.meta.env.BASE_URL + "campconnect/VP.png";
const serviceScreenImageUrl = import.meta.env.BASE_URL + "campconnect/" + encodeURIComponent("Services .png");
const providerScreenImageUrl = import.meta.env.BASE_URL + "campconnect/Providers.png";

const googleColors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];

const projectTags = ["UI/UX Design", "Product Strategy", "Interaction Design"];

const metrics = [
  { label: "Primary goal", value: "Find help faster", color: "#4285F4" },
  { label: "Core user", value: "UC Davis students", color: "#0F9D58" },
  { label: "Experience", value: "Search → compare → book", color: "#F4B400" },
];

function ColorWord({ text }) {
  return (
    <span aria-label={text} className="inline-flex flex-wrap">
      {text.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} style={{ color: googleColors[index % googleColors.length] }}>
          {letter}
        </span>
      ))}
    </span>
  );
}

function ColorDots() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {googleColors.map((color) => (
        <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

function SectionVisual({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {images.map((image) => (
        <figure
          key={image.src}
          className={`overflow-hidden rounded-[28px] border border-[#dadce0] bg-white shadow-[0_18px_45px_rgba(60,64,67,0.12)] ${
            image.featured ? "lg:-mt-8 lg:shadow-[0_28px_80px_rgba(60,64,67,0.18)]" : ""
          }`}
        >
          <div className="bg-[#f8fafd] p-5">
            <div className={`${image.featured ? "h-[18rem] overflow-hidden" : ""} rounded-2xl`}>
              <img
                src={image.src}
                alt={image.alt}
                className={
                  image.featured
                    ? "w-full -translate-y-8 rounded-2xl"
                    : "h-72 w-full rounded-2xl object-contain"
                }
              />
            </div>
          </div>
          <figcaption className="border-t border-[#e8eaed] bg-white px-5 py-3 text-xs font-medium text-[#5f6368]">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function DetailSection({ title, body, bullets, images }) {
  return (
    <section className="border-t border-[#e8eaed] py-12">
      <div className={images?.length ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:items-start" : ""}>
        <div>
          <ColorDots />
          <h2 className="font-sans mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#202124]">{title}</h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[#5f6368]">{body}</p>
          {bullets ? (
            <ul className="mt-6 grid gap-3 text-[15px] text-[#3c4043]">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-[#e8eaed] bg-white p-4 shadow-sm">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1a73e8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <SectionVisual images={images} />
      </div>
    </section>
  );
}

export default function Case1() {
  return (
    <div className="min-h-screen bg-white text-[#202124]">
      <section className="relative overflow-hidden border-b border-[#e8eaed] bg-white px-6 pb-16 pt-20 md:px-16">
        <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-[#e8f0fe]" />
        <div className="pointer-events-none absolute -left-24 bottom-6 h-64 w-64 rounded-full bg-[#fef7e0]" />

        <div className="relative mx-auto max-w-6xl">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#dadce0] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5f6368] shadow-sm">
              <ColorDots />
              Case Study
            </div>
            <h1 className="font-sans mt-6 text-5xl leading-[0.95] font-semibold tracking-[-0.06em] md:text-7xl">
              <ColorWord text="Campus" />
              <span className="text-[#202124]">Connect</span>
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-medium tracking-[-0.03em] text-[#3c4043]">
              Student services, simplified into one trusted search-and-book hub.
            </p>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#5f6368]">
              Rebuilt with Google-inspired design thinking: generous white space, soft borders, clear hierarchy,
              and color used only to guide attention.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#3c4043]">
              {projectTags.map((tag, index) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dadce0] bg-white px-4 py-2 shadow-sm"
                  style={{ boxShadow: `inset 0 -2px 0 ${googleColors[index % googleColors.length]}` }}
                >
                  {tag}
                </span>
              ))}
              <a
                href="https://project-campusconnect.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#dadce0] bg-white px-4 py-2 font-semibold text-[#1a73e8] shadow-sm transition hover:bg-[#f8fafd]"
                style={{ boxShadow: "inset 0 -2px 0 #0F9D58" }}
              >
                Explore Project Live
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="inline-flex h-11 items-center rounded-full bg-[#1a73e8] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1558b0]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main id="case-details" className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <section className="grid gap-4 py-10 md:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-[28px] border border-[#dadce0] bg-white p-6 shadow-sm">
              <span className="block h-1.5 w-12 rounded-full" style={{ backgroundColor: metric.color }} />
              <p className="mt-5 text-sm font-medium text-[#5f6368]">{metric.label}</p>
              <h2 className="font-sans mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#202124]">
                {metric.value}
              </h2>
            </article>
          ))}
        </section>

        <DetailSection
          title="Overview"
          body="CampusConnect helps students find and book peer services without relying on scattered chats and word-of-mouth. The product is designed to reduce search time and increase trust in student providers."
          images={[
            {
              src: overviewImageUrl,
              alt: "CampusConnect home screen overview",
              caption: "Overview screen",
              featured: true,
            },
          ]}
        />

        <DetailSection
          title="Value Proposition"
          body="The value is straightforward: lower cost, better access, and clearer trust signals."
          bullets={[
            "Affordable options aligned with student budgets.",
            "Visibility for student providers to grow demand.",
            "Trust signals that speed up booking decisions.",
          ]}
          images={[
            {
              src: valuePropImageUrl,
              alt: "CampusConnect value proposition visual",
              caption: "Value proposition",
            },
          ]}
        />

        <DetailSection
          title="Core Problem"
          body="The challenge is not availability of services; it is discoverability and confidence. Students need one place where options are easy to compare and credible enough to book."
          bullets={[
            "Service information is fragmented across informal channels.",
            "Off-campus alternatives are often priced too high.",
            "Providers have limited ways to reach new clients consistently.",
          ]}
        />

        <DetailSection
          title="How Might We"
          body="To guide ideation, I reframed the problem into focused opportunity prompts that kept design decisions user-centered and outcome-oriented."
          bullets={[
            "How might we help students find trusted services quickly on campus?",
            "How might we make peer providers feel credible before first contact?",
            "How might we shorten the path from discovery to confirmed booking?",
          ]}
        />

        <DetailSection
          title="Solution Direction"
          body="I focused the product around a fast path from search to booking: structured categories, transparent pricing, and profile-level trust indicators. This keeps the experience simple while solving the key friction points."
        />

        <DetailSection
          title="Key Screens"
          body="The experience is centered on three high-leverage screens that support the core journey from discovery to action."
          bullets={[
            "Home screen for category-based discovery.",
            "Listings screen for quick comparison.",
            "Provider profile for trust and booking.",
          ]}
          images={[
            {
              src: serviceScreenImageUrl,
              alt: "CampusConnect service listing screen",
              caption: "Service screen",
            },
            {
              src: providerScreenImageUrl,
              alt: "CampusConnect provider profile screen",
              caption: "Provider screen",
            },
          ]}
        />

        <section className="border-t border-[#e8eaed] py-12">
          <div className="rounded-[32px] border border-[#dadce0] bg-[#f8fafd] p-6 md:p-8">
            <ColorDots />
            <h2 className="font-sans mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#202124]">
              Visual System
            </h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-8 text-[#5f6368]">
              The redesign leans on a simple Google-like system: white surfaces, soft gray dividers,
              rounded cards, direct copy, and primary actions in blue.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-4">
              {[
                ["#4285F4", "Trust / action"],
                ["#DB4437", "Urgency / alerts"],
                ["#F4B400", "Highlights"],
                ["#0F9D58", "Success / availability"],
              ].map(([color, label]) => (
                <div key={color} className="rounded-3xl border border-[#dadce0] bg-white p-4">
                  <span className="block h-12 rounded-2xl" style={{ backgroundColor: color }} />
                  <p className="mt-3 text-sm font-medium text-[#3c4043]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
