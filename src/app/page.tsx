"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/FloatDock";
import AboutMe from "@/components/About";
import CodeShowcase from "@/components/CodeShowcase";
import Projects from "@/components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f6ef] font-[family-name:var(--font-geist-sans)]">
      <main className="flex min-h-screen flex-col items-center">
        <section id="hero" className="w-full">
          <Hero />
        </section>
        <section id="about" className="w-full">
          <AboutMe />
        </section>
        <section className="w-full">
          <CodeShowcase />
        </section>
        <section id="projects" className="w-full">
          <Projects />
        </section>
      </main>
      <FloatingNavbar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />
    </div>
  );
}
