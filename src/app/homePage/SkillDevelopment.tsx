// app/components/SkillDevelopment.tsx
"use client";

import Image from "next/image";
import { homePageBoyPotential } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import TextAnimate from "../components/magicui/TextAnimate";
import ShimmerButton from "../components/magicui/ShimmerButton";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  "Corporate Training Programs",
  "Soft Skills Development",
  "Leadership & Communication",
];

export default function SkillDevelopment() {
  return (
    <section className="w-full text-black bg-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-center items-center gap-20">
          {/* LEFT CONTENT */}
          <BlurFade delay={0.1}>
            <div className="w-[500px] flex flex-col gap-5">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium w-fit"
              >
                <Sparkles className="w-4 h-4" />
                Skill Development
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 56 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-[2.4px] bg-orange-500"
              />

              <TextAnimate
                as="h2"
                className="text-3xl md:text-4xl font-extrabold leading-tight"
              >
                Elevate Your Potential with Professional Skill Development
              </TextAnimate>

              <p className="text-gray-500 text-base leading-8">
                Enhance your career with our Corporate Training and Soft Skills
                programs, fostering communication, leadership, and professional
                excellence.
              </p>

              {/* Feature list */}
              <div className="space-y-3 mt-2">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/contactUsPage" className="mt-4">
                <ShimmerButton
                  background="linear-gradient(135deg, #f97316, #ea580c)"
                  borderRadius="12px"
                >
                  Learn More
                </ShimmerButton>
              </Link>
            </div>
          </BlurFade>

          {/* RIGHT IMAGE */}
          <BlurFade delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[550px] h-[400px] relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={homePageBoyPotential}
                alt="Skill Development"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </motion.div>
          </BlurFade>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex flex-col items-center gap-6 pt-6">
          <BlurFade>
            <div className="w-full max-w-sm flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 px-3 py-1 rounded-full text-xs font-medium w-fit">
                <Sparkles className="w-3 h-3" />
                Skill Development
              </div>

              <div className="w-11 h-[2px] bg-orange-500" />
              <h2 className="text-2xl font-extrabold leading-8">
                Elevate Your Potential with Professional Skill Development
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="w-full max-w-sm">
              <p className="text-gray-500 text-sm leading-7">
                Enhance your career with our Corporate Training and Soft Skills
                programs, fostering communication, leadership, and professional
                excellence.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="w-full max-w-sm space-y-2 pb-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-gray-600 text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={homePageBoyPotential}
                alt="Skill Development"
                width={338}
                height={225}
                className="rounded-2xl"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
