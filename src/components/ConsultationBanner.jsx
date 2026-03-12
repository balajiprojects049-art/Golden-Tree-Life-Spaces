import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ConsultationBanner = () => {
  return (
    <section className="bg-[#0b1021] py-16 relative overflow-hidden">
      {/* Background decoration: Green and Yellow Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#151c2f]/90 backdrop-blur-lg border border-slate-800 p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to switch to <span className="text-green-500">Solar </span><span className="text-yellow-400">Energy?</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Get a customized 3D design and cost analysis for your home or business. Schedule your free consultation today!
            </p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0"
          >
            <Link
              to="/free-consultation"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] text-[15px] uppercase tracking-wider"
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
