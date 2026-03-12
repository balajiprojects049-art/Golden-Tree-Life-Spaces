import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages = [
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1592833159057-6fc1fa659101?q=80&w=2070&auto=format&fit=crop"
];

const ConsultationForm = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Residential');

  // For the tag selection logic
  const [selectedBill, setSelectedBill] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-slate-50 font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] mb-3 tracking-tight">
            Schedule a <span className="text-[#1d3557]">FREE consultation</span> with us today!
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Please fill the form and we will get in touch with you for the consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Sliding Images */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto bg-slate-200 order-2 lg:order-1">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentSlide}
                src={sliderImages[currentSlide]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Solar Consultation"
              />
            </AnimatePresence>
            {/* Dark gradient overlay to make image look premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Right: The Form Container */}
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 relative order-1 lg:order-2 min-w-0">
            
            {/* Tabs Container */}
            <div className="flex bg-white border border-slate-200 rounded-full p-1.5 mb-8 overflow-x-auto hide-scrollbar touch-pan-x">
              {['Residential', 'Housing Society', 'Commercial'].map(tab => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedBill('');
                    setSelectedDesignation('');
                  }}
                  className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab 
                      ? 'bg-[#e7eaf6] text-[#1d3557]' 
                      : 'text-slate-600 hover:text-slate-900 transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form Fields based on tab */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {activeTab === 'Residential' && (
                <AnimatePresence mode="popLayout">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">WhatsApp number <span className="text-red-500">*</span></label>
                      <input type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Pin code <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <label className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                        What is your average monthly bill? <span className="text-red-500">*</span>
                        <div className="w-4 h-4 rounded-full border border-slate-400 text-slate-400 flex items-center justify-center text-[10px] cursor-help" title="Select your estimated monthly bill so we can size your solar plant correctly.">i</div>
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {['Less than ₹1500', '₹1500 - ₹2500', '₹2500 - ₹4000', '₹4000 - ₹8000', 'More than ₹8000'].map(val => (
                          <div 
                            key={val} 
                            onClick={() => setSelectedBill(val)}
                            className={`border rounded-lg px-4 py-2 text-sm cursor-pointer transition-all ${
                              selectedBill === val 
                                ? 'border-[#1d3557] bg-[#f8fafc] text-[#1d3557] font-semibold' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-400'
                            }`}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {activeTab === 'Housing Society' && (
                <AnimatePresence mode="popLayout">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Name of Housing Society <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Pin code <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">WhatsApp number <span className="text-red-500">*</span></label>
                        <input type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Monthly Electricity Bill <span className="text-red-500">*</span></label>
                        <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all bg-white text-slate-700">
                          <option>0 - 50000</option>
                          <option>50000 - 150000</option>
                          <option>More than 150000</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-3 pt-1">
                      <label className="text-sm font-bold text-slate-800">What is your designation in Housing Society? <span className="text-red-500">*</span></label>
                      <div className="flex flex-wrap gap-2.5">
                        {['Management committee member', 'Resident', 'Builder', 'Facility Manager'].map(val => (
                          <div 
                            key={val} 
                            onClick={() => setSelectedDesignation(val)}
                            className={`border rounded-lg px-4 py-2 text-sm cursor-pointer transition-all ${
                              selectedDesignation === val 
                                ? 'border-[#1d3557] bg-[#f8fafc] text-[#1d3557] font-semibold' 
                                : 'border-slate-200 text-slate-600 hover:border-slate-400'
                            }`}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <label className="text-sm font-medium text-slate-700">AGM approval status <span className="text-red-500">*</span></label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all bg-white text-slate-700">
                        <option>Select Approval Status</option>
                        <option>Already Approved</option>
                        <option>Approval Pending</option>
                        <option>Discussion phase</option>
                      </select>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {activeTab === 'Commercial' && (
                <AnimatePresence mode="popLayout">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700">Company Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">City <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Pin code</label>
                        <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">WhatsApp number <span className="text-red-500">*</span></label>
                        <input type="tel" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700">Average Monthly Bill <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1d3557] focus:ring-1 focus:ring-[#1d3557] transition-all" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Bottom agreement & submit button */}
              <div className="pt-4 border-t border-slate-100">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center mt-0.5">
                    <input type="checkbox" defaultChecked className="peer shrink-0 w-4 h-4 text-[#1d3557] bg-white border-slate-300 rounded focus:ring-[#1d3557] focus:ring-2 appearance-none checked:bg-[#1d3557] checked:border-[#1d3557]" />
                    <svg className="absolute w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100 p-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm text-slate-500 leading-tight select-none">
                    I agree to the <a href="#" className="underline hover:text-slate-800">terms of service</a> & <a href="#" className="underline hover:text-slate-800">privacy policy</a>
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-[#0b1021] hover:bg-[#1d3557] text-white font-bold text-sm py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl w-fit min-w-[180px]"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
