"use client";
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
export default function ExperienceSection() {
  return (
   <section
  id="experience"
  className="py-24 bg-[#000000] overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#5f7cff] uppercase tracking-wider text-sm mb-4">
          ::: OUR EXPERIENCE
        </p>

        <h2 className="text-white font-bold text-1xl md:text-1xl lg:text-3xl leading-[1.15]">
          Digital Transformation
          <br />
          Services For Business
          <br />
          <span className="bg-gradient-to-r from-[#5f7cff] to-[#c14fff] bg-clip-text text-transparent">
            Modernization
          </span>
        </h2>

        <p className="text-gray-200 text-base lg:text-lg leading-8 mt-8">
          GDFX excels in delivering innovative IT solutions with expertise in
          custom software development, mobile app development, web design,
          digital marketing, and more. Our skilled team specializes in creating
          scalable, secure, and user-friendly solutions across various
          industries. From CRM systems to e-commerce platforms and cloud
          integration, GDFX’s expertise empowers businesses to drive growth,
          efficiency, and digital transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-x-08 gap-y-5 mt-10">
          {[
            "Custom Software Development",
            "Web design & UI/UX Design",
            "IT Consulting & Strategy",
            "API Development & Integration",
            "Product Development & Prototyping",
            "Digital transformation & IT Solutions",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={22}
                className="text-[#5f7cff] flex-shrink-0"
              />
              <span className="text-gray-300 text-lg">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT IMAGE COLLAGE */}
      {/* RIGHT VIDEO SECTION */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="bg-white rounded-2xl p-3 shadow-1xl overflow-hidden">
    <motion.video
      autoPlay
      muted
      loop
      playsInline
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="w-full [430px] object-cover rounded-1xl"
    >
      <source
        src="images/Tech.mp4"
        type="video/mp4"
      />
    </motion.video>
  </div>
</motion.div>
</div>

    {/* BOTTOM CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-16"
    >
      <h3 className="text-white font-bold text-3xl md:text-4xl">
        Do you have an idea{" "}
        <span className="bg-gradient-to-r from-[#5f7cff] to-[#c14fff] bg-clip-text text-transparent">
          We have an experts team
        </span>
      </h3>

      <p className="text-gray-300 mt-6 text-lg leading-8">
        At GDFX, we have a team of experts dedicated to delivering top-tier IT
        solutions. Our skilled professionals specialize in software
        development, mobile app development, web design, digital marketing, and
        more. With years of experience and a passion for innovation, our team
        works collaboratively to create customized solutions that meet your
        unique business needs and drive lasting success.
      </p>
    </motion.div>

  </div>
</section>
  );
}

