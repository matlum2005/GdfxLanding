"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 lg:px-6 py-11">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
          {/* LOGO + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="GDFX Logo"
                width={240}
                height={90}
                className="mb-4"
              />
            </Link>

            <p className="text-gray-300 text-[17px] leading-6 max-w-[400px]">
              Empower Your Success with Tailored Solutions, Expertise, and
              Transparent Communication.
            </p>

            <div className="flex flex-wrap gap-3 mt-07">
              <motion.a
                href="https://youtube.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
              >
                <FaYoutube size={24} className="text-black" />
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
              >
                <FaInstagram size={24} className="text-black" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
              >
                {/* No Lucide import for LinkedIn (not required by error); keep visual as text fallback */}
                <span className="text-black font-bold">in</span>
              </motion.a>

              <motion.a
                href="https://facebook.com"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
              >
                <FaFacebookF className="text-black" size={26} />
              </motion.a>

              <motion.a
                href="https://wa.me/13073818900"
                target="_blank"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.32-1.65a11.8 11.8 0 005.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.43z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[#5f7cff] text-2xl font-semibold mb-6">
              Services
            </h3>

            <div className="space-y-2">
              {[
                "Mobile App Development",
                "Web App Development",
                "UI/UX Design",
                "Api Development",
                "Custom Software Development",
                "Digital Services",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-300 text-[18px] hover:text-white transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#5f7cff] text-2xl font-semibold mb-6">
              Company
            </h3>

            <div className="space-y-2">
              {[
                "Privacy Policy",
                "Term & Condition",
                "Payment Method",
                "Refund Policy",
                "NGO",
                "Career",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-300 text-[18px] hover:text-white transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-[#5f7cff] text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-2">
              <a
                href="tel:+13073818900"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <span className="text-3xl">🇺🇸</span>
                <span className="text-[18px]">+1-3073818900</span>
              </a>

              <a
                href="mailto:connect@globaldigitalsfx.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <Mail size={26} />
                <span className="text-[18px] break-all">
                  connect@globaldigitalsfx.com
                </span>
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="flex gap-4 text-gray-300 hover:text-white transition"
              >
                <MapPin size={26} className="mt-1 flex-shrink-0" />
                <span className="text-[18px] leading-8">
                  Office No-30,
                  N Gould St,
                  STE R Sheridan,
                  WY 82801, USA
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#0d1a4d] mt-14 pt-4 text-center">
          <p className="text-gray-400 text-[18px]">
            All copy rights reserved by ©2026 globaldigitalsfx.com
          </p>
        </div>
      </div>
    </footer>
  );
}

