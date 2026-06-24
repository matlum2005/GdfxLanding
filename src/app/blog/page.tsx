"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";

import {
  ArrowRight,
  Clock3,
  LayoutGrid,
  Search,
  Sparkles,
  User,
  Users,
} from "lucide-react";

function useAnimatedCounter(target: number, durationMs = 1300) {
  const [value, setValue] = useState(0);
  const [inView, setInView] = useState(false);
  const id = useMemo(
    () => `blog-stat-${Math.random().toString(16).slice(2)}`,
    []
  );

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) setInView(true);
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [id]);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, inView, target]);

  return { value, id };
}

function StatCard({
  label,
  target,
  suffix,
  Icon,
  delay,
  durationMs,
}: {
  label: string;
  target: number;
  suffix: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  delay: number;
  durationMs: number;
}) {
  const { value, id } = useAnimatedCounter(target, durationMs);

  // Keep formatting simple & stable; suffix includes the "+".
  const displayValue = value.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -10, scale: 1.01 }}
      className="bg-[#0d1a4d]/55 backdrop-blur-md border border-white/10 rounded-[22px] p-8 shadow-[0_0_35px_rgba(193,79,255,0.14)]"
    >
      <div id={id} className="sr-only" />
      <div className="flex items-center justify-between gap-4">
        <div className="text-white font-extrabold text-4xl">
          {displayValue}
          <span className="text-white/80">{suffix}</span>
        </div>
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
        >
          <Icon className="text-white" size={18} />
        </div>
      </div>
      <div className="text-gray-300 mt-3 font-semibold text-[15px] leading-7">
        {label}
      </div>
    </motion.div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 46 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75 },
};

const fadeLeft = {
  initial: { opacity: 0, x: -70 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75 },
};

