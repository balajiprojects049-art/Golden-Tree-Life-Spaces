import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiBatteryCharging, FiZap, FiDroplet, FiShield,
  FiSun, FiCamera, FiWind, FiArrowRight
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'on-grid',
    icon: FiZap,
    title: 'Solar On-Grid System',
    description: 'The most popular urban solution. Reduce utility bills up to 90% by connecting to the grid and earning credits via net-metering.',
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    path: '/services/on-grid'
  },
  {
    id: 'off-grid',
    icon: FiBatteryCharging,
    title: 'Solar Off-Grid System',
    description: 'Achieve total energy independence with 24/7 battery backup. Perfect for remote areas or regions with frequent power outages.',
    accent: 'text-orange-500',
    bg: 'bg-orange-50',
    path: '/services/off-grid'
  },
  {
    id: 'water-heater',
    icon: FiDroplet,
    title: 'Solar Water Heater',
    description: 'Harness solar thermal energy to eliminate geyser costs. High-efficiency ETC/FPC systems for residential and industrial hot water.',
    accent: 'text-cyan-600',
    bg: 'bg-cyan-50',
    path: '/services/water-heater'
  },
  {
    id: 'fencing',
    icon: FiShield,
    title: 'Solar Fencing',
    description: 'Robust, non-lethal high-voltage security perimeters for farms and properties. Intelligent intrusion alerts and battery operation.',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    path: '/services/solar-fencing'
  },
  {
    id: 'street-light',
    icon: FiSun,
    title: 'Solar Street Light',
    description: 'Self-governing All-In-One LED lighting with motion sensors. Reliable, zero-cost illumination for campus and community pathways.',
    accent: 'text-yellow-500',
    bg: 'bg-yellow-50',
    path: '/services/street-light'
  },
  {
    id: 'cctv',
    icon: FiCamera,
    title: 'Solar CCTV Camera',
    description: 'Surveillance that never sleeps. 4G/LTE enabled, AI-powered 24/7 monitoring even in areas without any grid or Wi-Fi connectivity.',
    accent: 'text-indigo-600',
    bg: 'bg-indigo-50',
    path: '/services/cctv'
  },
  {
    id: 'water-pump',
    icon: FiWind,
    title: 'Solar Water Pumping',
    description: 'Zero-fuel irrigation for modern agriculture. High-performance submersible and surface pumps tailored for bore-wells and canals.',
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    path: '/services/water-pumping'
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-clean card-clean-hover p-6 group flex flex-col h-full bg-white relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className={`absolute top-0 left-0 right-0 h-1 hidden group-hover:block ${service.bg.replace('50', '500')}`} />

      <div className={`w-14 h-14 rounded-lg ${service.bg} flex items-center justify-center mb-6`}>
        <service.icon className={`text-2xl ${service.accent}`} />
      </div>

      <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

      <Link
        to={service.path || "/contact"}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
      >
        Learn More <FiArrowRight className="text-xs" />
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-12 lg:py-16 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">What We Offer</div>
          <h2 className="section-heading mb-4">
            <span className="text-primary">Total Solar</span> <span className="text-solar-light">Energy Solutions</span>
          </h2>
          <p className="section-subheading">
            Comprehensive solar products tailored for residential, agricultural, commercial, and industrial requirements.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
          {/* Custom Solutions Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white hover:border-primary/50 hover:shadow-clean transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:border-primary group-hover:text-primary text-gray-400 transition-colors">
              <span className="text-2xl leading-none font-light">+</span>
            </div>
            <h3 className="font-heading font-bold text-gray-900 mb-2">Custom Package</h3>
            <p className="text-gray-500 text-sm">Need a specialized setup? We can design it.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
