import { Link } from "react-router-dom";

export default function Refill() {
  const asset = (file) => import.meta.env.BASE_URL + encodeURIComponent(file);

  const team = [
    { name: "Devin Bangayan", role: "Design", image: "Devin.png" },
    { name: "Marilyn Bangayan", role: "Design", image: "Marilyn.png" },
    { name: "Chinomso Augustine", role: "3rd Year Design & Computer Science Minor", image: "Chinomso.png" },
    { name: "Crow Raya", role: "3rd Year Design Major", image: "Crow.JPG.jpg" },
  ];
  const prototypeSets = [
    { title: "Prototype #1", images: ["Proto1.png", "Proto1.2.png"] },
    { title: "Prototype #2", images: ["Proto2.png", "Proto2.2.png"] },
    { title: "Prototype #3", images: ["Proto3.png", "Proto3.2.png"] },
  ];
  const pressImages = ["Pres1.png", "press2.JPG", "Press3.png", "press4.png"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-slate-900">
      {/* HERO */}
      <div className="bg-[#c8e3e8] py-14 px-6 md:px-20 border-b border-blue-200/70">
        <div className="mb-6">
          <Link to="/" className="text-sm text-sky-900/90 hover:text-sky-950 transition">
            Back to Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-sky-700 font-semibold text-lg">Upgrade existing drinking fountains with:</p>
            <h1 className="mt-2 text-6xl md:text-7xl font-bold text-[#c84a2f]">Re/Fill</h1>
            <div className="mt-6 font-semibold text-sky-700 text-2xl md:text-4xl leading-tight">
              <p>Accessible</p>
              <p>Sustainable</p>
              <p>Renewable</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-sky-200 bg-white/40">
            <img
              src={asset("Fountain Graphic.png")}
              alt="Re/Fill fountain concept"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 py-14 space-y-10">
        {/* OUR STORY */}
        <section className="bg-white border border-blue-200 rounded-xl p-6 md:p-8 shadow-sm shadow-blue-100/40">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

          <p className="mb-4">
            Our journey with <span className="font-semibold">Re/Fill</span> began in UC Davis
            Design 01, where we were tasked with collaboratively designing a spatial,
            communication, or physical product that engages with social systems, facilitates
            person-to-person interaction, serves a specific audience, and is feasible to build.
            We approached this challenge with the goal of creating an impactful solution that
            promotes human rights.
          </p>

          <p className="mb-4">
            Recognizing that water accessibility is closely tied to social equity and public health,
            our research focused on mitigating the effects of limited access to drinking water in
            the greater Sacramento metropolitan area, beginning at UC Davis.
          </p>

          <p className="mb-4">
            Our team designed a retrofit mouthpiece for existing water fountains that
            preserves the traditional drinking function while adding a spout for bottle filling.
            This dual functionality expands access to clean water, encourages reusable bottles, and
            supports healthier hydration practices within the community.
          </p>

          <p>
            By utilizing existing filtered water infrastructure and prioritizing sustainability, our
            design revitalizes current fountain systems rather than replacing them. This approach
            offers a cost-effective, actionable solution that increases access to safe public water
            without relying on private commerce, reinforcing water as a public right rather than a
            commodity.
          </p>

          <p className="mt-4">
            ReFill has evolved from a class project into a research conference presentation. After
            receiving strong positive feedback from faculty during our final presentation in DES
            101, we submitted the project to the UC Davis Research Conference in 2025. Once
            accepted, we significantly refined ReFill and received further encouragement from
            faculty to move toward campus implementation. ReFill is currently under evaluation for
            a $20,000 scholarship application to support implementation at UC Davis.
          </p>
        </section>

        {/* TEAM */}
        <section className="bg-white border border-blue-200 rounded-xl p-6 md:p-8 shadow-sm shadow-blue-100/40">
          <h2 className="text-3xl font-semibold mb-10">Meet the Team</h2>

          <div className="grid md:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <img
                  src={asset(member.image)}
                  alt={member.name}
                  className="h-52 w-full rounded-lg mb-4 object-cover object-center"
                />

                <p className="font-semibold">{member.name}</p>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INFOGRAPHICS */}
        <section className="bg-white border border-blue-200 rounded-xl p-6 md:p-8 shadow-sm shadow-blue-100/40">
          <h2 className="text-3xl font-semibold mb-8">Infographics of our Process</h2>

          <h3 className="text-xl font-medium mb-4">Crazy 8</h3>

          <div className="rounded-lg overflow-hidden border border-neutral-200 mb-8">
            <img
              src={asset("Crazy 8.png")}
              alt="Crazy 8 ideation sketch"
              className="w-full max-w-[980px] mx-auto h-auto object-contain"
            />
          </div>

          <h2 className="text-xl font-medium mb-4">Process</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["Work1.png", "Work2.png", "Work3.png"].map((file) => (
              <img
                key={file}
                src={asset(file)}
                alt={`Process frame ${file.replace(".png", "")}`}
                className="h-[22rem] w-full rounded-lg border border-neutral-200 object-cover"
              />
            ))}
          </div>
        </section>

        {/* PROTOTYPING */}
        <section className="bg-white border border-blue-200 rounded-xl p-6 md:p-8 shadow-sm shadow-blue-100/40">
          <h2 className="text-3xl font-semibold mb-10">Prototyping</h2>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {prototypeSets.map((set) => (
              <div
                key={set.title}
                className="bg-[#e6f3f6] border border-blue-200 rounded-xl p-4 text-center mx-auto w-full max-w-sm"
              >
                <h3 className="text-xl mb-4 text-sky-800 font-semibold">{set.title}</h3>
                <div className="grid grid-cols-1 gap-3 justify-items-center">
                  {set.images.map((file) => (
                    <img
                      key={file}
                      src={asset(file)}
                      alt={`${set.title} frame`}
                      className="h-[12.5rem] w-full rounded-md border border-blue-100 bg-white object-contain"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRESENTATION */}
        <section className="bg-white border border-blue-200 rounded-xl p-6 md:p-5 shadow-sm shadow-blue-100/40">
          <h2 className="text-3xl font-semibold mb-8">Presentation</h2>

          <div className="grid md:grid-cols-2 gap-7 justify-items-center max-w-6xl mx-auto">
            {pressImages.map((file) => (
              <img
                key={file}
                src={asset(file)}
                alt={`Presentation ${file}`}
                className="w-md h-150 rounded-lg border border-neutral-200 object-cover"
              />
            ))}
          </div>
        </section>

        {/* PROJECT LOCATION */}
        <section className="bg-white border border-blue-200 rounded-xl p-6 md:p-8 shadow-sm shadow-blue-100/40">
          <h2 className="text-3xl font-semibold mb-6">Project Location</h2>

          <p>
            <span className="font-semibold">ReFill</span> will be implemented at UC Davis to
            increase water accessibility and encourage the use of reusable bottles across campus.
            UC Davis is an ideal environment for ReFill due to the outdated condition of many
            existing fountains and limited water access in certain buildings, particularly science
            and engineering facilities where reliable water availability is essential. ReFill is
            quick and cost-effective implementation enables expanded fountain access, making clean
            drinking water more readily available to students.
          </p>
        </section>

      </div>
    </div>
  );
}
