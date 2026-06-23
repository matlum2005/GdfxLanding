"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, UserRound } from "lucide-react";

const cardBase =
  "rounded-[16px] border border-white/10 bg-[rgba(18,30,62,0.85)] p-[24px] backdrop-blur";

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-2 gap-[18px]">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -6 }}
        className={cardBase}
      >
        <div className="text-[#B95EFF]">
          <UserRound size={44} fill="#B95EFF" />
        </div>
        <h3 className="mt-[14px] text-white font-semibold text-[15px]">
          Client Centric Approach
        </h3>
        <p className="mt-[10px] text-[#D1D5DB] text-[13px] leading-[1.6]">
          We prioritize understanding your unique business needs, addressing challenges, and delivering tailored solutions aligned with your goals to drive growth and long-term value creation.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -6 }}
        className={cardBase}
      >
        <div className="text-[#E46A8D]">
          <CheckCircle2 size={44} color="#E46A8D" />
        </div>
        <h3 className="mt-[18px] text-white font-semibold">Quality & Excellence</h3>
        <p className="mt-[10px] text-[#D1D5DB] text-[13px] leading-[1.6]">
          Delivering high-quality, precise solutions is our commitment. We consistently strive for excellence, ensuring exceptional results that meet and exceed client expectations every time.
        </p>
      </motion.div>

      <motion.div
        style={{ gridColumn: "1 / -1" }}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -6 }}
        className={cardBase}
      >
        <div className="text-[#6E84FF]">
          <Clock3 size={44} color="#6E84FF" />
        </div>
        <h3 className="mt-[18px] text-white font-semibold">Privacy & Security</h3>
        <p className="mt-[10px] text-[#D1D5DB] text-[13px] leading-[1.6]">
          Protecting client data is our top priority. We ensure strict confidentiality and implement advanced data security measures to safeguard sensitive information and maintain trust.
        </p>
      </motion.div>
    </div>
  );
}

