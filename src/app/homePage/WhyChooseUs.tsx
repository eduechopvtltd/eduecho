// app/components/WhyChooseUs.tsx
"use client";

import { chooseUs } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import TextAnimate from "../components/magicui/TextAnimate";
import MagicCard from "../components/magicui/MagicCard";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Globe,
  Wallet,
  Heart,
  GraduationCap,
} from "lucide-react";

const items = [
  {
    title: "Proven Expertise",
    desc: "Our experienced consultants provide tailored advice to help you achieve your career aspirations.",
    icon: Award,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Tailored Solutions",
    desc: "Customized guidance based on your unique academic interests and career goals.",
    icon: Target,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "Extensive Network",
    desc: "Partnerships with top universities and institutions globally, offering diverse opportunities.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Affordable Services",
    desc: "Transparent and competitive pricing with no hidden costs.",
    icon: Wallet,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Student-Centric Approach",
    desc: "Dedicated support and resources to ensure your success at every step of your journey.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Scholarship",
    desc: "Our Scholarship Program is designed to support deserving students.",
    icon: GraduationCap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative bg-[#020617] py-20 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <BlurFade>
          <div className="flex flex-col items-center mb-14">
            <TextAnimate
              as="h2"
              className="text-orange-500 text-2xl md:text-4xl font-extrabold uppercase mb-4"
            >
              Why Choose Us
            </TextAnimate>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-orange-500"
            />
            <p className="text-gray-400 mt-4 text-center max-w-lg text-sm">
              Discover why thousands of students trust EduEcho for their educational journey
            </p>
          </div>
        </BlurFade>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <BlurFade key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <MagicCard
                  className="px-7 py-9 text-center h-full bg-white/5 backdrop-blur-sm border border-white/10"
                  gradientColor="#f97316"
                  gradientOpacity={0.12}
                >
                  {/* Icon */}
                  <div
                    className={`${item.bg} ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-white text-base md:text-lg font-extrabold uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-7">
                    {item.desc}
                  </p>
                </MagicCard>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
