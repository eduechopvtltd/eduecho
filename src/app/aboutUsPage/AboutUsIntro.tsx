// app/components/AboutIntro.tsx
import Image from "next/image";
import { welcomeImageGirl1,welcomeImageGirl2,boyWithBag } from "../../../assets/images"; 

export default function AboutUsIntro() {
  return (
    <section className="w-full text-black bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT IMAGE STACK */}
        <div className="hidden md:flex md:flex-col gap-4 justify-center">
          <Image
            src={welcomeImageGirl1}
            alt="Students studying"
            className="w-1/2 md:w-full h-auto rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <Image
            src={welcomeImageGirl2}
            alt="Classroom discussion"
            className="w-1/2 md:w-full h-auto rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* CENTER MAIN IMAGE */}
        
<div className="flex justify-center px-4 py-4 md:px-0 md:py-0">
  <Image
    src={boyWithBag}
    alt="Student pointing"
    className="w-full max-w-xs md:max-w-md h-auto rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
    priority
  />
</div>


        {/* RIGHT CONTENT */}
        <div className="space-y-4 pl-5 md:pl-0 md:text-left">
          <h2 className="text-xl md:text-2xl font-bold leading-snug">
            Welcome to Eduecho—Your Gateway to Global Education Opportunities!
          </h2>

          <p className="text-sm text-gray-600">
           At Eduecho, we specialize in providing comprehensive education consultancy services. Our mission is to help students like you achieve your academic and career goals, whether you want to study business, medicine, technology, or other fields. With our expert guidance, you can navigate the path to higher education with ease.
          </p>

          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2  md:justify-start">
              ✔ Comprehensive Consultancy
            </li>
            <li className="flex items-center gap-2 md:justify-start">
              ✔ Diverse Study Options
            </li>
            <li className="flex items-center gap-2 md:justify-start">
              ✔ Expert Guidance
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
