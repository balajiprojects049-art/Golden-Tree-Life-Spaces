import { motion } from 'framer-motion';
import { FiDroplet, FiSun, FiCheckCircle, FiShield, FiTrendingUp, FiThermometer, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WaterHeaterPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-water-heater.png"
            alt="Solar Water Heater"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-cyan-900/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/80 text-white rounded-lg shadow-lg">
                  <FiDroplet />
                </div>
                <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">Advanced Thermal Tech</span>
              </div>
              <h1 className="font-heading font-black text-5xl md:text-7xl text-white mb-8 leading-tight">
                Hot Water, <br /> <span className="text-cyan-400">Zero Electric Bill.</span>
              </h1>
              <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                Harness high-efficiency solar thermal energy to provide your family with 24/7 hot water.
                Our systems save up to 75% on total water heating costs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-cyan-500 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-cyan-500/20 hover:bg-white hover:text-cyan-600 transition-all">
                  Get A Free Quote
                </Link>
                <div className="flex items-center gap-2 text-cyan-400 font-medium px-4 py-2 border border-cyan-500/40 rounded-full bg-white/5 backdrop-blur">
                  <FiCheckCircle /> MNRE Approved
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Education Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="font-heading font-black text-4xl text-slate-900 mb-8 italic">The Science of Solar Heating</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Our solar water heaters utilize sophisticated <strong>Evacuated Tube Collector (ETC)</strong> technology. Each tube acts like a giant thermos—absorbing sunlight and converting it into heat, then trapping that heat within a vacuum layer to prevent any loss back to the atmosphere.
                </p>
                <p>
                  For areas with high wind or industrial requirements, we also provide <strong>Flat Plate Collector (FPC)</strong> systems, known for their rugged durability and high-pressure performance.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <FiThermometer className="text-cyan-600 text-2xl mb-3" />
                    <h4 className="font-bold text-slate-900 mb-1">Max Retention</h4>
                    <p className="text-xs">High-density PUF insulation keeps water hot for up to 48 hours.</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <FiSettings className="text-cyan-600 text-2xl mb-3" />
                    <h4 className="font-bold text-slate-900 mb-1">Scale Resistant</h4>
                    <p className="text-xs">Optional enamel-coated tanks for areas with hard water content.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614947702046-8889a7702f50?q=80&w=2070&auto=format&fit=crop"
                alt="Solar Heater Installation"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="font-heading font-black text-4xl text-slate-900 mb-4 uppercase tracking-tighter">Why Settle for Less?</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {[
              { title: 'Zero Maintenance', desc: 'Passive thermal design means no moving parts and no periodic breakdowns.', icon: FiSun },
              { title: 'Food-Grade Tank', desc: 'Inner tanks built with premium SS304/L stainless steel for absolute hygiene.', icon: FiShield },
              { title: 'Rapid Payback', desc: 'A system that pays for itself in 18-24 months through electricity savings.', icon: FiTrendingUp }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-10 rounded-3xl bg-cyan-50/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-cyan-100"
              >
                <div className="w-20 h-20 bg-white shadow-lg text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <f.icon className="text-4xl" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Thermal Performance Matrix */}
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="p-12 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-3xl font-black text-white italic italic-none tracking-tighter uppercase">Thermal Capability Matrix</h3>
                <p className="text-cyan-500 font-mono text-xs mt-2">TECHNICAL CROSS-SECTION BY USAGE</p>
              </div>
              <Link to="/contact" className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-full hover:bg-white hover:text-cyan-600 transition-all text-sm">
                Download Technical Datasheet
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800">
              {[
                { label: 'System Type', val: 'ETC (Evacuated Tube)', sub: 'Best for Cold Climates' },
                { label: 'Storage Capacity', val: '100LPD to 5000LPD+', sub: 'Scalable for Industry' },
                { label: 'Max Heat Gain', val: '80°C - 85°C', sub: 'In standard sunlight' },
                { label: 'Tank Material', val: 'SS304 / Enamel Coat', sub: 'Hard Water Compatible' }
              ].map((spec, i) => (
                <div key={i} className="p-8 hover:bg-white/5 transition-colors">
                  <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.2em] mb-4">{spec.label}</div>
                  <div className="text-xl font-bold text-white mb-1">{spec.val}</div>
                  <div className="text-slate-500 text-xs italic">{spec.sub}</div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto bg-white/5">
              <table className="w-full text-left border-t border-slate-800">
                <thead>
                  <tr className="text-slate-400 text-[10px] uppercase tracking-widest border-b border-slate-800">
                    <th className="p-6">Feature</th>
                    <th className="p-6 text-cyan-500">ETC System</th>
                    <th className="p-6 text-cyan-500">FPC System</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-800">
                  {[
                    ['Cold Weather Efficiency', 'Superior (Vacuum Insulation)', 'Average'],
                    ['Hard Water Tolerance', 'Moderate (Requires Scale Guard)', 'Excellent'],
                    ['Durability', 'High', 'Industrial Shielded'],
                    ['Cost Efficiency', 'Best Value', 'Premium Investment']
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-bold text-slate-300">{row[0]}</td>
                      <td className="p-6 text-slate-400">{row[1]}</td>
                      <td className="p-6 text-slate-400">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterHeaterPage;



