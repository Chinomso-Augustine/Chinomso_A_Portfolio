import { Link } from "react-router-dom";

const overviewImageUrl = import.meta.env.BASE_URL + "Home.png";
const valuePropImageUrl = import.meta.env.BASE_URL + "VP.png";
const serviceScreenImageUrl = import.meta.env.BASE_URL + "Service.png";
const providerScreenImageUrl = import.meta.env.BASE_URL + "Provider.png";

function SectionVisual({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3">
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-lg border border-[#c9b5ec] bg-white">
          <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
          <figcaption className="border-t border-[#eadfff] bg-[#f8f3ff] px-3 py-2 text-xs text-[#5f4296]">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function DetailSection({ title, body, bullets, images }) {
  return (
    <section className="border-t border-[#d8caef] py-10">
      <div className={images?.length ? "grid gap-6 md:grid-cols-[1fr_420px] md:items-start" : ""}>
        <div>
          <h2 className="text-2xl font-semibold text-[#2e145c]">{title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#3f2c6b]">{body}</p>
          {bullets ? (
            <ul className="mt-4 list-disc space-y-1 pl-6 text-[15px] text-[#3f2c6b]">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
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
    <div className="min-h-screen bg-[#efe8fb] text-[#241149]">
      <section className="relative overflow-hidden border-b border-[#d9cbef] bg-[linear-gradient(130deg,#d5c1f5_0%,#ede5fb_42%,#f7f2ff_100%)] px-6 pb-14 pt-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d4aa6]">Case Study</p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-tight text-[#2b1558] md:text-7xl">
            CampusConnect
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#4d397a]">
            Student services. One trusted hub.
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#3f2c6b]">
            Inspired by the clean narrative style of Ammunition project pages, this case study highlights
            only what matters most: problem clarity, value, and the core product experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#4d397a]">
            <span className="border border-[#ccb9eb] bg-[#f8f4ff] px-3 py-1">UI/UX Design</span>
            <span className="border border-[#ccb9eb] bg-[#f8f4ff] px-3 py-1">Product Strategy</span>
            <span className="border border-[#ccb9eb] bg-[#f8f4ff] px-3 py-1">Interaction Design</span>
            <span className="border border-[#ccb9eb] bg-[#f8f4ff] px-3 py-1">Design Systems</span>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex h-9 items-center rounded-md border border-[#bba6df] bg-white px-4 text-xs font-semibold text-[#5e36aa] transition hover:bg-[#f5efff] hover:text-[#2b1558]"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <DetailSection
          title="Overview"
          body="CampusConnect helps students find and book peer services without relying on scattered chats and word-of-mouth. The product is designed to reduce search time and increase trust in student providers."
          images={[
            {
              src: overviewImageUrl,
              alt: "CampusConnect home screen overview",
              caption: "Overview screen",
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
          title="Research Snapshot"
          body="Research emphasized a practical behavior pattern: students prioritize confidence and speed over feature complexity."
          bullets={[
            "Clear pricing reduces hesitation.",
            "Peer credibility increases conversion confidence.",
            "Fast, clear booking steps improve completion.",
          ]}
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
      </main>
    </div>
  );
}
