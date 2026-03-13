import Services from '../components/Services';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-services.png"
            alt="Our Solar Services"
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
              className="inline-block bg-green-500/20 text-green-400 border border-green-500/40 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-widest uppercase"
            >
              Service Portfolio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-5xl md:text-8xl text-white leading-tight tracking-tighter mb-6"
            >
              <span className="text-green-400">Energy</span> <span className="text-solar-light">Evolved.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-xl leading-relaxed mb-10 font-light"
            >
              Industrial-grade engineering for residential, commercial, and rural
              infrastructure. We don't just install panels; we build sustainable legacies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/free-consultation"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-green-500/20"
              >
                Get A Free Quote <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      {/* Technical Excellence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop"
                  alt="Solar Engineering"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <div className="text-4xl font-black text-green-400 mb-2">99.8%</div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">System Uptime Recorded</div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="font-heading font-black text-4xl mb-8 uppercase tracking-tighter">
                <span className="text-primary">The Engineering</span> <span className="text-solar-light">Difference.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'IoT-Enabled Monitoring', desc: 'Every on-grid system comes with real-time app tracking to monitor every watt generated.' },
                  { title: 'TUV Nord Certified Hardware', desc: 'We only deploy Tier-1 Bloomberg listed modules with certified mechanical load ratings.' },
                  { title: 'Micro-Grid Specialization', desc: 'Capable of designing complex off-grid island systems for high-security and industrial zones.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-1 bg-green-500/30" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading font-black text-4xl mb-4 italic uppercase">
              <span className="text-primary">Common</span> <span className="text-solar-light">Inquiries</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Get expert answers to the most frequent questions about transitioning to solar energy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: 'How long does a typical installation take?', a: 'Residential systems (3kW-10kW) take 2-3 days for physical installation and 15-20 days for net-metering approvals.' },
              { q: 'What is the lifespan of a solar plant?', a: 'Tier-1 panels are warranted for 25 years with a performance output of at least 80% even in year 25.' },
              { q: 'Does solar work during rainy days?', a: 'Yes. Modern panels can generate power from diffused sunlight on cloudy days, though at reduced capacity.' },
              { q: 'Are there any government subsidies?', a: 'Yes. Residential on-grid systems qualify for MNRE central subsidies, which we help you process seamlessly.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 border-b-4 border-b-green-500/20">
                <h4 className="font-bold text-xl mb-4 text-slate-900">Q: {faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl mb-4 uppercase">
              <span className="text-primary">Our Simple</span> <span className="text-solar-light">Solar Process</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Going solar shouldn't be complicated. We guide you through every step.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-16" />
            {[
              { step: '01', title: 'Consultation', desc: 'We analyze your current energy bills and physical site conditions to design the perfect system capacity.' },
              { step: '02', title: 'Design & Engineering', desc: 'Our engineers create a detailed blueprint and handle all necessary government subsidy applications.' },
              { step: '03', title: 'Installation', desc: 'Expert in-house technicians install your premium hardware with high precision and safety standards.' },
              { step: '04', title: 'Maintenance', desc: 'We provide dedicated post-installation support to ensure your system performs at peak efficiency for 25+ years.' }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white border-4 border-green-500 text-green-600 font-black text-xl rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-all shadow-lg">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial/Industrial CTA */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-6 uppercase tracking-tighter">Looking for Bulk Solar Solutions?</h2>
          <p className="text-white/80 text-lg mb-8">We specialize in large-scale commercial and industrial solar setups with high ROI and technical complexity.</p>
          <Link to="/free-consultation" className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-xl hover:bg-slate-900 hover:text-white transition-all">
            Request Corporate Proposal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
