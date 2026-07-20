import { Link } from "react-router-dom";

const heroBackgroundUrl = import.meta.env.BASE_URL + "about-me/PP.JPG";
const campusImageUrl = import.meta.env.BASE_URL + "campconnect/Camp.png";
const fountainImageUrl = import.meta.env.BASE_URL + "Refil/" + encodeURIComponent("Fountain Graphic.png");
const jobMadeEasyImageUrl = import.meta.env.BASE_URL + "other-images/" + encodeURIComponent("Laptop 1.png");
const rhinoProjectImageUrl = import.meta.env.BASE_URL + "other-images/rhino-modeling.png";
const publicFileUrl = (...pathSegments) =>
  import.meta.env.BASE_URL + pathSegments.map(encodeURIComponent).join("/");
const parkletImageUrl = publicFileUrl("Parklet", "Graphics.png");

const includeClinicImageUrl = publicFileUrl("Include Design", "HeroImage.png");

const skillGroups = [
  {
    title: "Tools",
    duration: 48,
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "Lightroom",
      "Rhino 8",
      "Canva",
      "Notion",
    ],
  },
  {
    title: "UI/UX Skills",
    duration: 58,
    skills: [
      "Wireframing",
      "Persona",
      "User Journey",
      "HMW",
      "User Flow",
      "Crazy 8",
      "Accessibility",
      "Information Architecture",
      "UI/UX Design",
      "Graphic Design",
      "Prototyping",
      "UX Research",
      "User Map",
    ],
  },
  {
    title: "Coding",
    duration: 44,
    skills: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "C & C++",
      "Assembly",
    ],
  },
];

