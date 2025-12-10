import { Link } from "react-router-dom";
import {
  Compass,
  CheckCircle2,
  Home,
  Building2,
  SunMedium,
  PhoneCall,
} from "lucide-react";

const VastuConsulting = () => {
  const focusAreas = [
    {
      icon: <Home className="w-6 h-6 text-purple-900" />,
      title: "Residential Vastu",
      points: [
        "Entrance and bedroom orientation",
        "Energy flow and natural lighting",
        "Non-invasive remedies",
      ],
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-900" />,
      title: "Commercial & Office Vastu",
      points: [
        "Cabin and workspace alignment",
        "Reception and cash counter layout",
        "Harmony and productivity",
      ],
    },
    {
      icon: <SunMedium className="w-6 h-6 text-purple-900" />,
      title: "Site & Layout Review",
      points: [
        "Plot shape and slope analysis",
        "Directional study",
        "Suggestions before purchase",
      ],
    },
  ];

  const process = [
    "Understanding requirements",
    "Site visit or plan review",
    "Detailed report with remedies",
    "Follow-up during implementation",
  ];

  const benefits = [
    "Better natural flow and comfort",
    "Practical, modern solutions",
    "Minimal demolition and cost",
    "Focus on architecture and usability",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.1em] text-purple-900 mb-2">
              Vastu Consulting
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Balanced spaces with{" "}
              <span className="text-purple-900">modern Vastu practices</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              Practical Vastu consulting for homes and offices based on
              functionality, comfort, and overall harmony — without expensive
              structural changes or superstition.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-purple-800 transition">
              <PhoneCall className="w-4 h-4" />
              Book a consultation
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="w-6 h-6 text-purple-900" />
              <h2 className="text-lg font-semibold text-slate-900">
                What we focus on
              </h2>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Direction and energy flow planning
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Placement of key areas in the building
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Practical corrections with minimal changes
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Integration with architecture & interior design
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
          Areas we consult for
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8">
          Tailored guidance for residential, commercial and mixed-use spaces.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-full bg-purple-900/10 flex items-center justify-center mb-3">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <ul className="space-y-1.5 text-sm text-slate-600">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-purple-900" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process & Benefits */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
              Our process
            </h2>
            <ol className="space-y-3 text-sm sm:text-base text-slate-700">
              {process.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-purple-900 text-purple-900 flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
              Why choose us
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-slate-700">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            Need Vastu guidance?
          </h3>

          <button className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-purple-800 transition">
            <PhoneCall className="w-4 h-4" />
            <Link to="/contactus">Contact us</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default VastuConsulting;
