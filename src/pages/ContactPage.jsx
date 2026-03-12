import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-contact.png"
            alt="Contact Golden Tree Life Spaces"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-32">
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
              href="tel:+919885848445"
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

      {/* Quick Help / FAQ for Contact Page */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Quick Help</h3>
            <p className="text-slate-500">Common questions before you reach out.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { q: 'What is the first step?', a: 'We always start with a free site survey to assess your roof and energy needs.' },
              { q: 'Do you handle subsidies?', a: 'Yes, we handle all MNRE and state subsidy documentation for you.' },
              { q: 'How fast is the installation?', a: 'Physical installation usually takes 2-3 days after approvals.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
