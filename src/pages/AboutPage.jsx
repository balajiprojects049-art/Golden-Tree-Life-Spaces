import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-light-gray pt-10 pb-12 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4"
          >
            About <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Learn about our mission to bring sustainable, eco-friendly energy to India.
          </motion.p>
        </div>
      </div>
      
      <About />
      <WhyChooseUs />
    </div>
  );
};

export default AboutPage;
