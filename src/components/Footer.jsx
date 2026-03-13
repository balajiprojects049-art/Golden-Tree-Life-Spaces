import { FiPhone, FiMail, FiSun, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const services = [
    { label: 'On-Grid & Off-Grid Systems', to: '/services' },
    { label: 'Solar Water Heaters', to: '/services/water-heater' },
    { label: 'Agricultural Solar Pumping', to: '/services/water-pumping' },
    { label: 'Solar Street Lights', to: '/services/street-light' },
    { label: 'Solar CCTV Cameras', to: '/services/cctv' },
    { label: 'Solar Secure Fencing', to: '/services/solar-fencing' },
  ];

  const quickLinks = [
    { label: 'Home Page', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Services', to: '/services' },
    { label: 'Our Works', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' },
    { label: 'Verify Official Vendor', href: 'https://consumer.pmsuryaghar.gov.in/consumer/#/registered-vendors' },
  ];

  const socials = [
    { icon: FaFacebook, href: 'https://www.facebook.com/golden.tree.673991' },
    { icon: FaYoutube, href: 'https://youtube.com/@goldentreelifespaces-ql3xv?si=dDuPdr5MhJDjliIX' },
    { icon: FaInstagram, href: 'https://www.instagram.com/goldentreelifespaces/' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300 pt-20 pb-8 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-4 mb-6 hover:opacity-80 transition-opacity">
              <div className="w-20 h-20 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="Golden Tree Life Spaces" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl leading-none block text-primary">
                  Golden Tree
                </span>
                <span className="text-solar-light text-xs font-black tracking-[0.25em] uppercase mt-1">Life Spaces</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering India with clean, reliable, and affordable solar energy solutions since 2015. Certified and MNRE compliant.
            </p>
            <div className="flex gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <s.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span>›</span> {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={scrollToTop}
                      className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span>›</span> {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6 tracking-wide">Solutions</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    onClick={scrollToTop}
                    className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span>›</span> {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9885848445" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <FiPhone className="text-primary" />
                  +91 98858 48445
                </a>
              </li>
              <li>
                <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-white/10">
                  <a 
                    href="https://maps.app.goo.gl/mJ7KmwNpC33cUUVK9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex gap-3 text-xs hover:text-primary transition-colors leading-relaxed"
                  >
                    <FiMapPin className="text-primary mt-1 shrink-0" />
                    <div>
                      <span className="font-bold block text-white mb-0.5">Corporate Office</span>
                      Ground Floor, Presidio Towers, Mini Bypass Road, Ramalinga Puram, Nellore - 524003
                    </div>
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/htXECBkvr7K7GYyg8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex gap-3 text-xs hover:text-primary transition-colors leading-relaxed"
                  >
                    <FiMapPin className="text-primary mt-1 shrink-0" />
                    <div>
                      <span className="font-bold block text-white mb-0.5">Experience Center</span>
                      Muthukur Rd, near Narayana Medical College, Gundlapalem, Nellore - 524003
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Golden Tree Life Spaces. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-primary cursor-not-allowed">Privacy Policy</span>
            <span className="hover:text-primary cursor-not-allowed">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
