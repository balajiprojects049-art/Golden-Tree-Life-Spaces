import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct WhatsApp message with professional styling
    const message = `*New Contact Inquiry | Golden Tree*
----------------------------------------

*Client Details*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Requirements*
${formData.message}

----------------------------------------
_Sent from Contact Page_`;

    const whatsappUrl = `https://wa.me/919885848445?text=${encodeURIComponent(message)}`;
    
    setLoading(false);
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    { 
      icon: FiPhone, 
      label: 'Call Us Anytime', 
      content: '+91 98858 48445', 
      link: 'tel:9885848445',
      color: 'bg-green-500' 
    },
    { 
      icon: FaWhatsapp, 
      label: 'WhatsApp Support', 
      content: 'Chat with Experts', 
      link: 'https://wa.me/919885848445',
      color: 'bg-[#25D366]' 
    },
    { 
      icon: FiMail, 
      label: 'Email Address', 
      content: 'goldentreelifespaces@gmail.com', 
      link: 'mailto:goldentreelifespaces@gmail.com',
      color: 'bg-blue-500' 
    }
  ];

  const locations = [
    { 
      name: 'Corporate Office', 
      addr: 'Ground Floor, Presidio Towers, Mini Bypass Road, Ramalinga Puram, Nellore - 524003', 
      link: 'https://maps.app.goo.gl/mJ7KmwNpC33cUUVK9',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.7903699156136!2d79.9833098!3d14.4392412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3f7d753e301%3A0x8f20eef1fb51b4fe!2sGOLDEN%20TREE%20LIFE%20SPACES%20SOLAR%20IN%20NELLORE!5e0!3m2!1sen!2sin!4v1773340956560!5m2!1sen!2sin'
    },
    { 
      name: 'Experience Center', 
      addr: 'Muthukur Rd, near Narayana Medical College, Gundlapalem, Nellore - 524003', 
      link: 'https://maps.app.goo.gl/htXECBkvr7K7GYyg8',
      embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.196740871909!2d80.0120288!3d14.4158193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf50391cefcf9%3A0xf8a3c0fd82bb70e2!2sGolden%20tree%20life%20spaces%20%26%20Cement+and+Steel!5e0!3m2!1sen!2sin!4v1773341002016!5m2!1sen!2sin'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="contact">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-green-50 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Info & Presence */}
          <div className="lg:col-span-5">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                <span className="text-primary">Let's Build Your</span> <br />
                <span className="text-solar-light">Energy Future.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
                Have questions about net-metering, subsidies, or system sizing? 
                Our engineers are standing by to provide a free site survey.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, i) => (
                  <a 
                    key={i} 
                    href={info.link}
                    className="flex items-center gap-5 p-4 rounded-2xl border border-slate-100 hover:border-green-200 hover:bg-green-50/30 transition-all group shadow-sm bg-white"
                  >
                    <div className={`${info.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                      <info.icon />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="text-slate-900 font-bold group-hover:text-green-600 transition-colors">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>

            </motion.div>
          </div>

          {/* Right Side: Advanced Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12 relative"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <FiCheckCircle className="text-5xl" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Request Sent!</h3>
                  <p className="text-slate-500 mb-8">We've received your request and redirected you to WhatsApp for instant support.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-green-600 font-bold hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 00000 00000"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2.5">
                    <label className="text-sm font-bold text-slate-700 ml-1">Tell us about your requirements</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="I'm interested in a 5kW on-grid solar system for my residence..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 uppercase tracking-widest text-sm">
                      {loading ? 'Processing...' : 'Request Free Quote'}
                    </span>
                    <FiSend className={`text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${loading ? 'animate-pulse' : ''}`} />
                  </button>
                  
                  <p className="text-center text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">
                    Instant response guaranteed within 24 hours
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* Full-width Business Hours & Locations Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <FiClock className="text-[12rem]" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left part: Business Hours */}
            <div>
              <h4 className="flex items-center gap-2 text-green-400 font-bold text-sm mb-8 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Business Hours
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Monday - Saturday</div>
                  <div className="text-2xl font-black text-white">9:00 AM - 6:30 PM</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Sunday</div>
                  <div className="text-2xl font-black text-slate-400 italic">By Appointment Only</div>
                </div>
              </div>
            </div>

            {/* Right part: Locations Switcher */}
            <div className="lg:border-l lg:border-white/10 lg:pl-12">
              <h4 className="text-white/40 font-bold text-xs mb-6 uppercase tracking-widest">Our Locations</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {locations.map((loc, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveLocation(i)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex flex-col gap-3 leading-relaxed border ${
                      activeLocation === i 
                      ? 'bg-green-600 text-white border-green-500 shadow-lg shadow-green-900/20 scale-[1.02]' 
                      : 'border-white/10 text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${activeLocation === i ? 'bg-white/20' : 'bg-slate-800'}`}>
                        <FiMapPin className={activeLocation === i ? 'text-white' : 'text-slate-500'} /> 
                      </div>
                      <span className={`font-bold text-sm ${activeLocation === i ? 'text-white' : 'text-slate-100'}`}>{loc.name}</span>
                    </div>
                    <span className="text-[11px] leading-relaxed opacity-80">{loc.addr}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="mt-24 w-full">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex gap-4 border-b border-slate-100">
            {locations.map((loc, i) => (
              <button
                key={i}
                onClick={() => setActiveLocation(i)}
                className={`pb-4 px-2 text-sm font-bold transition-all relative ${
                  activeLocation === i ? 'text-green-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {loc.name}
                {activeLocation === i && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-full h-[500px] bg-slate-100 relative group">
          <AnimatePresence mode="wait">
            <motion.iframe 
              key={activeLocation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              title={locations[activeLocation].name}
              src={locations[activeLocation].embed} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></motion.iframe>
          </AnimatePresence>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
