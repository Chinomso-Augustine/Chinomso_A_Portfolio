const aboutImageUrl = (file) => import.meta.env.BASE_URL + "about-me/" + encodeURIComponent(file);
const aboutPhotoUrl = (file) => import.meta.env.BASE_URL + "about-me/Photos/" + encodeURIComponent(file);

const profileImageUrl = aboutPhotoUrl("PP.JPG");
const includeImageOneUrl = aboutImageUrl("Include1.JPG");
const includeImageTwoUrl = aboutImageUrl("Include2.JPG");
const nsbeImageUrl = aboutImageUrl("NSBE.JPG");
const colorstackImageUrl = aboutImageUrl("Colorstack.JPG");

const photographySlides = [
  { image: aboutPhotoUrl("Sanjith1.JPG"), alt: "Outdoor graduation portrait" },
  { image: aboutPhotoUrl("Sanjith2.JPG"), alt: "Outdoor graduation portrait" },
  { image: aboutPhotoUrl("Sanjith3.JPG"), alt: "Outdoor graduation portrait" },
  
  { image: aboutPhotoUrl("Baseball2.JPEG"), alt: "Baseball sports photography" },
  { image: aboutPhotoUrl("DSC02840.JPG"), alt: "Event photography moment" },
  { image: aboutPhotoUrl("Jovani1.JPG"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Jovania2.JPG"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Rachel1.JPG"), alt: "Outdoor portrait photography" },
  { image: aboutPhotoUrl("Rachel2.JPG"), alt: "Outdoor portrait photography" },
  { image: aboutPhotoUrl("Raj1.JPG"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Saj1.JPG"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Saj2.JPG"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Saj3.jpg"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Saj4.JPEG"), alt: "Portrait photography session" },
  { image: aboutPhotoUrl("Sanjith4.JPG"), alt: "Outdoor graduation portrait" },
  { image: aboutPhotoUrl("Sanjith5.JPG"), alt: "Outdoor graduation portrait" },
  { image: aboutPhotoUrl("baseball1.JPEG"), alt: "Baseball sports photography" },
];

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

function PhotographyCarousel() {
  const loopingSlides = [...photographySlides, ...photographySlides];

  return (
    <section className="pt-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-[#153846]">Photography Work</h2>
      </div>

      <div className="overflow-hidden">
        <div className="photography-marquee-track flex w-max gap-4">
          {loopingSlides.map((slide, index) => (
            <article
              key={`${slide.image}-${index}`}
              className="group w-52 shrink-0 overflow-hidden border border-[#bfd0d7] bg-white transition duration-300 hover:-translate-y-2 hover:border-[#153846] hover:shadow-xl sm:w-72 md:w-80"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#eaf1f4] text-[#163843]">
      <section className="border-b border-[#c6d7de] bg-[linear-gradient(135deg,#d5e6ec_0%,#e9f3f6_52%,#f6fbfc_100%)] px-5 pb-12 pt-32 sm:px-6 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4f6f7b]">About</p>
            <h1 className="mt-3 text-4xl leading-[0.95] font-semibold tracking-tight text-[#173a47] sm:text-5xl md:text-7xl">
              Chinomso Augustine
            </h1>
          </div>

          <div className="overflow-hidden border border-[#c7d8de] bg-white p-2">
            <img src={profileImageUrl} alt="Chinomso Augustine portrait" className="h-72 w-full object-cover object-center" />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-6 px-5 py-10 sm:px-6 md:px-16">
        <section>
          <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#2f515d]">
            <p>
              I am a UI/UX Designer and UI Engineer studying at the
              <strong> University of California, Davis</strong>, majoring in Design with a minor in Computer Science.
              I focus on designing intuitive, user-centered applications that prioritize clarity, usability,
              and purpose. I am currently seeking internship opportunities and am open to relocation.
            </p>
          </div>
        </section>

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

        <PhotographyCarousel />
      </main>
    </div>
  );
}
