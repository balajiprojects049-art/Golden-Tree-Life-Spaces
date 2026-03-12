import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct WhatsApp message
    const message = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Requirements:* ${formData.message}%0A%0A_Sent from Contact Page_`;
    const whatsappUrl = `https://wa.me/919885848445?text=${message}`;
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 1000);
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
      addr: 'Nellore, Andhra Pradesh', 
      link: 'https://maps.app.goo.gl/mJ7KmwNpC33cUUVK9' 
    },
    { 
      name: 'Experience Center', 
      addr: 'Visit our Solar Lab', 
      link: 'https://maps.app.goo.gl/htXECBkvr7K7GYyg8' 
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Let's Build Your <br />
                <span className="text-green-600">Energy Future.</span>
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

              <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FiClock className="text-6xl" />
                </div>
                <h4 className="flex items-center gap-2 text-green-400 font-bold text-sm mb-6 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Business Hours
                </h4>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">Monday - Saturday</div>
                    <div className="font-bold">9:00 AM - 6:30 PM</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs mb-1">Sunday</div>
                    <div className="font-bold text-slate-500 italic">By Appointment Only</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  {locations.map((loc, i) => (
                    <a 
                      key={i} 
                      href={loc.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-slate-300 hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                      <FiMapPin className="text-green-400" /> {loc.name}
                    </a>
                  ))}
                </div>
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
      </div>
    </section>
  );
};

export default Contact;
