// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { eduecho } from "../../../assets/images";
import { useState, useRef, useEffect} from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import EnquireNowForm from "./EnquireNowForm";



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement | null>(null);
const [enquireOpen, setEnquireOpen] = useState(false);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      servicesRef.current &&
      !servicesRef.current.contains(event.target as Node)
    ) {
      setServicesOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


  return (
    <header className="w-full text-black  dark:text-white  bg-white dark:bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={eduecho} 
            alt="Eduecho"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Desktop Menu */}
       <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  <a
    href="/"
    className={`hover:text-orange-500 ${
      pathname === "/" ? "text-orange-500" : ""
    }`}
  >
    HOME
  </a>

  <a
    href="/aboutUsPage"
    className={`hover:text-orange-500 ${
      pathname === "/aboutUsPage" ? "text-orange-500" : ""
    }`}
  >
    ABOUT US
  </a>

  <div className="relative" ref={servicesRef}>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className={`flex items-center gap-1 hover:text-orange-500 ${
      pathname.startsWith("/services") ? "text-orange-500" : ""
    }`}
  >
    SERVICES
    <ChevronDown
      size={16}
      className={`transition-transform ${
        servicesOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {servicesOpen && (
    <div className="absolute top-full left-0 mt-3 w-60 text-black  dark:text-white  bg-white dark:bg-black shadow-lg border rounded-md z-50">
      <ul className="flex flex-col text-sm">
        <Link
          href="/services/educationCounselling"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Education Counseling
        </Link>

        <Link
          href="/services/educationGuidence"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Admission Guidance
        </Link>

        <Link
          href="/services/educationAbroad"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Education Abroad
        </Link>

        <Link
          href="/services/interviewPreparation"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Interview Preparation
        </Link>

        <Link
          href="/services/examinationPreparation"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Examination Preparation
        </Link>

        <Link
          href="/services/visaServices"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Visa Services
        </Link>
      </ul>
    </div>
  )}
</div>


  <a
    href="/blogPage"
    className={`hover:text-orange-500 ${
      pathname === "/blog" ? "text-orange-500" : ""
    }`}
  >
    BLOG
  </a>

  <a
    href="/contactUsPage"
    className={`hover:text-orange-500 ${
      pathname === "/contactUsPage" ? "text-orange-500" : ""
    }`}
  >
    CONTACT US
  </a>

 <button
  onClick={() => setEnquireOpen(true)}
  className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600"
>
  Enquire Now
</button>

</nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden text-black  dark:text-white  bg-white dark:bg-black border-t">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
            <a href="/" onClick={() => setOpen(false)}>HOME</a>
            <a href="/aboutUsPage" onClick={() => setOpen(false)}>ABOUT US</a>
            <a href="/services" onClick={() => setOpen(false)}>SERVICES</a>
            <a href="/blog" onClick={() => setOpen(false)}>BLOG</a>
            <a href="/contactUsPage" onClick={() => setOpen(false)}>CONTACT US</a>
           <button
  onClick={() => setEnquireOpen(true)}
  className="bg-orange-500 text-white py-2 rounded-md"
>
  Enquire Now
</button>

          </div>
        </div>
      )}
     {enquireOpen && (
  <EnquireNowForm onClose={() => setEnquireOpen(false)} />
)}


    </header>
    
  );
};

export default NavBar;
