import { motion } from 'framer-motion';
import { FiZap, FiHome, FiCheckCircle, FiTrendingDown, FiShield, FiArrowRight, FiActivity, FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const OnGridPage = () => {
  return (
    <div className="bg-white">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-on-grid.png"
            alt="On-Grid Solar System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-600/80 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 border border-blue-500/40">
                Grid-Interactive Solutions
              </span>
              <h1 className="font-heading font-black text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
                Smart <span className="text-blue-400">On-Grid</span> <br />Connectivity
              </h1>
              <p className="text-gray-300 text-xl mb-6 leading-relaxed">
                The most efficient way to solarize. Connect directly to the utility grid and watch your meter run backwards while saving up to 90% on your monthly bills.
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed italic">
                "Ideally suited for residences and businesses with a stable utility grid, offering the fastest ROI in the solar industry."
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2 group shadow-xl shadow-blue-600/20">
                  Calculate My Savings <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-4xl text-slate-900 mb-8">How it Transforms Your Energy Consumption</h2>
              <div className="prose prose-slate lg:prose-lg text-slate-600 max-w-none">
                <p>
                  An <strong>On-Grid Solar System</strong> is your primary gateway to energy independence within the urban landscape. Unlike traditional setups, this system is directly integrated with your local utility provider. 
                </p>
                <p>
                  During the peak daylight hours, your solar panels generate pure DC electricity, which is then converted by high-efficiency inverters into AC power for your home or business. If your generation exceeds your consumption, the <strong>Net-Metering</strong> mechanism automatically exports the surplus to the grid, earning you credits that significantly offset your night-time usage.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl">
                  <p className="m-0 font-medium text-blue-900">
                    "Our customers typically see an ROI of 25–30%, meaning for every ₹1,00,000 invested, you effectively earn back ₹25,000–₹30,000 annually through bill reductions."
                  </p>
                </div>
                <p>
                  Since these systems eliminate the need for expensive battery banks, they are remarkably maintenance-free and carry a much lower initial setup cost compared to Off-Grid solutions. They are the standard for smart cities and industrial units looking for sustainable stability.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Huge Bill Reduction', desc: 'Slash up to 90% of your current electricity costs through export credits.', icon: FiDollarSign },
                { title: 'Seamless Sync', desc: 'Syncs perfectly with grid frequency and even diesel generators if needed.', icon: FiActivity },
                { title: 'Easy Maintenance', desc: 'Zero battery upkeep means your system runs trouble-free for 25+ years.', icon: FiShield },
                { title: 'Govt. Subsidies', desc: 'Eligible for MNRE-approved subsidies and tax benefits for businesses.', icon: FiCheckCircle }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon className="text-xl" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Breakdown Section */}
      <section className="py-24 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-1">
              <h2 className="font-heading font-bold text-4xl text-slate-900 mb-6 underline decoration-blue-600 decoration-4 underline-offset-8">
                The Logic
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                On-grid systems are engineered for urban efficiency. It's a synchronization of three key technologies working in harmony.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Phase Sync', d: 'Inverters sync perfectly with grid frequency and voltage levels.' },
                  { t: 'Safety Cut-off', d: 'Automatic anti-islanding feature ensures lineman safety during grid repairs.' },
                  { t: 'Bi-Directional Meter', d: 'Records both the power you draw and the green energy you contribute.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200">
                    <div className="w-2 h-full bg-blue-600 rounded-full" />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.t}</h4>
                      <p className="text-xs text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                { title: 'Lower Beginning Cost', desc: 'Removal of expensive chemical storage makes this the most affordable entry point into solar.', icon: FiTrendingDown },
                { title: 'MNRE Standards', desc: 'Every installation follows strict government quality examinations and performance standards.', icon: FiCheckCircle },
                { title: 'Remote Monitoring', desc: 'Track your solar generation and export credits in real-time via our dedicated mobile app.', icon: FiActivity },
                { title: 'Scalable Design', desc: 'Easily add more panels as your energy needs grow—without replacing the whole system.', icon: FiHome }
              ].map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <f.icon className="text-3xl" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <div className="bg-slate-900 text-white p-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest italic italic-none">System Specifications</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-slate-100">
               {[
                 { label: 'System Capacity', val: '1kW to 500kW+' },
                 { label: 'Solar Modules', val: 'Mono PERC Half-cut' },
                 { label: 'Inverter Type', val: 'Pure Sine Wave String' },
                 { label: 'Efficiency', val: 'Up to 98.7%' },
                 { label: 'Grid Support', val: '230V / 415V AC' },
                 { label: 'Protection', val: 'IP65 / IP66 Rated' },
                 { label: 'Certification', val: 'MNRE / BIS / UL' },
                 { label: 'Warranty', val: '25 Years Performance' }
               ].map((spec, i) => (
                 <div key={i} className="p-8 border-r border-b border-slate-50 hover:bg-slate-50 transition-colors">
                   <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-2">{spec.label}</div>
                   <div className="text-slate-900 font-bold">{spec.val}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnGridPage;



