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

export const inProgressSection = {
  heading: "In Progress",
  subtitle: "Exploring ideas, designing solutions, and building better experiences.",
};

// Add a Figma screenshot path with a(...) when a project preview is ready.
export const inProgressProjects = [
  {
    title: "Social Media Balance App",
    category: "UX/UI Design · Digital Wellbeing",
    description: "Designing an experience that helps students maintain meaningful social connections while reducing distractions and excessive social media use.",
    status: "In Progress",
    image: null,
    previewInitials: "SB",
    previewStyle: "social",
  },
  {
    title: "Dog Booking App",
    category: "UX/UI Design · Mobile App",
    description: "Designing a mobile booking experience that makes it easier for dog owners to discover, schedule, and manage dog-related services.",
    status: "In Progress",
    image: null,
    previewInitials: "DB",
    previewStyle: "dog",
  },
  {
    title: "Pickleball Dashboard",
    category: "UX/UI Design · Sports & Recreation",
    description: "Exploring how a dashboard can help pickleball players discover courts, coordinate games, and find opportunities to play with others.",
    status: "In Progress",
    image: null,
    previewInitials: "PD",
    previewStyle: "pickleball",
  },
];

export const modelSection = {
  resetLabel: "Reset view",
  loadingMessage: "Loading model…",
  instructions: "Drag in any direction to rotate 360° · Scroll or pinch to zoom",
};

export const beyondSection = {
  heading: "Beyond the Screen",
  subtitle: "Exploring ideas through physical materials, 3D modeling, and hands-on experimentation.",
};

export const beyondProjects = [
  {
    title: "Box",
    category: "Rhino 3D · Interactive Model",
    description: "Explore the Box model from Rhino in the browser, then download the source file to continue working with it.",
    model: {
      title: "Box",
      filename: "Box copy.3dm",
      // Hide the oversized construction plane in the web preview.
      hiddenObjects: ["83cfcc56-69f7-46e5-8fe8-b537d8120e8e"],
    },
    action: "Download .3dm model",
  },
  {
    title: "Step Stool",
    category: "Rhino 3D · Interactive Model",
    description: "Explore the Step Stool model from Rhino in the browser, then download the source file to continue working with it.",
    model: {
      title: "Step Stool",
      filename: "newStep.3dm",
    },
    action: "Download .3dm model",
  },
  {
    title: "Cardboard Shoe Prototypes",
    category: "Cardboard · Footwear",
    description: "A hands-on series of cardboard footwear forms exploring silhouette, fit, and construction through quick iteration.",
    image: a("Notebook", "Shoe Prototype.png"),
    imageFit: "contain",
    href: a("Notebook", "shoelace.pdf"),
    action: "View shoe prototype notes",
  },
];

export const processHeading = "MY Process";

export const processSteps = [
  {
    title: "Observe",
    explanation: `I document real-world experiences through observation and photography, paying attention to people’s behaviors, challenges, and interactions.`,
  },
  {
    title: "Understand",
    explanation: `I explore the problem from the user’s perspective through interviews. I translate what I learn into personas and a “How Might We” question that guides my design.`,
  },
  {
    title: "Abstract",
    explanation: `I draw inspiration from the environment and translate its colors, shapes, and patterns into design elements. 
    For my pickleball dashboard, this means exploring how courts, paddles, and balls can inform the visual language of the interface.`,
  },
  {
    title: "Prototype",
    explanation: `I organize information and turn ideas into wireframes and prototypes, moving from low to high 
    fidelity to explore how the design looks and works.`,
  },
  {
    title: "Refine",
    explanation: "I test the design with users, identify what works and what needs improvement, and refine it based on their feedback.",
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

