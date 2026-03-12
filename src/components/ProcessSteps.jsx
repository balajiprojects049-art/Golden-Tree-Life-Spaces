import { motion } from 'framer-motion';
import { FiCalendar, FiFileText, FiTrendingUp, FiSun } from 'react-icons/fi';

const steps = [
  {
    num: '1',
    icon: <FiCalendar />,
    title: 'Book a Free Consultation',
    desc: 'Get system sizing, pricing, subsidy, and finance guidance.',
    align: 'bottom'
  },
  {
    num: '2',
    icon: <FiFileText />,
    title: 'Review Proposal & Confirm Order',
    desc: 'Approve costing and design easily via Golden Tree.',
    align: 'top'
  },
  {
    num: '3',
    icon: <FiTrendingUp />,
    title: 'Track Project Installation',
    desc: 'End-to-end project management including subsidy and net-metering.',
    align: 'bottom'
  },
  {
    num: '4',
    icon: <FiSun />,
    title: 'Your Site is Solar Powered',
    desc: '24×7 support with proactive maintenance via our support team.',
    align: 'top'
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1d3557] tracking-tight">
            Choose Solar in 4 Easy Steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch relative">
          
          {/* Subtle connecting horizontal line behind the cards on desktop */}
          <div className="hidden lg:block absolute top-[50%] left-0 w-full h-[2px] bg-slate-100 border-t border-dashed border-slate-300 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative z-10 flex flex-col pt-8 pb-10 px-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 border border-slate-100 group ${
                step.align === 'bottom'
                  ? 'rounded-b-[2rem] rounded-t-xl border-b-[6px] border-b-[#8cc63f] lg:mt-12'
                  : 'rounded-t-[2rem] rounded-b-xl border-t-[6px] border-t-[#8cc63f] lg:mb-12'
              }`}
            >
              <div className="flex items-end gap-3 mb-6">
                 <span className="text-7xl font-black text-[#f1f5f9] tracking-tighter leading-none -ml-2 select-none group-hover:text-yellow-400 transition-colors duration-300">
                   {step.num}
                 </span>
                 <div className="text-[#8cc63f] text-4xl mb-1">
                    {step.icon}
                 </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1d3557] mb-3 leading-tight">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProcessSteps;
