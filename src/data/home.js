import { a, img } from "../shared.js";

// Edit homepage text, images, and lists here. Appearance belongs in styles.css.
export const hero = {
  eyebrow: "Chinomso Augustine - UI/UX Designer and UI Engineer",
  heading: "Designing thoughtful digital and physical experiences.",
  introduction: "Focusing on designing intuitive, user-centered products that prioritize usability and purpose.",
  image: img.profile,
  imageAlt: "Chinomso Augustine portrait",
  scrollPrompt: "Scroll to explore",
  links: [
    { label: "View Projects", href: "#/", variant: "primary" },
    { label: "About Me", href: "#/about", variant: "secondary" },
  ],
};

export const projectStats = [
  { value: "4", label: "Projects" },
  { value: "2", label: "Digital" },
  { value: "2", label: "Physical" },
];

export const projects = [
  {
    tags: ["Industrial", "Fabrication", "Rhino"],
    title: "Parklet Design",
    description: "A modular streetside study space built through sketching, Rhino modeling, fabrication, and physical prototyping.",
    image: img.parklet,
    href: "#/parklet",
  },
  {
    tags: ["Product", "Accessibility", "Campus"],
    title: "Accessible Water Fountain",
    description: "A retrofit fountain mouthpiece designed around inclusive hydration, reusable bottles, and campus feasibility.",
    image: img.fountain,
    href: "#/refill",
  },
  {
    tags: ["Healthcare", "UI/UX", "Team"],
    title: "Student Run Clinic",
    description: "A collaborative redesign of a UC Davis student-run clinic website with research, wireframes, and high-fidelity homepage work.",
    image: img.clinicHero,
    href: "#/student-run-clinic",
    imagePosition: "top",
  },
  {
    tags: ["AI & Robotics", "Front-End Development", "Startup"],
    title: "Neuron Edge AI",
    description: "Translating an unstructured company brief into a clear and scalable website",
    image: img.neuronHomepage,
    href: "#/neuron-edge-ai",
    imagePosition: "top",
  },
];

export const modelSection = {
  heading: "3D Models",
  resetLabel: "Reset view",
  loadingMessage: "Loading model…",
  instructions: "Drag in any direction to rotate 360° · Scroll or pinch to zoom",
};

// Model files live in public/Models. Add another entry to display another model.
export const models = [
  {
    title: "Box",
    filename: "Box copy.3dm",
    // Hide the oversized construction plane in the web preview.
    hiddenObjects: ["83cfcc56-69f7-46e5-8fe8-b537d8120e8e"],
  },
];

export const processHeading = "MY Process";

export const processSteps = [
  {
    title: "Observe",
    explanation: `I use this phase to document what I notice happening.
    I like carrying my camera to capture these experiences. I ask myself, "What do I observe happening?"`,
  },
  {
    title: "Understand",
    explanation: `I start by exploring the issue from the user's point of view. I conduct
    interviews that inform my persona and "How Might We" question. I ask myself, "What is the users' main concern?"`,
  },
  {
    title: "Abstract",
    explanation: `Now that I understand the issue, I focus on what can inspire my design. When working on a digital design
    project, such as a pickleball dashboard that informs users about court capacity, I ask myself, "What colors are the balls
    and the court? What are the shapes of the court and the paddles? What patterns do I notice?
    How can I translate these into components or elements for my design?"`,
  },
  {
    title: "Prototype",
    explanation: `In this phase, I create wireframes, develop the information architecture,
    and build prototypes ranging from low to high fidelity.`,
  },
  {
    title: "Refine",
    explanation: "In this final step, I test my design and refine it.",
  },
];

export const skillSection = {
  label: "Skills",
  heading: "Design, tools, and code working together.",
};

export const skills = [
  {
    title: "Design",
    items: ["Wireframing", "UX Research", "Personas", "User Flow", "Prototyping", "Accessibility"],
  },
  {
    title: "Tools",
    items: ["Rhino 8", "AutoCAD", "Figma", "Illustrator", "Photoshop", "Lightroom"],
  },
  {
    title: "Code",
    items: ["HTML", "Tailwind CSS", "JavaScript", "C", "C++"],
  },
];

export const notebookSection = {
  label: "Notebook",
  heading: "Mini projects and process",
  description: "Mini documentation of rough idea, sketches, and practice projects",
};

export const notebookEntries = [
  {
    href: a("Notebook", "Joints.pdf"),
    description: "Wood joint practice",
    width: 534,
    height: 904,
  },
  {
    href: a("Notebook", "shoelace.pdf"),
    description: "Shoe lace ideas",
    width: 792,
    height: 1051,
  },
];
