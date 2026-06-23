"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-[#020b35] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#6E84FF] uppercase tracking-wider text-sm mb-4">
              ::: SERVICE
            </p>

            <h2 className="text-white text-5xl font-bold leading-tight">
              Services We're Providing
              <br />
              To{" "}
              <span className="bg-gradient-to-r from-[#5f7cff] to-[#c14fff] bg-clip-text text-transparent">
                Our Customers
              </span>
            </h2>

            <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
              At Globaldigitalsfx, we offer a comprehensive range of IT
              services designed to meet the diverse needs of businesses in
              today's digital landscape. Our expert team is committed to
              delivering innovative solutions that drive efficiency, enhance
              security, and foster growth. Here's a detailed look at our key
              services:
            </p>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8"
            >
              <Image
                src="/images/services.png"
                alt="Services"
                width={600}
                height={450}
                className="w-full max-w-[520px] object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-[#101d44] border-b-2 border-[#4169ff] rounded-md p-10 text-center shadow-xl"
            >
              <h3 className="text-white text-3xl font-bold">
                Custom Web Development
              </h3>

              <p className="text-gray-300 mt-5 leading-8">
                GDFX provides custom software development, designing solutions
                that align with your goals. From concept to deployment, we
                ensure high-performance software tailored to your exact needs.
              </p>

              <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#5f7cff] to-[#c14fff] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Explore More →
              </button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-[#101d44] border-b-2 border-[#4169ff] rounded-md p-10 text-center shadow-xl"
            >
              <h3 className="text-white text-3xl font-bold">
                Mobile Application Design & Development
              </h3>

              <p className="text-gray-300 mt-5 leading-8">
                GDFX offers mobile app development for Android, iOS, and
                cross-platform environments, creating user-friendly,
                high-performing, secure, and intuitive apps for both consumer
                and internal use.
              </p>

              <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#5f7cff] to-[#c14fff] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                Explore More →
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}