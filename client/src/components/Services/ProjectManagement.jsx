import { Link } from "react-router-dom";
import {
  CalendarClock,
  ClipboardList,
  Users,
  LineChart,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const ProjectManagement = () => {
  const services = [
    "Planning, scheduling and resource allocation",
    "Project budgeting and cost tracking",
    "Contractor and vendor coordination",
    "Quality control and technical supervision",
    "Risk assessment and mitigation planning",
    "Progress monitoring and reporting",
  ];

  const focusAreas = [
    {
      icon: <CalendarClock className="w-6 h-6 text-purple-900" />,
      title: "Planning & Schedule Control",
      points: [
        "Work breakdown structure and timelines",
        "Resource allocation and prioritisation",
        "Progress tracking and updates",
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-purple-900" />,
      title: "Team & Vendor Coordination",
      points: [
        "Smooth communication between stakeholders",
        "Role clarity and accountability",
        "Monitoring performance and deliveries",
      ],
    },
    {
      icon: <LineChart className="w-6 h-6 text-purple-900" />,
      title: "Cost & Risk Management",
      points: [
        "Cost estimation and tracking",
        "Risk identification and mitigation",
        "Documented reporting and controls",
      ],
    },
  ];

  const process = [
    "Understanding goals, constraints and project scope",
    "Defining schedule, budget and responsibilities",
    "Monitoring execution and addressing challenges",
    "Ensuring quality, safety and timely delivery",
    "Reporting progress and outcomes to stakeholders",
  ];

  const benefits = [
    "Improved predictability and cost control",
    "Reduced delays and rework",
    "Better coordination and communication",
    "Transparent reporting and accountability",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.1em] text-purple-900 mb-2">
              Project Management
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              End-to-end{" "}
              <span className="text-purple-900">project management</span>{" "}
              and technical supervision
            </h1>

            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              We plan, organise and monitor construction projects to ensure
              timely, cost-effective and quality outcomes — backed by
              transparent communication and professional supervision.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-purple-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-purple-800 transition">
              <PhoneCall className="w-4 h-4" />
              <Link to="/contactus">Book a discussion</Link>
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-6 h-6 text-purple-900" />
              <h2 className="text-lg font-semibold text-slate-900">
                What we focus on
              </h2>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Detailed planning and transparent reporting
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Coordination between all stakeholders
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Quality control and risk mitigation
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 mt-0.5" />
                Practical solutions for real-world challenges
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
          Core areas of work
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mb-8">
          We handle planning, supervision, coordination and execution support.
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
              Why choose our project management
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
            Need professional support for your project?
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

export default ProjectManagement;

