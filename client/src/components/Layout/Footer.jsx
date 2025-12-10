import { Phone, Mail, MapPin } from "lucide-react";
import as_logo from "../../assets/as_logo.png";


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
         <div className="space-y-4">
  <div className="flex items-center space-x-3">
    <img
      src={as_logo}
      alt="AS Consultancy"
      className="w-12 h-12 object-contain rounded-md shadow"
    />
    <h1 className="font-semibold text-lg leading-tight tracking-tight">
      <span className="text-red-600">AS</span> CONSULTANCY
    </h1>
  </div>

  <p className="text-sm text-gray-600 leading-relaxed whitespace-normal  max-w-sm">
    Architectural, construction and planning services with trusted
    expertise and commitment to quality.
  </p>
</div>


          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-800 mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/" className="hover:text-red-600">Home</Link></li>
              <li><Link to="/aboutus" className="hover:text-red-600">About</Link></li>
              <li><Link to="/services" className="hover:text-red-600">Services</Link></li>
              <li><Link to="/contactus" className="hover:text-red-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-800 mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/services/construction" className="hover:text-red-600">Construction</Link></li>
              <li><Link to="/services/InteriorDesign" className="hover:text-red-600">Interior Design</Link></li>
              <li><Link to="/services/vastu-consulting" className="hover:text-red-600">Vastu Consulting</Link></li>
              <li><Link to="/services/structural" className="hover:text-red-600">Structural Services</Link></li>
              <li><Link to="/services/valuation-audits" className="hover:text-red-600">Valuation & Audit</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-800 mb-4 tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-700">

              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="leading-snug">
                  Shop No. 8, Pradhan Market, Kichha
                </span>
              </li>

              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="leading-snug">
                  +91 7983790498
                </span>
              </li>

              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <a
                  href="mailto:asconsultancyuttarakhand@gmail.com"
                  className="leading-snug break-all hover:text-red-600"
                >
                  asconsultancyuttarakhand@gmail.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t mt-14 pt-6 text-xs text-center text-gray-500">
          © {new Date().getFullYear()} AS Consultancy. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
