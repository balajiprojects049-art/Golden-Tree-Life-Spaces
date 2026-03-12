import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ConsultationBanner = () => {
  return (
    <section className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to switch to <span className="text-green-400">Solar Energy?</span>
            </h2>
            <p className="text-slate-300 text-lg">
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
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 font-black px-8 py-5 rounded-full transition-all shadow-xl shadow-green-500/20 text-lg uppercase tracking-widest"
            >
              Book Free Consultation
              <FiArrowRight className="text-2xl" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
