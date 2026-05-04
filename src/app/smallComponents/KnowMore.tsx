"use client";
import React from "react";
import Image from "next/image";
import { bgImage1 } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import ShimmerButton from "../components/magicui/ShimmerButton";
import { ArrowRight, Sparkles } from "lucide-react";

const KnowMore = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src={bgImage1}
          alt="Contact Background"
          fill
          className="object-cover scale-110"
        />
        {/* Deep dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-900/80 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <BlurFade delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">Join Us Today</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Educational Journey?
              </span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.6}>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
              Get personalized guidance and take the first step towards your dream university today. Our experts are ready to help you.
            </p>
          </BlurFade>

          <BlurFade delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <ShimmerButton className="px-10 py-4 shadow-2xl">
                <span className="flex items-center gap-2 text-white font-bold">
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </span>
              </ShimmerButton>
              
              <button className="px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                View All Programs
              </button>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-40 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float" />
    </section>
  );
};

export default KnowMore;
