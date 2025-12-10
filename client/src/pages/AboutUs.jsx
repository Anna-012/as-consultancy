import { Building2, Brush, Users2, FileText } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="flex items-center justify-center m-2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight ">
          Specialised Consulting for  
          <span className="text-purple-900"> Urban Local Bodies</span>
        </h2>
        </div>
        {/* Intro */}
        <p className="text-lg  text-black-700  flex items-center justify-center p-4 font-extralight">
          We help Urban Local Bodies (ULBs) convert policies into ground-level impact. 
          Our expertise combines field knowledge, creative design and government 
          process understanding to deliver results under Swachh Bharat Mission, 
          Waste-to-Art and city beautification projects.
        </p>

        {/* Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">

          {/* Left Side Content */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">What We Do</h3>
              <p className="text-gray-700 leading-relaxed">
                We support Municipal Corporations, Nagar Palikas and Nagar Panchayats 
                in planning, implementing and documenting high-impact urban projects.
                Our work blends practical design, citizen engagement and end-to-end
                reporting support to help cities achieve visible, long-term improvements.
              </p>
            </div>

            {/* Mission Box */}
            <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white p-7 rounded-2xl shadow-md">
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To help cities become cleaner, more beautiful and citizen-friendly 
                through practical consultancy, creative design and effective implementation.
              </p>
            </div>
          </div>

          {/* Right Side Feature Cards */}
          <div className="grid gap-6">
            <FeatureCard
              icon={<Building2 className="w-8 h-8 text-blue-600" />}
              title="Practical, Field-Based Solutions"
              desc="Plans and designs tailored for real-world conditions, ensuring 
              implementable results within local constraints."
            />

            <FeatureCard
              icon={<Brush className="w-8 h-8 text-purple-600" />}
              title="High-Impact Public Art & Design"
              desc="Mural work, concept art and thematic beautification that improves 
              visibility, identity and citizen appeal."
            />

            <FeatureCard
              icon={<Users2 className="w-8 h-8 text-green-600" />}
              title="Community Awareness & Behaviour Change"
              desc="Street art, IEC campaigns and citizen engagement to strengthen 
              participation and city pride."
            />

            <FeatureCard
              icon={<FileText className="w-8 h-8 text-orange-500" />}
              title="Complete Reporting & Documentation"
              desc="High-quality photography, reporting and documentation for 
              inspections, awards and higher approvals."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gray-100 rounded-xl">{icon}</div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-700 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
