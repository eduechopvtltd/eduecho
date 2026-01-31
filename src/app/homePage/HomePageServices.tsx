"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
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
  return (
    <section className="bg-gray-100 px-4 py-12">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <span className="w-12 h-[2px] bg-orange-500 mb-3" />
        <h2 className="text-2xl font-bold text-black">Our Services</h2>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-md shadow-sm overflow-hidden"
          >
            {/* Image Section */}
           <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-md">
  <Image
    src={service.img}
    alt={service.title}
    fill
    priority={service.id === 1}
    className="object-cover"
  />
</div>
              {/* Overlay */}
             

            {/* Content Section */}
            <div className="bg-zinc-300 px-6 py-7 flex flex-col gap-4 flex-1">
              <h4 className="text-black text-xl font-bold font-['Khula'] leading-8 text-center">
                {service.title}
              </h4>

              <p className="text-gray-500 text-sm font-bold font-['Nunito'] leading-6 ">
                {service.desc}
              </p>

              <Link
  href={service.link}
  className="mt-auto w-fit bg-indigo-900 text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-indigo-800 transition"
>
  Read More
</Link>

            </div>
          </div>
          
        ))}
        
      </div>
    </section>
  );
}
