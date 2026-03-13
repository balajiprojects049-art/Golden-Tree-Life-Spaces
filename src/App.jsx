import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhatsAppFloat from './components/WhatsAppFloat';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ConsultationPage from './pages/ConsultationPage';
import GalleryPage from './pages/GalleryPage';
// Individual Service Pages
import OnGridPage from './pages/services/OnGridPage';
import OffGridPage from './pages/services/OffGridPage';
import WaterHeaterPage from './pages/services/WaterHeaterPage';
import SolarFencingPage from './pages/services/SolarFencingPage';
import StreetLightPage from './pages/services/StreetLightPage';
import CctvPage from './pages/services/CctvPage';
import WaterPumpingPage from './pages/services/WaterPumpingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Dynamic Title Update for SEO
    const baseTitle = "Golden Tree Life Spaces";
    const titleMap = {
      "/": `${baseTitle} | Best Solar Panel Installation in Nellore`,
      "/about": `About Us | ${baseTitle}`,
      "/services": `Our Solar Solutions | ${baseTitle}`,
      "/contact": `Contact Us | ${baseTitle}`,
      "/services/on-grid": `On-Grid Solar Systems | ${baseTitle}`,
      "/services/off-grid": `Off-Grid Solar Solutions | ${baseTitle}`,
      "/services/water-heater": `Solar Water Heaters | ${baseTitle}`,
      "/services/solar-fencing": `Solar Secure Fencing | ${baseTitle}`,
      "/services/street-light": `Solar Street Lights | ${baseTitle}`,
      "/services/cctv": `Solar Powered CCTV | ${baseTitle}`,
      "/services/water-pumping": `Agricultural Solar Pumping | ${baseTitle}`,
      "/free-consultation": `Free Consultation | ${baseTitle}`,
      "/gallery": `Our Works | ${baseTitle}`
    };
    
    document.title = titleMap[pathname] || baseTitle;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen text-gray-600 font-sans selection:bg-primary/20 selection:text-primary-dark">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Service Detail Routes */}
          <Route path="/services/on-grid" element={<OnGridPage />} />
          <Route path="/services/off-grid" element={<OffGridPage />} />
          <Route path="/services/water-heater" element={<WaterHeaterPage />} />
          <Route path="/services/solar-fencing" element={<SolarFencingPage />} />
          <Route path="/services/street-light" element={<StreetLightPage />} />
          <Route path="/services/cctv" element={<CctvPage />} />
          <Route path="/services/water-pumping" element={<WaterPumpingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/free-consultation" element={<ConsultationPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
