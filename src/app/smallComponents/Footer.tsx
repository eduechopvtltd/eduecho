// app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

import { eduecho, location, phoneCall, email } from "../../../assets/images";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        {/* MAIN GRID */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <Image src={eduecho} alt="EduEcho" width={260} height={56} />
            <p className="opacity-80 text-sm-bold leading-6 font-['Nunito_Sans']">
              At Eduecho, we specialize in providing comprehensive education
              consultancy services. Our mission is to help students like you
              achieve your academic and career goals, whether you want to study
              business, medicine,
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="text-lg font-extrabold mb-5 font-['Nunito_Sans']">
              Useful links
            </h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  • Home
                </Link>
              </li>
              <li>
                <Link href="/aboutUsPage" className="hover:text-orange-400">
                  • About Us
                </Link>
              </li>
              <li>
                <Link href="/blogPage" className="hover:text-orange-400">
                  • Blog
                </Link>
              </li>
              <li>
                <Link href="/contactUsPage" className="hover:text-orange-400">
                  • Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacyPolicy" className="hover:text-orange-400">
                  • Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h4 className="text-lg font-extrabold mb-5 font-['Nunito_Sans']">
              Our Services
            </h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li>
                <Link
                  href="/services/educationCounselling"
                  className="hover:text-orange-400"
                >
                  • Education Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/educationGuidence"
                  className="hover:text-orange-400"
                >
                  • Admission Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/educationAbroad"
                  className="hover:text-orange-400"
                >
                  • Education Abroad
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interviewPreparation"
                  className="hover:text-orange-400"
                >
                  • Interview Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/examinationPreparation"
                  className="hover:text-orange-400"
                >
                  • Examination Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visaServices"
                  className="hover:text-orange-400"
                >
                  • Visa Services
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4 opacity-80 text-sm">
            <h4 className="text-lg text-white font-extrabold mb-5 font-['Nunito_Sans']">
              Contact Us
            </h4>

            {/* LOCATION */}
            <div className="flex gap-3 items-start">
              <Image
                src={location}
                alt="Location"
                width={20}
                height={20}
                className="mt-1"
              />
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-bold">Bangalore:</span> 1009 B Wing, 10th Floor, Mittal Tower, MG Road Bangalore, Karnataka - 560001
                </p>
                <p>
                  <span className="font-bold">Mumbai:</span> Office No. 230, 2nd floor, Sudama Space, Shree Ram Nagar Complex, Vartak Road Near Flyover, Virar West 401303
                </p>
              </div>
            </div>

            {/* PHONE 1 */}
            <div className="flex gap-3 items-center">
              <Image src={phoneCall} alt="Call" width={20} height={20} />
              <a href="tel:+917411605384">+91 7411605384</a>
            </div>

            {/* PHONE 2 */}
            <div className="flex gap-3 items-center">
              <Image src={phoneCall} alt="Call" width={20} height={20} />
              <a href="tel:+918660047495">+91 8660047495</a>
            </div>

            {/* EMAIL */}
            <div className="flex gap-3 items-center">
              <Image src={email} alt="Email" width={20} height={20} />
              <a href="mailto:help@eduecho.in">help@eduecho.in</a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 my-8" />

      {/* COPYRIGHT */}
      <p className="text-center text-xs opacity-70">
        © Copyright 2026 EDUECHO PVT. LTD. All rights reserved.
      </p>
    </footer>
  );
}
