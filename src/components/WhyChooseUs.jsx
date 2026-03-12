import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView as useIOInView } from 'react-intersection-observer';
import {
  FiCheckCircle, FiTool, FiDollarSign, FiWind,
  FiClock, FiAward, FiHeadphones, FiShield
} from 'react-icons/fi';

const benefits = [
  {
    icon: FiCheckCircle,
    title: 'Premium Quality',
    description: 'Top-tier solar panels and equipment built for maximum durability and weather resistance.',
  },
  {
    icon: FiTool,
    title: 'Expert Installation',
    description: 'Certified in-house engineers ensure precise, safe, and code-compliant installations.',
  },
  {
    icon: FiDollarSign,
    title: 'Massive Savings',
    description: 'Cut electricity bills drastically and enjoy ROI within just 3–5 years of installation.',
  },
  {
    icon: FiWind,
    title: 'Eco-Friendly',
    description: 'Contribute straight to a cleaner planet by reducing thousands of tonnes of emissions.',
  },
  {
    icon: FiClock,
    title: '25-Year Warranty',
    description: 'Long-term performance warranty provided directly by our world-class manufacturers.',
  },
  {
    icon: FiAward,
    title: 'MNRE Certified',
    description: 'Completely compliant systems qualifying for available government subsidies and incentives.',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    description: 'Dedicated post-installation maintenance and customer support when you need it.',
  },
  {
    icon: FiShield,
    title: 'Trusted Reliability',
    description: 'Over a decade of industry expertise ensuring your solar investment is safe and successful.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Installations Completed' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 2000, suffix: '+', label: 'Tonnes CO₂ Reduced' },
];

const StatCounter = ({ stat, index }) => {
  const [ref, inView] = useIOInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-black text-4xl md:text-5xl text-primary mb-2">
        {inView ? (
          <CountUp
            end={stat.value}
            duration={2.5}
            delay={index * 0.15}
            suffix={stat.suffix}
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <div className="text-gray-600 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [headerRef, headerInView] = useIOInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Why Golden Tree</div>
          <h2 className="section-heading mb-4">
            India's Most Trusted <span className="text-primary">Solar Partner</span>
          </h2>
          <p className="section-subheading">
            More than just panels; we deliver complete energy freedom through end-to-end support, quality hardware, and seamless execution.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <benefit.icon className="text-primary text-xl group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-light-gray rounded-2xl p-10 shadow-sm border border-gray-100 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x md:divide-gray-200">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* Technical Standards Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h3 className="font-heading font-black text-3xl md:text-5xl mb-6 italic italic-none uppercase tracking-tighter">
                   Standard of <br /><span className="text-primary">Excellence.</span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                   We follow stringent international engineering protocols. Every bolt tightened and every panel aligned is a testament to our commitment to a 25-year performance lifecycle.
                </p>
                <div className="flex flex-wrap gap-4">
                   {['ISO 9001:2015', 'MNRE Approved', 'IEC 61215', 'BIS Certified'].map((cert) => (
                     <span key={cert} className="px-4 py-1.5 border border-white/20 rounded text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5">
                        {cert}
                     </span>
                   ))}
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Safe Protocols', desc: 'Zero-incident safety culture during rooftop deployments.' },
                  { title: 'Quality Audits', desc: '4-stage internal verification before the first unit is generated.' },
                  { title: 'Material Tracking', desc: 'Every component is source-verified for genuine performance.' },
                  { title: 'Grid Sync Tech', desc: 'Advanced net-metering support for seamless utility integration.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                     <h4 className="text-primary font-bold mb-1 mb-2 italic italic-none">{item.title}</h4>
                     <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
