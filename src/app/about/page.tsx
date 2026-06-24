"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  BadgeCheck,
  BookOpen,
  Cpu,
  Gem,
  Globe,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useMemo } from "react";


const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const fadeLeft = {
  initial: { opacity: 0, x: -70 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const fadeRight = {
  initial: { opacity: 0, x: 70 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};



function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: React.ReactNode;
}) {
  return (
    <motion.div {...fadeUp}>
      <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-5 text-center">
        {kicker}
      </p>
      <h2 className="text-white font-bold text-3xl md:text-4xl text-center">
        {title}
      </h2>
    </motion.div>
  );
}

export default function AboutPage() {
  const companyStoryFeatures = useMemo(
    () => [
      "Leading IT Company",
      "Honesty and Transparency",
      "Up-to-date latest tech trends",
      "All IT Solutions under one roof",
      "Customer oriented approach",
      "Deliver top notch solution",
    ],
    []
  );

  const missionCards = useMemo(
    () => [
      {
        title: "Our Mission",
        desc: "Deliver future-ready IT solutions that help businesses grow through innovation, transparency, and measurable outcomes.",
        icon: <Zap size={22} />,
        gradient: "from-[#5f7cff] to-[#c14fff]",
      },
      {
        title: "Our Vision",
        desc: "Become a trusted global digital partner by turning ideas into scalable platforms that power modern enterprises.",
        icon: <Sparkles size={22} />,
        gradient: "from-[#c14fff] to-[#5f7cff]",
      },
    ],
    []
  );

  const whyChoose = useMemo(
    () => [
      {
        title: "Client-First Communication",
        desc: "Clear updates, transparent progress, and fast responses.",
        icon: <Star size={22} />,
      },
      {
        title: "Expert Engineering",
        desc: "Scalable architecture built with modern best practices.",
        icon: <Wrench size={22} />,
      },
      {
        title: "Security by Design",
        desc: "Robust practices for protection, privacy, and trust.",
        icon: <Shield size={22} />,
      },
      {
        title: "Innovative Solutions",
        desc: "Creative and technical excellence aligned to your goals.",
        icon: <Gem size={22} />,
      },
      {
        title: "Modern Tech Stack",
        desc: "Cloud, integrations, and future-ready implementations.",
        icon: <Cpu size={22} />,
      },
      {
        title: "Global Delivery",
        desc: "Reliable support with a consistent, outcome-driven process.",
        icon: <Globe size={22} />,
      },
    ],
    []
  );

  const teamCards = useMemo(
    () => [
      {
        title: "Product Strategy",
        desc: "Planning, discovery, and roadmap alignment.",
        icon: <BookOpen size={22} />,
      },
      {
        title: "Engineering Excellence",
        desc: "Scalable development with modern best practices.",
        icon: <Wrench size={22} />,
      },
      {
        title: "UX & Design Craft",
        desc: "Interfaces engineered for clarity and conversion.",
        icon: <Layers size={22} />,
      },
      {
        title: "Cloud & Integration",
        desc: "Secure systems, APIs, and seamless connectivity.",
        icon: <Globe size={22} />,
      },
      {
        title: "Ongoing Support",
        desc: "Maintenance, optimization, and continuous improvements.",
        icon: <Users size={22} />,
      },
      {
        title: "Quality Assurance",
        desc: "Testing rigor to deliver stable, reliable outputs.",
        icon: <ShieldCheck size={22} />,
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "#020b35" }}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#020b35] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1b2c7a20,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#8b5cf620,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5f7cff20,transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="inline-flex items-center border border-[#4D72FF] rounded-full px-4 py-2 mb-6"
              >
                <span className="text-[#7f9cff] text-sm font-medium tracking-wide">
                  ABOUT GDFX
                </span>
              </motion.div>

              <h1 className="text-white font-extrabold leading-[1.1] text-[34px] sm:text-[44px] md:text-[52px]">
                Building Future Ready Businesses With{" "}
                <span className="bg-gradient-to-r from-[#5f7cff] via-[#7f6dff] to-[#c74fff] bg-clip-text text-transparent">
                  GDFX
                </span>
              </h1>

              <p className="text-gray-300 mt-7 text-lg leading-9 max-w-2xl">
                At GDFX, we specialize in delivering innovative IT solutions
                that empower businesses to thrive. From software development
                to web and mobile experiences, we turn ideas into reliable,
                scalable outcomes—crafted for performance, security, and growth.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-10 py-5 font-semibold text-white text-lg bg-gradient-to-r from-[#6f8cff] to-[#b34eff] shadow-[0_15px_40px_rgba(179,76,255,0.35)] hover:scale-[1.03] transition duration-300"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>

            <motion.div {...fadeRight} transition={{ duration: 0.9 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="rounded-[22px] border border-white/10 bg-[#0d1a4d]/40 backdrop-blur-md p-6 shadow-[0_0_60px_rgba(193,79,255,0.16)]"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
                  >
                    <div className="text-white">
                      <ShieldCheck size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">
                      Mission-Driven Delivery
                    </div>
                    <div className="text-gray-300 mt-2 leading-7">
                      Built with the right systems, the right partners, and the
                      right focus—so your business can move faster with
                      confidence.
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Scalable Architecture", "Performance Tuning", "UX Clarity", "Secure Delivery"].map((t) => (
                    <motion.div
                      key={t}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5f7cff] to-[#c14fff]" />
                      <div className="text-white/90 font-semibold mt-3 text-[14px]">
                        {t}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div {...fadeLeft}>
              <div className="relative">
                <div className="rounded-[20px] overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="/images/AboutCompany-DCHvWLyw.jpg"
                    alt="About GDFX"
                    width={900}
                    height={650}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 bg-gradient-to-r from-[#9b4dff] to-[#d55cff] rounded-xl px-6 py-5 flex items-center gap-4 shadow-xl border border-white/15"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                    <svg
                      width="34"
                      height="34"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white text-4xl font-bold leading-none">1,021+</h3>
                    <p className="text-white uppercase text-lg font-semibold mt-2">Happy Client</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div {...fadeRight}>
              <span className="text-[#b04cff] uppercase tracking-wider text-sm font-medium">
                ::: Company Story
              </span>

              <h2 className="text-white text-2xl lg:text-3xl font-bold leading-tight mt-4">
                Building Future-Ready
                <br />
                Businesses With{" "}
                <span className="text-[#b04cff]">GDFX&apos;s</span>
                <br />
                <span className="text-[#7f5dff]">IT Expertise</span>
              </h2>

              <p className="text-gray-300 mt-7 leading-9 text-lg max-w-2xl">
                Since 2022, we&apos;ve been transforming ideas into reality with
                cutting-edge software development, web and mobile application
                design, digital marketing, and creative services. Our expert
                team focuses on tailored solutions that drive efficiency,
                scalability, and growth for businesses of all sizes.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {companyStoryFeatures.map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full border border-[#7f5dff] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#7f5dff]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            kicker="::: Mission & Vision"
            title={
              <>
                Premium Plans For <span className="bg-gradient-to-r from-[#5f7cff] to-[#c14fff] bg-clip-text text-transparent">Real Outcomes</span>
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionCards.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-[#0d1a4d]/45 backdrop-blur-md border border-white/10 rounded-[22px] p-8 shadow-[0_0_50px_rgba(193,79,255,0.10)]"
              >
                <div
                  className={`w-[64px] h-[64px] rounded-2xl bg-gradient-to-r ${c.gradient} flex items-center justify-center mb-6`}
                >
                  <div className="text-white">{c.icon}</div>
                </div>
                <h3 className="text-white text-2xl font-bold">{c.title}</h3>
                <p className="text-gray-300 mt-4 leading-8">{c.desc}</p>
                <div className="mt-7 h-[2px] w-full bg-gradient-to-r from-[#5f7cff] to-[#c14fff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GDFX */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            kicker="::: WHY CHOOSE US"
            title={
              <>
                Premium Delivery With{" "}
                <span className="bg-gradient-to-r from-[#5f7cff] to-[#c14fff] bg-clip-text text-transparent">Confidence</span>
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -10 }}
                className="bg-[#0d1a4d]/40 backdrop-blur-md border border-white/10 rounded-[22px] p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
                  >
                    <div className="text-white">{f.icon}</div>
                  </div>
                  <h3 className="text-white text-[18px] font-bold leading-7">{f.title}</h3>
                  <p className="text-gray-300 mt-3 leading-8">{f.desc}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[#c14fff] font-semibold">
                  <BadgeCheck size={18} />
                  <span className="text-[14px]">Built for growth</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Happy Clients", target: 1000, suffix: "+" },
              { label: "Projects", target: 50, suffix: "+" },
              { label: "Support", target: 24, suffix: "/7" },
              { label: "Client Satisfaction", target: 99, suffix: "%" },
            ].map(({ label, target, suffix }) => {
              // NOTE: Hooks must not be called in callbacks.
              const value = Math.floor(target);
              const id = `cnt-${label}`;
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#0d1a4d]/55 backdrop-blur-md border border-white/10 rounded-[22px] p-8 shadow-[0_0_35px_rgba(193,79,255,0.14)]"
                >
                  <div id={id} className="sr-only" />
                  <div className="text-white font-extrabold text-4xl">
                    {value.toLocaleString()}
                    <span className="text-white/80">{suffix}</span>
                  </div>
                  <div className="text-gray-300 mt-3 font-semibold text-[15px] leading-7">
                    {label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM / EXPERTISE */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            kicker="::: Team / Expertise"
            title={
              <>
                Built By <span className="bg-gradient-to-r from-[#5f7cff] to-[#c14fff] bg-clip-text text-transparent">Experts</span>
              </>
            }
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCards.map((t, idx) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.06 }}
                whileHover={{ y: -10 }}
                className="bg-[#0d1a4d]/45 backdrop-blur-md border border-white/10 rounded-[22px] p-8 h-full"
              >
                <div
                  className="w-[56px] h-[56px] rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
                >
                  <div className="text-white">{t.icon}</div>
                </div>
                <h3 className="text-white text-[18px] font-bold leading-7">{t.title}</h3>
                <p className="text-gray-300 mt-3 leading-8">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left">
              Ready To Grow Your Business?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                href="/contact"
                className="rounded-xl px-10 py-4 font-semibold text-white text-center"
                style={{ background: "rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-10 py-4 font-semibold text-white text-center"
                style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

