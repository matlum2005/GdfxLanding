"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useActiveSection from "./useActiveSection";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - 90;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastY = useRef(0);
  const mobileMenuBtnRef = useRef<HTMLButtonElement | null>(null);

  const sectionIds = useMemo(
    () => ["about", "services", "case-study", "case-studies", "blog", "contact"],
    []
  );

  const activeId = useActiveSection(sectionIds);

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "services", label: "Services" },
      { id: "case-study", label: "Case Study" },
      { id: "blog", label: "Blog" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      if (!open) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const dropdown = target.closest('[data-navbar-dropdown="service"]');
      const button = target.closest(
        '[data-navbar-dropdown-button="service"]'
      );

      if (!dropdown && !button) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const diff = current - lastY.current;

      if (current > 50) {
        if (diff > 6) setHidden(true);
        else if (diff < -6) setHidden(false);
      } else {
        setHidden(false);
      }

      lastY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const navLinkClass = (id: string) =>
    `relative text-[15px] font-semibold transition-all duration-300 ${
      activeId === id
        ? "text-white"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,#5f7cff20,transparent_70%)] pointer-events-none"
      />

      <div className="h-[82px] backdrop-blur-xl bg-[#060f35]/75 border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.png"
                alt="GDFX Logo"
                width={150}
                height={50}
                className="h-[45px] w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10 text-white">
            <Link
              href="/"
              className="relative text-[15px] font-semibold text-white"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#6E7BFF] to-[#D546FF]" />
            </Link>

            <Link
              href="/#about"
              className={navLinkClass("about")}
              onClick={(e) => {
                e.preventDefault();
                scrollToId("about");
              }}
            >
              About
            </Link>

            {/* Service Dropdown */}
            <div className="relative">
              <button
                data-navbar-dropdown-button="service"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[#8ea0ff]"
              >
                Service

                <motion.div animate={{ rotate: open ? 180 : 0 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    data-navbar-dropdown="service"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 mt-4 w-[220px] rounded-2xl border border-white/10 bg-[#111B48]/95 backdrop-blur-xl p-4 shadow-2xl"
                  >
                    <button
                      onClick={() => {
                        scrollToId("services");
                        setOpen(false);
                      }}
                      className="block w-full rounded-lg px-4 py-3 text-left hover:bg-white/10"
                    >
                      Services
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#case-study"
              className={navLinkClass("case-study")}
              onClick={(e) => {
                e.preventDefault();
                scrollToId("case-study");
              }}
            >
              Case Study
            </Link>

            <Link
              href="/#blog"
              className={navLinkClass("blog")}
              onClick={(e) => {
                e.preventDefault();
                scrollToId("blog");
              }}
            >
              Blog
            </Link>

            <Link
              href="/#contact"
              className={navLinkClass("contact")}
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuBtnRef}
            aria-label="Open menu"
            type="button"
            onClick={() => {
              setMobileMenuOpen((v) => !v);
              setOpen(false);
            }}
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-[#0b1540]/60 backdrop-blur-xl w-11 h-11"
          >
            <span className="sr-only">Menu</span>
            <motion.span
              aria-hidden
              animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
              className="block relative w-5 h-[2px] bg-white rounded-full"
            >
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="absolute left-0 top-[-6px] w-5 h-[2px] bg-white rounded-full"
              />
              <motion.span
                animate={{ rotate: mobileMenuOpen ? -90 : 0, top: mobileMenuOpen ? 0 : 6 }}
                className="absolute left-0 top-[6px] w-5 h-[2px] bg-white rounded-full"
              />
            </motion.span>
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="lg:hidden absolute top-[82px] left-0 right-0 z-[60]"
              >
                <div className="mx-auto max-w-7xl px-6">
                  <div className="rounded-3xl border border-white/10 bg-[#0b1540]/85 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.55)] overflow-hidden">
                    <div className="px-5 py-4">
                      <div className="grid gap-2">
                        {navItems.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              scrollToId(item.id);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-2xl border border-white/0 transition-all duration-300 ${
                              activeId === item.id
                                ? "bg-gradient-to-r from-[#6E7BFF]/30 to-[#D546FF]/30 text-white border-white/15"
                                : "bg-white/0 hover:bg-white/5 text-white/80"
                            }`}
                          >
                            <span className="font-semibold text-[16px]">
                              {item.label}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-5">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            scrollToId("contact");
                          }}
                          className="w-full rounded-2xl px-6 py-4 text-white font-semibold bg-gradient-to-r from-[#6E7BFF] to-[#D546FF] shadow-[0_15px_40px_rgba(179,76,255,0.35)]"
                        >
                          Get in Touch
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToId("contact")}
            className="relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#6E7BFF] to-[#D546FF]" />
            <span className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-[#6E7BFF] to-[#D546FF]" />
            <span className="relative">Get in Touch</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

