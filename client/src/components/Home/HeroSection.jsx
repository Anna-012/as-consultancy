import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white px-4 py-12 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side: Heading + Intro + Button */}
        <div className="text-center md:text-left">
         

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500
 bg-clip-text text-transparent drop-shadow-2xl">
            SBM &amp; City Beautification
            <span className="block text-white mt-2 text-2xl md:text-3xl">
              Consultancy Services
            </span>
          </h1>

          <h2 className="text-lg md:text-xl mb-5 leading-relaxed opacity-95">
            Professional support for Municipal Corporations, Nagar Palika &amp; Nagar Panchayat.
          </h2>

          <p className="text-sm md:text-base text-gray-100/90 mb-8 leading-relaxed">
            We provide end-to-end consultancy and execution support for Swachh Bharat Mission (Urban),
            City Beautification, Waste to Art projects and all types of wall/ building painting works.
            From planning to on-ground implementation, we help Urban Local Bodies create clean, beautiful
            and sustainable cities.
          </p>

          <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <Link to="/contactus">Request a Consultation</Link>
          </button>
        </div>

        {/* Right side: Key services cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition">
            <h3 className="font-semibold mb-1 text-sm md:text-base">
              SBM (Urban) consultancy &amp; handholding
            </h3>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition">
            <h3 className="font-semibold mb-1 text-sm md:text-base">
              City beautification &amp; theme-based development
            </h3>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition">
            <h3 className="font-semibold mb-1 text-sm md:text-base">
              Waste to Art concept &amp; execution
            </h3>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition">
            <h3 className="font-semibold mb-1 text-sm md:text-base">
              Wall painting, murals &amp; street art
            </h3>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition">
            <h3 className="font-semibold mb-1 text-sm md:text-base">
              IEC &amp; awareness campaigns
            </h3>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/15 transition">
            <h3 className="font-semibold mb-1 text-sm md:text-base">
              DPR, proposal &amp; documentation support
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
