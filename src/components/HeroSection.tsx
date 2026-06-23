"use client";

import { motion } from "framer-motion";
import {
  Users,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#060f35] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1b2c7a20,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#8b5cf620,transparent_50%)]" />

      <div className="relative max-w-8xl mx-auto px-1 lg:px-2">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center border border-[#4D72FF] rounded-full px-2 py-3 mb-6">
              <span className="text-[#7f9cff] text-sm font-medium tracking-wide">
                Transform Your Idea Into Effective Solutions
              </span>
            </div>

            {/* Heading */}
           <h1 className="text-white font-extrabold leading-[1.1] text-[40px]">
              We Provide
              <br />
              <span className="bg-gradient-to-r from-[#5f7cff] via-[#7f6dff] to-[#c74fff] bg-clip-text text-transparent">
  Mobile Apps
</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-gray-300 text-lg leading-10 max-w-3xl">
              Consider that you have a concept for a website or an app that can
              deliver a solution, knowledge, or something enjoyable. We're here
              to help you bring your vision to life online or on your phone. We
              want users to have a positive experience using your website or
              app, which means it must be simple to use, appealing to the eye,
              and capable of performing its intended function.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-10">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full text-white text-xl font-semibold bg-gradient-to-r from-[#6f8cff] to-[#b34eff]"
              >
                Start a Project
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full text-white text-xl font-semibold bg-gradient-to-r from-[#ff6b7f] to-[#b84cff]"
              >
                Book Free Consultant
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
         
<div className="space-y-6">

  {/* Top Cards */}
  <div className="grid grid-cols-2 gap-8">

    {/* Card 1 */}
   <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  className="
    bg-[#121d42]/80
    backdrop-blur-md
    border border-white/10
    rounded-[20px]
    px-8 py-8
    h-[300px]
    w-[300px]
    shadow-[0_0_20px_rgba(79,70,229,0.15)]
  "
>
  <Users
    size={48}
    className="text-[#8a63ff] mb-6"
  />

  <h3 className="text-white text-[15px] font-bold leading-[.4] mb-3">
    Client Centric Approach
  </h3>

  <p className="text-gray-400 text-[14px] leading-[2]">
    We prioritize understanding your unique business needs,
    addressing challenges, and delivering tailored solutions
    aligned with your goals to drive growth and long-term value
    creation.
  </p>
</motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{
        y: -8,
        rotateY: -5,
      }}
      className="bg-[#121d42]/80 backdrop-blur-md border border-[#31406f] rounded-[20px]
      p-4 h-[300px] flex flex-col justify-start"
    >
      <CheckCircle
        size={48}
        className="text-pink-500 mb-6"
      />

      <h3 className="text-white text-[15px] font-bold leading-[1.0] mb-3">
        Quality &
        <br />
        Excellence
      </h3>

      <p className="text-[#9ca3af] text-[14px] leading-[2]">
        Delivering high-quality, precise solutions is our commitment.
        We consistently strive for excellence, ensuring exceptional
        results that meet and exceed client expectations every time.
      </p>
    </motion.div>
  </div>

  {/* Bottom Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    className="bg-[#121d42]/80 backdrop-blur-md border border-[#31406f]
    rounded-[22px] p-10 min-h-[260px]"
  >
    <ShieldCheck
      size={60}
      className="text-cyan-400 mb-8"
    />

    <h3 className="text-white text-[20px] font-bold mb-7">
      Privacy & Security
    </h3>

    <p className="text-[#9ca3af] text-[16px] leading-[2] w-[100%]">
      Protecting client data is our top priority. We ensure strict
      confidentiality and implement advanced data security measures
      to safeguard sensitive information and maintain trust.
    </p>
  </motion.div>
</div>
        </div>
      </div>
    </section>
  );
}