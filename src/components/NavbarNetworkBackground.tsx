"use client";

import { motion } from "framer-motion";

export default function NavbarNetworkBackground() {
  const particles = [
    { top: "15%", left: "10%" },
    { top: "30%", left: "25%" },
    { top: "12%", left: "45%" },
    { top: "40%", left: "65%" },
    { top: "18%", left: "85%" },
    { top: "55%", left: "35%" },
    { top: "70%", left: "75%" },
    { top: "80%", left: "15%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="15%" x2="25%" y2="30%" stroke="#6E84FF" />
        <line x1="25%" y1="30%" x2="45%" y2="12%" stroke="#6E84FF" />
        <line x1="45%" y1="12%" x2="65%" y2="40%" stroke="#6E84FF" />
        <line x1="65%" y1="40%" x2="85%" y2="18%" stroke="#6E84FF" />
        <line x1="35%" y1="55%" x2="75%" y2="70%" stroke="#6E84FF" />
      </svg>

      {/* Particles */}
      {particles.map((item, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#6E84FF] to-[#D546FF]"
          style={{
            top: item.top,
            left: item.left,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}