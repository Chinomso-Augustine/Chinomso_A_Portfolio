import { Link } from "react-router-dom";
import { assetUrl } from "./assets";

const parkletAsset = (...pathSegments) => assetUrl(...pathSegments);

const images = {
  hero: parkletAsset("Parklet", "Graphics.png"),
  sketch: parkletAsset("Parklet", "Sketch.png"),
  rhino: parkletAsset("Parklet", "Screenshot 2026-06-04 at 3.27.20 PM copy.png"),
  floorplan: parkletAsset("Parklet", "Floorplan Dim copy.png"),
  smallScale: parkletAsset("Parklet", "Small scale.png"),
  printing: parkletAsset("Parklet", "Printing.png"),
  processOne: parkletAsset("Parklet", "Process 1.png"),
  processTwo: parkletAsset("Parklet", "Process 2.png"),
  groupWork: parkletAsset("Parklet", "Group work.png"),
  groupTwo: parkletAsset("Parklet", "Group2.png"),
  fdOne: parkletAsset("Parklet", "FD1.png"),
  fdTwo: parkletAsset("Parklet", "FD2.png"),
};

function MetaCard({ label, value }) {
  return (
    <div className="border border-[#d5c6ad] bg-[#fffaf2] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-[#6f8062]">{label}</p>
      <p className="mt-1 text-sm font-semibold text-[#24352d]">{value}</p>
    </div>
  );
}

function SectionHeader({ kicker, title, body }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6653e]">{kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#24352d] md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#53634f]">{body}</p> : null}
    </div>
  );
}

function ImageFrame({ src, alt, caption, tall }) {
  return (
    <figure className="overflow-hidden border border-[#d5c6ad] bg-[#fffaf2] p-3 shadow-[0_18px_45px_rgba(69,45,17,0.08)]">
      <div className="flex items-center justify-center bg-[#e7eee2]">
        <img
          src={src}
          alt={alt}
          className={`${tall ? "max-h-[42rem]" : "max-h-[34rem]"} w-full object-contain`}
        />
      </div>
      <figcaption className="border-t border-[#d5c6ad] bg-[#eef3e9] px-3 py-2 text-xs text-[#53634f]">
        {caption}
      </figcaption>
    </figure>
  );
}

function ProcessStep({ number, title, body, image, alt, caption, reverse }) {
  return (
    <section className="border-t border-[#d5c6ad] py-12">
      <div className="grid gap-7 md:grid-cols-12 md:items-start">
        <div className={`md:col-span-4 ${reverse ? "md:order-2" : ""}`}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c6653e]">Step {number}</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#24352d]">{title}</h3>
          <p className="mt-3 text-[15px] leading-7 text-[#53634f]">{body}</p>
        </div>
        <div className={`md:col-span-8 ${reverse ? "md:order-1" : ""}`}>
          <ImageFrame src={image} alt={alt} caption={caption} tall />
        </div>
      </div>
    </section>
  );
}

