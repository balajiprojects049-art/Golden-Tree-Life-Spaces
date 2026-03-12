import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-light-gray pt-10 pb-12 relative overflow-hidden border-b border-gray-100">
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-40 bg-primary/5 rounded-[100%] blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We're here to help you navigate your transition to solar energy smoothly.
          </motion.p>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactPage;
