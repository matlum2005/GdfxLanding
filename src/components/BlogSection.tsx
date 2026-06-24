"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";


const blogs = [
  {
    date: "13 Feb\n2025",
    src: "/images/blog.png",
    title: "Post-Graduation Pathways: Pursuing Careers Abroad ...",
  },
  {
    date: "12 Feb\n2025",
    src: "/images/blog2.png",
    title: "Developers can take a trick from Product Managers'...",
  },
  {
    date: "11 Feb\n2025",
    src: "/images/blog3.png",
    title: "The Impact of Open Educational Resources on Higher...",
  },
  {
    date: "10 Feb\n2025",
    src: "/images/blog4.png",
    title: "Backing fact-checking organizations alongside Nobe...",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 bg-[Black] overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[#c14fff] uppercase tracking-wider text-sm font-medium">
            ::: FROM THE BLOG
          </p>

          <h2 className="mt-5 text-white font-bold text-3xl lg:text-4xl leading-[1.15]">
            Insights & Trends:
            <span className="bg-gradient-to-r from-[#c14fff] via-[#9f63ff] to-[#5f7cff] bg-clip-text text-transparent">
              {" "}The Latest In IT Solutions And
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#c14fff] via-[#9f63ff] to-[#5f7cff] bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>

          <p className="max-w-5xl mx-auto mt-8 text-gray-300 text-xl leading-10">
            Explore GDFX’s blog for expert insights on software development,
            digital marketing, web design, and industry trends. Stay updated
            with actionable strategies and solutions that drive business growth
            and innovation.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-1 xl:grid-cols-4 gap-8 mt-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="bg-[#a6afe8] rounded-xl overflow-hidden shadow-2xl group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={blog.src}
                  fallbackSrc="/images/blog.jpg"
                  alt={blog.title}
                  width={500}
                  height={250}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Date Ribbon */}
                <div
                  className="absolute top-0 left-0 bg-[#9a57ff] text-white px-5 py-3 font-bold text-xl leading-8"
                  style={{
                    clipPath:
                      "polygon(0 0,100% 0,70% 100%,0 100%)",
                  }}
                >
                  {blog.date.split("\n")[0]}
                  <br />
                  {blog.date.split("\n")[1]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-[20px] leading-9 text-center min-h-[90px]">
                  {blog.title}
                </h3>

                <button
                  className="
                  mt-6
                  w-full
                  rounded-xl
                  py-4
                  text-white
                  text-2xl
                  font-medium
                  bg-gradient-to-r
                  from-[#6f8cff]
                  to-[#c14fff]
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition
                  duration-300
                  hover:scale-[1.03]
                "
                >
                  Read More
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}