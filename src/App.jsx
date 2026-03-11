import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const profileImageUrl = import.meta.env.BASE_URL + "PP.JPG";
const fountainImageUrl = import.meta.env.BASE_URL + encodeURIComponent("Fountain Graphic.png");

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-l from-white via-blue-50 to-blue-100 text-slate-900 px-6 md:px-20 py-16">
      <MotionBackground />

      <div className="relative z-10">
        <Hero />

        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <div className="md:col-span-1 space-y-10">
            <Education />
            <Clubs />
            <Contact />
          </div>

          <div className="md:col-span-2 space-y-10">
            <Projects />
            <GroupProject />
            <Tools />
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}

function MotionBackground() {
  const shouldReduceMotion = useReducedMotion();

  const floatingTransition = {
    duration: 20,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  };

  const floatingProps = shouldReduceMotion
    ? {}
    : {
        animate: {
          x: [0, 90, -45, 0],
          y: [0, 55, 110, 0],
          scale: [1, 1.18, 0.88, 1],
        },
      };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-300/55 blur-3xl"
        {...floatingProps}
        transition={floatingTransition}
      />

      <motion.div
        className="absolute right-[-12rem] top-[18%] h-[34rem] w-[34rem] rounded-full bg-blue-400/45 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -130, -35, 0], y: [0, -70, 60, 0], scale: [1, 0.82, 1.15, 1] }
        }
        transition={{ ...floatingTransition, duration: 20 }}
      />

      <motion.div
        className="absolute bottom-[-14rem] left-[24%] h-[28rem] w-[28rem] rounded-full bg-indigo-300/45 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 70, -30, 0], y: [0, -65, -20, 0], scale: [1, 1.16, 0.9, 1] }
        }
        transition={{ ...floatingTransition, duration: 18 }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 16%, rgba(34,211,238,0.4), transparent 42%), radial-gradient(circle at 88% 72%, rgba(59,130,246,0.34), transparent 44%)",
        }}
        animate={shouldReduceMotion ? undefined : { opacity: [0.42, 1, 0.42] }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35"
        style={{
          background:
            "conic-gradient(from 90deg, rgba(14,165,233,0.32), rgba(37,99,235,0.08), rgba(99,102,241,0.3), rgba(14,165,233,0.32))",
          filter: "blur(24px)",
        }}
        animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      />

      <motion.svg
        className="absolute left-1/2 top-[-20rem] h-[56rem] w-[56rem] -translate-x-1/2 opacity-55"
        viewBox="0 0 600 600"
        fill="none"
        animate={shouldReduceMotion ? undefined : { rotate: [0, 360] }}
        transition={{
          duration: 48,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <circle cx="300" cy="300" r="250" stroke="rgba(37, 99, 235, 0.3)" strokeWidth="1.3" />
        <circle cx="300" cy="300" r="190" stroke="rgba(14, 165, 233, 0.24)" strokeWidth="1.1" />
        <circle cx="300" cy="300" r="130" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="min-h-[62vh] md:min-h-[46vh] flex flex-col justify-center">
      <h1 className="text-4xl font-semibold mb-10 text-center">
        Chinomso Augustine
      </h1>

      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-10 items-center md:items-center justify-center md:justify-between">
        <div className="w-72 h-72 bg-blue-100 rounded-xl flex items-center justify-center text-blue-300 md:-ml-10">
          <img
            src={profileImageUrl}
            alt="Chinomso Augustine"
            className="w-72 h-72 object-cover rounded-xl shadow-sm"

          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Hi there,
          </h2>

          <p className="text-blue-950/85 max-w-xl">
            I’m <span className="font-semibold">Chinomso Augustine</span>, a 3rd
            year UI/UX Designer and UI Engineer at UC Davis.
            What’s on your mind? Let’s figmatize it.
          </p>

          <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
            <Link
              to="/About"
              className="px-4 py-2 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              About Me
            </Link>

            <Button text="Resume" to="/resume" />
            <Button
              text="LinkedIn"
              href="https://www.linkedin.com/in/chinomso-augustine-ba9a29258/"
            />
            <Button
              text="Github"
              href="https://github.com/Chinomso-Augustine"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */

function Education() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Education</h3>

      <div className="bg-blue-50 rounded-lg px-4 py-3 text-sm mb-6">
        Design Major & Computer Science Minor
      </div>

      <h4 className="font-semibold mb-3">Skill Set</h4>
      <ul className="space-y-2 text-sm text-blue-950/85 mb-6">
        <li>UI/UX Design</li>
        <li>Interactive Media</li>
        <li>Graphic Design & Computer Technology</li>
        <li>Prototyping</li>
        <li>Wireframing</li>
        <li>UX Research</li>
        <li>Forms & Color</li>
        <li>Design Drawing</li>
        <li>Programming — JavaScript, React, HTML, CSS, C, C++, Assembly</li>
        <li>Data Structures & Algorithms</li>
        <li>Discrete Math</li>
        <li>Calculus</li>
        <li>Professional Photography & Videography</li>
      </ul>

      <h4 className="font-semibold mb-3">Certifications</h4>
      <ul className="space-y-2 text-sm text-blue-950/85">
        <li>UI/UX Wireframing — SkillUp</li>
        <li>Intro to Front End Development — Meta</li>
        <li>Programming with JavaScript — Meta</li>
        <li>Object-Oriented Programming in C++</li>
      </ul>
    </Card>
  );
}

/* ---------------- TOOLS ---------------- */

function Tools() {
  const tools = [
    "Figma",
    "Miro",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Lightroom",
    "Canva",
    "Canvas",
    "Sony a7iii & a7rii",
    "Notion",
  ];

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">Tools</h3>

      <div className="grid md:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white border border-blue-200 rounded-lg p-4">
            <p className="font-medium">{tool}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
/* ---------------- SERVICES ---------------- */

function Services() {
  const services = [
    "Website Designing",
    "Graphic Designing",
    "Photography",
    "Social Media Management",
    "Content Creation",
    "UI/UX Design",
    "Prototyping & Wireframing",
    "UX Research",
  ];

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-2">
        My Services
      </h3>

      <p className="text-sm text-blue-900/80 mb-6">
        Checkout services offered by me
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 px-4 py-3 rounded-lg text-sm hover:bg-blue-100 transition"
          >
            {service}
          </div>
        ))}
      </div>
    </Card>
  );
}


