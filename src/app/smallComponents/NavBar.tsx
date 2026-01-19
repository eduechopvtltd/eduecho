// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { eduecho } from "../../../assets/images";
import { useState, useRef, useEffect} from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement | null>(null);

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
    <header className="w-full bg-white shadow-sm">
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
      pathname === "/" ? "text-orange-500" : "text-black"
    }`}
  >
    HOME
  </a>

  <a
    href="/aboutUsPage"
    className={`hover:text-orange-500 ${
      pathname === "/aboutUsPage" ? "text-orange-500" : "text-black"
    }`}
  >
    ABOUT US
  </a>

  <div className="relative" ref={servicesRef}>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className={`flex items-center gap-1 hover:text-orange-500 ${
      pathname.startsWith("/services") ? "text-orange-500" : "text-black"
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
    <div className="absolute top-full left-0 mt-3 w-60 bg-white shadow-lg border rounded-md z-50">
      <ul className="flex flex-col text-sm">
        <Link
          href="/services/education-counseling"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Education Counseling
        </Link>

        <Link
          href="/services/admission-guidance"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Admission Guidance
        </Link>

        <Link
          href="/services/education-abroad"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Education Abroad
        </Link>

        <Link
          href="/services/interview-preparation"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Interview Preparation
        </Link>

        <Link
          href="/services/examination-preparation"
          onClick={() => setServicesOpen(false)}
          className="px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
        >
          Examination Preparation
        </Link>

        <Link
          href="/services/visa-services"
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
    href="/blog"
    className={`hover:text-orange-500 ${
      pathname === "/blog" ? "text-orange-500" : "text-black"
    }`}
  >
    BLOG
  </a>

  <a
    href="/contactUsPage"
    className={`hover:text-orange-500 ${
      pathname === "/contactUsPage" ? "text-orange-500" : "text-black"
    }`}
  >
    CONTACT US
  </a>

  <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600">
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
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
            <a href="/" onClick={() => setOpen(false)}>HOME</a>
            <a href="/aboutUsPage" onClick={() => setOpen(false)}>ABOUT US</a>
            <a href="/services" onClick={() => setOpen(false)}>SERVICES</a>
            <a href="/blog" onClick={() => setOpen(false)}>BLOG</a>
            <a href="/contactUsPage" onClick={() => setOpen(false)}>CONTACT US</a>
            <button className="bg-orange-500 text-white py-2 rounded-md">
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
