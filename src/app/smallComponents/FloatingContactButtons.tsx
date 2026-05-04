"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContactButtons = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Call Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            href="tel:+917411605384"
            aria-label="Call Now"
            className="fixed right-5 bottom-24 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-2xl text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40"
          >
            📞
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            href="https://wa.me/917411605384?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-[9999]"
          >
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300">
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7 relative z-10">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.3-1.62a11.9 11.9 0 0 0 5.76 1.47h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.23-6.18-3.49-8.43ZM12.06 21.9a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.99 1-3.66-.24-.38a9.88 9.88 0 0 1-1.53-5.22c0-5.46 4.44-9.9 9.9-9.9a9.82 9.82 0 0 1 6.99 2.91 9.82 9.82 0 0 1 2.91 6.99c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.44c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.66.15-.2.3-.76.96-.93 1.17-.17.21-.34.24-.64.09-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.51.07-.78.36-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.68.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.38.25-.66.25-1.23.17-1.35-.08-.12-.27-.19-.57-.34Z" />
              </svg>
            </div>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButtons;
