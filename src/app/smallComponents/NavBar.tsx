// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { eduecho } from "../../../assets/images";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import EnquireNowForm from "./EnquireNowForm";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [enquireOpen, setEnquireOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for glass effect
      setScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (open && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  const navLinkClass = (path: string) =>
    `relative hover:text-orange-500 transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 ${
      pathname === path ? "text-orange-500 after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const serviceLinks = [
    { href: "/services/educationCounselling", label: "Education Counseling" },
    { href: "/services/educationGuidence", label: "Admission Guidance" },
    { href: "/services/educationAbroad", label: "Education Abroad" },
    { href: "/services/interviewPreparation", label: "Interview Preparation" },
    { href: "/services/examinationPreparation", label: "Examination Preparation" },
    { href: "/services/visaServices", label: "Visa Services" },
  ];

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full sticky top-0 z-40 transition-colors duration-500 ${
      scrolled ? "glass-navbar shadow-lg" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src={eduecho} alt="Eduecho" width={140} height={40} priority className="cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" className={navLinkClass("/")}>HOME</a>
          <a href="/aboutUsPage" className={navLinkClass("/aboutUsPage")}>ABOUT US</a>

          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 hover:text-orange-500 transition-colors ${
                pathname.startsWith("/services") ? "text-orange-500" : ""
              }`}
            >
              SERVICES
              <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 w-64 bg-white shadow-xl border border-gray-100 rounded-xl z-50 overflow-hidden"
                >
                  <ul className="flex flex-col text-sm py-2">
                    {serviceLinks.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setServicesOpen(false)}
                        className="px-5 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/blogPage" className={navLinkClass("/blogPage")}>BLOG</a>
          <a href="/contactUsPage" className={navLinkClass("/contactUsPage")}>CONTACT US</a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEnquireOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 font-semibold text-sm"
          >
            Enquire Now
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden text-black bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
              <a href="/" onClick={() => setOpen(false)} className="hover:text-orange-500 transition-colors">HOME</a>
              <a href="/aboutUsPage" onClick={() => setOpen(false)} className="hover:text-orange-500 transition-colors">ABOUT US</a>
              <div>
                <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full">
                  SERVICES
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 flex flex-col gap-2 text-sm overflow-hidden">
                      {serviceLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-orange-500 transition-colors py-1">{link.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="/blogPage" onClick={() => setOpen(false)} className="hover:text-orange-500 transition-colors">BLOG</a>
              <a href="/contactUsPage" onClick={() => setOpen(false)} className="hover:text-orange-500 transition-colors">CONTACT US</a>
              <button onClick={() => setEnquireOpen(true)} className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-2.5 rounded-xl font-semibold">
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {enquireOpen && <EnquireNowForm onClose={() => setEnquireOpen(false)} />}
    </motion.header>
  );
};

export default NavBar;
