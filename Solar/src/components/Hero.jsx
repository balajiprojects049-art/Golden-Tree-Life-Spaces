import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 pt-12 pb-32 lg:pt-20 lg:pb-40 overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white skew-y-3 transform origin-bottom-right -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-green-100 text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase"
            >
              MNRE Approved Solar Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6"
            >
              Power Your Future With <span className="text-primary">Solar Energy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
            >
              Clean, reliable, and highly efficient solar solutions for homes and businesses. 
              Reduce your electricity bills by up to 90% and switch to green energy.
            </motion.p>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {[
                'Expert Installation & Maintenance',
                'Subsidy Assistance Available',
                'Long-term ROI & Cost Savings'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <FiCheckCircle className="text-primary text-xl" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
                <FiArrowRight />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right Image Content - Professional corporate style layout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200">
              <img 
                src="/hero.png" 
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-gray-500 text-sm font-semibold mb-1">Energy Savings</div>
                    <div className="text-gray-900 font-bold font-heading text-xl">Up to 90%</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div>
                    <div className="text-gray-500 text-sm font-semibold mb-1">Warranty</div>
                    <div className="text-primary-dark font-bold font-heading text-xl">25 Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pattern -z-10 opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pattern -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
