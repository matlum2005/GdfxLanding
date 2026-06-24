"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "/images/Project1.png",
    alt: "Project 1",
  },
  {
    image: "/images/Project2.png",
    alt: "Project 2",
  },
  {
    image: "/images/Project3.png",
    alt: "Project 3",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-[Black] py-24 overflow-hidden"
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
          <p className="text-[#c14fff] uppercase tracking-widest text-sm mb-5">
            ::: WE MAKE CONNECTION
          </p>

          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2]">
            A Showcase Of Custom{" "}
            <span className="bg-gradient-to-r from-[#c14fff] via-[#9f63ff] to-[#5f7cff] bg-clip-text text-transparent">
              IT Solutions Delivering
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#c14fff] via-[#9f63ff] to-[#5f7cff] bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </h2>

          <p className="max-w-8xl mx-auto mt-8 text-[#d7d7e8] text-lg lg:text-xl leading-07">
            Explore GDFX&apos;s portfolio to discover how we deliver innovative,
            custom IT solutions that drive business growth. From scalable
            software development and mobile app design to dynamic web
            development and digital marketing, our portfolio showcases
            successful projects across industries. With a focus on excellence,
            innovation, and client satisfaction, GDFX&apos;s portfolio reflects
            our commitment to transforming digital visions into reality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-xl"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={700}
                  height={450}
                  className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b35]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex justify-center mt-14"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              px-12
              py-4
              rounded-xl
              text-white
              text-1xl
              font-medium
              bg-gradient-to-r
              from-[#6f8cff]
              to-[#c14fff]
              flex
              items-center
              gap-5
              shadow-[0_15px_40px_rgba(148,87,255,0.35)]
            "
          >
            All Project
            <ArrowRight size={25} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}