"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Search,
  Sparkles,
  Star,
  StarHalf,
  ShieldCheck,
  Cpu,
  Database,
  Cloud,
  Server,
  Box,
} from "lucide-react";

type CaseStudyCategory =
  | "Web Development"
  | "Mobile Apps"
  | "SaaS"
  | "AI"
  | "E-Commerce";

type CaseStudyCategoryFilter = "All" | CaseStudyCategory;

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: CaseStudyCategory;
  clientName: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  completionDate: string;
  projectUrl: string;
}

interface Industry {
  id: string;
  title: string;
  description: string;
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  review: string;
  rating: number; // 0..5
  image: string;
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

// (Animations are preserved via other variants like fadeUp.)

function useAnimatedCounter(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.getElementById(`counter-${target}-${durationMs}`);
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
  }, [target, durationMs]);

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

  return value;
}

function MetricCard({
  label,
  value,
  suffix,
  idx,
}: {
  label: string;
  value: number;
  suffix: string;
  idx: number;
}) {
  const animated = useAnimatedCounter(value, 1100 + idx * 180);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.05 }}
      whileHover={{ y: -10 }}
      className="bg-[#0d1a4d]/45 backdrop-blur-md border border-white/10 rounded-[22px] p-8 shadow-[0_0_35px_rgba(193,79,255,0.14)]"
    >
      <div id={`counter-${value}-${1100 + idx * 180}`} className="sr-only" />
      <div className="text-white font-extrabold text-4xl">
        {animated.toLocaleString()}
        <span className="text-white/80">{suffix}</span>
      </div>
      <div className="text-gray-300 mt-3 font-semibold text-[15px] leading-7">
        {label}
      </div>
    </motion.div>
  );
}


function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const idx = i + 1;
        const isFull = idx <= full;
        const isHalf = !isFull && hasHalf && idx === full + 1;
        return (
          <span key={i} className="text-[#5f7cff]">
            {isFull ? <Star size={16} fill="#5f7cff" /> : isHalf ? <StarHalf size={16} fill="#5f7cff" /> : <Star size={16} fill="transparent" />}
          </span>
        );
      })}
    </div>
  );
}

function GradientBorderCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[22px] border border-white/10 bg-[#0d1a4d]/35 backdrop-blur-md shadow-[0_0_60px_rgba(193,79,255,0.12)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[22px] p-[1px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(95,124,255,0.9), rgba(193,79,255,0.9))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          mask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative p-0">{children}</div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const categories: CaseStudyCategoryFilter[] = useMemo(
    () => ["All", "Web Development", "Mobile Apps", "SaaS", "AI", "E-Commerce"],
    []
  );

  const caseStudies: CaseStudy[] = useMemo(
    () => [
      {
        id: "cs-001",
        slug: "fintech-growth-platform",
        title: "Fintech Growth Platform",
        category: "AI",
        clientName: "NorthBridge Financial",
        image: "/images/Project1.png",
        challenge:
          "Legacy systems couldn’t deliver real-time risk insights, slowing decision-making across teams.",
        solution:
          "Built an AI-powered data pipeline with dashboards and automated insights for faster underwriting decisions.",
        result:
          "Reduced time-to-insight and improved underwriting accuracy across key product lines.",
        technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL", "MongoDB", "Docker"],
        completionDate: "2025-02-14",
        projectUrl: "/case-studies/fintech-growth-platform",
      },
      {
        id: "cs-002",
        slug: "omnichannel-ecommerce-experience",
        title: "Omnichannel E-Commerce Experience",
        category: "E-Commerce",
        clientName: "Aurora Retail Group",
        image: "/images/Project2.png",
        challenge:
          "A fragmented customer journey reduced conversions during peak traffic seasons.",
        solution:
          "Delivered a unified storefront experience with performance tuning, personalization, and improved checkout flows.",
        result:
          "Higher conversion rate, faster page loads, and improved customer retention.",
        technologies: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Docker"],
        completionDate: "2024-11-30",
        projectUrl: "/case-studies/omnichannel-ecommerce-experience",
      },
      {
        id: "cs-003",
        slug: "saas-automation-and-analytics",
        title: "SaaS Automation & Analytics",
        category: "SaaS",
        clientName: "Atlas Operations",
        image: "/images/Project3.png",
        challenge:
          "Operational analytics were delayed and difficult to action, creating bottlenecks across teams.",
        solution:
          "Implemented a scalable analytics layer with dashboards, scheduled automation, and secure APIs.",
        result:
          "Streamlined operations with actionable metrics and reduced manual reporting.",
        technologies: ["Next.js", "Spring Boot", "PostgreSQL", "MongoDB", "AWS", "Docker"],
        completionDate: "2025-05-22",
        projectUrl: "/case-studies/saas-automation-and-analytics",
      },
      {
        id: "cs-004",
        slug: "mobile-app-modernization",
        title: "Mobile App Modernization",
        category: "Mobile Apps",
        clientName: "PulseCare Health",
        image: "/images/blog.png",
        challenge:
          "Slow app performance and inconsistent UI caused churn among new users.",
        solution:
          "Rebuilt key flows with modern UI/UX, optimized APIs, and robust error handling.",
        result:
          "Improved engagement and reduced support tickets by delivering a smoother experience.",
        technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
        completionDate: "2024-09-19",
        projectUrl: "/case-studies/mobile-app-modernization",
      },
      {
        id: "cs-005",
        slug: "enterprise-web-replatform",
        title: "Enterprise Web Replatform",
        category: "Web Development",
        clientName: "Crown Logistics",
        image: "/images/blog2.png",
        challenge:
          "The existing platform couldn&apos;t scale with new markets and had accessibility issues.",
        solution:
          "Replatformed with modern UI patterns, improved accessibility, and optimized SEO fundamentals.",
        result:
          "Better performance, higher engagement, and a foundation for future growth.",
        technologies: ["Next.js", "React", "Node.js", "AWS", "PostgreSQL"],
        completionDate: "2025-01-08",
        projectUrl: "/case-studies/enterprise-web-replatform",
      },
    ],
    []
  );

  const featured = caseStudies[0];

  const industries: Industry[] = useMemo(
    () => [
      {
        id: "ind-healthcare",
        title: "Healthcare",
        description: "Secure platforms that improve patient outcomes.",
      },
      {
        id: "ind-education",
        title: "Education",
        description: "Engaging learning experiences built for scalability.",
      },
      {
        id: "ind-finance",
        title: "Finance",
        description: "Reliable, compliant systems for modern institutions.",
      },
      {
        id: "ind-real-estate",
        title: "Real Estate",
        description: "Data-driven experiences that convert faster.",
      },
      {
        id: "ind-ecommerce",
        title: "E-Commerce",
        description: "Luxury storefront performance for high intent users.",
      },
      {
        id: "ind-logistics",
        title: "Logistics",
        description: "Visibility tools that streamline operations.",
      },
      {
        id: "ind-saas",
        title: "SaaS",
        description: "Product-first engineering for long-term growth.",
      },
      {
        id: "ind-manufacturing",
        title: "Manufacturing",
        description: "Automation and insights for efficiency.",
      },
    ],
    []
  );

  const technologies = useMemo(
    () => [
      { id: "tech-react", title: "React", icon: <Cpu size={18} /> },
      { id: "tech-next", title: "Next.js", icon: <Sparkles size={18} /> },
      { id: "tech-spring", title: "Spring Boot", icon: <Server size={18} /> },
      { id: "tech-java", title: "Java", icon: <Box size={18} /> },
      { id: "tech-node", title: "Node.js", icon: <Cloud size={18} /> },
      { id: "tech-aws", title: "AWS", icon: <ShieldCheck size={18} /> },
      { id: "tech-docker", title: "Docker", icon: <Database size={18} /> },
      { id: "tech-postgres", title: "PostgreSQL", icon: <Database size={18} /> },
      { id: "tech-mongo", title: "MongoDB", icon: <Database size={18} /> },
    ],
    []
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: "t-1",
        name: "Sarah Khalid",
        company: "NorthBridge Financial",
        review:
          "GDFX transformed our risk workflows. The team delivered fast, communicated clearly, and the outcome exceeded expectations.",
        rating: 5,
        image: "/images/blog3.png",
      },
      {
        id: "t-2",
        name: "Michael Turner",
        company: "Aurora Retail Group",
        review:
          "Premium engineering and design. Our conversions increased while performance improved across devices.",
        rating: 4.5,
        image: "/images/blog4.png",
      },
      {
        id: "t-3",
        name: "Ayesha Khan",
        company: "Atlas Operations",
        review:
          "Their process is transparent and measurable. We now have a scalable analytics foundation and automation.",
        rating: 5,
        image: "/images/blog2.png",
      },
    ],
    []
  );

  const [activeCategory, setActiveCategory] = useState<CaseStudyCategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return caseStudies.filter((cs) => {
      const matchesCategory =
        activeCategory === "All" ? true : cs.category === activeCategory;

      const matchesQuery =
        q.length === 0
          ? true
          : [
              cs.title,
              cs.clientName,
              cs.category,
              cs.challenge,
              cs.solution,
              cs.result,
              cs.technologies.join(" "),
            ]
              .join(" ")
              .toLowerCase()
              .includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, caseStudies, searchQuery]);

  const metricItems = useMemo(
    () => [
      { label: "Projects Delivered", value: 250, suffix: "+" },
      { label: "Happy Clients", value: 100, suffix: "+" },
      { label: "Client Satisfaction", value: 99, suffix: "%" },
      { label: "Industries Served", value: 15, suffix: "+" },
    ],
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "#020b35" }}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#020b35] pt-28 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1b2c7a20,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,#8b5cf620,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5f7cff20,transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center border border-[#4D72FF] rounded-full px-5 py-3 mb-8">
              <span className="text-[#7f9cff] text-sm font-medium tracking-wide">
                CASE STUDIES
              </span>
            </div>

            <h1 className="text-white font-extrabold leading-[1.05] text-[40px] sm:text-[52px]">
              Real Projects. Real{" "}
              <span className="bg-gradient-to-r from-[#5f7cff] via-[#7f6dff] to-[#c14fff] bg-clip-text text-transparent">
                Results.
              </span>
            </h1>

            <p className="text-gray-300 mt-7 text-lg leading-9 max-w-3xl">
              Showcase how GDFX helps businesses achieve measurable growth
              through innovative digital solutions.
            </p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full px-10 py-5 font-semibold text-white text-lg bg-gradient-to-r from-[#6f8cff] to-[#b34eff] shadow-[0_15px_40px_rgba(179,76,255,0.35)] hover:scale-[1.03] transition duration-300"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-10 py-5 font-semibold text-white text-lg bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS METRICS */}
      <section className="py-16" id="success-metrics">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricItems.map((m, idx) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                suffix={m.suffix}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-10" aria-label="Featured case study">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-between gap-6 flex-wrap">
              <div>
                <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-3 font-medium">
                  Featured Case Study
                </p>
                <h2 className="text-white font-bold text-2xl md:text-3xl">
                  {featured.title}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Sparkles size={18} className="text-[#c14fff]" />
                <span className="text-gray-200 font-semibold">ROI Driven Delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <GradientBorderCard className="p-0 overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative min-h-[260px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b35] via-[#020b35]/30 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-semibold">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: "linear-gradient(135deg,#5f7cff,#c14fff)" }}
                      />
                      {featured.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-white font-bold text-2xl">
                        {featured.clientName}
                      </h3>
                      <p className="text-gray-300 mt-3 max-w-2xl leading-8">
                        {featured.result}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-gradient-to-r from-[#5f7cff]/30 to-[#c14fff]/30 border border-white/10 px-6 py-4">
                        <div className="text-white font-extrabold text-3xl">+38%</div>
                        <div className="text-gray-300 text-sm font-semibold mt-1">
                          ROI Increase
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <div className="text-gray-400 text-sm uppercase tracking-wider">
                        Challenge
                      </div>
                      <div className="text-white font-semibold mt-2 leading-7">
                        {featured.challenge}
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                      <div className="text-gray-400 text-sm uppercase tracking-wider">
                        Solution
                      </div>
                      <div className="text-white font-semibold mt-2 leading-7">
                        {featured.solution}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.technologies.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-sm font-semibold bg-[#0d1a4d]/55 border border-white/10 text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                    <div className="text-gray-300 text-sm font-semibold">
                      Completion: <span className="text-white">{new Date(featured.completionDate).toLocaleDateString()}</span>
                    </div>

                    <Link
                      href={featured.projectUrl}
                      className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold text-white bg-gradient-to-r from-[#5f7cff] to-[#c14fff] hover:scale-[1.03] transition duration-300 shadow-[0_20px_60px_rgba(193,79,255,0.25)]"
                    >
                      Read Full Case Study
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </GradientBorderCard>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-16" id="projects">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-3 font-medium">
                  Case Studies Library
                </p>
                <h2 className="text-white font-bold text-3xl">Explore Results by Category</h2>
              </div>

              <div className="w-full lg:w-[520px]">
                <label className="relative block">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={18} />
                  </span>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by client, tech stack, or outcomes..."
                    className="w-full rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 px-12 py-4 outline-none focus:border-[#5f7cff]/60 focus:ring-2 focus:ring-[#c14fff]/30"
                    type="text"
                  />
                </label>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-semibold border transition duration-300",
                    active
                      ? "bg-gradient-to-r from-[#5f7cff] to-[#c14fff] border-transparent text-white shadow-[0_18px_60px_rgba(193,79,255,0.25)]"
                      : "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs, idx) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <GradientBorderCard className="p-6 overflow-hidden h-full">
                  <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b35] via-[#020b35]/20 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-xs">
                        {cs.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-white font-bold text-xl leading-7">
                      {cs.title}
                    </h3>
                    <p className="text-gray-300 mt-2 font-semibold text-sm">
                      {cs.clientName}
                    </p>

                    <p className="text-gray-300 mt-4 leading-8 text-sm">
                      {cs.result}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {cs.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0d1a4d]/55 border border-white/10 text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5f7cff]/20 to-[#c14fff]/20 border border-white/10 text-gray-200 font-semibold">
                        <Sparkles size={16} className="text-[#c14fff]" />
                        Results
                      </span>

                      <Link
                        href={cs.projectUrl}
                        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </GradientBorderCard>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-gray-300">
              No case studies match your search. Try a different keyword or category.
            </div>
          )}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-3 font-medium">
              Industries We Serve
            </p>
            <h2 className="text-white font-bold text-3xl">Built for Enterprise-Grade Outcomes</h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0d1a4d]/40 backdrop-blur-md border border-white/10 rounded-[22px] p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#5f7cff]/25 to-[#c14fff]/25 border border-white/10 flex items-center justify-center">
                    <ShieldCheck size={22} className="text-[#c14fff]" />
                  </div>
                  <h3 className="text-white font-bold text-[18px] mt-5">{ind.title}</h3>
                  <p className="text-gray-300 mt-3 leading-8">{ind.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-3 font-medium">
              Technologies Used
            </p>
            <h2 className="text-white font-bold text-3xl">Modern Stack. Enterprise Delivery.</h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {technologies.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: idx * 0.04 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-[#0d1a4d]/35 backdrop-blur-md border border-white/10 rounded-[20px] p-6 h-full">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(95,124,255,0.22), rgba(193,79,255,0.22))" }}
                    >
                      <span className="text-[#c14fff]">{t.icon}</span>
                    </div>
                    <h3 className="text-white font-bold text-[16px]">{t.title}</h3>
                  </div>
                  <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-[#5f7cff] to-[#c14fff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-3 font-medium">
              Client Testimonials
            </p>
            <h2 className="text-white font-bold text-3xl">Trusted by Teams That Value Results</h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-[#0d1a4d]/35 backdrop-blur-md border border-white/10 rounded-[22px] p-7 h-full shadow-[0_0_55px_rgba(193,79,255,0.10)]">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-white/5">
                      <Image
                        src={t.image}
                        alt={`${t.name} portrait`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold">{t.name}</div>
                      <div className="text-gray-300 text-sm font-semibold">{t.company}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <StarRating rating={t.rating} />
                  </div>

                  <p className="text-gray-300 mt-5 leading-8">“{t.review}”</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS & ACHIEVEMENTS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-[#c14fff] uppercase tracking-wider text-sm mb-3 font-medium">
              Results & Achievements
            </p>
            <h2 className="text-white font-bold text-3xl">Measurable Growth, Delivered</h2>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Revenue Growth", value: "+42%", icon: <Sparkles size={18} /> },
              { title: "Performance Improvement", value: "-36%", icon: <ShieldCheck size={18} /> },
              { title: "Conversion Increase", value: "+31%", icon: <Star size={18} /> },
              { title: "User Growth", value: "+58%", icon: <ArrowRight size={18} /> },
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-[#0d1a4d]/40 backdrop-blur-md border border-white/10 rounded-[22px] p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#5f7cff]/25 to-[#c14fff]/25 border border-white/10 flex items-center justify-center">
                    <span className="text-[#c14fff]">{s.icon}</span>
                  </div>
                  <span className="text-[#c14fff] font-bold text-sm uppercase tracking-wider">
                    KPI
                  </span>
                </div>

                <div className="mt-4 text-white font-extrabold text-3xl">
                  {s.value}
                </div>
                <div className="text-gray-300 mt-2 font-semibold">{s.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #5f7cff, #c14fff)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-white font-bold text-3xl md:text-4xl">
                Let&apos;s Build Your Next Success Story
              </h2>
              <p className="text-white/90 mt-3 text-lg max-w-xl">
                Tell us your goals and we’ll map a strategy that delivers measurable outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link
                href="/contact"
                className="rounded-xl px-10 py-4 font-semibold text-white text-center"
                style={{ background: "rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="rounded-xl px-10 py-4 font-semibold text-white text-center bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

