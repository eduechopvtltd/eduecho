"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { eduecho } from "../../../assets/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image src={eduecho} alt="EduEcho Logo" width={180} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering students to achieve their global education dreams through expert guidance and personalized solutions since 2015.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Testimonials", "Latest Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="group flex items-center gap-3 hover:text-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full" />
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:bg-orange-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Call Us</p>
                  <a href="tel:+917411605384" className="text-sm text-gray-400 hover:text-white transition-colors">+91 7411605384</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:bg-purple-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email Us</p>
                  <a href="mailto:help@eduecho.in" className="text-sm text-gray-400 hover:text-white transition-colors">help@eduecho.in</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:bg-blue-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Our Offices</p>
                  <p className="text-xs text-gray-400 mt-2">
                    <span className="font-bold text-gray-300">Bangalore:</span> 1009 B Wing, 10th Floor, Mittal Tower, MG Road Bangalore, Karnataka - 560001
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    <span className="font-bold text-gray-300">Mumbai:</span> Office No. 230, 2nd floor, Sudama Space, Shree Ram Nagar Complex, Vartak Road Near Flyover, Virar West 401303
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full" />
            </h4>
            <p className="text-sm text-gray-400">Subscribe to get latest updates and education tips.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="absolute right-2 top-2 p-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {currentYear} <span className="text-white font-semibold">EduEcho</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
