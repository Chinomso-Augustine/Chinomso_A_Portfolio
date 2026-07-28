import { Link } from "react-router-dom";

const asset = (file) => import.meta.env.BASE_URL + "other-images/" + encodeURIComponent(file);

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

function ImageCard({ src, alt, label }) {
  return (
    <figure className="overflow-hidden border border-[#c7d6e7] bg-white p-2 shadow-[0_14px_36px_rgba(22,54,67,0.08)]">
      <img src={src} alt={alt} className="h-72 w-full bg-white object-contain" />
      <figcaption className="border-t border-[#d8e4f1] bg-[#f7fbff] px-3 py-2 text-[11px] text-[#4f6780]">
        {label}
      </figcaption>
    </figure>
  );
}

function Section({ title, text, children }) {
  return (
    <section className="border-t border-[#c7d6e7] py-10">
      <h2 className="text-2xl font-semibold text-[#183b63]">{title}</h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#415a73]">{text}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function JobMadeEasy() {
  return (
    <div className="min-h-screen bg-[#eef4fb] text-[#183b63]">
      <section className="border-b border-[#c7d6e7] bg-[linear-gradient(140deg,#183b63_0%,#315d86_50%,#eef4fb_100%)] px-5 pb-14 pt-32 text-white sm:px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ffd28a]">Case Study</p>
          <h1 className="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            Pathfinder
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#f7fbff]">
            Career discovery platform for college and graduate students.
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#e5eff8]">
            Pathfinder helps students discover career directions first, then find and apply to opportunities
            that align with their real experience.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#ffd28a]">Role</p>
              <p className="mt-1 text-sm font-medium text-white">UI/UX Designer</p>
            </div>
            <div className="border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#ffd28a]">Project Type</p>
              <p className="mt-1 text-sm font-medium text-white">AI + UX Case Study</p>
            </div>
            <div className="border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#ffd28a]">Platform</p>
              <p className="mt-1 text-sm font-medium text-white">Web + Mobile</p>
            </div>
            <div className="border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#ffd28a]">Focus</p>
              <p className="mt-1 text-sm font-medium text-white">Career Discovery + Confidence</p>
            </div>
          </div>

          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
        <Section
          title="Overview"
          text="Pathfinder helps undergraduate and graduate students discover career paths before applying. The platform uses AI to analyze resume content, suggest relevant roles, and recommend how to tailor resumes for those roles."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              AI role suggestions from resume content
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Job and internship matching by fit
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Tailored resume guidance per role
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ImageCard
              src={asset("Laptop 1.png")}
              alt="Pathfinder homepage on laptop"
              label="Homepage (Laptop 1)"
            />
            <ImageCard
              src={asset("mobile2.png")}
              alt="Pathfinder homepage on mobile"
              label="Homepage (Mobile 2)"
            />
          </div>
        </Section>

        <Section
          title="Problem"
          text="Many students delay applications because they are unsure which roles fit their background."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Unclear direction reduces application confidence
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Students miss roles they already qualify for
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Generic job boards assume users already know their path
            </div>
          </div>
        </Section>

        <Section
          title="Audience"
          text="Primary users are college undergraduates and graduate students actively seeking internships or entry-level jobs."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              College undergraduates exploring first internships
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Graduate students seeking focused career alignment
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Users who need direction before applying
            </div>
          </div>
        </Section>

        <Section
          title="Persona: Sanjith"
          text="Sanjith (20, Computer Science) started with one career goal, then changed direction after real project experience. He now needs a clear, realistic next path."
        >
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Name: Sanjith
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Age: 20
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Major: Computer Science
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Problem: No clear next career direction
            </div>
          </div>

          <div className="mt-4 border border-[#c7d6e7] bg-white px-4 py-4 text-sm text-[#415a73]">
            <p className="font-semibold text-[#183b63]">Behaviors</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Hesitates to apply for internships because he is unsure of his career goals.</li>
              <li>Avoids career fairs because they feel unhelpful without clear focus.</li>
              <li>Overthinks his options and delays decisions.</li>
            </ul>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ImageCard
              src={asset("Laptop2.png")}
              alt="Pathfinder dashboard on laptop"
              label="Body / Dashboard (Laptop 2)"
            />
            <ImageCard
              src={asset("mobile1.png")}
              alt="Pathfinder dashboard on mobile"
              label="Body / Dashboard (Mobile 1)"
            />
          </div>
        </Section>

        <Section
          title="Hypothesis"
          text="If students are shown career paths based on their actual experience, they will apply faster and with more confidence."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Discovery before application
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Confidence through relevance
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Clearer long-term career vision
            </div>
          </div>
        </Section>

        <Section
          title="Design Direction"
          text="Unlike listing-first platforms, Pathfinder prioritizes career discovery first, then presents opportunities aligned to discovered direction."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Career discovery first
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Opportunity matching second
            </div>
            <div className="border border-[#c7d6e7] bg-white px-4 py-3 text-sm text-[#415a73]">
              Suggests roles users may not have considered
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ImageCard
              src={asset("Laptop3.png")}
              alt="Pathfinder additional screen 1 on laptop"
              label="Additional Screen (Laptop 3)"
            />
            <ImageCard
              src={asset("lapt4.png")}
              alt="Pathfinder additional screen 2 on laptop"
              label="Additional Screen (Laptop 4)"
            />
          </div>
        </Section>
      </main>
    </div>
  );
}
