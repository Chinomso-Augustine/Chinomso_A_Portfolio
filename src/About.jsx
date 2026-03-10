import { Link } from "react-router-dom";

const profileImageUrl = import.meta.env.BASE_URL + "PP.JPG";
const sonyKitImageUrl = import.meta.env.BASE_URL + "Sony.PNG";
const includeImageOneUrl = import.meta.env.BASE_URL + "Include1.JPG";
const includeImageTwoUrl = import.meta.env.BASE_URL + "Include2.JPG";
const nsbeImageUrl = import.meta.env.BASE_URL + "NSBE.JPG";
const colorstackImageUrl = import.meta.env.BASE_URL + "Colorstack.JPG";
const backLinkClass = "text-sm font-semibold text-red-600 transition hover:text-red-700";

function InfoCard({ title, children, className = "" }) {
  return (
    <section className={`rounded-2xl border border-blue-200 bg-white/85 p-6 shadow-sm shadow-blue-100/50 ${className}`}>
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 text-[15px] leading-7 text-blue-950/90">{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 px-6 py-12 text-slate-900 md:px-20 md:py-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <Link to="/" className={backLinkClass}>
          ← Back to Home
        </Link>

        <header className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-100/70 shadow-sm shadow-blue-100/60">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/45 to-transparent" />

          <div className="relative z-10 flex min-h-[23rem] items-end px-6 py-7 md:px-10 md:py-10">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/85">Who I Am</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">About Me</h1>
              <p className="mt-4 text-sm leading-7 text-blue-100/90 md:text-base">
                I design with empathy, build with intention, and focus on experiences that are clear,
                useful, and human.
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="Hi There">
            <p>
              I am <strong>Chinomso Augustine</strong>, a UI/UX Designer and UI Engineer studying at the
              <strong> University of California, Davis</strong>, majoring in Design with a minor in Computer Science.
              I focus on designing intuitive, user-centered applications that prioritize clarity, usability,
              and purpose. I am currently seeking internship opportunities and am open to relocation.
            </p>
          </InfoCard>

          <InfoCard title="Clubs" className="md:col-span-2">
            <div className="space-y-3">
              <p>
                <strong>#Include:</strong> At UC Davis, I am a member of <strong>#Include</strong>, where I collaborate
                with students from diverse backgrounds on client-based projects. I also serve as one of the club
                photographers, capturing event and board photos.
              </p>
              <p>
                <strong>NSBE:</strong> I am an active member of the
                <strong> National Society of Black Engineers (NSBE)</strong>, where I support communication efforts
                and participate in workshops and events focused on professional development and networking.
              </p>
              <p>
                <strong>ColorStack:</strong> I was the Project Manager for <strong>ColorStack</strong>, a nonprofit
                organization dedicated to increasing the representation of Black and Latinx students in STEM. I hosted
                morning work sessions with my cohort at a coffee shop to collaborate on projects.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
                <img
                  src={includeImageOneUrl}
                  alt="#Include club activity"
                  className="h-48 w-full object-cover"
                />
                <p className="px-3 py-2 text-xs font-medium text-blue-900/85">#Include</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
                <img
                  src={includeImageTwoUrl}
                  alt="#Include team and board moments"
                  className="h-48 w-full object-cover"
                />
                <p className="px-3 py-2 text-xs font-medium text-blue-900/85">#Include Team</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
                <img
                  src={nsbeImageUrl}
                  alt="NSBE event"
                  className="h-48 w-full object-cover"
                />
                <p className="px-3 py-2 text-xs font-medium text-blue-900/85">NSBE</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
                <img
                  src={colorstackImageUrl}
                  alt="ColorStack collaboration session"
                  className="h-48 w-full object-cover"
                />
                <p className="px-3 py-2 text-xs font-medium text-blue-900/85">ColorStack</p>
              </div>
            </div>
          </InfoCard>

        </div>

        <InfoCard title="Photography / Videography" className="overflow-hidden">
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
            <div>
              <p>
                Outside of school, I work as a <strong>photographer and videographer</strong>. My work includes
                graduation, professional, club, event, and sports photography. I currently shoot with Sony
                a7 III and Sony a7R II cameras, then edit using Adobe Lightroom and Premiere Pro.
              </p>
              <p className="mt-4">
                Photography has grown into a side business and has sharpened my eye for detail,
                composition, and visual storytelling.
                To view my work, visit my{" "}
                <a
                  href="https://www.instagram.com/chino_clickss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline-offset-4 hover:underline"
                >
                  Instagram portfolio
                </a>
                .
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-blue-200 p-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sonyKitImageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/55 via-blue-900/35 to-sky-700/35" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Sony Kit</p>

               

                <div>
                  <p className="text-xl font-semibold tracking-tight text-white">SONY</p>
                  <p className="mt-1 text-sm text-blue-100">a7 III · a7R II</p>
                </div>
              </div>
            </div>
          </div>
        </InfoCard>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="Athletics and Fitness">
            <p>
              I am a former <strong>marathon runner</strong>, captain of my high school soccer and
              <strong> cross-country</strong> teams, and I competed in track and field (100m, 200m,
              4x100m, and 4x400m relays). These experiences taught me discipline, teamwork,
              and perseverance, and they still shape how I approach both design and life.
            </p>
          </InfoCard>

          <InfoCard title="Healthcare Experience">
            <p>
              In addition to my design and research work, I am a
              <strong> Certified Nursing Assistant (CNA)</strong>. I completed a three-month nursing program
              and passed two state exams to obtain my certification. This work has deeply influenced
              my approach to empathy, responsibility, and human-centered problem-solving.
            </p>
          </InfoCard>
        </div>

        <Link to="/" className={backLinkClass}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