export default function Parklet() {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#24352d]">
      <section className="px-5 pb-14 pt-32 sm:px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6653e]">Industry Design Case Study</p>
              <h1 className="mt-3 text-4xl leading-[0.9] font-semibold tracking-tight sm:text-5xl md:text-7xl">
                Parklet Design
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#53634f]">
                A modular streetside parklet concept designed for studying and gathering.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <MetaCard label="Role" value="Industrial Design + Fabrication" />
                <MetaCard label="Tools" value="Sketching, Rhino 8, Laser Cutting" />
                <MetaCard label="Focus" value="Public Seating + Spatial Experience" />
                <MetaCard label="Material" value="Layered cardboard" />
              </div>
              <Link
                to="/"
                className="mt-8 inline-flex h-11 items-center rounded-full bg-[#112f3a] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173f4d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f0a383]/45"
              >
                Back to Home
              </Link>
            </div>

            <figure className="overflow-hidden border border-[#d5c6ad] bg-[#fffaf2] p-3 shadow-[0_24px_60px_rgba(69,45,17,0.14)]">
              <img src={images.hero} alt="Rendered parklet concept on a sidewalk" className="h-80 w-full object-cover sm:h-[34rem]" />
            </figure>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 md:px-16">
        <section className="border-y border-[#d5c6ad] py-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeader
                kicker="Overview"
                title="An additional study space for students"
                body="The design uses repeated cardboard to create enclosure, seating, shade, and a visual rhythm that feels architectural without becoming heavy."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3 md:col-span-7">
              {[
                {
                  label: "Seating",
                  body: "Layered surfaces support individual studying and small-group collaboration.",
                },
                {
                  label: "Accessibility",
                  body: "A clear circulation path keeps the sidewalk edge open and approachable.",
                },
                {
                  label: "Experience",
                  body: "Rhythmic ribs create shade, enclosure, and a stronger street presence.",
                },
              ].map((item) => (
                <div key={item.label} className="border border-[#d5c6ad] bg-[#fffaf2] p-5">
                  <p className="text-sm font-semibold text-[#24352d]">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-[#53634f]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessStep
          number="01"
          title="Sketching the spatial language"
          body="Early sketches explored curved, single, and furniture-like seatings that promotes comfort prior to final decision. Due to restricted requirements for the project, most of the ideas were ruled out."
          image={images.sketch}
          alt="Parklet concept sketches"
          caption="Early form exploration and dimension studies"
        />

        <ProcessStep
          number="02"
          title="Translating the concept into Rhino"
          body="The Rhino model helped test the overall footprint, user circulation, seating rhythm, and potential materials."
          image={images.rhino}
          alt="Parklet model in Rhino"
          caption="Digital model, plan, elevation, and perspective views"
          reverse
        />

        <ProcessStep
          number="03"
          title="The Dimensions"
          body="A 7 by 20 foot parklet footprint organizes the pieces into zones for sitting, standing, and passing through while preserving a clear street-facing edge."
          image={images.floorplan}
          alt="Parklet floor plan with dimensions"
          caption="Dimensioned plan and module layout"
        />

        <section className="border-t border-[#d5c6ad] py-12">
          <SectionHeader
            kicker="Fabrication"
            title="From digital model to physical prototype."
            body="The model was broken into repeatable slices of cardboard, prepared for cutting, assembled by hand, and tested at small scale to understand proportion and rhythm."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ImageFrame src={images.printing} alt="Laser cutting parklet pieces" caption="Laser cutting repeated rib components" tall />
            <ImageFrame src={images.processOne} alt="Assembling large parklet prototype pieces" caption="Building and checking larger form pieces" tall />
            <ImageFrame src={images.groupWork} alt="Parklet fabrication group work" caption="Group assembly and fit checks" tall />
            <ImageFrame src={images.groupTwo} alt="Parklet prototype assembly progress" caption="Prototype pieces coming together" tall />
          </div>
        </section>

        <section className="border-t border-[#d5c6ad] py-12">
          <SectionHeader
            kicker="Final Direction"
            title="Final Design"
            body="The final model communicates a parklet that can frame a sidewalk, offer different body postures, and create an inviting transition between street and storefront."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <ImageFrame src={images.smallScale} alt="Small scale parklet model" caption="Small scale physical model" />
            <div className="grid gap-4">
              <ImageFrame src={images.fdOne} alt="Final parklet model detail one" caption="Final model detail" />
              <ImageFrame src={images.fdTwo} alt="Final parklet model detail two" caption="Final model detail" />
            </div>
          </div>
          <figure className="mt-4 overflow-hidden border border-[#d5c6ad] bg-[#fffaf2] p-3 shadow-[0_18px_45px_rgba(69,45,17,0.08)]">
            <img src={images.hero} alt="Final rendered parklet concept" className="max-h-[42rem] w-full object-cover" />
            <figcaption className="border-t border-[#d5c6ad] bg-[#eef3e9] px-3 py-2 text-xs text-[#53634f]">
              Final rendered concept in sidewalk context
            </figcaption>
          </figure>
        </section>
      </main>
    </div>
  );
}
