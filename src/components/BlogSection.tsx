"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock3,
  Sparkles,
} from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

const blogs = [
  {
    date: "13 Feb\n2025",
    category: "Technology",
    read: "5 min read",
    src: "/images/blog.png",
    title: "Post-Graduation Pathways: Pursuing Careers Abroad ...",
  },
  {
    date: "12 Feb\n2025",
    category: "Development",
    read: "7 min read",
    src: "/images/blog2.png",
    title: "Developers can take a trick from Product Managers'...",
  },
  {
    date: "11 Feb\n2025",
    category: "Education",
    read: "6 min read",
    src: "/images/blog3.png",
    title: "The Impact of Open Educational Resources on Higher...",
  },
  {
    date: "10 Feb\n2025",
    category: "Business",
    read: "8 min read",
    src: "/images/blog4.png",
    title: "Backing fact-checking organizations alongside Nobe...",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#04091d] py-24 sm:py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#5f7cff]/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#c14fff]/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-[#5f7cff]/30 bg-white/5 px-6 py-2 backdrop-blur-xl">

            <Sparkles
              size={16}
              className="text-[#c14fff]"
            />

            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#c14fff]">
              FROM OUR BLOG
            </span>

          </div>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">

            Insights & Trends

            <span className="block bg-gradient-to-r from-[#5f7cff] via-[#8d74ff] to-[#c14fff] bg-clip-text text-transparent">

              Driving Digital Transformation

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300 lg:text-xl">

            Stay updated with enterprise software development,
            cloud technologies, AI innovations, cybersecurity,
            UI/UX design and digital transformation strategies.

            Explore expert insights that help businesses scale
            faster and smarter.

          </p>

        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {blogs.map((blog, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, y:60 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{
                duration:.6,
                delay:index*.08
              }}
              whileHover={{
                y:-15,
                scale:1.02
              }}
              className="group overflow-hidden rounded-[28px]
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_30px_80px_rgba(0,0,0,.35)]
              transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <ImageWithFallback
                  src={blog.src}
                  fallbackSrc="/images/blog.jpg"
                  alt={blog.title}
                  width={700}
                  height={700}
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03081d] via-transparent to-transparent opacity-70" />

                {/* Category */}
                <div className="absolute left-5 top-5">

                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-xl">

                    {blog.category}

                  </span>

                </div>

                {/* Date */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-xl">

                  <Calendar size={15} className="text-[#c14fff]" />

                  <span className="text-sm font-medium text-white">
                    {blog.date.replace("\n"," ")}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock3
                    size={15}
                    className="text-[#5f7cff]"
                  />
                  <span>{blog.read}</span>
                </div>

                <h3
                  className="
                  mt-5
                  text-2xl
                  font-bold
                  leading-9
                  text-white
                  transition
                  duration-300
                  group-hover:text-[#d3b4ff]
                  "
                >
                  {blog.title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-gray-400">
                  Discover the latest innovations, practical
                  strategies, and enterprise insights helping
                  organizations accelerate digital transformation
                  and achieve sustainable business growth.
                </p>

                <button
                  className="
                  mt-8
                  group/button
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#5f7cff]/30
                  bg-gradient-to-r
                  from-[#5f7cff]
                  via-[#7f6dff]
                  to-[#c14fff]
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  shadow-[0_20px_60px_rgba(95,124,255,.35)]
                  transition-all
                  duration-500
                  hover:shadow-[0_25px_80px_rgba(193,79,255,.45)]
                  hover:scale-[1.03]
                  active:scale-[0.98]
                  "
                >
                  Read Full Article

                  <ArrowRight
                    size={20}
                    className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-2
                    "
                  />
                </button>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}