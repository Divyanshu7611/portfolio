"use client";

import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const navItems = [
  { label: "Projects", shortLabel: "Projects", section: "projects" },
  { label: "Experience", shortLabel: "Exp", section: "about" },
];

type FloatDockProps = {
  activeSection?: string;
  setActiveSection: (section: string) => void;
};

const FloatDock = ({ activeSection, setActiveSection }: FloatDockProps) => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100vw-0.75rem)] max-w-[30rem] -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-white/20 bg-zinc-700/90 p-2 text-[10px] font-bold text-white shadow-2xl shadow-zinc-400/40 backdrop-blur-xl sm:bottom-6 sm:w-auto sm:max-w-none sm:gap-2 sm:text-xs">
      <button
        type="button"
        aria-label="Home"
        onClick={() => setActiveSection("hero")}
        className={`grid h-9 shrink-0 place-items-center rounded-full px-3 transition hover:bg-white/15 sm:h-10 sm:w-10 sm:px-0 ${
          activeSection === "hero" ? "bg-white/20" : ""
        }`}
      >
        <span className="sm:hidden">Home</span>
        <span className="hidden sm:inline">⌂</span>
      </button>

      {navItems.map((item) => (
        <button
          key={item.section}
          type="button"
          aria-label={item.label}
          onClick={() => setActiveSection(item.section)}
          className={`grid h-9 shrink-0 place-items-center rounded-full px-3 transition hover:bg-white/15 sm:h-auto sm:px-3 sm:py-3 md:px-4 ${
            activeSection === item.section ? "bg-white/20" : ""
          }`}
        >
          <span className="sm:hidden">{item.shortLabel}</span>
          <span className="hidden sm:inline">{item.label}</span>
        </button>
      ))}

      <button
        type="button"
        aria-label="Let's talk"
        onClick={() => router.push("/contact")}
        className="inline-flex h-9 shrink-0 items-center gap-2 rounded-full bg-black px-3 text-white transition hover:-translate-y-0.5 hover:bg-amber-400 hover:text-zinc-950 sm:h-auto sm:px-5 sm:py-3"
      >
        <span className="sm:hidden">Talk</span>
        <span className="hidden sm:inline">Let&apos;s talk</span>
        <FaArrowRight size={12} />
      </button>
    </nav>
  );
};

export default FloatDock;

