"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const features = [
    "Book Your Consultation Now",
    "Get Expert Advice Today",
    "Reserve Your Consultation Slot",
    "Schedule Your Free Consultation",
    "Consult with Our Experts",
    "Plan Your Strategy Session",
  ];

  return (
    <section
      id="contact"
      className="bg-[Black] py-24 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#5f7cff] uppercase tracking-widest text-sm mb-6">
              ::: CONTACT WITH US
            </p>

            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.15]">
              Schedule Your Consultation
              <br />
              <span className="bg-gradient-to-r from-[#5f7cff] via-[#8c63ff] to-[#c14fff] bg-clip-text text-transparent">
                 Today
              </span>
            </h2>

            <p className="text-white text-xl mt-4 leading-5">
              Book your consultation to explore tailored solutions and expert
              insights today.
            </p>

            {/* FEATURES */}
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-3 mt-10">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={26}
                    className="text-[#5f7cff] flex-shrink-0"
                  />
                  <span className="text-[#bfc8e0] text-xl">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-14
                flex
                items-center
                gap-2
                px-11
                py-4
                rounded-xl
                text-white
                text-2xl
                font-medium
                bg-gradient-to-r
                from-[#ff6b7a]
                to-[#b34cff]
                shadow-[0_15px_40px_rgba(179,76,255,0.35)]
              "
            >
              Contact Now
              <ArrowRight size={26} />
            </motion.button>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              className="
                relative
                rounded-2xl
                overflow-hidden
                p-10
                mt-40
                min-h-[700px]
              "
              style={{
                backgroundImage:
                  "url('/images/contact-us.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              <div className="relative z-08 space-y-2">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    h-[50px]
                    px-6
                    rounded-md
                    bg-white
                    text-gray-700
                    text-xl
                    outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    h-[50px]
                    px-6
                    rounded-md
                    bg-white
                    text-gray-700
                    text-xl
                    outline-none
                  "
                />

                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="
                    w-full
                    h-[50px]
                    px-6
                    rounded-md
                    bg-white
                    text-gray-700
                    text-xl
                    outline-none
                  "
                />

                <div className="relative">
                  <select
                    className="
                      w-full
                      h-[50px]
                      px-6
                      rounded-md
                      bg-white
                      text-gray-500
                      text-xl
                      outline-none
                      appearance-none
                    "
                  >
                    <option>Requirement</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                  </select>

                  <ChevronDown
                    size={20}
                    className="
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                      pointer-events-none
                    "
                  />
                </div>

                <textarea
                  rows={6}
                  placeholder="Write a Message"
                  className="
                    w-full
                    h-[150px]
                    px-6
                    py-5
                    rounded-md
                    bg-white
                    text-gray-700
                    text-xl
                    outline-none
                    resize-none
                  "
                />

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    w-full
                    h-[50px]
                    rounded-md
                    text-white
                    text-2xl
                    font-medium
                    bg-gradient-to-r
                    from-[#6f8cff]
                    to-[#c14fff]
                  "
                >
                  Send a Message
                </motion.button>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}