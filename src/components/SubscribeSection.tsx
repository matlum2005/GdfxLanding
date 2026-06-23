"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SubscribeSection() {
  return (
    <section
      id="subscribe"
      className="bg-[#020b35] py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-bold text-white text-2xl md:text-1xl lg:text-2xl leading-[1.25]"
        >
          Subscribe For The Latest News Updates, And 
          <br />
          <span className="bg-gradient-to-r from-[#5f7cff] via-[#8b63ff] to-[#c14fff] bg-clip-text text-transparent">
             Expert Growth Tips.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-[#d4d8e8] text-lg md:text-xl leading-10 max-w-6xl mx-auto"
        >
          Don’t miss out on the latest digital trends, innovations, and
          exclusive insights that can transform the way you work and stay
          connected. Stay informed and get an edge in your industry by joining
          our community of forward-thinkers. Subscribe now to explore the
          future of digital success
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex
              items-center
              gap-4
              px-11
              py-4
              rounded-xl
              text-white
              text-1xl
              font-medium
              bg-gradient-to-r
              from-[#ff6b7a]
              to-[#b34cff]
              shadow-[0_13px_30px_rgba(179,76,255,0.35)]
            "
          >
            Contact Now
            <ArrowRight size={28} />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}