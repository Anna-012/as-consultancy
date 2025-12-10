import { Link } from "react-router-dom";
import {
  Map,
  Landmark,
  Compass,
  Building2,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const TownCountry = () => {
  const services = [
    "Development planning for urban and rural areas",
    "Master plan and zoning strategy preparation",
    "Land use planning and infrastructure mapping",
    "Feasibility study and site selection analysis",
    "Regulatory support and approval documentation",
    "Stakeholder consultation and public engagement",
  ];

  const focusAreas = [
    {
      icon: <Map className="w-6 h-6 text-purple-900" />,
      title: "Urban & Rural Development",
      points: [
        "City, town and village development plans",
        "Infrastructure and growth strategy",
        "Environmental and socio-economic integration",
      ],
    },
    {
      icon: <Landmark className="w-6 h-6 text-purple-900" />,
      title: "Master Planning & Zoning",
      points: [
        "Zoning regulations and land-use control",
        "Transport, utilities and public spaces",
        "Urban design and sustainable growth",
      ],
    },
    {
      icon: <Compass className="w-6 h-6 text-purple-900" />,
      title: "Site & Feasibility Studies",
      points: [
        "Land suitability and viability assessment",
        "Infrastructure availability and capacity",
        "Risk and development potential analysis",
      ],
    },
  ];

  const process = [
    "Understanding project scope and context",
    "Data collection and stakeholder discussion",
    "Spatial analysis and planning framework",
    "Draft master plan and zoning strategy",
    "Submission, approvals and implementation support",
  ];

  const benefits = [
    "Systematic, sustainable development approach",
    "Transparent documentation and planning framework",
    "Better infrastructure and public service outcomes",
    "Regulatory compliance and risk reduction",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
          
          <div>
            <p className="text-sm uppercase tracking-[0.1em] text-purple-900 mb-2">
              Town & Country Planning
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Integrated <span className="text-purple-900">planning solutions</span> for urban and rural development
            </h1>

            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              We provide end-to-end planning services for organised development of cities, towns and villages — ensuring efficient use of land, infrastructure, and resources with long-term sustainability.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-purple-800 transition">
              <PhoneCall className="w-4 h-4" />
              
              <Link to="/contactus">Book a consultation</Link>
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-purple-900" />
              <h2 className="text-lg font-semibold text-slate-900">What we focus on</h2>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Sustainable and inclusive development planning
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Land use strategy backed by data and feasibility
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Effective infrastructure and public services planning
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Alignment with policies, codes and governance
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
          Core areas of expertise
        </h2>

        <p className="text-sm sm:text-base text-slate-600 mb-8">
          Strategies that balance development, environment and community needs.
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

      {/* Services List */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14">

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
            Services we provide
          </h2>

          <ul className="grid gap-3 sm:grid-cols-2 text-sm sm:text-base text-slate-700">
            {services.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <CheckCircle2 className="w-4 h-4 mt-1 text-purple-900 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* Process & Benefits */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 lg:grid-cols-2">

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
              Our planning process
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
              Why planned development matters
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
      
    </div>
  );
};

export default TownCountry;
