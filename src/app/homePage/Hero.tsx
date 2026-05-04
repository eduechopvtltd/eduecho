// app/components/Hero.tsx
"use client";
import Image from "next/image";
import { homepage } from "../../../assets/images";
import OrangeStrip from "../smallComponents/OrangeStrip";
import { useEffect, useState } from "react";
import ContactForm from "../contactUsPage/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../components/magicui/Particles";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPopup(true);
          observer.disconnect(); // Show only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    const target = document.getElementById("our-services");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Hero Image - No initial fade */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={homepage}
            alt="EduEcho Hero"
            priority
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* ORANGE STRIP */}
      <OrangeStrip />

      {/* Contact Form Popup with enhanced animations */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6"
          >
            {/* Overlay with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowPopup(false)}
            />

            {/* Modal Box with slide-up + scale animation */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="
                relative z-50 w-full sm:max-w-md
                rounded-2xl text-black bg-white shadow-2xl
                max-h-[90vh] overflow-y-auto
                p-4 sm:p-6
                border border-gray-100
              "
            >
              <div className="flex items-end justify-end">
                <button
                  onClick={() => setShowPopup(false)}
                  className="shrink-0 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:rotate-90 transition-all duration-300"
                >
                  ✕
                </button>
              </div>

              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
