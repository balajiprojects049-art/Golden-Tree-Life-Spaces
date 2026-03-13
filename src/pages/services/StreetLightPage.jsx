import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiZap, FiCheckCircle, FiShield, FiCpu, FiTrendingDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const StreetLightPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-street-light.png"
            alt="Integrated Solar Street Light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/97 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                <FiMoon className="animate-pulse" /> Brilliantly Efficient
              </div>
              <h1 className="font-heading font-black text-6xl md:text-8xl mb-8 leading-[0.9] text-white">
                Integrated <br /> <span className="text-yellow-400">Solar Power.</span>
              </h1>
              <p className="text-slate-400 text-xl mb-12 font-light leading-relaxed">
                New generation autonomous lighting with integrated monocrystalline panels and 
                maintenance-free LiFePO4 storage. Professional grade illumination for smart infrastructures.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(250,204,21,0.3)]"
                >
                  Request Quotation
                </Link>
                <div className="flex items-center gap-4 text-slate-400 border-l border-slate-800 pl-6">
                  <div className="text-2xl font-black text-white">IP66</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest leading-tight">Weather <br />Proofing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Tech Section */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="font-heading font-black text-4xl mb-8 text-yellow-400 uppercase tracking-tighter italic italic-none">The Engineering <span className="text-white">Difference</span></h2>
              <div className="text-slate-400 space-y-6 text-lg leading-relaxed">
                <p>
                  Our <strong>Integrated Solar Street Lights</strong> are housed in a high-grade <strong>Aluminum Extrusion body</strong> which acts as a superior heat sink, ensuring maximum luminaire life and LED efficiency even in peak summer temperatures.
                </p>
                <p>
                  Equipped with <strong>Secondary Optics</strong>, these units offer precise light distribution (Type II/III) to eliminate dark spots and glare. The system is managed by an <strong>MPPT Charge Controller</strong>, harvesting 30% more energy compared to standard PWM systems.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-12">
                  <div className="bg-slate-950/50 p-6 rounded-2xl border border-yellow-500/10 transition-colors hover:border-yellow-500/30">
                    <h4 className="font-bold text-white mb-2 uppercase text-sm">IK 08 Rating</h4>
                    <p className="text-xs leading-relaxed">Impact resistant polycarbonate lens provides extreme durability in public spaces.</p>
                  </div>
                  <div className="bg-slate-950/50 p-6 rounded-2xl border border-yellow-500/10 transition-colors hover:border-yellow-500/30">
                    <h4 className="font-bold text-white mb-2 uppercase text-sm">Hybrid Option</h4>
                    <p className="text-xs leading-relaxed">Available with AC-Solar hybrid controllers for 100% reliability during extended monsoon.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Battery Tech', val: 'LiFePO4', icon: FiZap, sub: 'Maintenance Free' },
                { label: 'Luminaire Efficacy', val: '140 lm/W', icon: FiTrendingDown, sub: 'Ultra Efficient' },
                { label: 'Control Logic', val: 'MPPT', icon: FiCpu, sub: 'Peak Charging' },
                { label: 'Protection', val: 'IP66/IK08', icon: FiShield, sub: 'Military Grade' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-3xl flex flex-col items-center text-center group hover:border-yellow-400/30 transition-all duration-500">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all">
                    <item.icon className="text-2xl" />
                  </div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-xl font-black text-white mb-1 uppercase tracking-tight italic italic-none">{item.val}</div>
                  <div className="text-[10px] text-yellow-500 font-bold uppercase tracking-tighter">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 italic italic-none uppercase">Designed for <span className="text-yellow-400">Performance</span></h2>
            <p className="text-slate-500 text-lg">Engineered to meet the highest standards of urban, industrial, and residential lighting requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              { title: 'Precise Distribution', desc: 'Custom secondary optics ensure uniform light distribution, reducing light pollution and maximizing visibility.', icon: FiSun },
              { title: 'Thermal Management', desc: 'Anodized aluminum extrusion body ensures rapid heat dissipation for sustained LED performance over 50,000 hours.', icon: FiZap },
              { title: 'Smart Energy Save', desc: 'Integrated PIR motion detectors dim the light to 30% during inactivity, extending battery life significantly.', icon: FiMoon }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 bg-slate-900/40 border border-slate-800 hover:border-yellow-400/50 transition-all duration-500 text-center rounded-[2.5rem]"
              >
                <div className="w-20 h-20 bg-slate-950 text-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl border border-yellow-500/5 group-hover:border-yellow-400">
                  <f.icon className="text-3xl" />
                </div>
                <h3 className="font-heading font-black text-2xl mb-4 text-white uppercase tracking-tight italic italic-none">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Product Series Matrix */}
          <div className="space-y-12">
            {/* Semi-Integrated Series */}
            <div className="bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl">
              <div className="p-10 bg-gradient-to-r from-slate-900 to-emerald-900/10 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white italic italic-none tracking-tighter uppercase">Solar Semi-Integrated <span className="text-emerald-400">(Two-in-One)</span></h3>
                  <p className="text-slate-500 font-bold text-[10px] mt-1 tracking-[0.2em] uppercase">High Performance External Panel Series</p>
                </div>
                <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                  Maximum Charging Efficiency
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-950/50 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-mono">
                      <th className="p-8">Light Wattage</th>
                      <th className="p-8">Battery (12.8V LiFePO4)</th>
                      <th className="p-8">Solar Panel (W)</th>
                      <th className="p-8 text-right">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { w: '9W', b: '6 Ah', p: '40W', a: 'Garden / Gate' },
                      { w: '12W', b: '12 Ah', p: '40W', a: 'Residential' },
                      { w: '15W', b: '12 Ah', p: '50W', a: 'Driveways' },
                      { w: '18W', b: '18 Ah', p: '60W', a: 'Internal Roads' },
                      { w: '20W', b: '18 Ah', p: '60W', a: 'Campus' },
                      { w: '24W', b: '24 Ah', p: '80W', a: 'Warehouses' },
                      { w: '30W', b: '30 Ah', p: '110W', a: 'Main Roads' },
                      { w: '40W', b: '36 Ah', p: '165W', a: 'Highways' },
                      { w: '50W', b: '42 Ah', p: '165W', a: 'Smart Infrastructure' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-emerald-400/5 transition-colors group">
                        <td className="p-8">
                          <div className="font-black text-white group-hover:text-emerald-400 transition-colors text-xl italic italic-none">{row.w}</div>
                        </td>
                        <td className="p-8 text-slate-300 font-mono text-sm font-bold uppercase">{row.b}</td>
                        <td className="p-8 text-emerald-400 font-black italic italic-none">{row.p}</td>
                        <td className="p-8 text-right">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{row.a}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* All-In-One Series */}
            <div className="bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl">
              <div className="p-10 bg-gradient-to-r from-slate-900 to-yellow-900/10 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white italic italic-none tracking-tighter uppercase">Solar All in One <span className="text-yellow-400">(AIO)</span></h3>
                  <p className="text-slate-500 font-bold text-[10px] mt-1 tracking-[0.2em] uppercase">Compact Integrated Design Series</p>
                </div>
                <div className="px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-[10px] font-black uppercase tracking-widest">
                  Ease of Installation
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-950/50 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-mono">
                      <th className="p-8">Light Wattage</th>
                      <th className="p-8">Battery (12.8V LiFePO4)</th>
                      <th className="p-8">Solar Panel (W)</th>
                      <th className="p-8 text-right">Ideal For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { w: '12W', b: '12 Ah', p: '40W', a: 'Courtyards' },
                      { w: '15W', b: '12 Ah', p: '50W', a: 'Apartments' },
                      { w: '18W', b: '18 Ah', p: '60W', a: 'Parks' },
                      { w: '20W', b: '18 Ah', p: '60W', a: 'Car Parking' },
                      { w: '24W', b: '24 Ah', p: '60W', a: 'Hotels' },
                      { w: '30W', b: '30 Ah', p: '80W', a: 'Institutions' },
                      { w: '40W', b: '36 Ah', p: '80W', a: 'Public Spaces' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-yellow-400/5 transition-colors group">
                        <td className="p-8">
                          <div className="font-black text-white group-hover:text-yellow-400 transition-colors text-xl italic italic-none">{row.w}</div>
                        </td>
                        <td className="p-8 text-slate-300 font-mono text-sm font-bold uppercase">{row.b}</td>
                        <td className="p-8 text-yellow-400 font-black italic italic-none">{row.p}</td>
                        <td className="p-8 text-right">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{row.a}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Commercial terms footer */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-[2rem] p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-2">Warranty</div>
                  <div className="text-white font-bold">5 Years (Off-site)</div>
                  <div className="text-slate-500 text-[10px] mt-1 uppercase">Comprehensive System Coverage</div>
                </div>
                <div>
                  <div className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-2">Service Terms</div>
                  <div className="text-white font-bold">30% Advance</div>
                  <div className="text-slate-500 text-[10px] mt-1 uppercase">70% Against Delivery</div>
                </div>
                <div>
                  <div className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-2">Standards</div>
                  <div className="text-white font-bold">GST 12% Extra</div>
                  <div className="text-slate-500 text-[10px] mt-1 uppercase">Taxation as per Gov. Norms</div>
                </div>
                <div>
                  <Link to="/contact" className="w-full bg-white text-slate-950 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all text-center block shadow-lg">
                    Check Bulk Prices
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreetLightPage;



