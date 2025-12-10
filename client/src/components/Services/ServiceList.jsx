import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";



const services = [
  { title: "Construction Services", link: "/services/construction" },
  { title: "Interior Design", link: "/services/InteriorDesign" },
  { title: "Vastu Consulting", link: "/services/vastu-consulting" },
  { title: "Structural Services", link: "/services/structural" },
  { title: "Valuation & Audits", link: "/services/valuation-audits" },
  { title: "Project Management", link: "/services/project-management" },
  { title: "Fire Safety Management", link: "/services/fire-safety" },
  { title: "Town & Country Planning", link: "/services/town-country" },
];

const ServiceList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Professional solutions for residential, commercial and industrial needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm 
                        hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mb-6">
                High-quality professional service tailored to each project.
              </p>

              <Link
                to={item.link}
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
