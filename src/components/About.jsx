import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiPhone, FiHome, FiBriefcase, FiZap, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const points = [
    'Complete after-sales support & maintenance',
    'High-quality solar panels with certified installation',
    'Government-subsidy assistance provided',
    'Reduce electricity bills by up to 90%',
  ];

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-clean aspect-[4/5] lg:aspect-[3/4]">
              <img 
                src="/about.png" 
                alt="Solar Panel Field"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badge overlay */}
            <div className="absolute -bottom-8 -right-8 w-48 bg-white p-6 shadow-clean rounded-lg border border-gray-100 hidden sm:block">
              <div className="text-4xl text-primary font-bold font-heading mb-1">500+</div>
              <div className="text-gray-600 text-sm font-semibold">Successful Solar Installations</div>
            </div>

            <div className="absolute top-10 -left-10 w-32 h-32 bg-pattern -z-10 opacity-60" />
            <div className="absolute -bottom-10 right-10 w-40 h-40 bg-green-50 rounded-full -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">About the Company</div>
            <h2 className="section-heading mb-6">
              <span className="text-primary">Golden Tree</span> <span className="text-solar-light">Life Spaces</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Golden Tree Life Spaces is a leading provider of high-quality solar power products 
              and renewable energy solutions. We design robust, customized solar systems that 
              slash electricity costs and carbon footprints.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you are looking to power a residential home, agricultural farm, commercial 
              establishment, or a large industrial facility — our expert engineers ensure a smooth 
              transition to clean energy with long-lasting performance.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary text-xl flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/free-consultation" className="btn-primary">
                Book Free Consultation
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-primary-dark flex items-center justify-center">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call for Queries</div>
                  <a href="tel:9885848445" className="text-lg font-bold text-gray-900 border-b border-gray-900 hover:text-primary hover:border-primary transition-colors">
                    9885848445
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
