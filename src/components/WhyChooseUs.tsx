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
      className="bg-black py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c14fff] uppercase tracking-[4px] text-xs sm:text-sm mb-5">
              ::: WHY CHOOSE US
            </p>

            <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              From Concept To
              <br />
              Completion –
              <br />
              <span className="bg-gradient-to-r from-[#b14dff] to-[#5f7cff] bg-clip-text text-transparent">
                GDFX Brings
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#b14dff] to-[#5f7cff] bg-clip-text text-transparent">
                Your Digital Vision
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#b14dff] to-[#5f7cff] bg-clip-text text-transparent">
                To Life
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mt-6 lg:mt-8 max-w-2xl">
              GDFX delivers innovative, scalable IT solutions tailored to your
              business needs. Our team specializes in software development,
              mobile apps, web design, and digital marketing. We focus on
              transparency, collaboration, and long-term success, ensuring
              cost-effective, cutting-edge solutions that help your business
              grow.
            </p>

            <div className="mt-8 lg:mt-10 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  className="
                    bg-gradient-to-r
                    from-[#b14dff]
                    to-[#d05cff]
                    rounded-xl
                    px-4
                    sm:px-5
                    py-4
                    sm:py-5
                    flex
                    justify-between
                    items-center
                    gap-4
                    cursor-pointer
                  "
                >
                  <span className="text-white font-medium text-sm sm:text-base lg:text-lg leading-6">
                    {item.q}
                  </span>

                  <ChevronDown className="text-white flex-shrink-0" size={22} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                src="/images/WhychooseUs.png"
                alt="Why Choose Us"
                width={500}
                height={500}
                className="
                  w-[260px]
                  sm:w-[340px]
                  md:w-[420px]
                  lg:w-[500px]
                  h-auto
                  object-contain
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
