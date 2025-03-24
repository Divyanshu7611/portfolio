// import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'
// import FloatingNavbar from '@/components/FloatDock'
// import AboutMe from '@/components/About'

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
//       <Navbar />
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Hero />
//         <AboutMe/>
//       </main>
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingNavbar from "@/components/FloatDock";
import AboutMe from "@/components/About";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import Contact from "@/components/Contact"; 

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {activeSection === "hero" && <Hero />}
        {activeSection === "about" && <AboutMe />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "skills" && <SkillsSection />}
        {activeSection === "contact" && <Contact />}
      </main>
      <FloatingNavbar setActiveSection={setActiveSection} />
    </div>
  );
}
