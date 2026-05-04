"use client";

import Image from "next/image";
import { welcomeImageGirl1 } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Users, Globe } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Students", value: "5000+" },
  { icon: GraduationCap, label: "Universities", value: "200+" },
  { icon: Globe, label: "Countries", value: "15+" },
];

export default function AboutIntro() {
  return (
    <section className="bg-[#020617] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with dynamic elements */}
          <BlurFade delay={0.2}>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={welcomeImageGirl1}
                  alt="About EduEcho"
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 z-20 bg-orange-500 p-6 rounded-2xl shadow-xl hidden md:block"
              >
                <p className="text-white text-3xl font-bold">10+</p>
                <p className="text-orange-100 text-sm">Years of Experience</p>
              </motion.div>
            </div>
          </BlurFade>

          {/* Right: Content */}
          <div className="space-y-8">
            <BlurFade delay={0.3}>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">About EduEcho</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.4}>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Your Trusted Partner in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Global Education
                </span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.5}>
              <p className="text-gray-400 text-lg leading-relaxed">
                At EduEcho, we believe every student deserves a world-class education. We bridge the gap between your dreams and reality by providing end-to-end support for international admissions.
              </p>
            </BlurFade>

            <BlurFade delay={0.6}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Personalized Counseling",
                  "Expert Visa Assistance",
                  "Top University Partnerships",
                  "Comprehensive Test Prep",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.7}>
              <div className="pt-8 flex flex-wrap gap-8 border-t border-white/10">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center gap-2 text-orange-500">
                      <stat.icon className="w-5 h-5" />
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
