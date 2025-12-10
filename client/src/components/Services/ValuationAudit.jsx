import { Link } from "react-router-dom";
import {
  FileText,
  ClipboardList,
  Scale,
  Building2,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const ValuationAudit = () => {
  const services = [
    "Valuation of land, buildings and industrial properties",
    "Project cost estimation and verification",
    "Technical audit of completed and ongoing works",
    "DPR (Detailed Project Report) review and validation",
    "Quantity verification and measurement checking",
    "Compliance check with drawings, BOQ and specifications",
  ];

  const focusAreas = [
    {
      icon: <Building2 className="w-6 h-6 text-purple-900" />,
      title: "Property & Asset Valuation",
      points: [
        "Valuation for government, banking and private purposes",
        "Assessment based on market rate, depreciation and utility",
        "Reports in line with required formats and norms",
      ],
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-purple-900" />,
      title: "Technical Audit",
      points: [
        "Quality and workmanship inspection",
        "Verification of executed quantities on site",
        "Checking deviation from approved drawings",
      ],
    },
    {
      icon: <Scale className="w-6 h-6 text-purple-900" />,
      title: "Financial & Quantity Review",
      points: [
        "Cross-checking contractor bills and measurements",
        "Verification against BOQ and contract terms",
        "Support for dispute resolution and clarifications",
      ],
    },
  ];

  const process = [
    "Collection of drawings, work orders and relevant documents",
    "Site visit and technical inspection (where applicable)",
    "Data analysis, verification and cross-checking",
    "Preparation of detailed valuation / audit report",
    "Discussion of findings and support for next steps",
  ];

  const benefits = [
    "Transparent, document-based assessment",
    "Reduces risk of overpayment and disputes",
    "Independent technical opinion for decision-makers",
    "Reports suitable for government and institutional use",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.1em] text-purple-900 mb-2">
              Valuation & Audit Services
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Independent{" "}
              <span className="text-purple-900">valuation and technical audit</span>
              {" "}for projects and properties
            </h1>

            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              We provide professional valuation and audit services for
              properties, projects and civil works – helping authorities and
              clients take clear, well-documented decisions backed by
              technical analysis.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-purple-800 transition">
              <PhoneCall className="w-4 h-4" />
              <Link to="/contactus">Book a discussion</Link>
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-purple-900" />
              <h2 className="text-lg font-semibold text-slate-900">
                What we focus on
              </h2>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Independent, unbiased valuation and audit reports
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Documented justification for quantities and costs
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Support for administrative and financial decisions
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Clarity in case of disputes, variations or revisions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
          Scope of our valuation & audit work
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8">
          From individual properties to large-scale civil projects, we provide
          structured, report-based services.
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

      {/* Services list */}
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
              Our approach
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
              Why our valuation & audit
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
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            Need an independent valuation or technical audit?
          </h3>
          <button className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-purple-800 transition">
            <PhoneCall className="w-4 h-4" />
            <Link to="/contactus">Contact our team</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ValuationAudit;

