"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, User } from "lucide-react";

const base = "h-[190px] rounded-[6px] flex flex-col items-center justify-center";

export default function BottomCards() {
  return (
    <section className="bg-[#02092A] py-[80px]">
      <div className="mx-auto w-[1280px]">
        <div className="grid grid-cols-3 gap-[22px]">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className={`${base} bg-gradient-to-r from-[#7691FF] to-[#C949FF]`}
          >
            <User size={70} color="#ffffff" />
            <div className="mt-[14px] text-center font-extrabold text-white text-[32px] leading-[1.1]">
              <span className="block">Expert IT</span>
              <span className="block">Consultants</span>
              <span className="block">Available</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className={`${base} bg-gradient-to-r from-[#7691FF] to-[#C949FF]`}
          >
            <Megaphone size={70} color="#ffffff" />
            <div className="mt-[14px] text-center font-extrabold text-white text-[32px] leading-[1.1]">
              <span className="block">Digital</span>
              <span className="block">Transformation</span>
              <span className="block">Available</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -6 }}
            className={`${base} bg-gradient-to-r from-[#7691FF] to-[#C949FF]`}
          >
            <Code2 size={70} color="#ffffff" />
            <div className="mt-[14px] text-center font-extrabold text-white text-[32px] leading-[1.1]">
              <span className="block">Tech</span>
              <span className="block">Solutions</span>
              <span className="block">Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

