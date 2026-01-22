"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import {
  educationCounselingServices,
  admissionGuidence,
  educationServices,
  interviewPrepServices,
  examPreppage,
  visaServices,
  examPrepServices,
} from "../../../assets/images";

const services = [
  {
    id: 1,
    row: 1,
    title: "Education Counseling",
    desc:
      "Our dedicated team provides personalized guidance to help you make well-informed decisions about your academic future. Whether you're considering universities, courses, or career paths, we offer expert advice tailored to your goals and interests to ensure a successful and fulfilling academic journey.",
    img: educationCounselingServices,
      link: "/services/educationCounselling",
  
  },
  {
    id: 2,
    row: 2,
    title: "Admission Guidance",
    desc:
      "Receive comprehensive, step-by-step support as you navigate the admissions process for your dream institutions. Our experienced consultants will guide you through each stage, from selecting the right  schools to preparing application materials and securing a spot at your  preferred institutions. Let us help you make your educational aspirations a reality.",
    img: admissionGuidence,
    link: "/services/educationGuidence",
  },
  {
    id: 3,
    row: 3,
    title: "Education Abroad",
    desc:
      "Embark on an exciting journey to explore top-notch international programs and universities around theworld. We provide you with the latest information and guidance on the best global institutions and opportunitiesfor a well-rounded educational experience. Discover new cultures,perspectives, and academic excellence as you pursue your studies abroad.",
    img: educationServices,
    link: "/services/educationAbroad",
  },
  {
    id: 4,
    row: 1,
    title: "Interview Preparation",
    desc:
      "Achieve interview success with expert coaching and tailored tips. Our experienced consultants will equipyou with the skills and strategies to excel in interviews, whether for university admissions or jobplacements. Learn how to present yourself confidently, answer questions effectively, and leave a lasting impression on interviewers.",
    img: interviewPrepServices,
    link: "/services/interviewPreparation",
  },
  {
    id: 5,
    row: 2,
    title: "Examination Preparation",
    desc:
      "Excel in entrance exams with our custom-tailored strategies and expert guidance. Our consultants will provide you with personalized studyplans, practice materials, and test-taking techniques to help you achievetop scores on your exams. With our support, you'll be fully prepared and confident to tackle your entrance exams successfully.",
    img: examPrepServices,
     link: "/services/examinationPreparation",
  },
  {
    id: 6,
    row: 3,
    title: "Visa Services",
    desc:
      "Receive streamlined, hassle-free assistance in acquiring student visas for your studies abroad. Our knowledgeable team will guide you through the entire visa application process, ensuring all required documents are prepared accurately and submitted on time. Trust us to simplify the visa journey and help you meet all necessary requirements for studying internationally.",
    img: visaServices,
      link: "/services/visaServices",
  },
];

export default function HomePageServices() {
  const [activeRow, setActiveRow] = useState<number | null>(1);

  return (
    <section className="text-black  dark:text-white  bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5 mb-14">
          <div className="w-14 h-[2px] bg-orange-500" />
          <h2 className="text-3xl  font-bold">Our Services</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const isActive = activeRow === service.row;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveRow(service.row)}
                className="bg-white rounded-md overflow-hidden shadow-md"
              >
                {/* IMAGE */}
                <div className="relative h-96">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0flex items-center justify-center text-center px-4">
                    <h3 className="text-white text-4xl font-bold uppercase leading-tight whitespace-pre-line">
                     
                    </h3>
                  </div>
                </div>

                {/* CONTENT – DESKTOP (PAIR-BASED) */}
                <div
                  className={`hidden md:block bg-zinc-300/60 transition-all duration-300 ${
                    isActive ? "block" : "hidden"
                  }`}
                >
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl text-black font-bold">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-6">
                      {service.desc}
                    </p>
                    <Link
  href={service.link}
  className="inline-block bg-indigo-900 text-white px-6 py-3 text-sm font-bold rounded-sm"
>
  Read More
</Link>

                  </div>
                </div>

                {/* CONTENT – MOBILE (ALWAYS VISIBLE) */}
                <div className="md:hidden bg-zinc-300 p-6 space-y-4">
                  <h4 className="text-2xl text-black font-bold">{service.title}</h4>
                  <p className="text-base text-gray-600 leading-7">
                    {service.desc}
                  </p>
                 <Link
  href={service.link}
  className="inline-block bg-indigo-900 text-white px-8 py-4 text-lg font-bold rounded-sm"
>
  Read More
</Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
