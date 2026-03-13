import { motion } from 'framer-motion';
import { FiCamera, FiX, FiMaximize2, FiChevronRight, FiPlay, FiSun, FiZap, FiDroplet, FiShield, FiVideo, FiMonitor } from 'react-icons/fi';
import { useState } from 'react';

const GalleryPage = () => {
  const categories = [
    { id: 'on-grid', label: 'Solar On-Grid System', icon: <FiSun /> },
    { id: 'off-grid', label: 'Solar Off-Grid System', icon: <FiZap /> },
    { id: 'water-heater', label: 'Solar Water Heater', icon: <FiDroplet /> },
    { id: 'fencing', label: 'Solar Fencing', icon: <FiShield /> },
    { id: 'street-light', label: 'Solar Street Light', icon: <FiSun /> },
    { id: 'cctv', label: 'Solar CCTV Camera', icon: <FiVideo /> },
    { id: 'pumping', label: 'Solar Water Pumping', icon: <FiDroplet /> },
  ];

  const images = [
    // Main Folder Images
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.29 AM.jpeg', title: 'Solar Project Alpha', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.30 AM.jpeg', title: 'Off-Grid Solution', category: 'off-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.31 AM.jpeg', title: 'Industrial Array', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.42 AM (1).jpeg', title: 'Solar Power Plant', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.42 AM (2).jpeg', title: 'Grid-Tie System', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.42 AM.jpeg', title: 'Rooftop Panel', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.43 AM.jpeg', title: 'Solar Farm', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.31.46 AM.jpeg', title: 'Sustainable Energy', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.33.26 AM.jpeg', title: 'Residential Solar', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.34.25 AM (1).jpeg', title: 'Commercial Project', category: 'on-grid' },
    { src: '/Gallary/WhatsApp Image 2026-03-13 at 11.34.25 AM.jpeg', title: 'Industrial Installation', category: 'on-grid' },
    
    // Explicitly Named Images
    { src: '/Gallary/Soalar water heater.jpeg', title: 'Solar Water Heater Project', category: 'water-heater' },
    { src: '/Gallary/Soalar water heater (2).jpeg', title: 'Premium Water Heater', category: 'water-heater' },
    { src: '/Gallary/Soalar water heater3.jpeg', title: 'Hot Water Solution', category: 'water-heater' },
    { src: '/Gallary/Solar CC Camera.jpeg', title: 'Solar CCTV Security', category: 'cctv' },

    // Videos
    { src: '/Gallary/WhatsApp Video 2026-03-13 at 11.31.44 AM.mp4', title: 'Site Inspection Tour', category: 'on-grid', type: 'video' },
    { src: '/Gallary/WhatsApp Video 2026-03-13 at 11.33.39 AM.mp4', title: 'Project Success Story', category: 'off-grid', type: 'video' },

    // Solar Light Folder (User requested these be in the solar lights section)
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.34.28 AM.jpeg', title: 'Solar Street Light', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.34.29 AM (1).jpeg', title: 'Smart Lighting System', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.34.29 AM.jpeg', title: 'Roadway Illumination', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.27 AM.jpeg', title: 'Solar Fence Setup', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.28 AM.jpeg', title: 'Solar Camera Security', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.30 AM.jpeg', title: 'Garden Solar Light', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.31 AM.jpeg', title: 'Solar Path Light', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.34 AM.jpeg', title: 'Dusk to Dawn Light', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.36 AM.jpeg', title: 'Street Light Pole', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.40 AM.jpeg', title: 'Parking Lot Solar', category: 'street-light' },
    { src: '/Gallary/solar light/WhatsApp Image 2026-03-13 at 11.35.43 AM.jpeg', title: 'Integrated Solar Light', category: 'street-light' },
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-64 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-gallery.png" 
            alt="Golden Tree Portfolio" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-xs font-bold uppercase tracking-widest mb-6 leading-none backdrop-blur-sm">
              <FiCamera className="text-sm" /> Our Projects
            </span>
            <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 uppercase tracking-tight">
              Our <span className="text-primary italic">Works</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Explore our diverse range of solar installations across various categories. From residential rooftops to large-scale industrial projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorized Sections */}
      <div className="py-12 md:py-20 space-y-16 md:space-y-32">
        {/* Category Navigation Section (Optimized for Mobile) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32 md:-mt-48">
           <div className="relative overflow-hidden bg-[#0b3d1b] p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border border-white/10">
              {/* Subtle Ambient Glow & Pattern */}
              <div className="absolute inset-0 opacity-10 bg-pattern pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                  <div className="w-6 md:w-10 h-[1px] bg-white/20"></div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/70 text-center">
                    Filter by <span className="text-solar-light">Category</span>
                  </p>
                  <div className="w-6 md:w-10 h-[1px] bg-white/20"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-2 md:gap-4 w-full">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollToSection(cat.id)}
                      className="group flex items-center justify-center lg:justify-start gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-wider md:tracking-[0.15em] bg-solar-light text-[#0b3d1b] hover:bg-white hover:text-primary transition-all duration-500 shadow-lg active:scale-95 border border-transparent whitespace-nowrap"
                    >
                      <span className="text-xs md:text-sm group-hover:scale-125 transition-transform duration-500">{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>
           </div>
        </div>
        {categories.map((category) => {
          const categoryImages = images.filter(img => img.category === category.id);
          if (categoryImages.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <div className="flex items-center gap-3 text-primary mb-3">
                    <div className="w-12 h-1px bg-primary/30"></div>
                    <span className="text-xs font-black uppercase tracking-[0.3em]">Project Category</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 flex items-center gap-4">
                    {category.label}
                    <span className="text-primary/20 text-5xl font-outline-2 hidden md:block">
                      {categoryImages.length.toString().padStart(2, '0')}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                  <FiCamera /> {categoryImages.length} Installations
                </div>
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {categoryImages.map((item, index) => (
                  <motion.div
                    key={item.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                    onClick={() => setSelectedMedia(item)}
                  >
                    {item.type === 'video' ? (
                      <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
                        <video 
                          src={item.src} 
                          className="w-full h-full object-cover opacity-60" 
                          muted 
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                          <FiPlay size={30} className="ml-1" />
                        </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    
                    {/* Premium Card Info */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                          {item.type === 'video' ? <FiPlay className="ml-0.5" /> : <FiMaximize2 />}
                        </div>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        {item.type === 'video' ? 'Watch Video' : 'View Details'} <FiChevronRight />
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/98 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-16 right-0 text-white hover:text-primary transition-all p-3 bg-white/5 rounded-full"
              onClick={() => setSelectedMedia(null)}
            >
              <FiX className="w-8 h-8" />
            </button>
            
            {selectedMedia.type === 'video' ? (
              <video src={selectedMedia.src} controls autoPlay className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10" />
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10" />
            )}
            
            <div className="absolute -bottom-20 left-0 right-0 text-center">
              <h3 className="text-white text-2xl font-black">{selectedMedia.title}</h3>
              <p className="text-primary font-bold mt-2 uppercase tracking-[0.2em] text-sm"> Golden Tree Life Spaces </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
