"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  /** Tailwind or other classes applied to the outer wrapper */
  cardClassName?: string;
}>;

export default function FlipCard({ children, className, cardClassName }: Props) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ perspective: 1200 }}
      initial={false}
      whileHover={!shouldReduce ? { transform: "translateY(-2px)" } : undefined}
    >
      {/*
        Desktop-only 3D flip.
        - On md+ we enable flipping using group-hover.
        - On smaller screens we disable (no rotateY, keeps front as-is).
      */}
      <motion.div
        className={"relative h-full w-full" + (cardClassName ? ` ${cardClassName}` : "")}
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-full w-full [transform-style:preserve-3d] md:group">
          {/* Front */}
          <motion.div
            className="absolute inset-0 [backface-visibility:hidden] md:group-hover:[transform:rotateY(180deg)] [transform:rotateY(0deg)] transition-transform duration-600"
          >
            {children}
          </motion.div>

          {/* Back (duplicate content, preserving visual identity) */}
          <motion.div
            aria-hidden
            className="absolute inset-0 [backface-visibility:hidden] md:group-hover:[transform:rotateY(360deg)] [transform:rotateY(180deg)] transition-transform duration-600"
            style={{ pointerEvents: "none" }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}


