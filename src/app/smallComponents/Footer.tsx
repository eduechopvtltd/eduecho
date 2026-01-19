// app/components/Footer.tsx
import Image from "next/image";
import { eduecho,location,phoneCall,email } from "../../../assets/images";


export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">

        {/* MAIN GRID */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <Image
              src={eduecho}
              alt="EduEcho"
              width={260}
              height={56}
            />
            <p className="opacity-80 text-sm leading-6 font-['Nunito_Sans']">
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
              <li>• Home</li>
              <li>• About Us</li>
              <li>• Blog</li>
              <li>• Contact Us</li>
              <li>• Privacy Policy</li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h4 className="text-lg font-extrabold mb-5 font-['Nunito_Sans']">
              Our Services
            </h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li>• Education Counseling</li>
              <li>• Admission Guidance</li>
              <li>• Education Abroad</li>
              <li>• Interview Preparation</li>
              <li>• Examination Preparation</li>
              <li>• Visa Services</li>
            </ul>
          </div>

          {/* CONTACT */}
         <div className="space-y-4 opacity-80 text-sm">

  {/* LOCATION */}
  <div className="flex gap-3 items-start">
    <Image
      src={location}
      alt="Location"
      width={20}
      height={20}
      className="mt-1"
    />
    <p>
      Slv Estate, Sy No 49/283, Rajanakunte,
      Bangalore, Bangalore North, Karnataka,
      India, 560064
    </p>
  </div>

  {/* PHONE 1 */}
  <div className="flex gap-3 items-center">
    <Image
      src={phoneCall}
      alt="Call"
      width={20}
      height={20}
    />
    <a href="tel:+917411605384">+91 7411605384</a>
  </div>

  {/* PHONE 2 */}
  <div className="flex gap-3 items-center">
    <Image
      src={phoneCall}
      alt="Call"
      width={20}
      height={20}
    />
    <a href="tel:+918660047495">+91 8660047495</a>
  </div>

  {/* EMAIL */}
  <div className="flex gap-3 items-center">
    <Image
      src={email}
      alt="Email"
      width={20}
      height={20}
    />
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
