import { Link } from "react-router-dom";

const heroBackgroundUrl = import.meta.env.BASE_URL + "PP.JPG";
const campusImageUrl = import.meta.env.BASE_URL + "campconnect/Camp.png";
const fountainImageUrl = import.meta.env.BASE_URL + encodeURIComponent("Fountain Graphic.png");
const jobMadeEasyImageUrl = import.meta.env.BASE_URL + encodeURIComponent("Laptop 1.png");
const rhinoProjectImageUrl = import.meta.env.BASE_URL + "rhino-modeling.png";
const publicFileUrl = (...pathSegments) =>
  import.meta.env.BASE_URL + pathSegments.map(encodeURIComponent).join("/");

const typographyImageUrl = publicFileUrl("DI", "typography-project.jpg");
const digitalIllustrationsImageUrl = publicFileUrl("DI", "digital-illustrations.jpg");
const eventPosterImageUrl = publicFileUrl("DI", "event-poster.jpg");
const zineImageUrl = publicFileUrl("DI", "zine.jpg");
const designProcessImageUrl = publicFileUrl("journey-map-1.jpg");

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

const projectCategories = [
  {
    title: "UI/UX",
    backgroundClass: "bg-[#eef4f7]",
    borderClass: "border-[#cfdde3]",
    projects: [
      {
        type: "project",
        title: "Student Service Hub",
        description:
          "A student-first platform that makes campus services easier to discover and use.",
        image: campusImageUrl,
        action: "View project",
        to: "/case1",
      },
      {
        type: "project",
        title: "Job Made Easy Webpage",
        description:
          "A career discovery platform for college and graduate students.",
        image: jobMadeEasyImageUrl,
        action: "View project",
        to: "/jobmadeeasy",
      },
      {
        type: "project",
        title: "Design Process",
        description:
          "Some branches of design work from different classes.",
        image: designProcessImageUrl,
        action: "View process",
        to: "/designprocess",
      },
      { type: "empty", title: "Client Website Rebuild" },
      { type: "empty", title: "Social Media Control" },
    ],
  },
  {
    title: "Industry Design",
    backgroundClass: "bg-[#f3f0e8]",
    borderClass: "border-[#ddd4c2]",
    projects: [
      {
        type: "project",
        title: "Learning Rhino 8",
        description:
          "A simple project exploring Rhino 8 for the first time",
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
      { type: "empty", title: "Parklet" },
      { type: "empty", title: "Final Parklet Project" },
    ],
  },
  {
    title: "Digital Illustrations / Graphic Design",
    backgroundClass: "bg-[#f4eef7]",
    borderClass: "border-[#ddcde6]",
    projects: [
      {
        type: "project",
        title: "Typography Project",
        description:
          "A type-focused poster study exploring hierarchy, scale, and visual contrast.",
        image: typographyImageUrl,
        action: "View project",
        to: "/document/typography",
      },
      {
        type: "project",
        title: "Digital Illustrations",
        description:
          "A multi-page illustration series exploring color systems, form, and everyday objects.",
        image: digitalIllustrationsImageUrl,
        action: "View project",
        to: "/document/digital-illustrations",
      },
      {
        type: "project",
        title: "Event Poster",
        description:
          "A bold event poster composition using sports imagery, layered color, and scale.",
        image: eventPosterImageUrl,
        action: "View project",
        to: "/document/event-poster",
      },
      {
        type: "project",
        title: "Zine",
        description:
          "A visual zine exploring time pressure, workflow, and collage-based storytelling.",
        image: zineImageUrl,
        action: "View project",
        to: "/document/zine",
      },
      { type: "empty", title: "Soccer" },
    ],
  },
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

      <main className="pb-16">
        <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img
            src={heroBackgroundUrl}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,18,24,0.9),rgba(9,50,62,0.74),rgba(9,50,62,0.6))]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-32 text-center md:px-10">
            <p className="mb-4 inline-flex rounded-full border border-white/30 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Home
            </p>
            <h1 className="w-full text-[clamp(2.2rem,8.2vw,7rem)] leading-[0.92] font-bold tracking-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.72)] md:whitespace-nowrap">
              CHINOMSO AUGUSTINE
            </h1>
            <p className="mx-auto mt-5 max-w-2xl rounded-2xl bg-black/35 px-5 py-4 text-base leading-7 text-white shadow-[0_14px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/15 md:text-lg">
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

          <div className="mt-8 space-y-12">
            {projectCategories.map((category) => (
              <WorkSection key={category.title} category={category} />
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

function WorkSection({ category }) {
  const headingId = `${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <div className={`rounded-2xl border ${category.borderClass} ${category.backgroundClass} p-5 md:p-6`}>
        <div className={`mb-5 flex items-end justify-between border-b ${category.borderClass} pb-3`}>
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-[#7a7a7a]">Projects</p>
            <h2 id={headingId} className="mt-1 text-3xl font-semibold">
              {category.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {category.projects.map((card) => (
            <WorkCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
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
      <article className="flex min-h-[224px] items-center justify-center rounded-xl border border-dashed border-[#bcbcbc] bg-white/45">
        <div className="text-center">
          <p className="text-[0.78rem] uppercase tracking-[0.16em] text-[#8a8a8a]">Upcoming Project</p>
          <p className="mt-2 text-2xl font-semibold text-[#3f3f3f]">{card.title}</p>
        </div>
      </article>
    );
  }

  const cardClassName = "group block overflow-hidden rounded-xl border border-[#cdcdcd] bg-white/55";
  const cardContent = (
    <>
      <div className="relative h-[210px] overflow-hidden bg-white/45 p-3">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/55" />
        <div className="absolute inset-x-5 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm leading-6 text-white">{card.description}</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-medium">{card.title}</h3>
        <p className="mt-5 inline-block text-base underline underline-offset-[6px]">{card.action}</p>
      </div>
    </>
  );

  return (
    <Link to={card.to} className={cardClassName}>
      {cardContent}
    </Link>
  );
}
