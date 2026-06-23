"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { q: string; a: string };

type Props = {
  items: Item[];
};

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-[12px]">
      {items.map((it, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div
            key={it.q}
            className="rounded-[16px] border border-white/10 bg-[rgba(18,30,62,0.85)] px-[18px] py-[14px] backdrop-blur"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="w-full flex items-center justify-between gap-[12px]"
            >
              <span className="text-white font-extrabold text-[16px] text-left">
                {it.q}
              </span>
              <span
                aria-hidden
                className="text-[#B95EFF] font-extrabold text-[18px]"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="mt-[10px] font-normal text-[#D1D5DB] text-[14px] leading-[1.8]">
                    {it.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

