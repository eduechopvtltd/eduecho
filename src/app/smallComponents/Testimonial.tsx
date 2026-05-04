"use client";

import { useState } from "react";
import { graduationImage } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "Eduecho helped me navigate the complex process of applying to universities abroad. Their guidance was invaluable.",
    name: "Rishikant Thakur",
    role: "BTech Student",
    color: "from-orange-400 to-orange-600",
    stars: 5,
  },
  {
    text: "The team at Eduecho was incredibly supportive throughout my application process. They made everything much easier.",
    name: "Priya Singh",
    role: "MBBS Aspirant",
    color: "from-teal-400 to-teal-600",
    stars: 5,
  },
  {
    text: "I couldn't have asked for better guidance. Eduecho helped me choose the right university and assisted with the visa process.",
    name: "Arjun Sharma",
    role: "Masters Student",
    color: "from-amber-400 to-amber-600",
    stars: 5,
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  return (
    <section className="relative overflow-hidden bg-[#0a0a1a] py-20 md:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute top-10 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <BlurFade>
          <div className="flex flex-col items-center gap-4 mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-500 px-4 py-1.5 rounded-full text-sm font-medium">
              ⭐ What Our Students Say
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center">Student Testimonials</h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[2px] bg-orange-500" />
          </div>
        </BlurFade>

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center gap-8">
          {testimonials.map((t, i) => (
            <BlurFade key={i} delay={i * 0.15}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                className="w-96 px-8 py-10 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />
                <Quote className="w-8 h-8 text-orange-500/20 absolute top-6 right-6" />
                <div>
                  <div className="flex gap-1 mb-4">{Array.from({ length: t.stars }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-orange-500 text-orange-500" />))}</div>
                  <p className="text-gray-300 text-base leading-8 italic">&ldquo;{t.text}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg`}>{t.name.charAt(0)}</div>
                  <div><span className="text-white text-base font-bold block">{t.name}</span><span className="text-xs text-gray-400">{t.role}</span></div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="w-full max-w-sm">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-7 text-center border border-white/10 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonials[active].color}`} />
                <div className="flex justify-center gap-1 mb-3">{Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-orange-500 text-orange-500" />))}</div>
                <p className="text-sm leading-7 text-gray-300 italic">&ldquo;{testimonials[active].text}&rdquo;</p>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold mx-auto mt-4`}>{testimonials[active].name.charAt(0)}</div>
                <p className="mt-2 text-sm text-white font-bold">{testimonials[active].name}</p>
                <p className="text-xs text-gray-400">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 mt-6">
            <button onClick={prev} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={next} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"><ChevronRight className="w-5 h-5" /></button>
          </div>
          <div className="flex gap-2 mt-4">{testimonials.map((_, i) => (<button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-orange-500" : "bg-white/20"}`} />))}</div>
        </div>
      </div>
    </section>
  );
}