const projectCategories = [
  {
    title: "UI/UX",
    backgroundClass: "bg-[#eef5f2]",
    borderClass: "border-[#bdd2c9]",
    eyebrowClass: "text-[#2f7664]",
    headingClass: "text-[#112f3a]",
    emptyBorderClass: "border-[#8fb8aa]",
    emptyTextClass: "text-[#497e70]",
    emptyTitleClass: "text-[#234f45]",
    cardClass:
      "border-[#bdd2c9] hover:border-[#2f7664] hover:shadow-[0_14px_30px_rgba(17,47,58,0.13)]",
    projects: [
      {
        type: "project",
        title: "Student Run Clinic",
        description:
          "A collaborative redesign of a UC Davis student-run clinic website",
        image: includeClinicImageUrl,
        imageClassName: "object-cover object-top",
        action: "View project",
        to: "/student-run-clinic",
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
      {
        type: "project",
        title: "Job Made Easy Webpage",
        description:
          "A career discovery platform for college and graduate students.",
        image: jobMadeEasyImageUrl,
        action: "View project",
        to: "/jobmadeeasy",
      },
      { type: "empty", title: "Social Media Control" },
    ],
  },
  {
    title: "Physical UI/UX Work",
    backgroundClass: "bg-[#f6efe4]",
    borderClass: "border-[#d9c8ad]",
    eyebrowClass: "text-[#9b5a32]",
    headingClass: "text-[#112f3a]",
    emptyBorderClass: "border-[#c99a73]",
    emptyTextClass: "text-[#8f6345]",
    emptyTitleClass: "text-[#684022]",
    cardClass:
      "border-[#d9c8ad] hover:border-[#2f7664] hover:shadow-[0_14px_30px_rgba(17,47,58,0.12)]",
    projects: [
      {
        type: "project",
        title: "Parklet",
        description:
          "A modular streetside parklet concept with layered wood ribs, seating, and a small public workspace.",
        image: parkletImageUrl,
        action: "View project",
        to: "/parklet",
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
        title: "Learning Rhino 8",
        description:
          "A simple project exploring Rhino 8 for the first time",
        image: rhinoProjectImageUrl,
        action: "View project",
        to: "/learningrhino8",
      },
      { type: "empty", title: "Upcoming Project" },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#112f3a]">
      <main className="pb-16">
        <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden">
          <img
            src={heroBackgroundUrl}
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,47,58,0.94),rgba(17,47,58,0.78),rgba(232,93,61,0.34))]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-32 text-center md:px-10">
            <h1 className="w-full text-[clamp(2.2rem,8.2vw,7rem)] leading-[0.92] font-bold tracking-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.72)] md:whitespace-nowrap">
              CHINOMSO AUGUSTINE
            </h1>
            <p className="mx-auto mt-4 max-w-3xl rounded-2xl bg-[#112f3a]/70 px-5 py-4 text-base leading-6 text-white shadow-[0_14px_40px_rgba(17,47,58,0.32)] ring-1 ring-[#f0c7b6]/30 md:text-lg">
              I design and build thoughtful digital and physical experiences with a focus on UI/UX
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1280px] px-6 md:px-10">
          <div className="rounded-md border border-[#d9c8ad] bg-[#fffaf2] p-4 shadow-[0_12px_34px_rgba(17,47,58,0.06)] md:p-5">
            <p className="text-s font-medium uppercase tracking-[0.14em] text-[#e45d3d]">Skill Set</p>
            <h2 className="mt-1 text-3xl font-semibold">Skills</h2>

            <div className="mt-2 space-y-1">
              {skillGroups.map((group) => (
                <SkillGroup key={group.title} group={group} />
              ))}
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
    <footer className="mt-12 border-t border-white/10 bg-[#112f3a] text-[#fffaf2]">
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
              className="h-11 rounded-md border border-white/20 bg-[#173f4d] px-3 text-sm text-white placeholder:text-white/55 focus:border-[#8fb8aa] focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="h-11 rounded-md border border-white/20 bg-[#173f4d] px-3 text-sm text-white placeholder:text-white/55 focus:border-[#8fb8aa] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              className="h-11 rounded-md border border-white/20 bg-[#173f4d] px-3 text-sm text-white placeholder:text-white/55 focus:border-[#8fb8aa] focus:outline-none sm:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="min-h-28 rounded-md border border-white/20 bg-[#173f4d] px-3 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#8fb8aa] focus:outline-none sm:col-span-2"
            />
            <button
              type="submit"
              className="h-11 rounded-md border border-[#8fb8aa]/70 bg-[#e45d3d] px-4 text-sm font-medium text-white transition hover:bg-[#c94c2f] sm:col-span-2"
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
            <p className={`text-sm uppercase tracking-[0.16em] ${category.eyebrowClass}`}>Projects</p>
            <h2 id={headingId} className={`mt-1 text-3xl font-semibold ${category.headingClass}`}>
              {category.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {category.projects.map((card) => (
            <WorkCard key={card.title} card={card} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ group }) {
  return (
    <section aria-label={group.title} className="space-y-1.5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#497e70]">
        {group.title}
      </h3>
      <SkillsRow skills={group.skills} duration={group.duration} />
    </section>
  );
}

function SkillsRow({ skills: items }) {
  return (
    <div className="rounded-md border border-[#d9c8ad] bg-white px-2 py-2">
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="whitespace-nowrap rounded-sm border border-[#bdd2c9] bg-[#eef5f2] px-2.5 py-1 text-[0.72rem] font-medium text-[#112f3a] sm:px-3 sm:text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ card, category }) {
  if (card.type === "empty") {
    return (
      <article className={`flex min-h-[224px] items-center justify-center rounded-xl border border-dashed ${category.emptyBorderClass} bg-white/55`}>
        <div className="text-center">
          <p className={`text-[0.78rem] uppercase tracking-[0.16em] ${category.emptyTextClass}`}>Upcoming Project</p>
          <p className={`mt-2 text-2xl font-semibold ${category.emptyTitleClass}`}>{card.title}</p>
        </div>
      </article>
    );
  }

  const cardClassName = `group block overflow-hidden rounded-xl border bg-white shadow-[0_8px_24px_rgba(17,47,58,0.05)] transition hover:-translate-y-1 ${category.cardClass}`;
  const cardContent = (
    <>
      <div className="relative h-[210px] overflow-hidden bg-white/45 p-3">
        {card.images ? (
          <div className="grid h-full grid-cols-[1.2fr_0.8fr] grid-rows-2 gap-2 transition duration-500 group-hover:scale-[1.03]">
            {card.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${card.title} ${index + 1}`}
                className={`h-full w-full rounded-lg border border-white/70 object-cover shadow-sm ${
                  index === 0 ? "row-span-2" : ""
                }`}
              />
            ))}
          </div>
        ) : (
          <img
            src={card.image}
            alt={card.title}
            className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
              card.imageClassName || "object-contain"
            }`}
          />
        )}
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/55" />
        <div className="absolute inset-4 flex translate-y-3 items-center justify-center overflow-y-auto text-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-semibold leading-6 text-white md:text-base">{card.description}</p>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-medium">{card.title}</h3>
      </div>
    </>
  );

  if (!card.to) {
    return <article className={cardClassName}>{cardContent}</article>;
  }

  return (
    <Link to={card.to} className={cardClassName}>
      {cardContent}
    </Link>
  );
}
