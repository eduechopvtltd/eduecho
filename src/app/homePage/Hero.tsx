// app/components/Hero.tsx
"use client";
import Image from "next/image";
import { homepage, christBanner } from "../../../assets/images";
import OrangeStrip from "../smallComponents/OrangeStrip";
import { useEffect, useState, useCallback } from "react";
import ContactForm from "../contactUsPage/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Particles from "../components/magicui/Particles";

const banners = [
  {
    src: homepage,
    alt: "EduEcho - Get Free Admission Guidance 2027 for B.Tech and MBBS",
  },
  {
    src: christBanner,
    alt: "EduEcho - Christ University Admission Guidance 2027",
  },
];

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-changing timer (every 5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, []);

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
      {/* Auto-changing Banner Slider */}
      <div
        className="relative w-full overflow-hidden group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 w-full relative">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="col-start-1 row-start-1 w-full"
            >
              <Image
                src={banners[currentSlide].src}
                alt={banners[currentSlide].alt}
                priority={currentSlide === 0}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous Slide Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous banner"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Next Slide Button */}
        <button
          onClick={handleNext}
          aria-label="Next banner"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/25 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === index
                  ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-orange-500 shadow-md"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
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
