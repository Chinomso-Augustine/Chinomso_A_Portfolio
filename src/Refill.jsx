import { Link } from "react-router-dom";

export default function Refill() {
  const asset = (file) => `${import.meta.env.BASE_URL}${encodeURIComponent(file)}`;

  const team = [
    { name: "Devin Bangayan", role: "Engineer", image: "Devin.jpg" },
    { name: "Marilyn Bangayan", role: "Designer", image: "Marilyn.jpg" },
    { name: "Chinomso Augustine", role: "3rd Year Design & Computer Science Minor", image: "Chinomso.jpg" },
    { name: "Crow Raya", role: "3rd Year Design Major", image: "Crow.JPG.jpg" },
  ];
  const prototypeSets = [
    { title: "Prototype #1", images: ["Proto1.jpg", "Proto1.2.jpg"] },
    { title: "Prototype #2", images: ["Proto2.jpg", "Proto2.2.jpg"] },
    { title: "Prototype #3", images: ["Proto3.jpg", "Proto3.2.jpg"] },
  ];
  const pressImages = ["Pres1.jpg", "press2.JPG", "Press3.jpg", "press4.png"];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden py-14 px-6 md:px-20">
        <img
          src={asset("Fountain Graphic.png")}
          alt="Fountain graphic background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-900/35" />
        <div className="relative">
        <div className="mb-6">
          <Link to="/" className="text-sm text-white/90 hover:text-white transition">
            Back to Home
          </Link>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-6xl font-bold text-white">Re/Fill</h1>

            <p className="mt-4 text-lg text-white/95">
              Upgrade existing drinking fountains with bottle filling access.
            </p>

            <div className="mt-6 font-semibold text-white">
              <p>Accessible</p>
              <p>Sustainable</p>
              <p>Renewable</p>
            </div>
          </div>

          <div className="h-64 rounded-lg border border-white/30 bg-white/15 backdrop-blur-sm" />
        </div>
        </div>
      </div>

      <div className="px-6 md:px-20 py-14 space-y-20">
        {/* OUR STORY */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

          <p className="mb-4">
            Our journey with Re/Fill began in UC Davis Design 01, where we were tasked with
            collaboratively designing a spatial, communication, or physical product that engages
            with social systems and facilitates person-to-person interaction.
          </p>

          <p className="mb-4">
            Recognizing that water accessibility is an increasing concern tied to social equity and
            public health, our research focused on mitigating the effects of limited access to
            drinking water in the greater Sacramento metropolitan area.
          </p>

          <p className="mb-4">
            In response, our team designed a retrofit mouthpiece for existing water fountains that
            preserves traditional drinking while adding a spout for bottle filling.
          </p>

          <p>
            By utilizing existing filtered water infrastructure and prioritizing sustainability, our
            design revitalizes current fountain systems rather than replacing them.
          </p>
        </section>

        {/* TEAM */}
        <section>
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
        <section>
          <h2 className="text-3xl font-semibold mb-8">Infographics of our Process</h2>

          <h3 className="text-xl font-medium mb-4">Crazy 8</h3>

          <div className="rounded-lg overflow-hidden border border-neutral-200 mb-8">
            <img
              src={asset("Crazy 8.png")}
              alt="Crazy 8 ideation sketch"
              className="w-full h-auto object-cover"
            />
          </div>

          <h3 className="text-xl font-medium mb-4">Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Work1.jpg", "Work2.jpg", "Work3.jpg"].map((file) => (
              <img
                key={file}
                src={asset(file)}
                alt={`Process frame ${file.replace(".jpg", "")}`}
                className="h-64 w-full rounded-lg border border-neutral-200 object-cover"
              />
            ))}
          </div>
        </section>

        {/* PROTOTYPING */}
        <section>
          <h2 className="text-3xl font-semibold mb-10">Prototyping</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {prototypeSets.map((set) => (
              <div key={set.title} className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl mb-4">{set.title}</h3>

                <div className="grid grid-cols-1 gap-3">
                  {set.images.map((file) => (
                    <img
                      key={file}
                      src={asset(file)}
                      alt={`${set.title} frame`}
                      className="h-40 w-full rounded-md object-cover"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRESENTATION */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Presentation</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pressImages.map((file) => (
              <img
                key={file}
                src={asset(file)}
                alt={`Presentation ${file}`}
                className="w-full rounded-lg border border-neutral-200 object-cover"
              />
            ))}
          </div>
        </section>

        {/* PROJECT LOCATION */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Project Location</h2>

          <p>
            ReFill will be implemented at UC Davis to increase water accessibility and encourage the
            use of reusable bottles across campus. UC Davis is an ideal environment for ReFill due
            to the outdated condition of many existing water fountains and the limited water access
            in certain buildings.
          </p>
        </section>

        {/* EVOLUTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Evolution of ReFill and the Team</h2>

          <p className="mb-10">
            Early development of ReFill began with Devin Bangayan, Marilyn Bangayan, Chinomso
            Augustine, and Luc Maho during the first prototype stage. The project continued evolving
            through multiple iterations, presentations, and research conferences.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* IMAGE PLACEHOLDERS */}
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
