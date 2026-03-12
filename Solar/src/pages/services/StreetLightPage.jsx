import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiZap, FiCheckCircle, FiShield, FiCpu, FiTrendingDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const StreetLightPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Night City Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Glowing background circles for 'light' effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest">
                <FiMoon className="animate-pulse" /> Urban Night Solutions
              </div>
              <h1 className="font-heading font-black text-6xl md:text-8xl mb-8 leading-[0.9]">
                Light The <br /> <span className="text-yellow-400">Future.</span>
              </h1>
              <p className="text-slate-400 text-xl mb-12 max-w-lg font-light leading-relaxed">
                Autonomous, intelligent, and zero-maintenance lighting for the modern world. Dusk-to-dawn reliability powered by clean solar energy.
              </p>
              <Link to="/contact" className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all inline-block shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                Get Bulk Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1549495763-7eb9273cc0d1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Solar Street Light" 
                  className="w-full h-auto brightness-75 hover:brightness-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-yellow-500/5 blur-2xl rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Tech Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
               <h2 className="font-heading font-black text-4xl mb-8 text-yellow-400 uppercase tracking-tighter">Smart Illumination</h2>
               <div className="text-slate-400 space-y-6 text-lg">
                <p>
                  Our <strong>All-In-One Solar Street Lights</strong> are the pinnacle of urban lighting technology. By integrating high-efficiency monocrystalline solar panels, ultra-bright LED luminaires, and long-life Lithium-ion storage into a single housing, we eliminate the need for complicated underground wiring and recurring electricity costs.
                </p>
                <p>
                  Each unit is equipped with a <strong>Microwave Motion Sensor</strong>. During times of no activity, the light dims to 30% brightness to conserve battery, instantly jumping back to 100% when a vehicle or pedestrian is detected.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-12 font-mono">
                   <div className="flex items-center gap-3 text-sm text-yellow-500/80 border border-yellow-500/20 p-4 rounded bg-yellow-500/5">
                      <FiCpu className="shrink-0" /> AUTO-SYNC SENSORS
                   </div>
                   <div className="flex items-center gap-3 text-sm text-yellow-500/80 border border-yellow-500/20 p-4 rounded bg-yellow-500/5">
                      <FiShield className="shrink-0" /> IP65 WATERPROOF
                   </div>
                </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Battery Type', val: 'LiFePO4', icon: FiZap },
                { label: 'Work Mode', val: 'Auto', icon: FiSun },
                { label: 'Lumens', val: '180lm/W', icon: FiTrendingDown },
                { label: 'Housing', val: 'Aluminum', icon: FiShield }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                  <item.icon className="text-yellow-500 mb-4 text-3xl" />
                  <div className="text-slate-500 text-xs uppercase mb-1">{item.label}</div>
                  <div className="text-xl font-bold text-white tracking-widest">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Grid Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {[
              { title: 'Dusk to Dawn', desc: 'Intelligent light sensors automatically trigger illumination at sunset and shut down at dawn for 100% autonomous operation.', icon: FiSun },
              { title: 'LiFePO4 Storage', desc: 'Latest lithium iron phosphate battery tech provides 2500+ charge cycles and 5+ years of zero-maintenance life.', icon: FiZap },
              { title: 'Motion Dimming', desc: 'Smart PIR/Microwave sensors dim lights when no motion is detected, extending battery backup by up to 2 rainy days.', icon: FiMoon }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 bg-slate-900 border border-slate-800 hover:border-yellow-400/50 transition-all duration-500 text-center rounded-3xl"
              >
                <div className="w-16 h-16 bg-slate-800 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all duration-500 shadow-lg">
                  <f.icon className="text-3xl" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-white uppercase tracking-tight">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Lighting Intensity Matrix */}
          <div className="bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
             <div className="p-10 bg-gradient-to-r from-slate-900 to-yellow-900/10 border-b border-slate-800">
                <h3 className="text-2xl font-black text-white italic italic-none tracking-tighter uppercase">Lighting Intensity Matrix</h3>
                <p className="text-yellow-500 font-bold text-[10px] mt-1 tracking-widest">SYSTEM PERFORMANCE DATA</p>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-950/50 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-mono">
                      <th className="p-6">Model Wattage</th>
                      <th className="p-6">Luminous Flux</th>
                      <th className="p-6">Mounting Height</th>
                      <th className="p-6">Illumination Area</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {[
                      { w: '30W LED', lm: '5400 lm', h: '4-5 Meters', a: '10-15 Meters' },
                      { w: '60W LED', lm: '10800 lm', h: '6-8 Meters', a: '20-25 Meters' },
                      { w: '100W LED', lm: '18000 lm', h: '8-10 Meters', a: '30-35 Meters' },
                      { w: '120W+ LED', lm: 'High Intensity', h: '12+ Meters', a: 'Custom Grid' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-yellow-400/5 transition-colors group">
                        <td className="p-6 font-black text-yellow-400 group-hover:translate-x-1 transition-transform">{row.w}</td>
                        <td className="p-6 text-slate-300 font-mono text-sm">{row.lm}</td>
                        <td className="p-6 text-slate-400 text-sm">{row.h}</td>
                        <td className="p-6 text-white font-medium italic">{row.a}</td>
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

export default StreetLightPage;



