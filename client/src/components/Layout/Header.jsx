import as_logo from "../../assets/as_logo.png";

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/10">
     <nav className="container mx-auto flex justify-between items-center px-4 py-4">

  {/* Left Section */}
  <div className="flex items-center space-x-3">
    <img
      src={as_logo}
      alt="AS Consultancy"
      className="w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-md shadow-lg"
    />

    <div className="flex flex-col leading-tight">
      <h1 className="font-bold text-lg sm:text-xl text-black font-inter">
        <span className="text-red-600">AS</span> CONSULTANCY
      </h1>
      <span className="text-xs sm:text-sm text-black font-noto">
        Uttarakhand
      </span>
    </div>
  </div>

  {/* Right: Hamburger menu */}
  <button
    className="md:hidden text-black"
    onClick={() => setOpen(!open)}
  >
    <span className="text-3xl leading-none">
      {open ? "✖" : "☰"}
    </span>
  </button>

  {/* Desktop Menu */}
  <ul className="hidden md:flex space-x-6 font-medium text-black">
    <li><Link to="/" className="hover:text-purple-900">Home</Link></li>
    <li><Link to="/aboutus" className="hover:text-purple-900">About Us</Link></li>
    <li><Link to="/services" className="hover:text-purple-900">Services</Link></li>
    <li><Link to="/contactus" className="hover:text-purple-900">Contact Us</Link></li>
  </ul>

</nav>


      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-4 px-10 py-4 font-medium text-black">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={() => setOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contactus" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
