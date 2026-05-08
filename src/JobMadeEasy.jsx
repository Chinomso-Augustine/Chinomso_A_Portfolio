import { Link } from "react-router-dom";

const asset = (file) => import.meta.env.BASE_URL + encodeURIComponent(file);

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

function ImageCard({ src, alt, label }) {
  return (
    <figure className="overflow-hidden border border-[#c5d6dd] bg-white p-2">
      <img src={src} alt={alt} className="h-72 w-full bg-white object-contain" />
    </figure>
  );
}

function Section({ title, text, children }) {
  return (
    <section className="border-t border-[#c9d9df] py-10">
      <h2 className="text-2xl font-semibold text-[#163845]">{title}</h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#31535f]">{text}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function JobMadeEasy() {
  return (
    <div className="min-h-screen bg-[#eaf1f4] text-[#163843]">
      <section className="border-b border-[#c7d9e0] bg-[linear-gradient(140deg,#cfe2e8_0%,#e9f3f6_52%,#f6fbfc_100%)] px-6 pb-14 pt-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6d78]">Case Study</p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-tight text-[#173a47] md:text-7xl">
            Pathfinder
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#355763]">
            Career discovery platform for college and graduate students.
          </p>
          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#31515c]">
            Pathfinder helps students discover career directions first, then find and apply to opportunities
            that align with their real experience.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Role</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">UI/UX Designer</p>
            </div>
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Project Type</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">AI + UX Case Study</p>
            </div>
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Platform</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">Web + Mobile</p>
            </div>
            <div className="border border-[#bdd2da] bg-[#f6fbfd] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#587783]">Focus</p>
              <p className="mt-1 text-sm font-medium text-[#193946]">Career Discovery + Confidence</p>
            </div>
          </div>

          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <Section
          title="Overview"
          text="Pathfinder helps undergraduate and graduate students discover career paths before applying. The platform uses AI to analyze resume content, suggest relevant roles, and recommend how to tailor resumes for those roles."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              AI role suggestions from resume content
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Job and internship matching by fit
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
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
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Unclear direction reduces application confidence
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Students miss roles they already qualify for
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Generic job boards assume users already know their path
            </div>
          </div>
        </Section>

        <Section
          title="Audience"
          text="Primary users are college undergraduates and graduate students actively seeking internships or entry-level jobs."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              College undergraduates exploring first internships
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Graduate students seeking focused career alignment
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Users who need direction before applying
            </div>
          </div>
        </Section>

        <Section
          title="Persona: Sanjith"
          text="Sanjith (20, Computer Science) started with one career goal, then changed direction after real project experience. He now needs a clear, realistic next path."
        >
          <div className="grid gap-3 sm:grid-cols-4">
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Name: Sanjith
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Age: 20
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Major: Computer Science
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Problem: No clear next career direction
            </div>
          </div>

          <div className="mt-4 border border-[#c5d6dd] bg-white px-4 py-4 text-sm text-[#32525f]">
            <p className="font-semibold text-[#1f4654]">Behaviors</p>
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
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Discovery before application
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Confidence through relevance
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Clearer long-term career vision
            </div>
          </div>
        </Section>

        <Section
          title="Design Direction"
          text="Unlike listing-first platforms, Pathfinder prioritizes career discovery first, then presents opportunities aligned to discovered direction."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Career discovery first
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
              Opportunity matching second
            </div>
            <div className="border border-[#c5d6dd] bg-white px-4 py-3 text-sm text-[#32525f]">
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
