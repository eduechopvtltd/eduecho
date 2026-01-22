"use client";

import Image from "next/image";
import { useState } from "react";
import { latestBlog } from "../../../assets/images";
const blogs = [
  {
    id: 1,
    category: "Students",
    title: "Highlighting Strategies For Student Success",
    author: "EduEcho",
    date: "January 1, 2025",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    category: "Students",
    title: "Effective Study Techniques for Global Education",
    author: "EduEcho",
    date: "January 5, 2025",
    image: "/images/blog-2.jpg",
  },
  
];

export default function Blog() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));

  const next = () =>
    setActive((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));

  return (
    <section className=" text-black  dark:text-white  bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="w-10 h-[2px] bg-orange-500" />
          <h2 className="text-2xl  md:text-3xl font-bold">
            Read our latest blog
          </h2>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex  gap-10 justify-center">
          {blogs.slice(0, 2).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden relative flex justify-center">
          <BlogCard blog={blogs[active]} />

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}

/* BLOG CARD */
function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="w-80 bg-white rounded-md shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={latestBlog}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">
            {blog.category}
          </span>
          <span >👤 {blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <h3 className="font-bold text-gray-800 text-base  leading-6">
          {blog.title}
        </h3>

        <button className="text-orange-500 text-sm font-bold">
          READ MORE
        </button>
      </div>
    </div>
  );
}
