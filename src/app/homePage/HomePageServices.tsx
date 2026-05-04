"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurFade from "../components/magicui/BlurFade";
import MagicCard from "../components/magicui/MagicCard";
import { ArrowRight } from "lucide-react";

import {
  educationCounselingServices,
  admissionGuidence,
  educationServices,
  interviewPrepServices,
  visaServices,
  examPrepServices,
} from "../../../assets/images";

const services = [
  {
    id: 1,
    title: "Education Counseling",
    desc: "Our dedicated team provides personalized guidance to help you make well-informed decisions about your academic future. Whether you're considering universities, courses, or career paths, we offer expert advice tailored to your goals.",
    img: educationCounselingServices,
    link: "/services/educationCounselling",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Admission Guidance",
    desc: "Receive comprehensive, step-by-step support as you navigate the admissions process for your dream institutions. Our experienced consultants will guide you through each stage of the journey.",
    img: admissionGuidence,
    link: "/services/educationGuidence",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 3,
    title: "Education Abroad",
    desc: "Embark on an exciting journey to explore top-notch international programs and universities around the world. Discover new cultures, perspectives, and academic excellence abroad.",
    img: educationServices,
    link: "/services/educationAbroad",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Interview Preparation",
    desc: "Achieve interview success with expert coaching and tailored tips. Learn how to present yourself confidently, answer questions effectively, and leave a lasting impression.",
    img: interviewPrepServices,
    link: "/services/interviewPreparation",
    gradient: "from-violet-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "Examination Preparation",
    desc: "Excel in entrance exams with our custom-tailored strategies and expert guidance. We provide personalized study plans and test-taking techniques for top scores.",
    img: examPrepServices,
    link: "/services/examinationPreparation",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Visa Services",
    desc: "Receive streamlined, hassle-free assistance in acquiring student visas for your studies abroad. We simplify the visa journey and help you meet all requirements.",
    img: visaServices,
    link: "/services/visaServices",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export default function HomePageServices() {
  return (
    <section className="bg-[#0a0a1a] px-4 py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <BlurFade>
        <div className="flex flex-col items-center mb-14">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[2px] bg-orange-500 mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Our Services
          </h2>
          <p className="text-gray-400 mt-3 text-center max-w-xl text-sm leading-relaxed">
            Comprehensive education solutions tailored to your unique academic journey
          </p>
        </div>
      </BlurFade>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <BlurFade key={service.id} delay={index * 0.1}>
            <MagicCard className="h-full shadow-2xl bg-white/5 border border-white/10 overflow-hidden rounded-2xl group">
              <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>

                {/* Content Section */}
                <div className="px-6 py-7 flex flex-col gap-4 flex-1 backdrop-blur-sm">
                  <h4 className="text-white text-xl font-bold text-center group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-7">
                    {service.desc}
                  </p>

                  <Link
                    href={service.link}
                    className="mt-auto group/btn inline-flex items-center gap-2 w-fit bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
