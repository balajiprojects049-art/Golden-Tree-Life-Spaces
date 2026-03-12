import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Solar Panel Installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-green-500/20 text-green-400 border border-green-500/40 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase"
          >
            MNRE Approved Solar Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Power Your Future With <span className="text-green-400">Solar Energy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
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
              <li key={i} className="flex items-center gap-3 text-gray-200 font-medium">
                <FiCheckCircle className="text-green-400 text-xl shrink-0" />
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
            <Link to="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-green-500/20">
              Get Free Consultation
              <FiArrowRight />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all backdrop-blur">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-10 mt-14 pt-10 border-t border-white/10"
          >
            <div>
              <div className="text-3xl font-black text-white">90%</div>
              <div className="text-gray-400 text-sm">Bill Savings</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">25 Yrs</div>
              <div className="text-gray-400 text-sm">Warranty</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">500+</div>
              <div className="text-gray-400 text-sm">Installations</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
