import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  { src: '/Home_Page/Hero_1.png', alt: 'Solar Panel Installation on Rooftop' },
  { src: '/Home_Page/Hero_2.png', alt: 'Solar Energy for Homes' },
  { src: '/Home_Page/Hero_3.png', alt: 'Commercial Solar Solutions' },
  { src: '/Home_Page/Hero_4.png', alt: 'Renewable Solar Power' },
  { src: '/Home_Page/Hero_5.png', alt: 'Clean Solar Energy India' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slideshow Background ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay — strong on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20" />
          {/* Bottom gradient for navigation dots */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── Text Content ── */}
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
            Power Your Future With{' '}
            <span className="text-green-400">Solar Energy</span>
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
              'Long-term ROI & Cost Savings',
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-green-500/20"
            >
              Get Free Consultation
              <FiArrowRight />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all backdrop-blur"
            >
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
            {[
              { val: '90%', label: 'Bill Savings' },
              { val: '25 Yrs', label: 'Warranty' },
              { val: '500+', label: 'Installations' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-white">{s.val}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Prev / Next Arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 backdrop-blur flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-8 h-3 bg-green-400'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* ── Progress Bar ── */}
      {!paused && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-green-400"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
