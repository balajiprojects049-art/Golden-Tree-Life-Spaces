import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const PMGovBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-solar-light/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 lg:flex items-center gap-12">
          
          {/* Content side */}
          <div className="lg:w-3/5 mb-10 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://pmsuryaghar.gov.in/static/media/logo.9a32c4d6.png" 
                alt="PM Surya Ghar Logo" 
                className="h-12 w-auto object-contain bg-slate-50 p-2 rounded-lg"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="text-primary font-black uppercase tracking-widest text-xs">Government Initiative</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6 leading-tight">
              PM Surya Ghar: <span className="text-primary">Muft Bijli Yojana</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are proud to be part of the government's mission for solar energy. Check our official registration and explore the list of certified vendors on the national portal.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Official MNRE Registration',
                'Subsidy Support Guidance',
                'Verified Vendor Status',
                'Hassle-free Portal Enquire'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <FiCheckCircle className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://consumer.pmsuryaghar.gov.in/consumer/#/registered-vendors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-slate-900/10 group"
              >
                Verify Registered Vendors
                <FiExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a 
                href="https://pmsuryaghar.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-primary transition-all"
              >
                Scheme Details
              </a>
            </div>
          </div>

          {/* Special Badge Side */}
          <div className="lg:w-2/5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
              className="relative group cursor-pointer"
            >
              {/* Animated Glow Background */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] group-hover:bg-solar-light/40 transition-colors duration-1000 animate-pulse"></div>
              
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.1, rotate: 0, y: 0 }}
                className="relative bg-gradient-to-br from-primary to-primary-dark w-56 h-56 md:w-72 md:h-72 rounded-full flex flex-col items-center justify-center text-center p-8 text-white shadow-[0_25px_60px_-10px_rgba(45,190,58,0.5)] group-hover:shadow-[0_40px_100px_-15px_rgba(247,184,75,0.4)] transition-all duration-500"
              >
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl font-black mb-2 flex items-baseline gap-1 drop-shadow-lg">
                    78,000<span className="text-xl md:text-2xl font-bold opacity-80">/-</span>
                  </span>
                  <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] bg-white/10 px-4 py-1.5 rounded-full mb-3">
                    Max Subsidy
                  </span>
                  <div className="w-12 h-0.5 bg-white/30 rounded-full mb-3" />
                  <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.15em] opacity-90 max-w-[120px] leading-tight">
                    Muft Bijli Yojana
                  </span>
                </div>
                
                {/* Decorative Shine Effect using the new CSS class */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PMGovBanner;
