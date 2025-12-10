import { ShieldCheck, Users, Award, DollarSign } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed",
    desc: "Authorized to deliver certified architectural solutions."
  },
  {
    icon: Users,
    title: "Expert Engineers",
    desc: "Professional team with proven technical expertise."
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "Trusted by clients across residential and commercial sectors."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Quality service with fair and transparent pricing."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, idx) => (
            <div key={idx} className="text-center">
              <p.icon className="mx-auto w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
