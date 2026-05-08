import { Link } from "react-router-dom";

const heroBackgroundUrl = import.meta.env.BASE_URL + "PP.JPG";
const campusImageUrl = import.meta.env.BASE_URL + "camp.png";
const fountainImageUrl = import.meta.env.BASE_URL + encodeURIComponent("Fountain Graphic.png");
const jobMadEsayImageUrl = import.meta.env.BASE_URL + encodeURIComponent("Laptop 1.png");
const rhinoProjectImageUrl = import.meta.env.BASE_URL + "rhino-modeling.png";

const skills = [
  "Rhino 8",
  "UI/UX Design",
  "Interactive Media",
  "Graphic Design",
  "Computer Technology",
  "Prototyping",
  "Wireframing",
  "UX Research",
  "Accessibility Design",
  "User Flow Mapping",
  "React",
  "JavaScript",
  "C",
  "C++",
  "Assembly",
  "HTML/CSS",
  "Data Structures & Algorithms",
  "Figma",
  "Miro",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Lightroom",
  "Canva",
  "Notion",
];

const workCards = [
  {
    type: "project",
    title: "Learning Rhino 8",
    description:
      "My first Rhino 8 workflow from concept sketch to 3D modeling.",
    image: rhinoProjectImageUrl,
    action: "View project",
    to: "/learningrhino8",
  },
  {
    type: "project",
    title: "Accessible Water Fountain",
    description:
      "A refill station redesign focused on accessibility, sustainability, and everyday use.",
    image: fountainImageUrl,
    action: "View project",
    to: "/refill",
  },
  {
    type: "project",
    title: "Job Made Esay",
    description:
      "A career discovery platform for college and graduate students.",
    image: jobMadEsayImageUrl,
    action: "View project",
    to: "/jobmadeeasy",
  },
  {
    type: "project",
    title: "Student Service Hub",
    description:
      "A student-first platform that makes campus services easier to discover and use.",
    image: campusImageUrl,
    action: "View project",
    to: "/case1",
  },
  { type: "empty", title: "Parklet" },
  { type: "empty", title: "Design Club Client Work" },
];

export default function App() {
  const rowOneSkills = skills.filter((_, index) => index % 2 === 0);
  const rowTwoSkills = skills.filter((_, index) => index % 2 !== 0);

  return (
    <div className="min-h-screen bg-[#e9e9e9] text-[#111111]">
      <style>
        {`
          @keyframes skills-scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (prefers-reduced-motion: reduce) {
            .skills-track {
              animation: none !important;
              transform: translateX(0) !important;
            }
          }
        `}
      </style>

      <header className="fixed inset-x-0 top-0 z-30 bg-black/20 backdrop-blur-[2px]">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-end px-6 md:px-10">
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-5 text-[1rem] text-white/90 md:gap-8">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-white">
                  Resume
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Chinomso-Augustine"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chinomso-augustine-ba9a29258/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:chinomsoaugustine073@gmail.com" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pb-16">
        <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img
            src={heroBackgroundUrl}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,31,39,0.78),rgba(15,76,92,0.55),rgba(15,76,92,0.35))]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-24 text-center md:px-10">
            <h1 className="w-full text-[clamp(2.2rem,8.2vw,7rem)] leading-[0.92] font-bold tracking-tight text-white md:whitespace-nowrap">
              CHINOMSO AUGUSTINE
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/92 md:text-lg">
              I design and build thoughtful digital and physical experiences with a focus on UI/UX and Industry Design.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1280px] px-6 md:px-10">
          <div className="border border-[#d0d0d0] bg-[#eef3f6] p-6">
            <p className="text-sm text-[#808080]">Skill Set</p>
            <h2 className="mt-2 text-3xl font-semibold">Skills</h2>

            <div className="mt-5 space-y-3">
              <SkillsRow skills={rowOneSkills} duration={52} />
              <SkillsRow skills={rowTwoSkills} duration={60} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workCards.map((card) => (
              <WorkCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function SiteFooter() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio Contact - ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:chinomsoaugustine073@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="mt-12 border-t border-white/10 bg-[#171717] text-[#e8e8e8]">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-12 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-white/60">Connect</p>
          <div className="mt-5 flex flex-wrap gap-5 text-lg">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/chinomso-augustine-ba9a29258/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-white/60">Send me a message</p>
          <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={handleContactSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="h-11 border border-white/20 bg-[#222222] px-3 text-sm text-white placeholder:text-white/55 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="h-11 border border-white/20 bg-[#222222] px-3 text-sm text-white placeholder:text-white/55 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              className="h-11 border border-white/20 bg-[#222222] px-3 text-sm text-white placeholder:text-white/55 focus:outline-none sm:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="min-h-28 border border-white/20 bg-[#222222] px-3 py-3 text-sm text-white placeholder:text-white/55 focus:outline-none sm:col-span-2"
            />
            <button
              type="submit"
              className="h-11 border border-white/25 bg-white/10 px-4 text-sm font-medium text-white transition hover:bg-white/20 sm:col-span-2"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-6 py-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-10">
          <p>Created by Chinomso Augustine</p>
          <p>© 2026 Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

function SkillsRow({ skills: items, duration }) {
  const loopedSkills = [...items, ...items];

  return (
    <div className="overflow-hidden rounded-xl border border-[#c8d9e2] bg-[#f7fbfd] py-3 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset]">
      <div
        className="skills-track flex w-max gap-3 px-3"
        style={{ animation: `skills-scroll-left ${duration}s linear infinite` }}
      >
        {loopedSkills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="whitespace-nowrap rounded-full border border-[#b7d0dd] bg-[#e8f3f9] px-4 py-2 text-sm font-medium text-[#2d5668]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ card }) {
  if (card.type === "empty") {
    return (
      <article className="flex min-h-[320px] items-center justify-center border border-dashed border-[#bcbcbc] bg-[#ededed]">
        <div className="text-center">
          <p className="text-[0.78rem] uppercase tracking-[0.16em] text-[#8a8a8a]">Upcoming Project</p>
          <p className="mt-2 text-2xl font-semibold text-[#3f3f3f]">{card.title}</p>
        </div>
      </article>
    );
  }

  return (
    <Link to={card.to} className="group block border border-[#cdcdcd] bg-[#ececec]">
      <div className="relative h-[250px] overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/55" />
        <div className="absolute inset-x-5 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm leading-6 text-white">{card.description}</p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-3xl font-medium">{card.title}</h3>
        <p className="mt-8 inline-block text-xl underline underline-offset-[8px]">{card.action}</p>
      </div>
    </Link>
  );
}