const fadeRight = {
  initial: { opacity: 0, x: 70 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.75,
    // Keep typing strict (no explicit `any`).
    ease: "easeOut" as unknown as import("framer-motion").Easing,
  },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function BlogPage() {
  // Future CMS-ready: everything is stored in arrays at the top.
  const categories = useMemo(
    () =>
      [
        "Technology",
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "Artificial Intelligence",
        "Cloud Computing",
        "Cyber Security",
        "Digital Marketing",
      ].map((name) => ({
        name,
        icon:
          name === "Technology"
            ? LayoutGrid
            : name === "Web Development"
              ? Sparkles
              : name === "Mobile Apps"
                ? Users
                : name === "UI/UX Design"
                  ? LayoutGrid
                  : name === "Artificial Intelligence"
                    ? Sparkles
                    : name === "Cloud Computing"
                      ? Users
                      : name === "Cyber Security"
                        ? Sparkles
                        : LayoutGrid,
      })),
    []
  );

  const featured = useMemo(
    () => ({
      image: "/images/blog.png",
      category: "Digital Transformation",
      title:
        "From Legacy to Future: A Practical Guide to Digital Transformation",
      readingTime: "8 min read",
      author: "Adeel Ahmed",
      date: "2026-05-12",
      description:
        "Explore a roadmap for modernizing your stack, improving customer journeys, and driving measurable outcomes with secure, scalable architecture.",
    }),
    []
  );

  const latestArticles = useMemo(
    () =>
      [
        {
          image: "/images/blog2.png",
          category: "Technology",
          title: "The Enterprise Stack in 2026: What Actually Scales",
          description:
            "A pragmatic view of architecture choices for performance, resilience, and long-term maintainability.",
          date: "2026-05-28",
          readingTime: "6 min read",
          author: "Samira Khan",
        },
        {
          image: "/images/blog3.png",
          category: "Web Development",
          title:
            "Next.js App Router Patterns for High-Performance Pages",
          description:
            "Leverage caching strategies, route organization, and UI streaming to reduce time-to-interactive.",
          date: "2026-05-22",
          readingTime: "7 min read",
          author: "Zain Ali",
        },
        {
          image: "/images/blog4.png",
          category: "Mobile Apps",
          title:
            "Design Systems That Deliver Consistent Mobile Experiences",
          description:
            "How to unify tokens, components, and accessibility across product teams and releases.",
          date: "2026-05-15",
          readingTime: "5 min read",
          author: "Hassan Qureshi",
        },
        {
          image: "/images/blog.png",
          category: "UI/UX Design",
          title:
            "Enterprise UX: Clarity, Trust, and Conversion in Complex Flows",
          description:
            "Turn dense product features into guided experiences with motion, hierarchy, and usability heuristics.",
          date: "2026-05-09",
          readingTime: "9 min read",
          author: "Mariam Noor",
        },
        {
          image: "/images/blog2.png",
          category: "Artificial Intelligence",
          title:
            "Practical AI Adoption: From Experiments to Reliable Systems",
          description:
            "Define the right evaluation metrics, data governance, and deployment workflows for real value.",
          date: "2026-04-30",
          readingTime: "10 min read",
          author: "Omar Farooq",
        },
        {
          image: "/images/blog3.png",
          category: "Cloud Computing",
          title:
            "Cloud Cost Governance Without Slowing Teams Down",
          description:
            "A step-by-step approach to budgets, observability, and optimization automation.",
          date: "2026-04-24",
          readingTime: "6 min read",
          author: "Fatima Zahra",
        },
        {
          image: "/images/blog4.png",
          category: "Cyber Security",
          title:
            "Secure by Design: Threat Modeling for Product Teams",
          description:
            "Make risk visible early with lightweight threat modeling and actionable mitigation.",
          date: "2026-04-18",
          readingTime: "8 min read",
          author: "Bilal Raza",
        },
        {
          image: "/images/blog.png",
          category: "Digital Marketing",
          title:
            "Performance Marketing for Dev-Led Brands: A 2026 Checklist",
          description:
            "Track the right KPIs and design experiments that align engineering and growth teams.",
          date: "2026-04-11",
          readingTime: "4 min read",
          author: "Khadija Siddiqui",
        },
        {
          image: "/images/blog2.png",
          category: "Technology",
          title:
            "Engineering Leadership: Building Systems, Not Just Features",
          description:
            "How to set technical direction, manage tradeoffs, and improve delivery reliability.",
          date: "2026-04-05",
          readingTime: "7 min read",
          author: "Ayesha Noor",
        },
      ],
    []
  );

  const stats = useMemo(
    () =>
      [
        { label: "500+ Articles", target: 500, suffix: "+", icon: Clock3 },
        {
          label: "50K+ Monthly Readers",
          target: 50000,
          suffix: "+",
          icon: Users,
        },
        {
          label: "100+ Industry Guides",
          target: 100,
          suffix: "+",
          icon: Sparkles,
        },
        {
          label: "25+ Expert Authors",
          target: 25,
          suffix: "+",
          icon: LayoutGrid,
        },
      ],
    []
  );

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#020b35" }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#020b35] py-24">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#5f7cff]/25 blur-3xl" />
          <div className="absolute top-10 -right-28 h-80 w-80 rounded-full bg-[#c14fff]/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7f9cff]/10 blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1b2c7a20,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#8b5cf620,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5f7cff20,transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeLeft}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="inline-flex items-center border border-[#4D72FF] rounded-full px-4 py-2 mb-6"
              >
                <span className="text-[#7f9cff] text-sm font-medium tracking-wide">
                  BLOG INSIGHTS
                </span>
              </motion.div>

              <h1 className="text-white font-extrabold leading-[1.08] text-[34px] sm:text-[44px] md:text-[54px]">
                Insights,{' '}
                <span className="bg-gradient-to-r from-[#5f7cff] via-[#7f6dff] to-[#c74fff] bg-clip-text text-transparent">
                  Innovation
                </span>{" "}
                & Industry Knowledge
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-9 max-w-2xl">
                Explore GDFX blogs featuring technology trends, development guides,
                digital transformation strategies, and industry updates—built
                for enterprise teams that need clarity and speed.
              </p>

              {/* Search bar UI (frontend only) */}
              <motion.div {...fadeUp} className="mt-10">
                <div className="rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(193,79,255,0.14)] p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#5f7cff] to-[#c14fff] shadow-[0_10px_35px_rgba(193,79,255,0.25)]">
                      <Search className="text-white" size={18} />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="blog-search" className="sr-only">
                        Search blog
                      </label>
                      <input
                        id="blog-search"
                        placeholder="Search articles, categories, authors..."
                        className="w-full bg-transparent outline-none text-white placeholder:text-white/50 text-[15px]"
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white text-[14px] bg-gradient-to-r from-[#6f8cff] to-[#b34eff] hover:scale-[1.02] transition-transform shadow-[0_15px_40px_rgba(179,76,255,0.35)]"
                    >
                      Search
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div {...fadeRight}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[26px] border border-white/10 bg-[#0d1a4d]/35 backdrop-blur-md p-6 shadow-[0_0_80px_rgba(193,79,255,0.16)]"
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[26px]">
                  <motion.div
                    className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#5f7cff]/25 blur-3xl"
                    animate={{ x: [0, 22, 0], y: [0, -10, 0] }}
transition={{ duration: 7, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-6 -right-24 h-72 w-72 rounded-full bg-[#c14fff]/20 blur-3xl"
                    animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
transition={{ duration: 8, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                </div>

                <div className="relative">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
                    >
                      <Sparkles size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">Editor’s Picks</div>
                      <div className="text-gray-300 mt-2 leading-7">
                        Curated insights designed to support decisions across
                        product, engineering, and leadership.
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Actionable Roadmaps", "Enterprise Architecture", "AI Adoption", "Security-First Delivery"].map(
                      (t) => (
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
                      )
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-gray-300 text-sm">Latest updates • Updated weekly</div>
                    <Link
                      href="#latest"
                      className="text-[#c14fff] font-semibold hover:underline text-sm inline-flex items-center gap-2"
                    >
                      Browse
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-flex items-center gap-2 text-[#c14fff] uppercase tracking-wider text-sm font-medium">
                <Sparkles size={16} /> Featured Article
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.25 }}
            className="group rounded-[26px] border border-white/10 bg-[#0d1a4d]/40 backdrop-blur-md overflow-hidden shadow-[0_0_70px_rgba(193,79,255,0.12)]"
          >
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 relative min-h-[260px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b35] via-[#020b35]/25 to-transparent" />
              </div>

              <div className="lg:col-span-3 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[13px] font-semibold text-white bg-gradient-to-r from-[#5f7cff] to-[#c14fff]">
                      {featured.category}
                    </span>
                    <div className="text-gray-300 text-sm inline-flex items-center gap-2">
                      <Clock3 size={16} /> {featured.readingTime}
                    </div>
                  </div>

                  <h2 className="text-white mt-5 text-2xl sm:text-3xl font-bold leading-[1.2]">
                    {featured.title}
                  </h2>

                  <p className="text-gray-300 mt-4 leading-8">{featured.description}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <div className="inline-flex items-center gap-2">
                      <User size={16} /> {featured.author}
                    </div>
                    <div className="h-1 w-1 rounded-full bg-white/25" />
                    <div>{formatDate(featured.date)}</div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    href="#latest"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#6f8cff] to-[#b34eff] hover:scale-[1.02] transition-transform shadow-[0_15px_40px_rgba(179,76,255,0.35)]"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>

                  <Link
                    href="#categories"
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white/90 hover:text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    Explore Categories
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-white font-bold text-3xl md:text-4xl text-center">
              Blog Categories
            </h2>
            <p className="text-gray-300 mt-4 text-center max-w-2xl mx-auto leading-8">
              Pick a topic and jump into specialized enterprise insights—from AI adoption to secure delivery.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c, idx) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group rounded-[20px] border border-white/10 bg-[#0d1a4d]/35 backdrop-blur-md p-5 shadow-[0_0_45px_rgba(193,79,255,0.10)] cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[#c14fff] text-xs uppercase tracking-wider font-semibold">
                      Category
                    </div>
                    <div className="text-white font-bold text-[16px] mt-2 leading-6">
                      {c.name}
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
                  >
                    <c.icon className="text-white" size={18} />
                  </div>
                </div>

                <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-[#5f7cff] to-[#c14fff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section id="latest" className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-white font-bold text-3xl md:text-4xl text-center">
              Latest Articles
            </h2>
            <p className="text-gray-300 mt-4 text-center max-w-2xl mx-auto leading-8">
              Fresh posts across engineering, design, AI, cloud, and enterprise strategy.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((a, idx) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: idx * 0.03 }}
                whileHover={{ y: -10 }}
                className="group rounded-[24px] border border-white/10 bg-[#0d1a4d]/35 backdrop-blur-md overflow-hidden shadow-[0_0_55px_rgba(193,79,255,0.10)]"
              >
                <div className="relative h-48">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b35] via-[#020b35]/30 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold text-white bg-gradient-to-r from-[#5f7cff] to-[#c14fff]">
                      {a.category}
                    </span>
                    <div className="text-gray-300 text-sm inline-flex items-center gap-2">
                      <Clock3 size={16} /> {a.readingTime}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-[18px] mt-4 leading-[1.25]">
                    {a.title}
                  </h3>

                  <p className="text-gray-300 mt-3 leading-8 text-[14.5px]">
                    {a.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <div className="inline-flex items-center gap-2">
                      <User size={16} /> {a.author}
                    </div>
                    <div className="h-1 w-1 rounded-full bg-white/25" />
                    <div>{formatDate(a.date)}</div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:scale-[1.01] transition duration-300"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-[#020b35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <StatCard
                key={s.label}
                label={s.label}
                target={s.target}
                suffix={s.suffix}
                Icon={s.icon}
                delay={idx * 0.04}
                durationMs={1400 + idx * 90}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
        >
          <motion.div
            {...fadeUp}
            className="rounded-[26px] border border-white/15 bg-[#0d1a4d]/25 backdrop-blur-md p-8 sm:p-10 shadow-[0_0_80px_rgba(193,79,255,0.18)]"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/15 bg-white/5 text-[#d8b4fe] text-sm uppercase tracking-wider font-semibold">
                  <Sparkles size={16} /> Premium Newsletter
                </div>
                <h2 className="text-white font-bold text-3xl md:text-4xl mt-5 leading-[1.15]">
                  Get GDFX Insights Every Week
                </h2>
                <p className="text-white/80 mt-4 leading-8 max-w-2xl">
                  Subscribe to receive enterprise-grade technology guidance,
                  curated reading lists, and actionable industry updates.
                </p>
              </div>

              <form
                className="lg:col-span-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Email address"
                    className="flex-1 rounded-xl px-4 py-4 bg-white/10 border border-white/15 text-white placeholder:text-white/60 outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl px-6 py-4 font-semibold text-white bg-black/20 border border-white/20 hover:scale-[1.02] transition-transform"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="text-white/70 text-xs mt-3">
                  No spam. Unsubscribe anytime.
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#020b35]">
        <motion.div {...fadeUp}>
          <div className="rounded-[26px] border border-white/10 bg-[#0d1a4d]/40 backdrop-blur-md p-8 sm:p-10 shadow-[0_0_80px_rgba(193,79,255,0.14)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left">
                Need Expert Technology Guidance?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="rounded-xl px-8 py-4 font-semibold text-white text-center bg-white/5 border border-white/15 hover:bg-white/10 hover:scale-[1.02] transition-transform"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl px-8 py-4 font-semibold text-white text-center bg-gradient-to-r from-[#6f8cff] to-[#b34eff] shadow-[0_15px_40px_rgba(179,76,255,0.35)] hover:scale-[1.03] transition-transform"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

