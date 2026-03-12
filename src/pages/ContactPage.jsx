import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-contact.png"
            alt="Contact Golden Tree Life Spaces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-green-500/20 text-green-400 border border-green-500/40 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase"
            >
              We're Here to Help
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-5xl md:text-7xl text-white leading-tight mb-6"
            >
              Contact <span className="text-green-400">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-xl leading-relaxed mb-10"
            >
              We're here to help you navigate your transition to solar energy smoothly.
              Reach out for a free consultation today.
            </motion.p>
            <motion.a
              href="tel:+919999999999"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-green-500/20"
            >
              <FiPhone /> Call Us Now
            </motion.a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ContactPage;
