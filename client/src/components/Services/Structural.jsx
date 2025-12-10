import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const Structural = () => {
  const services = [
    "Structural design and analysis",
    "Evaluation of existing structures",
    "Drawings and structural detailing",
    "Retrofitting and rehabilitation",
    "Foundation, slab and beam design",
    "Earthquake resistance planning",
  ];

  const process = [
    "Requirement discussion and data collection",
    "Review of drawings, loads and specifications",
    "Design, analysis and structural modelling",
    "Preparation of drawings and documentation",
    "Site support and supervision if required",
  ];

  const benefits = [
    "Optimised design focused on cost and safety",
    "Standards compliant and technically accurate work",
    "Reduced risk of rework during construction",
    "Focus on practicality and real-world feasibility",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-200 mb-3">
              Structural Engineering Services
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Reliable, efficient and safe{" "}
              <span className="text-purple-300">structural solutions</span>
            </h1>
            <p className="text-purple-200 text-sm sm:text-base mb-6">
              We offer structural engineering design, assessment and supervision
              services for residential, commercial and industrial projects.
            </p>
            <button className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white text-sm font-medium px-5 py-2.5 shadow-md hover:bg-purple-500 transition">
              <PhoneCall className="w-4 h-4" />
              <Link to="/contactus">Book a consultation</Link>
            </button>
          </div>

          <div className="bg-purple-800/70 border border-purple-700 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-purple-300" />
              <h2 className="text-lg sm:text-xl font-semibold">
                What we focus on
              </h2>
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-purple-100">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-purple-300" />
                <span>Safe, stable and economical structural design</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-purple-300" />
                <span>Compliance with relevant building codes and standards</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-purple-300" />
                <span>Analysis of loads, soil and building conditions</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-1 text-purple-300" />
                <span>Design solutions for practical execution on site</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">
          Services we provide
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 text-sm sm:text-base text-slate-700">
          {services.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <CheckCircle2 className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process & Benefits */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
              Our process
            </h2>
            <ol className="space-y-3 text-sm sm:text-base text-slate-700">
              {process.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-purple-400 text-purple-600 flex items-center justify-center text-xs font-semibold">
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
                  <CheckCircle2 className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-semibold">
            Need structural engineering support?
          </h3>
          <button className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white text-sm font-medium px-5 py-2.5 shadow-md hover:bg-purple-500 transition">
            <PhoneCall className="w-4 h-4" />
            <Link to="/contactus">Contact us</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Structural;

