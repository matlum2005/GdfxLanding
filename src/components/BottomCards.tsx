"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, User } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: <User size={70} color="#ffffff" />,
    title: ["Expert IT", "Consultants", "Available"],
    image: "/images/Flip1.png",
  },
  {
    icon: <Megaphone size={70} color="#ffffff" />,
    title: ["Digital", "Transformation", "Available"],
    image: "/images/Flip2.png",
  },
  {
    icon: <Code2 size={70} color="#ffffff" />,
    title: ["Tech", "Solutions", "Available"],
    image: "/images/Flip3.png",
  },
];

export default function BottomCards() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group h-[260px] perspective-[1200px]"
            >
              <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-r from-[#7691FF] to-[#C949FF] flex flex-col items-center justify-center p-6">

                  {card.icon}

                  <div className="mt-4 text-center font-extrabold text-white text-[26px] leading-[1.2]">
                    {card.title.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden overflow-hidden rounded-xl">

                  <Image
                    src={card.image}
                    alt="Card Image"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold text-center px-4">
                      Learn More
                    </h3>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}