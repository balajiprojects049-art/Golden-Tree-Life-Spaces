import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const [showMessage, setShowMessage] = useState(false);
  const message = "Hi Golden Tree Life Spaces team! I would like to know more about your Solar Energy solutions.";
  const whatsappUrl = `https://wa.me/919885848445?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show message automatically after 3 seconds
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex flex-col items-end gap-3">
      {/* Floating Message Box */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-2xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 flex items-start gap-3 max-w-[280px] relative origin-bottom-right"
          >
            <button 
              onClick={() => setShowMessage(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1 transition-colors"
              aria-label="Close message"
            >
              <FaTimes className="text-xs" />
            </button>
            <div className="bg-green-50 p-2.5 rounded-full shrink-0 mt-1">
              <FaWhatsapp className="text-[#25D366] text-xl" />
            </div>
            <div className="pr-3">
              <p className="text-[15px] font-bold text-gray-800 mb-1">Golden Tree Support</p>
              <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                Hi there! 👋 How can we help you with our solar solutions today?
              </p>
            </div>
            {/* Small triangle pointer */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:bg-[#1ebd5b] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        onMouseEnter={() => setShowMessage(true)}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl md:text-4xl" />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
