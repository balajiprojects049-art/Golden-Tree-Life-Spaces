import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
