import { motion } from 'framer-motion';
import { FiBattery, FiShield, FiSun, FiCheckCircle, FiCloudOff, FiZap, FiMapPin, FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const OffGridPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-off-grid.png"
            alt="Off-Grid Solar System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-[1px] bg-amber-500"></span>
                <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Energy Freedom</span>
              </div>
              <h1 className="font-heading font-black text-6xl md:text-8xl mb-8 leading-tight text-white">
                Power Beyond <br /> <span className="text-amber-500">The Limits</span>
              </h1>
              <p className="text-slate-300 text-xl md:text-2xl mb-12 font-light leading-relaxed">
                Standalone energy solutions for the bold. High-capacity storage for remote residences,
                farms, and industrial sites where the grid simply cannot reach.
              </p>
              <Link to="/contact" className="inline-block bg-amber-500 text-slate-950 px-10 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-white transition-all shadow-xl shadow-amber-500/20">
                Go Off-Grid Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-heading font-black text-4xl mb-8 text-amber-500">The Ultimate Independence</h2>
              <div className="text-slate-400 space-y-6 text-lg">
                <p>
                  An <strong>Off-Grid Solar System</strong> is a completely autonomous energy powerhouse. It is designed for those who value total self-reliance or for locations where utility grid access is either impractical or prohibitively expensive.
                </p>
                <p>
                  The system works by capturing sunlight through high-performance PV modules and channeling it through an intelligent <strong>Charge Controller</strong>. This energy is then stored in a robust battery bank, ensuring you have steady AC power even during the dead of night or long spells of overcast weather.
                </p>
                <p>
                  By choosing Off-Grid, you are effectively opting out of the traditional utility network. No more rising electricity tariffs, no more grid-reliance, and absolute immunity to local power outages or natural disasters.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Zero Grid Bills', icon: FiCloudOff, desc: 'Cut ties with the utility company and save 100% on monthly bills forever.' },
                { label: 'Remote Ready', icon: FiMapPin, desc: 'Perfect for farmhouses, cabins, and mobile setups in any terrain.' },
                { label: 'Battery Logic', icon: FiCpu, desc: 'Advanced MPPT tracking ensures your storage is charged 30% faster.' },
                { label: 'Total Resilience', icon: FiShield, desc: 'Your power stays on even when the rest of the world goes dark.' }
              ].map((box, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl group hover:border-amber-500 transition-colors">
                  <box.icon className="text-3xl text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-white mb-2">{box.label}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Components vs Capability Section */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="font-heading font-black text-4xl mb-12 border-l-4 border-amber-500 pl-6 uppercase tracking-tight">
                Industrial-Grade <br /> Hardware
              </h2>
              <div className="space-y-12">
                {[
                  { icon: FiBattery, title: 'Deep Cycle Storage', desc: 'We use premium Lithium-ion and GEL battery technology optimized for high-discharge cycles and a 10+ year lifespan.' },
                  { icon: FiZap, title: 'Pure Sine Wave Inverters', desc: 'Our inverters provide grid-quality power, ensuring your sensitive electronics and heavy appliances run smoothly.' },
                  { icon: FiShield, title: 'Rugged Enclosures', desc: 'All system components are housed in IP65 rated, weather-optimized enclosures built for extreme field conditions.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="bg-slate-900 border border-slate-800 w-16 h-16 flex items-center justify-center shrink-0">
                      <item.icon className="text-2xl text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 italic">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-3xl p-12 border border-slate-800 self-center">
              <h3 className="font-heading font-bold text-2xl mb-8 text-amber-500">System Sizing Logic</h3>
              <p className="text-slate-400 mb-8 text-sm">
                Success in Off-Grid living requires meticulous planning. We calculate your "Daily Watt-Hour" load to ensure your system never fails.
              </p>
              <ul className="space-y-6">
                {[
                  '3 Days of Autonomy (Battery backup for rains/clouds)',
                  'Scalable PV arrays for future expansions',
                  'Automated low-voltage disconnect protection',
                  'Synchronized backup generator support (optional)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <FiCheckCircle className="text-amber-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Off-Grid Performance Matrix */}
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/10 blur-[100px] -z-10" />
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
              <div className="p-8 border-b border-slate-800 bg-slate-900/50">
                <h3 className="text-2xl font-bold uppercase italic italic-none tracking-tighter">Power Capability Matrix</h3>
                <p className="text-slate-500 text-sm mt-1">Estimating what your standalone system can handle</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-widest font-mono">
                      <th className="p-6">System Size</th>
                      <th className="p-6">Battery Storage</th>
                      <th className="p-6">Typical Load</th>
                      <th className="p-6">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { size: '3kW System', storage: '9.6 kWh', load: 'Lights, Fans, TV, Fridge', for: 'Small Remote Homes' },
                      { size: '5kW System', storage: '14.4 kWh', load: '+ Washing Machine, Pump', for: 'Mid-size Farmhouse' },
                      { size: '10kW System', storage: '28.8 kWh', load: '+ Air Conditioning (Hybrid)', for: 'Large Estates' },
                      { size: '20kW+ System', storage: 'Custom Array', load: 'Industrial equipment', for: 'Resorts & Industry' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-amber-500/5 transition-colors">
                        <td className="p-6 font-bold text-amber-500">{row.size}</td>
                        <td className="p-6 text-slate-300 font-mono text-sm">{row.storage}</td>
                        <td className="p-6 text-slate-400 text-sm">{row.load}</td>
                        <td className="p-6 text-white font-medium italic">{row.for}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OffGridPage;



