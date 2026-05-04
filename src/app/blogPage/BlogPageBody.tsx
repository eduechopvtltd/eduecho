"use client";

import Image from "next/image";
import { discussionBlazer,interviewLaptop, showingPresentation} from "../../../assets/images";
const posts = [
  {
    id: 1,
    category: "Students",
    title: "Highlighting Strategies For Student Success",
    image: interviewLaptop,
  },
  {
    id: 2,
    category: "Uncategorized",
    title: "Studying in the UK has always been my dream",
    image: showingPresentation
  },
  {
    id: 3,
    category: "Students",
    title: "Strategies For Student Success",
    image: discussionBlazer
  },
];

export default function BlogPageBody() {
  return (
    <section className="w-full px-4 md:px-10 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        
        {/* LEFT BLOG LIST */}
        <div className="flex flex-col gap-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl shadow-xl overflow-hidden bg-white"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={900}
                height={500}
                className="w-full h-72 object-cover"
              />

              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-green-500 text-white">
                    {post.category}
                  </span>
                  <span className="text-neutral-500">
                    Eduecho • Jan 1, 2025
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-black">
                  {post.title}
                </h2>

                <p className="text-neutral-600 line-clamp-2">
                  In order to write the perfect blog post, you need to break your
                  content up into paragraphs...
                </p>

                <button className="text-orange-500 font-bold w-fit">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="flex flex-col gap-8">
          
          {/* SEARCH */}
          <div className="bg-slate-100 p-6 rounded-xl">
            <p className="mb-2 text-black">Search</p>
            <input
              className="w-full p-3 rounded-md outline-none"
              placeholder="Search..."
            />
            <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-md">
              Search
            </button>
          </div>

          {/* RECENT POSTS */}
          <div>
            <h3 className="text-xl font-bold text-black mb-3">
              Recent Post
            </h3>
            <ul className="flex flex-col gap-3 text-black">
              {posts.map((p) => (
                <li key={p.id} className="hover:text-orange-500 cursor-pointer">
                  {p.title}
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-xl font-bold text-black mb-3">
              Categories
            </h3>
            <ul className="flex flex-col gap-2 text-black">
              <li>› Students</li>
              <li>› Uncategorized</li>
            </ul>
          </div>

          {/* TAGS */}
          <div>
            <h3 className="text-xl font-bold text-black mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {["coach", "coaching", "education", "lifeguide", "motivation", "strategy"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 rounded-lg text-black text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
