import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const locations = [
    { label: 'Corporate Office Location', href: 'https://maps.app.goo.gl/mJ7KmwNpC33cUUVK9' },
    { label: 'Branch / Experience Center', href: 'https://maps.app.goo.gl/htXECBkvr7K7GYyg8' }
  ];

  return (
    <section className="py-24 bg-light-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Get In Touch</div>
          <h2 className="section-heading mb-4">
            Request a <span className="text-primary">Free Quote</span>
          </h2>
          <p className="section-subheading">
            Fill out the form below or contact us directly. Our solar experts are ready to guide you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-2xl shadow-clean border border-gray-100 overflow-hidden">
          {/* Left: Info */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-3xl mb-2">Let's talk solar</h3>
              <p className="text-gray-400 mb-10 text-sm">We provide customized 3D design and cost analysis.</p>

              <div className="space-y-8">
                <a href="tel:9885848445" className="flex items-start gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone Number</div>
                    <div className="font-medium text-lg">+91 98858 48445</div>
                  </div>
                </a>

                <a href="mailto:goldentreelifespaces@gmail.com" className="flex items-start gap-4 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary/20">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Email Address</div>
                    <div className="font-medium">goldentreelifespaces@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Office Maps</div>
                    <div className="flex flex-col gap-3">
                      {locations.map((loc, i) => (
                        <a
                          key={i}
                          href={loc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                        >
                          → {loc.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-sm text-gray-400 border-t border-white/10 pt-6">
              Working Hours: Mon-Sat, 9:00 AM - 6:00 PM
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 p-10 lg:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="text-primary text-4xl" />
                </div>
                <h3 className="font-heading font-bold text-3xl text-gray-900 mb-3">Message Received!</h3>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. A Golden Tree solar consultant will contact you within 24 hours.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-light-gray border border-gray-200 focus:border-primary focus:bg-white rounded-md px-4 py-3 outline-none transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-light-gray border border-gray-200 focus:border-primary focus:bg-white rounded-md px-4 py-3 outline-none transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-light-gray border border-gray-200 focus:border-primary focus:bg-white rounded-md px-4 py-3 outline-none transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Your Requirements</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="E.g., I want solar for my home, monthly bill is around ₹3000..."
                    className="w-full bg-light-gray border border-gray-200 focus:border-primary focus:bg-white rounded-md px-4 py-3 outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Request Free Quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
