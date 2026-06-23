"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BottomCards from "../components/BottomCards";
import ParticleBackground from "../components/ParticleBackground";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import SubscribeSection  from "@/components/SubscribeSection";
import ProjectSection  from "@/components/ProjectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";


export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="pointer-events-none absolute inset-0" />
      <Navbar />
      <main>
        <HeroSection />
        <BottomCards />

        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ExperienceSection />
        <BlogSection />
        <SubscribeSection />
        <ProjectSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}


