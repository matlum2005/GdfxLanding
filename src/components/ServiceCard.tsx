"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -5 }}
      className="rounded-[16px] border border-white/10 bg-[rgba(18,30,62,0.85)] p-[22px] backdrop-blur"
    >
      <div className="text-white">{icon}</div>
      <h3 className="mt-[12px] font-extrabold text-white text-[18px]">
        {title}
      </h3>
      <p className="mt-[8px] font-normal text-[#D1D5DB] text-[13px] leading-[1.7]">
        {description}
      </p>
    </motion.div>
  );
}

