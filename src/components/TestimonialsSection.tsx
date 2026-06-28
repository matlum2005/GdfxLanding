"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "TM",
    text: `"We're extremely happy with the website created for The Mint Consultancy! It's easy to navigate, professional, and highlights all our key services, making it simple for clients to find what they need. GlobalDigitalsfx..."`,
    name: "THEMINTCONSULTANCY",
    role: "Founder and CEO",
  },
  {
    initials: "KL",
    text: `"GlobalDigitalsfx created a great website for Koshika! It's clean, simple to navigate, and explains our services like LLC filing, business banking, and bookkeeping. They worked quickly and made the whole process stress-free...."`,
    name: "KOSHIKA.LLC",
    role: "Founder and CEO",
  },
  {
    initials: "AS",
    text: `"We at AstroSoull were really pleased with GDFX's services. The platform is easy to navigate, and the customer support team is always ready to help. With useful tools and educational resources, GDFX is a great choice for..."`,
    name: "ASTROSOULL",
    role: "Founder and CEO",
  },
  {
    initials: "SP",
    text: `"I hired GlobalDigitalsfx to create a real estate website for SmartPropertyHub, and I'm super happy with the results! The website looks amazing, works smoothly, and is easy for users to find properties. The team made sure..."`,
    name: "SMARTPROPERTYHUB",
    role: "Founder and CEO",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[Black] overflow-hidden"
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
            ::: OUR TESTIMONIALS
          </p>

          <h2 className="text-white font-bold text-1xl md:text-2xl lg:text-4xl leading-[0.15]">
            Why Businesses Trust GDFX For{" "}
            <span className="bg-gradient-to-r from-[#c14fff] via-[#9f63ff] to-[#5f7cff] bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-8 text-[#d7d7e8] text-lg lg:text-xl leading-08">
            Explore client feedback on our IT services. Our testimonials
            highlight innovative solutions
             and our commitment to providing reliable,efficient,andtransformative
            technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 mt-16">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-gradient-to-br
                from-[#6f8cff]
                to-[#c14fff]
                rounded-2xl
                p-6
                h-[400px]
                flex
                flex-col
                items-center
                text-center
                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              {/* Avatar */}
              <div className="w-24 h-20 rounded-full border-4 border-[#ff7b00] bg-white flex items-center justify-center text-[#6f8cff] font-bold text-1xl shadow-lg">
                {item.initials}
              </div>

              {/* Text */}
              <p className="mt-1 text-white italic text-lg leading-2 flex-1">
                {item.text}
              </p>

              {/* Name */}
              <h3 className="mt-1 text-black font-semibold text-xl">
                {item.name}
              </h3>

              <p className="text-[#ececec] text-base mt-1">
                {item.role}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}