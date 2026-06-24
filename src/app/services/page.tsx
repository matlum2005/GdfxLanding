"use client";

import { motion } from "framer-motion";
import {

  Code2,
  Cpu,
  Database,
  Globe,
  LayoutGrid,
  LineChart,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

function GradientIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #5f7cff, #c14fff)",
      }}
    >
      <div className="text-white">{children}</div>
    </div>
  );
}

export default function ServicesPage() {
  const section1 = [
    { title: "Custom Software Development Services", icon: <Code2 size={22} /> },
    {
      title: "Mobile Application Design & Development",
      icon: <Phone size={22} />,
    },
    {
      title: "Web Application Design & Development",
      icon: <Globe size={22} />,
    },
    { title: "UI/UX Design", icon: <LayoutGrid size={22} /> },
    { title: "API Development", icon: <Database size={22} /> },
    {
      title: "Digital Transformation Services",
      icon: <Sparkles size={22} />,
    },
    {
      title: "IT Support & Maintenance",
      icon: <ShieldCheck size={22} />,
    },
    { title: "E-commerce Solution", icon: <Target size={22} /> },
  ];

  const section2 = [
    { title: "Search Engine Optimization", icon: <Search size={22} /> },
    {
      title: "Pay Per Click Advertising",
      icon: <Target size={22} />,
    },
    {
      title: "Conversion Rate Optimization",
      icon: <LineChart size={22} />,
    },
    {
      title: "Social Media Marketing",
      icon: <Share2 size={22} />,
    },
    { title: "Content Marketing", icon: <Sparkles size={22} /> },
    {
      title: "Analytics & Reporting",
      icon: <Cpu size={22} />,
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#020b35" }}>
      {/* HERO */}
      <section
        className="w-full flex items-center justify-center"
        style={{ height: 600 }}
      >
        <div className="max-w-7xl w-full px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <div className="flex flex-col items-center justify-center">
              <span
                className="text-[#6E84FF] uppercase tracking-widest text-sm font-semibold"
                style={{
                  background: "rgba(110,132,255,0.1)",
                  padding: "10px 22px",
                  borderRadius: 9999,
                  border: "1px solid rgba(110,132,255,0.25)",
                }}
              >
                OUR SERVICES
              </span>

              <h1 className="mt-8 text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                Software &amp; Digital
                <br />
                Solutions For
                <br />
                Modern Businesses
              </h1>

              <p className="mt-6 text-[#D1D5DB] text-lg md:text-xl max-w-3xl mx-auto leading-7">
                Provide a short professional description about GDFX services.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="rounded-xl px-10 py-4 font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #5f7cff, #c14fff)",
                    boxShadow: "0 15px 40px rgba(179,76,255,0.35)",
                  }}
                >
                  Explore Services
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl px-10 py-4 font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #5f7cff, #c14fff)",
                    boxShadow: "0 15px 40px rgba(179,76,255,0.35)",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM SERVICES CARDS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="text-center">
              <h2 className="text-white font-bold text-3xl md:text-4xl">
                Software &amp; IT Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section1.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="bg-[#101d44] border border-white/10 rounded-[20px] p-8 min-h-[220px]"
                  style={{
                    boxShadow: "0 0 30px rgba(193,79,255,0.25)",
                    transition: "0.35s ease",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <GradientIcon>{s.icon}</GradientIcon>
                    <h3 className="text-white font-bold text-[18px] leading-6">
                      {s.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-white font-bold text-3xl md:text-4xl">
                Digital Marketing Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section2.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="bg-[#101d44] border border-white/10 rounded-[20px] p-8 min-h-[220px]"
                  style={{
                    boxShadow: "0 0 30px rgba(193,79,255,0.25)",
                    transition: "0.35s ease",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <GradientIcon>{s.icon}</GradientIcon>
                    <h3 className="text-white font-bold text-[18px] leading-6">
                      {s.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #5f7cff, #c14fff)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <h2 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left">
              Ready To Start Your Next Project?
            </h2>

            <Link
              href="/contact"
              className="rounded-xl px-10 py-4 font-semibold text-white"
              style={{
                background: "rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

