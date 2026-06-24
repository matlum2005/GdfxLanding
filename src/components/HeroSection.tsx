"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
  {/* Background Image */}
  <Image
    src="/images/hero-bg.png"
    alt="Hero Background"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#060f35]/85" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1b2c7a40,transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#8b5cf640,transparent_50%)]" />

  {/* IMPORTANT WRAPPER */}
  <div className="relative z-10 mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center rounded-full border border-[#4D72FF]/60 bg-white/5 px-4 py-2 mb-8">
              <span className="text-[#7f9cff] text-sm sm:text-[0.95rem] font-medium tracking-wide">
                Transform Your Idea Into Effective Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white font-extrabold leading-[1.06] text-2xl md:text-2xl lg:text-6xl">
              We Provide
              <br />
              <span className="bg-gradient-to-r from-[#5f7cff] via-[#7f6dff] to-[#c14fff] bg-clip-text text-transparent">
                Mobile Apps
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-base md:text-lg lg:text-xl leading-4 md:leading-6 text-gray-300 max-w-1xl">
              Consider that you have a concept for a website or an app that can deliver a solution, knowledge, or something enjoyable. We&apos;re here to help you bring your vision to life online or on your phone. We want users to have a positive experience using your website or app, which means it must be simple to use, appealing to the eye, and capable of performing its intended function.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-white text-base md:text-lg font-semibold bg-gradient-to-r from-[#6f8cff] to-[#b34eff] shadow-[0_15px_40px_rgba(109,140,255,0.25)]"
              >
                Start a Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-white text-base md:text-lg font-semibold bg-gradient-to-r from-[#5f7cff] to-[#c14fff] shadow-[0_15px_40px_rgba(193,79,255,0.25)]"
              >
                Book Free Consultant
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 mt-2 lg:mt-0">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">

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