import { CheckCircle } from "lucide-react";
import bgImg from "../../assets/interior-design-1.jpg";


export default function InteriorDesign() {
  const services = [
    "Residential interior planning",
    "Commercial and office space design",
    "Furniture and decor selection",
    "Lighting and ambience planning",
    "3D modelling and visualisation",
    "Renovation and redesign consultancy",
  ];

  const benefits = [
    "Modern, functional spaces tailored to clients",
    "Professional budget and material planning",
    "Improved aesthetics and usability",
    "Faster decision-making with design previews",
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-16">
      {/* NORMAL BACKGROUND (no blur on header/footer) */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />

      {/* LIGHT GLOBAL OVERLAY */}
      <div className="absolute inset-0 bg-white/40 -z-10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
        {/* HEADING (NO BLUR) */}
        <header className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-purple-900">
            Interior Design
          </h1>
          {/* <div className="p-8  shadow-lg inset-0 bg-white/40 -z-10 rounded-3xl"> */}
          <p className="text-lg text-black leading-relaxed ">
            We help transform residential and commercial spaces into modern, functional,
            and aesthetically-pleasing environments.
          </p>
          {/* </div> */}
        </header>

        {/* BLURRED BACKGROUND ONLY BEHIND CARDS */}
        <div className="relative">
          {/* BLURRED BG BOX */}
          <div
            className="absolute inset-0 bg-cover bg-center -z-10 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url(${bgImg})`,
              filter: "blur(4px)",
              opacity: 0.8,
              transform: "scale(1.08)",
            }}
          />
          {/* LIGHT OVERLAY ON BLURRED BOX */}
          <div className="absolute inset-0 bg-white/40 -z-10 rounded-3xl" />

          {/* CARDS SECTION */}
          <section className="grid md:grid-cols-2 gap-10 relative z-10 p-4 md:p-6">
            {/* LEFT CARD */}
            <div className="p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md space-y-4">
              <h2 className="text-2xl font-semibold text-black">What We Offer</h2>
              <ul className="space-y-3 text-black/90">
                {services.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-6 h-6 text-purple-900 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-md space-y-4">
              <h2 className="text-2xl font-semibold text-black">Benefits</h2>
              <ul className="space-y-3 text-black/90">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-6 h-6 text-purple-900 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* FOOTER (NO EXTRA BLUR) */}
        <footer className="text-center text-black/90 max-w-2xl mx-auto">
          <p>
            Whether you're planning a complete redesign or a minor makeover, we help you
            create spaces that reflect your personality and purpose.
          </p>
        </footer>
      </div>
    </section>
  );
}
