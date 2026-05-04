"use client";

import Image from "next/image";
import { expert, global, endToEnd } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import { motion } from "framer-motion";

const features = [
  {
    icon: expert,
    title: "EXPERT GUIDANCE",
    desc: "Our experienced consultants provide tailored advice to help you achieve your academic and career aspirations.",
  },
  {
    icon: global,
    title: "GLOBAL OPPORTUNITIES",
    desc: "EduEcho connects you to leading universities worldwide for a successful international education journey.",
  },
  {
    icon: endToEnd,
    title: "END-TO-END SUPPORT",
    desc: "From career counseling to visa assistance, we guide you through every step of your journey.",
  },
];

export default function OrangeStrip() {
  return (
    <section className="w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-slate-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <BlurFade key={index} delay={index * 0.15}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex gap-5 items-start bg-white/15 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/25 border border-white/10"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="shrink-0"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm mt-2 text-slate-800/80 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
