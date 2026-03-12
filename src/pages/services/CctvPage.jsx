import { motion } from 'framer-motion';
import { FiCamera, FiWifi, FiSmartphone, FiVideo, FiShield, FiCpu, FiDatabase, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CctvPage = () => {
  return (
    <div className="bg-[#050a15] text-white min-h-screen selection:bg-blue-500/30">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-cctv.png"
            alt="Solar CCTV Surveillance System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a15]/97 via-[#050a15]/80 to-[#050a15]/30" />
          {/* Tech grid overlay */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-600/30 text-blue-400 text-xs font-mono mb-8">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                SYSTEM STATUS: SECURED
              </div>
              <h1 className="font-heading font-black text-6xl md:text-8xl mb-8 tracking-tight uppercase text-white">
                Solar <span className="text-blue-500">Sentinel</span>
              </h1>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
                Self-powered surveillance for the digital age. 24/7 HD monitoring with zero
                dependency on grid or wires.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-600/20">
                  DEPLOY SYSTEM
                </Link>
                <div className="text-xs font-mono text-slate-500">
                  4G/LTE Connected <br />
                  AI-Powered Detection
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Tech Specs */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-heading font-black text-4xl mb-8 uppercase tracking-tighter italic italic-none">Always Watched, <br /><span className="text-blue-500">Always Connected</span></h2>
              <div className="text-slate-400 space-y-6 text-lg leading-relaxed">
                <p>
                  Our <strong>Solar CCTV Sentinel</strong> is the ultimate defense for remote properties, agricultural lands, and critical infrastructure. Equipped with its own high-efficiency solar panel and high-capacity internal battery, it functions completely off-the-grid.
                </p>
                <p>
                  Connectivity is never an issue. With integrated <strong>4G/LTE modules</strong>, the camera transmits live 4K video feeds directly to your smartphone through an encrypted cloud tunnel. No Wi-Fi, no cables, no limits.
                </p>
                <p>
                   Advanced <strong>On-Edge AI algorithms</strong> distinguish between human movement, vehicles, and swaying trees, sending you only relevant, real-time alerts.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Connectivity', val: '4G/LTE', icon: FiWifi },
                 { label: 'Storage', val: 'Cloud + SD', icon: FiDatabase },
                 { label: 'AI Logic', val: 'Neural Net', icon: FiCpu },
                 { label: 'Night Vision', val: 'Laser IR', icon: FiActivity }
               ].map((box, i) => (
                 <div key={i} className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-xl hover:bg-blue-600/10 transition-colors">
                   <box.icon className="text-blue-500 text-2xl mb-4" />
                   <div className="text-slate-500 text-[10px] uppercase font-mono mb-1">{box.label}</div>
                   <div className="text-xl font-bold font-mono tracking-tighter">{box.val}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Specs */}
      <section className="py-24 border-t border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: FiWifi, title: 'Cellular Ready', desc: 'Remote access from anywhere via high-speed 4G modules. Perfect for remote farm monitoring.' },
              { icon: FiVideo, title: '4K Full Color', desc: 'Crystal clear full-color night vision even in absolute pitch black environments.' },
              { icon: FiCpu, title: 'Humanoid Detection', desc: 'Smart algorithms recognize human outlines to eliminate 99% of false motion alarms.' },
              { icon: FiShield, title: 'AES Encryption', desc: 'Bank-grade cloud encryption ensures your private data stays private and secure.' }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-blue-900/10 border border-blue-900/30 rounded-xl hover:bg-blue-600/10 hover:border-blue-500/50 transition-all">
                <f.icon className="text-3xl text-blue-500 mb-6" />
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide italic italic-none">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Surveillance Specifications Matrix */}
          <div className="bg-slate-900 rounded-[2rem] border border-blue-500/20 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
             <div className="p-10 bg-blue-900/20 border-b border-blue-900/30">
                <h3 className="text-2xl font-black text-white italic italic-none tracking-tighter uppercase">Sentinel Spec Matrix</h3>
                <p className="text-blue-400 font-mono text-[10px] mt-1 tracking-widest uppercase">Hardware Configuration - v2.4</p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-blue-900/40">
                {[
                  { label: 'Image Resolution', val: '4K / 8MP', sub: 'Ultra High Definition' },
                  { label: 'Solar Input', val: '60W Monocrystal', sub: 'High Temp Optimized' },
                  { label: 'LTE Frequency', val: 'B1/B3/B5/B8/B40', sub: 'Global Band Support' },
                  { label: 'Cloud Buffer', val: '30 Days Rolling', sub: 'AES-256 Protected' }
                ].map((spec, i) => (
                  <div key={spec.label} className="p-10 hover:bg-blue-600/5 transition-all group">
                    <div className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.3em] mb-4 group-hover:translate-x-1 transition-transform">{spec.label}</div>
                    <div className="text-2xl font-black text-white mb-2">{spec.val}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">{spec.sub}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CctvPage;



