import { a, html, img } from "../shared.js";

const photos = [
  "Soccer1.JPG",
  "Soccer2.JPG",
  "Soccer3.JPG",
  "product1.JPG",
  "product2.JPG",
  "product3.jpg",
  "Grad1.JPG",
  "Grad2.JPG",
  "Grad4.JPG",
  "Food1.PNG",
  "Food2.PNG",
  "Food3.PNG",
];

function photoLabel(file) {
  if (file.startsWith("Soccer")) return "Soccer photography";
  if (file.startsWith("product")) return "Product photography";
  if (file.startsWith("Grad")) return "Graduation photography";
  if (file.startsWith("Food")) return "Food photography";
  return "Photography work";
}

function clubCard(title, image, alt, text) {
  return html`<article class="overflow-hidden border border-[#26485a] bg-[#0f2a3a]">
    <img src="${image}" alt="${alt}" class="h-48 w-full object-cover" />
    <div class="p-4">
      <h3 class="text-center text-lg font-semibold text-[#f4f8fb]">${title}</h3>
      <p class="mt-2 text-center text-xs leading-5 text-[#c4d3dc]">${text}</p>
    </div>
  </article>`;
}

export function aboutPage() {
  return html`
    <div class="min-h-screen bg-[#071827] text-[#f4f8fb]">
      <section class="mx-auto grid max-w-[1180px] gap-10 px-5 pb-14 pt-32 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <figure class="overflow-hidden">
          <img src="${img.aboutPortrait}" alt="Chinomso Augustine with a camera" class="h-auto w-full object-contain" />
        </figure>
        <div class="text-[19px] leading-9 text-[#c4d3dc]">
          <p>
            I'm Chinomso, a product design student at UC Davis going into my 4th year. I have over two years of experience through clubs and projects.
          </p>
          <p class="mt-7">
            Outside of academics, I keep myself busy by joining clubs. <br>
            <br>Beyond clubs, I am a photographer shooting sports, graduations, weddings, restaurants, food, and products. I am that guy you always see everywhere: at soccer or basketball games taking pictures, at the UC Davis gym working out, at the College of Engineering IT office as an IT assistant, or from working at the dining hall for over a year. I am that face you see everywhere.
         
            </p>
        </div>
      </section>

      <main class="mx-auto max-w-[1180px] space-y-10 px-5 pb-16 sm:px-6 md:px-8">
    
        <section>
          <h2 class="text-4xl font-semibold tracking-tight text-[#f4f8fb]">Clubs</h2>
          <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            ${clubCard("#Include", img.include2, "#Include group picture", "I collaborate on client-based design projects and support club photography.")}
            ${clubCard("NSBE", img.nsbe, "NSBE event", "As an Outreach Coordinator, I handle communication within the organization.")}
            ${clubCard("ColorStack", img.colorstack, "ColorStack collaboration session", "As project manager, I lead a group project.")}
            ${clubCard("IDSA", img.idsa, "IDSA club activity", "I explore industrial design through campus events and company tours.")}
          </div>
        </section>

        <section class="border-t border-[#26485a] pt-10">
          <div class="mb-5">
            <h2 class="mt-3 text-4xl font-semibold tracking-tight text-[#f4f8fb]">Sample Photos</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            ${photos
              .map((file) => {
                const src = a("about-me", "Photos", file);
                const label = photoLabel(file);
                return `<button type="button" data-preview-style="plain" data-preview-title="${label}" data-preview-src="${src}" data-preview-alt="${label}" class="group overflow-hidden border border-[#26485a] bg-[#0f2a3a] text-left transition duration-300 hover:-translate-y-1 hover:border-[#4d7a93]"><img src="${src}" alt="${label}" class="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-80" /></button>`;
              })
              .join("")}
          </div>
          <p class="mt-6 text-center text-lg font-semibold leading-7 text-[#f4f8fb]">Feel free to explore more of my work on Instagram at chino_clickss.</p>
        </section>
      </main>
    </div>
  `;
}
