import { Link } from "react-router-dom";

const profileImageUrl = import.meta.env.BASE_URL + "PP.JPG";
const sonyKitImageUrl = import.meta.env.BASE_URL + "Sony.PNG";
const includeImageOneUrl = import.meta.env.BASE_URL + "Include1.JPG";
const includeImageTwoUrl = import.meta.env.BASE_URL + "Include2.JPG";
const nsbeImageUrl = import.meta.env.BASE_URL + "NSBE.JPG";
const colorstackImageUrl = import.meta.env.BASE_URL + "Colorstack.JPG";

function Panel({ title, children, className = "" }) {
  return (
    <section className={`border border-[#c9d8de] bg-white p-6 ${className}`}>
      <h2 className="text-2xl font-semibold text-[#153846]">{title}</h2>
      <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#2f515d]">{children}</div>
    </section>
  );
}

function ClubCard({ title, text, image, alt }) {
  return (
    <article className="border border-[#cddce2] bg-white">
      <img src={image} alt={alt} className="h-52 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#183d4c]">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-[#31545f]">{text}</p>
      </div>
    </article>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#eaf1f4] text-[#163843]">
      <section className="border-b border-[#c6d7de] bg-[linear-gradient(135deg,#d5e6ec_0%,#e9f3f6_52%,#f6fbfc_100%)] px-6 pb-12 pt-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6f7b]">About</p>
            <h1 className="mt-3 text-5xl leading-[0.95] font-semibold tracking-tight text-[#173a47] md:text-7xl">
              Chinomso Augustine
            </h1>
          
            <Link
              to="/"
              className="mt-7 inline-flex h-9 items-center rounded-md border border-[#9db9c5] bg-white px-4 text-xs font-semibold text-[#1f4f5f] transition hover:bg-[#eef5f8] hover:text-[#173a47]"
            >
              Back to Home
            </Link>
          </div>

          <div className="overflow-hidden border border-[#c7d8de] bg-white p-2">
            <img src={profileImageUrl} alt="Chinomso Augustine portrait" className="h-72 w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-6 px-6 py-10 md:px-16">
        <Panel title="Who I Am">
          <p>
            I am <strong>Chinomso Augustine</strong>, a UI/UX Designer and UI Engineer studying at the
            <strong> University of California, Davis</strong>, majoring in Design with a minor in Computer Science.
            I focus on designing intuitive, user-centered applications that prioritize clarity, usability,
            and purpose.
          </p>
          <p>
            I am currently seeking internship opportunities and am open to relocation.
          </p>
        </Panel>

        <Panel title="Community and Leadership">
          <p>
            I stay involved in student communities where design, collaboration, and representation are central.
            These experiences strengthened how I communicate ideas and work across different teams.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ClubCard
              title="#Include"
              text="At UC Davis, I collaborate on client-based projects and serve as one of the club photographers for events and board activities."
              image={includeImageOneUrl}
              alt="#Include club activity"
            />
            <ClubCard
              title="NSBE"
              text="As an active member of the National Society of Black Engineers, I support communication efforts and participate in development and networking events."
              image={nsbeImageUrl}
              alt="NSBE event"
            />
            <ClubCard
              title="ColorStack"
              text="As former Project Manager, I hosted work sessions with my cohort and led collaboration for projects supporting Black and Latinx students in STEM."
              image={colorstackImageUrl}
              alt="ColorStack collaboration session"
            />
          </div>

          <div className="mt-4 overflow-hidden border border-[#cddce2] bg-white">
            <img src={includeImageTwoUrl} alt="#Include team and board moments" className="h-56 w-full object-cover" />
          </div>
        </Panel>

        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="Photography / Videography">
            <p>
              Outside of school, I work as a <strong>photographer and videographer</strong>. My work includes
              graduation, professional, club, event, and sports photography.
            </p>
            <p>
              I currently shoot with Sony a7 III and Sony a7R II cameras, then edit using Adobe Lightroom and
              Premiere Pro. This work sharpened my eye for composition and visual storytelling.
            </p>
            <p>
              To view my work, visit my{" "}
              <a
                href="https://www.instagram.com/chino_clickss/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#215365] underline underline-offset-4 hover:text-[#173a47]"
              >
                Instagram portfolio
              </a>
              .
            </p>
          </Panel>

          <section className="overflow-hidden border border-[#c9d8de] bg-white">
            <img src={sonyKitImageUrl} alt="Sony camera gear" className="h-full min-h-[18rem] w-full object-cover" />
          </section>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Panel title="Athletics and Fitness">
            <p>
              I am a former <strong>marathon runner</strong>, captain of my high school soccer and
              <strong> cross-country</strong> teams, and I competed in track and field (100m, 200m,
              4x100m, and 4x400m relays).
            </p>
            <p>
              These experiences taught me discipline, teamwork, and perseverance, and they still shape
              how I approach design and daily life.
            </p>
          </Panel>

          <Panel title="Healthcare Experience">
            <p>
              I am a <strong>Certified Nursing Assistant (CNA)</strong>. I completed a three-month nursing
              program and passed two state exams to obtain my certification.
            </p>
            <p>
              Healthcare work strengthened my empathy, responsibility, and human-centered approach to
              problem-solving.
            </p>
          </Panel>
        </div>
      </main>
    </div>
  );
}
