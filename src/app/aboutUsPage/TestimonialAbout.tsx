"use client";

import { useState } from "react";

const testimonials = [
  {
    text:
      "Eduecho helped me navigate the complex process of applying to universities abroad. Their guidance was invaluable.",
    name: "Rishikant Thakur",
    color: "bg-orange-500",
  },
  {
    text:
      "The team at Eduecho was incredibly supportive throughout my application process. They made everything much easier, I am grateful for their help.",
    name: "Priya Singh",
    color: "bg-teal-500",
  },
  {
    text:
      "I couldn’t have asked for better guidance. Eduecho not only helped me choose the right university but also assisted with the visa process.",
    name: "Arjun Sharma",
    color: "bg-amber-300",
  },
];

export default function TestimonialAbout() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center md:hidden">

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#4C3B78]/90" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 mb-12">
          <h2 className="text-white text-2xl md:text-4xl font-bold font-['Khula']">
            Testimonial
          </h2>
          <div className="w-14 h-[2px] bg-orange-500" />
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-center gap-7">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-96 h-80 px-8 bg-white rounded-[10px] flex flex-col justify-center gap-6"
            >
              <p className="text-black text-base leading-9 font-['Nunito']">
                {t.text}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold font-['Nunito']">
                  {t.name}
                </span>
                <div className="flex gap-2">
                  <div className={`w-3 h-6 ${t.color}`} />
                  <div className={`w-3 h-6 ${t.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden relative flex flex-col items-center">
          {/* Card */}
          <div className="w-72 min-h-[260px] bg-white rounded-lg border border-orange-500 p-6 text-center">
            <p className="text-sm leading-7 text-black font-['Nunito']">
              {testimonials[active].text}
            </p>

            <div className="flex justify-center gap-1 mt-4">
              <div className={`w-2 h-4 ${testimonials[active].color}`} />
              <div className={`w-2 h-4 ${testimonials[active].color}`} />
            </div>

            <p className="mt-3 text-sm font-bold font-['Nunito']">
              {testimonials[active].name}
            </p>
          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
