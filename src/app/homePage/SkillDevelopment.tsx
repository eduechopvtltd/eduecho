// app/components/SkillDevelopment.tsx
import Image from "next/image";
import { homePageBoyPotential } from "../../../assets/images";
import Home from "../page";

export default function SkillDevelopment() {
  return (
    <section className="w-full text-black  dark:text-white  bg-white dark:bg-black py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-center items-center gap-32">
          {/* LEFT CONTENT */}
          <div className="w-[455px] flex flex-col gap-4">
            <div className="w-14 h-[2.4px] bg-orange-500" />
            <h2 className="text-3xl  font-extrabold leading-10 font-['Khula']">
              Elevate Your Potential with <br />
              Professional Skill Development
            </h2>
            <p className="text-gray-500 dark:text-white text-base font-bold leading-8 font-['Nunito']">
              Enhance your career with our Corporate Training and Soft Skills
              programs, fostering communication, leadership, and professional
              excellence.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[600px] h-96 relative">
            <Image
              src={homePageBoyPotential}
              alt="Skill Development"
              fill
              className="object-cover rounded-[5px]"
            />
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex flex-col items-center gap-4 pt-9">
          {/* HEADING */}
          <div className="w-80 flex flex-col gap-2.5">
            <div className="w-11 h-[2px] bg-orange-500" />
            <h2 className="text-2xl  font-extrabold leading-8 font-['Khula']">
              Elevate Your <br />
              Potential with <br />
              Professional Skill <br />
              Development
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-80">
            <p className="text-gray-500 text-xs leading-6 font-['Nunito']">
              At Eduecho, we specialize in providing comprehensive education
              consultancy services. Our mission is to help students like you
              achieve your academic and career goals, whether you want to study
              business, medicine, technology, or other fields. With our expert
              guidance, you can navigate the path to higher education with ease
            </p>
          </div>

          {/* CHECKLIST */}
          <div className="w-80 flex gap-3 pb-4">
            <div className="text-xs leading-7">✔️<br />✔️<br />✔️</div>
            <div className="text-gray-500 text-xs leading-7 font-['Nunito']">
              Comprehensive Consultancy <br />
              Diverse Study Options <br />
              Expert Guidance
            </div>
          </div>

          {/* IMAGE */}
          <Image
            src={homePageBoyPotential}
            alt="Skill Development"
            width={338}
            height={225}
            className="rounded-[2.82px]"
          />
        </div>

      </div>
    </section>
  );
}
