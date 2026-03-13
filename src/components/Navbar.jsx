import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  FiPhone, FiMenu, FiX, FiSun, FiChevronDown, FiMail, 
  FiZap, FiShield, FiBatteryCharging, FiDroplet, FiCamera, FiWind 
} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Our Works', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ];

  const servicesLinks = [
    { label: 'Solar On-Grid System', to: '/services/on-grid' },
    { label: 'Solar Off-Grid System', to: '/services/off-grid' },
    { label: 'Solar Water Heater', to: '/services/water-heater' },
    { label: 'Solar Fencing', to: '/services/solar-fencing' },
    { label: 'Solar Street Light', to: '/services/street-light' },
    { label: 'Solar CCTV Camera', to: '/services/cctv' },
    { label: 'Solar Water Pumping', to: '/services/water-pumping' },
  ];

  return (
    <>
      {/* Top Bar - Very Professional touch */}
      <div className="bg-slate-900 text-white text-sm py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:goldentreelifespaces@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FiMail className="text-primary" /> goldentreelifespaces@gmail.com
            </a>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-2">
              Serving: Residential, Commercial & Industrial Solar
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-primary transition-colors font-medium">Free Solar Consultation</Link>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white border-b border-gray-100 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="Golden Tree Life Spaces" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight">
                  <span className="text-solar-light">Golden</span> <span className="text-primary-dark">Tree</span>
                </span>
                <span className="text-[10px] text-primary font-bold tracking-wider uppercase">
                  Life Spaces
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) =>
                link.label === 'Services' ? (
                  <div
                    key={link.to}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-4 py-2 rounded font-bold transition-all ${isActive
                          ? 'text-primary'
                          : 'text-gray-700 hover:text-primary'
                        }`
                      }
                    >
                      {link.label}
                      <FiChevronDown className={`text-xs transition-transform duration-300 mt-0.5 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </NavLink>

                    {/* Mega Menu Dropdown */}
                    <div className={`absolute top-full -left-48 pt-4 w-[600px] transition-all duration-500 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                      <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden p-6 grid grid-cols-2 gap-4">
                        {servicesLinks.map((s) => {
                          const details = {
                            'Solar On-Grid System': { icon: <FiZap />, desc: 'Slash bills with grid sync.' },
                            'Solar Off-Grid System': { icon: <FiBatteryCharging />, desc: 'Total energy independence.' },
                            'Solar Water Heater': { icon: <FiDroplet />, desc: 'Hot water, zero cost.' },
                            'Solar Fencing': { icon: <FiShield />, desc: 'Intelligent security barrier.' },
                            'Solar Street Light': { icon: <FiSun />, desc: 'Smart urban illumination.' },
                            'Solar CCTV Camera': { icon: <FiCamera />, desc: '24/7 AI-powered monitoring.' },
                            'Solar Water Pumping': { icon: <FiWind />, desc: 'Sustainable farm irrigation.' }
                          };
                          const info = details[s.label] || { icon: <FiSun />, desc: 'Professional solar service.' };

                          return (
                            <Link
                              key={s.label}
                              to={s.to}
                              className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-all group/item"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors shrink-0">
                                {info.icon}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 group-hover/item:text-primary transition-colors text-sm">
                                  {s.label}
                                </div>
                                <div className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                                  {info.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded font-bold transition-all ${isActive
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:9885848445"
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FiPhone />
                9885848445
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gray-900 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-b border-gray-100 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <div key={link.to}>
                {link.label === 'Services' ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex w-full items-center justify-between py-2 font-black text-2xl italic italic-none tracking-tight transition-colors ${servicesOpen ? 'text-primary' : 'text-slate-900'}`}
                    >
                      {link.label}
                      <FiChevronDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Mobile Sub-links */}
                    <div className={`transition-all duration-500 overflow-hidden ${servicesOpen ? 'max-h-[600px] opacity-100 border-l-2 border-primary/20 ml-1' : 'max-h-0 opacity-0'}`}>
                      {servicesLinks.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          onClick={() => {
                            setIsOpen(false);
                            setServicesOpen(false);
                          }}
                          className="block py-3 pl-6 text-sm font-bold text-slate-600 hover:text-primary transition-colors uppercase tracking-widest"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block py-2 font-black text-2xl italic italic-none tracking-tight transition-colors ${isActive ? 'text-primary' : 'text-slate-900'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-8 mt-4 border-t border-gray-100">
              <a href="tel:9885848445" className="flex items-center justify-center gap-3 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded shadow-xl">
                <FiPhone /> Call Specialist
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
