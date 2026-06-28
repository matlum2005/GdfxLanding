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
      className="bg-black py-14 sm:py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-[#5f7cff] uppercase tracking-[4px] text-xs sm:text-sm mb-5">
              ::: CONTACT WITH US
            </p>

            <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Schedule Your Consultation
              <br />
              <span className="bg-gradient-to-r from-[#5f7cff] via-[#8c63ff] to-[#c14fff] bg-clip-text text-transparent">
                Today
              </span>
            </h2>

            <p className="text-[#c7d0e8] text-base sm:text-lg lg:text-xl mt-6 leading-7 max-w-xl">
              Book your consultation to explore tailored solutions and expert
              insights tailored to your business needs.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-x-8 lg:gap-x-14 gap-y-5 mt-10">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#5f7cff] mt-1 flex-shrink-0"
                  />

                  <span className="text-[#bfc8e0] text-base sm:text-lg leading-7">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                mt-10
                lg:mt-14
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                sm:px-10
                py-3.5
                rounded-xl
                text-base
                sm:text-lg
                lg:text-xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-[#ff6b7a]
                to-[#b34cff]
                shadow-[0_15px_40px_rgba(179,76,255,0.35)]
                transition-all
              "
            >
              Contact Now
              <ArrowRight size={22} />
            </motion.button>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <div
              className="
                relative
                rounded-2xl
                overflow-hidden
                p-5
                sm:p-8
                lg:p-10
                mt-0
                lg:mt-20
                min-h-fit
                lg:min-h-[700px]
              "
              style={{
                backgroundImage: "url('/images/contact-us.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              <div className="relative z-10 space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    h-12
                    sm:h-14
                    px-5
                    rounded-md
                    bg-white
                    text-gray-700
                    text-base
                    sm:text-lg
                    outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    h-12
                    sm:h-14
                    px-5
                    rounded-md
                    bg-white
                    text-gray-700
                    text-base
                    sm:text-lg
                    outline-none
                  "
                />

                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="
                    w-full
                    h-12
                    sm:h-14
                    px-5
                    rounded-md
                    bg-white
                    text-gray-700
                    text-base
                    sm:text-lg
                    outline-none
                  "
                />

                <div className="relative">
                  <select
                    className="
                      w-full
                      h-12
                      sm:h-14
                      px-5
                      rounded-md
                      bg-white
                      text-gray-500
                      text-base
                      sm:text-lg
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
                    size={22}
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
                  rows={5}
                  placeholder="Write a Message"
                  className="
                    w-full
                    h-36
                    sm:h-40
                    lg:h-44
                    px-5
                    py-4
                    rounded-md
                    bg-white
                    text-gray-700
                    text-base
                    sm:text-lg
                    outline-none
                    resize-none
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-[#7c7cff]
                    transition-all
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
                    h-12
                    sm:h-14
                    rounded-md
                    text-white
                    text-base
                    sm:text-lg
                    lg:text-xl
                    font-semibold
                    bg-gradient-to-r
                    from-[#6f8cff]
                    to-[#c14fff]
                    shadow-[0_10px_30px_rgba(111,140,255,0.35)]
                    transition-all
                    duration-300
                    hover:shadow-[0_15px_40px_rgba(193,79,255,0.45)]
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  Send a Message
                  <ArrowRight size={20} />
                </motion.button>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}