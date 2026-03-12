import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ConsultationBanner = () => {
  return (
    <section className="bg-slate-50 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner with Green background */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#15803d] p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
          
          {/* Yellow decorative accents inside the banner */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-300/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />

          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to switch to <span className="text-yellow-400">Solar Energy?</span>
            </h2>
            <p className="text-green-50 text-base md:text-lg leading-relaxed">
              Get a customized 3D design and cost analysis for your home or business. Schedule your free consultation today!
            </p>
          </div>
          
          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 relative z-10"
          >
            <Link
              to="/free-consultation"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] text-[15px] uppercase tracking-wider"
            >
              Book Free Consultation
              <FiArrowRight className="text-xl" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
