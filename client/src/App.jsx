import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx"
import ContactUs from "./pages/ContactUs.jsx";
import Header from "./components/Layout/Header.jsx"
import Footer from "./components/Layout/Footer.jsx"
import ConstructionService from "./components/Services/ConstructionService.jsx";
import InteriorDesign from "./components/Services/InteriorDesign.jsx";
import VastuConsulting from "./components/Services/VastuConsulting.jsx";
import Structural from "./components/Services/Structural.jsx";
import ValuationAudit from "./components/Services/ValuationAudit.jsx";
import ProjectManagement from "./components/Services/ProjectManagement.jsx";
import FireSafety from "./components/Services/FireSafety.jsx";
import TownCountry from "./components/Services/TownCountry.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
         <Route
          path="/services/construction"
          element={<ConstructionService />}
        />
        <Route
          path="/services/InteriorDesign"
          element={<InteriorDesign />}
        />
        <Route
          path="/services/vastu-consulting"
          element={<VastuConsulting />}
        />
        <Route
          path="/services/structural"
          element={<Structural />}
        />
        <Route
          path="/services/valuation-audits"
          element={<ValuationAudit />}
        />
        <Route
          path="/services/project-management"
          element={<ProjectManagement />}
        />
        <Route
          path="/services/fire-safety"
          element={<FireSafety />}
        />
        <Route
          path="/services/town-country"
          element={<TownCountry />}
        />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
