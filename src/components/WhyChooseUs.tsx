"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
export default function WhyChooseUs() {
 const items = [
  {
    q: "What makes GDFX different from other IT service providers?",
    a: "GDFX stands out through transparency, innovation, and a client-first approach. We focus on delivering tailored digital solutions that drive measurable business growth.",
  },
  {
    q: "Can GDFX handle complex software development needs?",
    a: "Yes, our experienced development team specializes in building scalable, secure, and high-performance software solutions for businesses of all sizes.",
  },
  {
    q: "How do GDFX’s web development services benefit my business?",
    a: "Our web solutions improve user experience, increase engagement, strengthen brand presence, and help convert visitors into customers.",
  },
 
];

  return (
    <section
  id="why-choose-us"
  className="py-24 bg-[Black] overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-5">
          ::: WHY CHOOSE US
        </p>

        <h2 className="text-white font-bold text-2xl lg:text-2xl leading-tight">
          From Concept To
          <br />
          Completion –{" "}
          <span className="bg-gradient-to-r from-[#b14dff] to-[#5f7cff] bg-clip-text text-transparent">
            GDFX Brings
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#b14dff] to-[#5f7cff] bg-clip-text text-transparent">
            Your Digital Vision To Life
          </span>
        </h2>

        <p className="text-gray-200 text-lg leading-9 mt-8 max-w-2xl">
          GDFX delivers innovative, scalable IT solutions tailored to your
          business needs. Our team of experts specializes in software
          development, mobile apps, web design, and digital marketing. We focus
          on transparency, collaboration, and long-term success, ensuring
          cost-effective, cutting-edge solutions that drive growth. Partner with
          GDFX for results-driven IT solutions that achieve sustainable business
          success.
        </p>

        <div className="mt-10 space-y-5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-[#b14dff] to-[#d05cff] rounded-md px-4 py-5 flex justify-between items-center cursor-pointer"
            >
              <span className="text-white font-medium text-xl">
                {item.q}
              </span>

              <ChevronDown
                className="text-white flex-shrink-0"
                size={26}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/images/WhychooseUs.png"
            alt="Why Choose Us"
            width={500}
            height={500}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
  );
}

