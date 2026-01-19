// app/components/Hero.tsx
"use client";
import Image from "next/image";
import {  homepage } from "../../../assets/images"; 
import OrangeStrip from "../smallComponents/OrangeStrip";
import { useEffect, useState } from "react";
import ContactForm from "../contactUsPage/ContactForm";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, []);
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        <Image
          src={homepage}
          alt="EduEcho Hero"
          
          priority
          className="w-full h-auto"
        />
      </div>

      {/* ORANGE STRIP */}
   <OrangeStrip />

   {showPopup && (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/60"
      onClick={() => setShowPopup(false)}
    />

    {/* Modal Box */}
    <div
      className="
        relative z-50 w-full sm:max-w-md
        rounded-2xl bg-white shadow-xl
        max-h-[90vh] overflow-y-auto
        p-4 sm:p-6
      "
    >
      <div className="flex items-end justify-end ">
        

        <button
          onClick={() => setShowPopup(false)}
          className="shrink-0 rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          ✕
        </button>
      </div>

      

     
        <ContactForm/>
     
    </div>
  </div>
)}

  

      
    </section>
  );
}
