import { motion } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiCheckCircle, FiZap, FiLock, FiTerminal, FiSun, FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SolarFencingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-solar-fencing.png"
            alt="Solar Electric Fencing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/97 via-slate-900/80 to-slate-900/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <FiLock className="animate-pulse" /> Security Protocol Active
              </div>
              <h1 className="font-heading font-black text-5xl md:text-8xl mb-8 tracking-tighter text-white">
                Total <span className="text-emerald-400 font-black">Defense</span>
              </h1>
              <p className="text-gray-400 text-xl mb-12 font-light leading-relaxed">
                Smart, non-lethal, and self-powered perimeter security. Create a psychological and
                physical barrier that stops intruders before they even touch your boundary.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-emerald-500/20">
                  System Design
                </Link>
                <div className="flex items-center gap-3 text-slate-400 text-sm italic">
                  <FiAlertTriangle className="text-emerald-400" />
                  Compliant with IEC 60335-2-76
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Security Breakdown */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Voltage Pulse', val: '10,000V', icon: FiZap },
                  { label: 'Shock Duration', val: '0.03ms', icon: FiTerminal },
                  { label: 'Power Source', val: 'Solar/DC', icon: FiSun },
                  { label: 'Alert Response', val: 'Instant', icon: FiAlertCircle }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
                    <item.icon className="text-emerald-600 mb-4 text-xl" />
                    <div className="text-slate-500 text-xs font-mono uppercase mb-1">{item.label}</div>
                    <div className="text-2xl font-black text-slate-900">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading font-black text-4xl mb-8 uppercase tracking-tight italic italic-none">A Deterrent <span className="text-emerald-500">Like No Other</span></h2>
              <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
                <p>
                  <strong>Solar Power Fencing</strong> is the most cost-effective and dependable way to secure vast industrial complexes, agricultural lands, and high-security residences.
                </p>
                <p>
                  The system functions by delivering a high-voltage (up to 10kV) but <strong>non-lethal</strong> pulse once every second. This creates a powerful psychological barrier. While the shock is painful enough to deter any human or animal, it is legally compliant and safe because of its incredibly short duration.
                </p>
                <p>
                  Unlike traditional barbed wires, our solar fence is "intelligent." If an intruder attempts to cut the wire or short the system, an <strong>integrated alarm protocol</strong> triggers sirens and sends instant notifications to your security team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 mb-24">
            {[
              { title: 'Fence Energizers', desc: 'The heart of the system—converting solar DC into regulated high-voltage pulses.', icon: FiZap },
              { title: 'Intrusion Alert', desc: 'Loud 120dB alarm triggers immediately if any wire is tampered with or cut.', icon: FiAlertTriangle },
              { title: 'Battery Backup', desc: 'Integrated storage for 24/7 protection without sunlight for up to 3 days.', icon: FiCheckCircle },
              { title: 'Legal Compliant', desc: 'Built to IEC standards ensuring maximum deterrence with zero legal liability.', icon: FiShield }
            ].map((f, i) => (
              <div key={i} className="p-10 bg-white border border-slate-100 hover:bg-emerald-600 hover:text-white group transition-all duration-300">
                <f.icon className="text-3xl text-emerald-600 group-hover:text-white mb-6 transition-colors" />
                <h4 className="font-bold text-lg mb-2 uppercase tracking-tight italic italic-none">{f.title}</h4>
                <p className="text-sm text-slate-500 group-hover:text-emerald-100 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Security Specifications Matrix */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-10 border-b border-slate-800 bg-emerald-900/10">
              <h3 className="text-2xl font-black text-white italic italic-none tracking-tighter uppercase">Security Protocol Matrix</h3>
              <p className="text-emerald-500 font-mono text-[10px] mt-1">ENGINEERING DATA FOR PERIMETER PROTECTION</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800">
              {[
                { label: 'Voltage Output', val: '8kV - 10kV', sub: 'Non-Lethal DC Pulse' },
                { label: 'Pulse Frequency', val: '1.2 Seconds', sub: 'Safety Compliant interval' },
                { label: 'Fence Material', val: 'High Tensile Galv.', sub: '12.5 Gauge Steel' },
                { label: 'System Backup', val: '72+ Hours', sub: 'Total Grid Independence' }
              ].map((spec, i) => (
                <div key={i} className="p-8 hover:bg-emerald-500/5 transition-colors">
                  <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-3">{spec.label}</div>
                  <div className="text-xl font-bold text-white mb-1">{spec.val}</div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold">{spec.sub}</div>
                </div>
              ))}
            </div>
            <div className="p-10 bg-slate-950/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <h4 className="text-white font-bold mb-2 uppercase italic italic-none">Automatic Alert Logic</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">System triggers instant sirens and sends mobile alerts if resistance drops below 500Ω or if voltage is shorted to ground—ensuring 100% boundary integrity.</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-emerald-600 text-white font-black text-xs uppercase tracking-widest rounded shadow-xl"
                >
                  Request Site Survey
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarFencingPage;



