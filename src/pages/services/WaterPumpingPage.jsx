import { motion } from 'framer-motion';
import { FiDroplet, FiSun, FiWind, FiTrendingUp, FiCheckCircle, FiShield, FiZap, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WaterPumpingPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Hero Section — min-h-[90vh] full bleed */}
      <section className="relative min-h-[60vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-water-pump.png"
            alt="Solar Water Pumping System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-sky-900/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-widest w-fit">
                Sustainable Agriculture
              </div>
              <h1 className="font-heading font-black text-5xl md:text-7xl text-white mb-8 leading-tight">
                Flow with the <br /> <span className="text-sky-400">Morning Sun.</span>
              </h1>
              <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                Empowering farmers with high-performance solar water pumps. Reliable, fuel-free,
                and designed for life on the field.
              </p>
              <div className="flex items-center gap-8">
                <Link to="/contact" className="bg-sky-500 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-sky-600 shadow-xl shadow-sky-500/20 transition-all">
                  Get System Design
                </Link>
                <div>
                  <div className="text-white font-bold text-xl">100k+ Liters</div>
                  <div className="text-gray-400 text-sm italic">Daily Output Potential</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agricultural Insight Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="font-heading font-black text-4xl text-slate-900 mb-8 italic italic-none">Agriculture Reimagined</h2>
              <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
                <p>
                  Switching to a <strong>Solar Water Pumping System</strong> is the single most impactful decision an modern farmer can make. By eliminating dependency on expensive diesel and unreliable grid power, you secure your harvest's future with the most reliable resource on earth: the Sun.
                </p>
                <p>
                  Our systems utilize high-efficiency <strong>MPPT (Maximum Power Point Tracking)</strong> controllers that ensure your pump operates at peak RPM even during early morning or late afternoon hours. Whether you need a <strong>submersible pump</strong> for deep bore-wells or a <strong>surface pump</strong> for canal irrigation, we provide turnkey solutions.
                </p>
                <div className="bg-sky-50 border-l-4 border-sky-600 p-8 my-10 rounded-r-2xl">
                  <h4 className="font-bold text-sky-900 mb-2 italic italic-none">Drip & Sprinkler Compatibility</h4>
                  <p className="text-sm text-sky-800 m-0 leading-relaxed">
                    Every installation is meticulously designed to integrate seamlessly with modern drip irrigation and sprinkler systems, maximizing water usage efficiency and crop yield.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Fuel Savings', val: '100%', icon: FiSun },
                { label: 'Pump Type', val: 'AC/DC', icon: FiZap },
                { label: 'Durability', val: 'SS304', icon: FiShield },
                { label: 'Control', val: 'Smart', icon: FiActivity }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 border border-sky-100 rounded-3xl hover:bg-sky-600 hover:text-white transition-all group">
                  <item.icon className="text-3xl text-sky-600 mb-6 group-hover:text-white transition-colors" />
                  <div className="text-slate-500 group-hover:text-sky-100 text-[10px] uppercase font-bold mb-1">{item.label}</div>
                  <div className="text-2xl font-black italic italic-none">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { title: 'Submersible Tech', desc: 'Powerful multi-stage pumps designed for deep bore-well operations with high head requirements.', icon: FiWind },
              { title: 'High Efficiency', desc: 'Maximized discharge rate using high-grade MPPT controllers that harvest 30% more energy.', icon: FiTrendingUp },
              { title: 'Pure Savings', desc: 'Zero recurring costs. No diesel delivery issues and zero monthly electricity bills forever.', icon: FiSun },
              { title: 'Rugged Build', desc: 'Stainless steel construction ensures high resistance to corrosion even in harsh groundwater.', icon: FiCheckCircle }
            ].map((f, i) => (
              <div key={i} className="p-8 group hover:-translate-y-2 transition-all duration-300 bg-white rounded-3xl shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <f.icon className="text-2xl" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-slate-900 italic italic-none">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pumping Capacity Matrix */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-sky-100 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -z-10" />
            <div className="p-12 border-b border-sky-50 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-3xl font-black text-slate-900 italic italic-none tracking-tighter uppercase">Pumping Capacity Matrix</h3>
                <p className="text-sky-600 font-bold text-[10px] mt-1 tracking-widest uppercase">Performance Data by System Size</p>
              </div>
              <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-sky-600 transition-all">
                Book Site Audit
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-sky-50/50 text-sky-700 text-[10px] uppercase tracking-[0.2em] font-mono">
                    <th className="p-8">System Rating</th>
                    <th className="p-8">Max Total Head</th>
                    <th className="p-8">Bore-well Size</th>
                    <th className="p-8">Avg. Daily Output</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-50 text-sm">
                  {[
                    { hp: '3.0 HP System', h: 'Up to 70m', b: '4 Inch min.', o: '40,000 - 60,000 L' },
                    { hp: '5.0 HP System', h: 'Up to 100m', b: '6 Inch min.', o: '70,000 - 90,000 L' },
                    { hp: '7.5 HP System', h: 'Up to 150m', b: '6 Inch min.', o: '1,00,000 - 1,40,000 L' },
                    { hp: '10.0+ HP System', h: 'High Dynamic', b: 'Custom Spec', o: 'Industrial Volume' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-sky-50 transition-colors">
                      <td className="p-8 font-black text-slate-900 italic italic-none">{row.hp}</td>
                      <td className="p-8 text-slate-600 font-mono italic">{row.h}</td>
                      <td className="p-8 text-sky-600 font-bold">{row.b}</td>
                      <td className="p-8 text-slate-900 font-black">{row.o}</td>
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

export default WaterPumpingPage;



