"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  // Magnetic hover (kept lightweight; no business/routing logic affected)
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });
  const magRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const el = magRef.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const dx = (px - 0.5) * 16;
      const dy = (py - 0.5) * 16;

      setMagnetic({ x: dx, y: dy });
    };

    const handleLeave = () => setMagnetic({ x: 0, y: 0 });

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [reducedMotion]);

  const springX = useSpring(magnetic.x, { stiffness: 500, damping: 35, mass: 0.35 });
  const springY = useSpring(magnetic.y, { stiffness: 500, damping: 35, mass: 0.35 });

  void springX;
  void springY;

  // Animated stats counters
  const statsTarget = useMemo(
    () => [
      { label: "Projects shipped", value: 240, suffix: "+" },
      { label: "Avg. delivery", value: 21, suffix: " days" },
      { label: "Client retention", value: 98, suffix: "%" },
    ],
    []
  );

  const [stats, setStats] = useState(statsTarget.map(() => 0));

  useEffect(() => {
    if (reducedMotion) {
      setStats(statsTarget.map((s) => s.value));
      return;
    }

    let raf = 0;
    const start = performance.now();
    const duration = 950;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setStats(statsTarget.map((s) => Math.round(s.value * eased)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion, statsTarget]);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background image (existing asset) */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover"
      />

      {/* Layered premium background */}
      <div className="absolute inset-0 bg-[#060f35]/85" />

      {/* Aurora */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ willChange: "transform" }}
        animate={
          reducedMotion
            ? undefined
            : {
                backgroundPosition: ["0% 0%", "100% 50%", "0% 100%"],
              }
        }
        transition={{ duration: 14, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(95,124,255,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(193,79,255,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(20,184,166,0.22),transparent_45%)]" />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(80% 60% at 50% 35%, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\" viewBox=\"0 0 180 180\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"180\" height=\"180\" filter=\"url(%23n)\" opacity=\"0.7\"/></svg>')",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Soft light beams */}
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 h-[520px] w-[820px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(95,124,255,0.18),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute top-10 left-1/4 h-[520px] w-[520px] bg-[radial-gradient(closest-side,rgba(193,79,255,0.14),transparent_70%)] blur-2xl"
      />

      {/* Floating particles + blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute top-[14%] left-[8%] h-3 w-3 rounded-full bg-cyan-300/70"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -18, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[28%] right-[12%] h-2.5 w-2.5 rounded-full bg-pink-400/70"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -22, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[16%] left-[20%] h-2 w-2 rounded-full bg-indigo-300/70"
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -16, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="min-w-0"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#4D72FF]/60 bg-white/5 px-4 py-2 mb-7"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#5f7cff] to-[#c14fff] shadow-[0_0_18px_rgba(95,124,255,0.45)]" />
              <span className="text-[#a8b8ff] text-sm sm:text-[0.95rem] font-medium tracking-wide">
                Transform Your Idea Into Effective Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white font-extrabold leading-[1.02] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              We Provide
              <br />
              <span className="bg-gradient-to-r from-[#5f7cff] via-[#7f6dff] to-[#c14fff] bg-clip-text text-transparent">
                Mobile Apps
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-3 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-1xl text-balance"
              
            >
              Consider that you have a concept for a website or an app that can deliver a solution, knowledge, or something enjoyable. We&apos;re here to help you bring your vision to life online or on your phone. We want users to have a positive experience using your website or app, which means it must be simple to use, appealing to the eye, and capable of performing its intended function.
            </motion.p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                ref={magRef}
                style={{
                  transform: reducedMotion
                    ? undefined
                    : `translate3d(${(magnetic.x * 0.4).toFixed(2)}px, ${(magnetic.y * 0.4).toFixed(2)}px, 0)`,
                }}
                whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="tap-target group relative w-full sm:w-auto px-7 py-4 rounded-full text-white text-base md:text-lg font-semibold bg-gradient-to-r from-[#6f8cff] to-[#b34eff] shadow-[0_15px_45px_rgba(109,140,255,0.25)] overflow-hidden"
              >
                {/* Ripple */}
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2), transparent 45%)",
                  }}
                />
                <span className="relative z-10">Start a Project</span>
                <span
                  aria-hidden
                  className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "conic-gradient(from 180deg, rgba(95,124,255,0.0), rgba(95,124,255,0.55), rgba(193,79,255,0.0))",
                    filter: "blur(10px)",
                  }}
                />
                <motion.span
                  aria-hidden
                  className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={reducedMotion ? undefined : { scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </motion.button>

              <motion.button
                whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="tap-target group relative w-full sm:w-auto px-7 py-4 rounded-full text-white text-base md:text-lg font-semibold bg-gradient-to-r from-[#5f7cff] to-[#c14fff] shadow-[0_15px_45px_rgba(193,79,255,0.22)] overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.55), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.22), transparent 45%)",
                  }}
                />
                <span className="relative z-10">Book Free Consultant</span>
              </motion.button>
            </div>

            {/* Client rating */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 glass-strong">
                <div className="flex items-center gap-1">
                  <span className="text-[#7f9cff] font-bold">4.9</span>
                  <span className="text-gray-300 text-sm">/ 5</span>
                </div>
                <span className="text-gray-300 text-sm">from enterprise teams</span>
              </div>
            </motion.div>

            {/* Trusted by companies */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4"
            >
              <div className="text-gray-300/90 text-sm font-medium">
                Trusted by
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2 sm:mt-0">
                {[
                  "Stripe-grade",
                  "Vercel-ready",
                  "Global Ops",
                  "FinTech",
                  "HealthTech",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200/90 backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Animated statistics */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {statsTarget.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.32 + idx * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 glass"
                >
                  <div className="text-white font-extrabold text-2xl leading-tight">
                    {stats[idx]}
                    <span className="text-[#a8b8ff]">{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-300">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Preserve original right-side card content by keeping animations below as part of the new dashboard */}
          </motion.div>

          {/* RIGHT SIDE: Premium floating dashboard */}
          <div className="relative">
            {/* Dashboard wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-[#5f7cff]/20 via-[#c14fff]/20 to-[#14b8a6]/15 blur-2xl" />

              <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 glass-strong overflow-hidden">
                {/* Floating gradient circles */}
                <div aria-hidden className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#5f7cff]/30 blur-3xl" />
                <div aria-hidden className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#c14fff]/25 blur-3xl" />
                <div aria-hidden className="absolute top-24 right-20 h-36 w-36 rounded-full bg-[#14b8a6]/20 blur-3xl" />

                {/* Animated particles inside dashboard */}
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                  {!reducedMotion && (
                    <>
                      {Array.from({ length: 14 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="absolute h-1.5 w-1.5 rounded-full bg-white/60"
                          initial={{ opacity: 0, x: 0, y: 0 }}
                          animate={{
                            opacity: [0, 0.9, 0],
                            y: [0, -18, 0],
                            x: [0, (i % 2 === 0 ? 10 : -10), 0],
                          }}
                          transition={{
                            duration: 3 + (i % 4) * 0.35,
                            repeat: Infinity,
                            delay: i * 0.12,
                            ease: "easeInOut",
                          }}
                          style={{
                            left: `${10 + (i * 7) % 80}%`,
                            top: `${12 + (i * 11) % 70}%`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Grid layout inside dashboard */}
                <div className="relative z-10 grid grid-cols-1 gap-4">
                  {/* Top widgets */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.28 }}
                      whileHover={reducedMotion ? undefined : { y: -6 }}
                      className="rounded-2xl border border-white/10 bg-[#0b163f]/35 backdrop-blur-md p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-300">AI Uptime</span>
                        <span className="rounded-full bg-green-500/15 border border-green-400/25 px-2 py-1 text-[11px] text-green-200">
                          99.98%
                        </span>
                      </div>
                      <div className="mt-2 text-white font-extrabold text-2xl">Always</div>
                      <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#14b8a6] to-[#5f7cff]"
                          initial={{ width: "20%" }}
                          animate={reducedMotion ? undefined : { width: ["20%", "90%", "55%", "100%"] }}
                          transition={{ duration: 2.4, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.34 }}
                      whileHover={reducedMotion ? undefined : { y: -6 }}
                      className="rounded-2xl border border-white/10 bg-[#0b163f]/35 backdrop-blur-md p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-300">Latency</span>
                        <span className="rounded-full bg-cyan-400/10 border border-cyan-300/20 px-2 py-1 text-[11px] text-cyan-100">{"<"} 45ms</span>
                      </div>
                      <div className="mt-2 text-white font-extrabold text-2xl">Fast</div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#5f7cff] shadow-[0_0_16px_rgba(95,124,255,0.6)]" />
                        <span className="text-xs text-gray-300">Edge-optimized</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={reducedMotion ? undefined : { y: -6 }}
                      className="rounded-2xl border border-white/10 bg-[#0b163f]/35 backdrop-blur-md p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-300">Security</span>
                        <span className="rounded-full bg-pink-400/10 border border-pink-300/20 px-2 py-1 text-[11px] text-pink-100">
                          Encrypted
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <ShieldCheck className="text-cyan-300" size={26} />
                        <div>
                          <div className="text-white font-bold text-base">Privacy-first</div>
                          <div className="text-xs text-gray-300">SOC2-ready</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Charts + UI mockups */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* Line chart */}
                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.46 }}
                      className="rounded-2xl border border-white/10 bg-[#0b163f]/35 backdrop-blur-md p-4 overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-300">Revenue</div>
                          <div className="text-white font-extrabold">Cinematic growth</div>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
                          Last 30 days
                        </span>
                      </div>

                      <div className="mt-4">
                        <svg viewBox="0 0 320 130" className="w-full h-[140px]" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#5f7cff" stopOpacity="1" />
                              <stop offset="50%" stopColor="#7f6dff" stopOpacity="1" />
                              <stop offset="100%" stopColor="#c14fff" stopOpacity="1" />
                            </linearGradient>
                            <linearGradient id="gradFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#5f7cff" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#c14fff" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>

                          <path
                            d="M0,95 C30,92 55,70 80,72 C105,74 120,95 145,88 C170,81 190,56 210,55 C235,54 250,72 270,70 C292,68 308,45 320,40 L320,130 L0,130 Z"
                            fill="url(#gradFill)"
                          />

                          <motion.path
                            d="M0,95 C30,92 55,70 80,72 C105,74 120,95 145,88 C170,81 190,56 210,55 C235,54 250,72 270,70 C292,68 308,45 320,40"
                            stroke="url(#gradLine)"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={reducedMotion ? { pathLength: 1 } : { pathLength: [0.2, 1, 0.85] }}
                            transition={reducedMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* glow points */}
                          {[
                            { x: 80, y: 72, c: "#5f7cff" },
                            { x: 145, y: 88, c: "#7f6dff" },
                            { x: 210, y: 55, c: "#14b8a6" },
                            { x: 270, y: 70, c: "#c14fff" },
                          ].map((p, i) => (
                            <motion.circle
                              key={i}
                              cx={p.x}
                              cy={p.y}
                              r={4}
                              fill={p.c}
                              opacity={0.85}
                              initial={{ scale: 0.7, opacity: 0 }}
                              animate={reducedMotion ? { scale: 1, opacity: 0.85 } : { scale: [0.8, 1.2, 1], opacity: [0, 0.95, 0.85] }}
                              transition={{ duration: 2 + i * 0.3, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
                            />
                          ))}
                        </svg>
                      </div>
                    </motion.div>

                    {/* UI mockups stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.52 }}
                      className="rounded-2xl border border-white/10 bg-[#0b163f]/35 backdrop-blur-md p-4 overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-300">AI assistant</div>
                          <div className="text-white font-extrabold">Insightful by design</div>
                        </div>
                        <span className="text-xs text-[#a8b8ff] font-medium">Live</span>
                      </div>

                      <div className="mt-4 relative h-[190px]">
                        {/* AI illustration (CSS/SVG placeholder) */}
                        <motion.div
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.65, delay: 0.12 }}
                          className="absolute left-2 top-6 h-[90px] w-[150px] rounded-[18px] bg-white/5 border border-white/10 backdrop-blur-md p-3"
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#14b8a6] shadow-[0_0_18px_rgba(20,184,166,0.55)]" />
                            <div className="text-xs text-gray-300">Inference</div>
                          </div>
                          <div className="mt-2 text-white text-sm font-bold">Auto-scan</div>
                          <div className="mt-1 text-xs text-gray-300">Risk &amp; performance</div>
                          <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#14b8a6] to-[#5f7cff]"
                              initial={{ width: "30%" }}
                              animate={reducedMotion ? undefined : { width: ["30%", "85%", "55%", "100%"] }}
                              transition={{ duration: 2.2, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
                            />
                          </div>
                        </motion.div>

                        {/* Mobile mockup */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.7, delay: 0.16 }}
                          whileHover={reducedMotion ? undefined : { y: -6 }}
                          className="absolute right-2 top-0 rounded-[22px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-3 w-[92px] h-[180px]"
                        >
                          <div className="h-2 w-10 rounded-full bg-white/10 mx-auto" />
                          <div className="mt-3 h-6 rounded-xl bg-gradient-to-r from-[#5f7cff]/40 to-[#c14fff]/20" />
                          <div className="mt-3 h-24 rounded-2xl bg-white/5 border border-white/10" />
                          <div className="mt-3 h-8 rounded-xl bg-white/5 border border-white/10" />
                          <div className="mt-3 h-8 rounded-xl bg-gradient-to-r from-[#14b8a6]/35 to-[#5f7cff]/20" />
                        </motion.div>

                        {/* Laptop mockup */}
                        <motion.div
                          initial={{ opacity: 0, y: 22 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.22 }}
                          whileHover={reducedMotion ? undefined : { y: -8 }}
                          className="absolute left-16 bottom-0 rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-md p-3 w-[200px]"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-[#5f7cff]" />
                              <span className="h-2 w-2 rounded-full bg-[#c14fff]" />
                              <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                            </div>
                            <span className="text-[11px] text-gray-300">Dashboard</span>
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2">
                            <div className="h-12 rounded-xl bg-gradient-to-r from-[#5f7cff]/30 to-[#c14fff]/10 border border-white/10" />
                            <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
                            <div className="h-12 rounded-xl bg-white/5 border border-white/10" />
                            <div className="h-12 rounded-xl bg-gradient-to-r from-[#14b8a6]/25 to-[#5f7cff]/15 border border-white/10" />
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#5f7cff] to-[#c14fff]"
                              initial={{ width: "35%" }}
                              animate={reducedMotion ? undefined : { width: ["35%", "100%", "60%", "100%"] }}
                              transition={{ duration: 2.8, repeat: reducedMotion ? 0 : Infinity, ease: "easeInOut" }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Premium feature cards (preserve original right-side intent/animations) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.58 }}
                      whileHover={reducedMotion ? undefined : { y: -8, rotateY: -5 }}
                      className="bg-[#121d42]/70 backdrop-blur-md border border-[#31406f] rounded-[20px] p-4 min-h-[210px] flex flex-col justify-start"
                    >
                      <CheckCircle size={42} className="text-pink-500 mb-5" />
                      <h3 className="text-white text-[15px] font-bold leading-[1.0] mb-3">Client Centric Approach</h3>
                      <p className="text-[#9ca3af] text-[14px] leading-[2]">
                        We prioritize understanding your unique business needs, addressing challenges, and delivering tailored solutions aligned with your goals to drive growth and long-term value creation.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.62 }}
                      whileHover={reducedMotion ? undefined : { y: -8, rotateY: -5 }}
                      className="bg-[#121d42]/70 backdrop-blur-md border border-[#31406f] rounded-[20px] p-4 min-h-[210px] flex flex-col justify-start"
                    >
                      <CheckCircle size={42} className="text-pink-500 mb-5" />
                      <h3 className="text-white text-[15px] font-bold leading-[1.0] mb-3">
                        Quality &amp;
                        <br />
                        Excellence
                      </h3>
                      <p className="text-[#9ca3af] text-[14px] leading-[2]">
                        Delivering high-quality, precise solutions is our commitment. We consistently strive for excellence, ensuring exceptional results that meet and exceed client expectations every time.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.66 }}
                    whileHover={reducedMotion ? undefined : { y: -8, scale: 1.01 }}
                    className="bg-[#121d42]/70 backdrop-blur-md border border-[#31406f] rounded-[22px] p-6 sm:p-7 min-h-[210px]"
                  >
                    <ShieldCheck size={52} className="text-cyan-400 mb-6" />
                    <h3 className="text-white text-[18px] sm:text-[20px] font-bold mb-5">Privacy &amp; Security</h3>
                    <p className="text-[#9ca3af] text-[14px] sm:text-[16px] leading-[2] w-[100%]">
                      Protecting client data is our top priority. We ensure strict confidentiality and implement advanced data security measures to safeguard sensitive information and maintain trust.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Subtle floating outer motion for cinematic feel */}
              {!reducedMotion && (
                <motion.div
                  aria-hidden
                  className="absolute -inset-10"
                  animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

