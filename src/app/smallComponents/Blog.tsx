"use client";
import Image from "next/image";
import { useState } from "react";
import { latestBlog } from "../../../assets/images";
import BlurFade from "../components/magicui/BlurFade";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";

const blogs = [
  { id: 1, category: "Students", title: "Highlighting Strategies For Student Success", author: "EduEcho", date: "January 1, 2025" },
  { id: 2, category: "Students", title: "Effective Study Techniques for Global Education", author: "EduEcho", date: "January 5, 2025" },
];

export default function Blog() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((p) => (p === 0 ? blogs.length - 1 : p - 1));
  const next = () => setActive((p) => (p === blogs.length - 1 ? 0 : p + 1));

  return (
    <section className="text-black bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <BlurFade>
          <div className="flex flex-col items-center gap-4 mb-14">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[2px] bg-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Read Our Latest Blog</h2>
            <p className="text-gray-500 text-sm text-center max-w-md">Stay updated with the latest insights and tips for your academic journey</p>
          </div>
        </BlurFade>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-10 justify-center">
          {blogs.slice(0, 2).map((blog, i) => (
            <BlurFade key={blog.id} delay={i * 0.15}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}
                className="w-96 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-500 relative">
                <div className="relative h-52 overflow-hidden group">
                  <Image src={latestBlog} alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium">{blog.category}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{blog.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{blog.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg leading-7">{blog.title}</h3>
                  <button className="group/btn flex items-center gap-2 text-orange-500 text-sm font-bold hover:gap-3 transition-all duration-300">
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 relative">
                <div className="relative h-48"><Image src={latestBlog} alt={blogs[active].title} fill className="object-cover" /></div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">{blogs[active].category}</span>
                    <span>👤 {blogs[active].author}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-base leading-6">{blogs[active].title}</h3>
                  <button className="text-orange-500 text-sm font-bold flex items-center gap-1">READ MORE <ArrowRight className="w-3 h-3" /></button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:shadow-lg transition-shadow"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={next} className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:shadow-lg transition-shadow"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
