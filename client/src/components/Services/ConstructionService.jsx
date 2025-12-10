import { CheckCircle } from "lucide-react";

export default function ConstructionService() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold text-purple-900">Construction Services</h1>
        <p className="text-black max-w-2xl mx-auto">
          End-to-end construction consulting for residential, commercial, and municipal projects. Designed correctly, executed safely, and completed on time.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">What We Do</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              "Project planning and feasibility",
              "Cost estimation and budgeting",
              "Tender documentation and contractor selection",
              "Structural and architectural coordination",
              "Site supervision and progress monitoring",
              "Quality inspection and material assessment",
              "Compliance with building codes and regulations",
              "Technical reporting and documentation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <ol className="space-y-2 text-gray-700 list-none">
            {[
              "Requirement study and initial consultation",
              "Site survey and feasibility analysis",
              "Project planning, scheduling, and budgeting",
              "Coordination with architects, engineers, and contractors",
              "Regular site visits and progress reviews",
              "Quality checks and safety audits",
              "Final inspection and handover",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3">
                <span className="font-bold text-lg">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="p-6 rounded-2xl shadow-md space-y-4 ">
        <h2 className="text-2xl font-semibold">Benefits</h2>
        <ul className="space-y-2 text-gray-700 max-w-md mx-auto text-left">
          {[
            "Better control over timeline and costs",
            "Higher construction quality",
            "Reduced disputes and rework",
            "Safety and compliance with regulations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-center text-gray-700 max-w-xl mx-auto">
        <p>
          If you are planning a new project or need help fixing ongoing issues, get in touch with us to discuss your requirements.
        </p>
      </footer>
    </div>
  );
}