/* ---------------- PROJECTS ---------------- */

function Projects() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">
        Case Study and Projects
      </h3>

      <Link
        to="/case1"
        className="block h-44 rounded-lg overflow-hidden relative group ring-1 ring-violet-300/60"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-fuchsia-100 to-indigo-200 transition duration-300 group-hover:scale-105" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 [background-size:220px_120px] [background-image:linear-gradient(120deg,rgba(79,70,229,0.18)_0%,rgba(139,92,246,0.08)_48%,rgba(244,114,182,0.14)_100%)]"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <p className="text-[2.15rem] leading-none tracking-tight font-semibold text-indigo-900/85">
            CampusConnect
          </p>
          <p className="text-[2.15rem] leading-none tracking-tight font-semibold text-fuchsia-700/35 -mt-1">
            CampusConnect
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-fuchsia-800/30 to-indigo-950/70 group-hover:from-violet-900/25 group-hover:to-indigo-950/80 transition" />
        <div className="absolute inset-0 flex items-end">
          <p className="text-white text-base font-medium px-4 py-3">CampusConnect</p>
        </div>
      </Link>

      <p className="mt-4 text-sm leading-relaxed text-blue-950/85">
        I designed CampusConnect to help students discover services and resources in
        one place instead of searching across multiple platforms. I focused on simplifying
        navigation and improving accessibility so students can take action quickly.{" "}
        <strong>Click to learn more.</strong>
      </p>
    </Card>
  );
}

function GroupProject() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">
        Group Project
      </h3>

      <Link
        to="/refill"
        className="block h-44 rounded-lg overflow-hidden relative group ring-1 ring-sky-300/70"
      >
        <img
          src={fountainImageUrl}
          alt="Re-Fill group project preview"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/15 via-blue-700/30 to-cyan-950/70 group-hover:from-sky-900/25 group-hover:to-cyan-950/80 transition" />
        <div className="absolute inset-0 flex items-end">
          <p className="text-white text-base font-medium px-4 py-3">Re/Fill</p>
        </div>
      </Link>

      <p className="mt-4 text-sm leading-relaxed text-blue-950/85">
        In Re/Fill, I collaborated with my team to design a retrofit fountain solution so students can refill
        bottles more easily and sustainably on campus. I contributed from ideation to physical construction and
        visual storytelling to make the concept practical and easy to understand.{" "}
        <strong>Click to learn more.</strong>
      </p>
    </Card>
  );
}

/* ---------------- CLUBS ---------------- */

function Clubs() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Clubs</h3>

      <ul className="space-y-3 text-sm text-blue-950/85">
        <li>#Include — Design Cohort & Social Media Manager</li>
        <li>ColorStack — Former Project Manager</li>
        <li>NSBE — Outreach Coordinator</li>
      </ul>
    </Card>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-6">
        Get in touch
      </h3>

      <div className="space-y-4">
        <a
          href="mailto:chinomsoaugustine073@gmail.com"
          className="block w-full bg-purple-200 hover:bg-blue-100 transition px-4 py-3 rounded-lg text-lg text-center text-black"
        >
          Email
        </a>

      </div>
    </Card>
  );
}

/* ---------------- REUSABLE COMPONENTS ---------------- */

function Card({ children }) {
  return (
    <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm shadow-blue-100/40">
      {children}
    </div>
  );
}

function Button({ text, href, to }) {
  const classes = "px-4 py-2 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition text-sm";

  if (to) {
    return (
      <Link to={to} className={classes}>
        {text}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={classes}>
      {text}
    </button>
  );
}
