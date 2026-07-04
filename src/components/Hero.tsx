"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  BsDownload,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

const name = "Divyanshu Sharma";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Firebase",
  "REST APIs",
  "UI / UX",
];

const firstName = "DIVYANSHU";
const surnameTranslations = [
  "SHARMA",
  "शर्मा",
];
const orbitText = [...technologies, ...technologies].join(" - ");
const letterColors = [
  "#2563eb",
  "#f59e0b",
  "#ec4899",
  "#10b981",
  "#8b5cf6",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const nameSceneRef = useRef<HTMLDivElement | null>(null);
  const cursorLightRef = useRef<HTMLDivElement | null>(null);
  const nameLetterRefs = useRef<HTMLSpanElement[]>([]);
  const motionSafeRef = useRef(true);
  const isSpeakingRef = useRef(false);
  const speechDelayRef = useRef<number | null>(null);
  const [time, setTime] = useState("");
  const [surnameIndex, setSurnameIndex] = useState(0);
  const [letterStyles, setLetterStyles] = useState<Record<number, string>>({});
  const [sparkleLetter, setSparkleLetter] = useState<number | null>(null);
  const currentSurname = surnameTranslations[surnameIndex];

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateClock();
    const interval = window.setInterval(updateClock, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSurnameIndex((index) => (index + 1) % surnameTranslations.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sparkleLetter === null) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setSparkleLetter(null);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [sparkleLetter]);

  useEffect(() => {
    return () => {
      if (speechDelayRef.current) {
        window.clearTimeout(speechDelayRef.current);
      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    motionSafeRef.current = !prefersReducedMotion;

    const context = gsap.context(() => {
      gsap.set(nameSceneRef.current, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      if (prefersReducedMotion) {
        gsap.set([".hero-top", ".hero-note", ".hero-status"], {
          opacity: 1,
          y: 0,
        });
        gsap.set(nameLetterRefs.current, { opacity: 1, y: 0, rotateX: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { duration: 0.9, ease: "power3.out" },
      });

      timeline
        .from(".hero-top", { opacity: 0, y: -20, stagger: 0.12 })
        .from(
          nameLetterRefs.current,
          {
            opacity: 0,
            y: 110,
            rotateX: -85,
            rotateZ: () => gsap.utils.random(-6, 6),
            transformOrigin: "50% 50% -40px",
            stagger: 0.025,
          },
          "-=0.15",
        )
        .from(
          ".surname-word",
          {
            opacity: 0,
            y: 45,
            rotateX: -45,
            filter: "blur(10px)",
          },
          "-=0.5",
        )
        .from(".hero-note", { opacity: 0, y: 24, stagger: 0.12 }, "-=0.45")
        .from(".hero-status", { opacity: 0, scale: 0.94 }, "-=0.35");

      gsap.to(".name-word", {
        y: -12,
        rotateZ: (index) => (index === 0 ? -1.4 : 1.2),
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });

      gsap.to(".floating-symbol", {
        y: -16,
        rotate: 8,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.45,
      });

      gsap.fromTo(
        ".tech-snake-text",
        { attr: { startOffset: "-70%" } },
        {
          attr: { startOffset: "115%" },
          duration: 34,
          repeat: -1,
          ease: "none",
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (!motionSafeRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".surname-word",
        { opacity: 0, y: 36, rotateX: -35, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.65,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, [surnameIndex]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;
    const nameScene = nameSceneRef.current;

    if (!section || !nameScene || !motionSafeRef.current) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(nameScene, {
      rotateY: relativeX * 10,
      rotateX: -relativeY * 8,
      x: relativeX * 18,
      y: relativeY * 12,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(section.querySelectorAll(".hero-parallax"), {
      x: relativeX * 34,
      y: relativeY * 24,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.02,
    });

    gsap.to(cursorLightRef.current, {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      opacity: 0.45,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const handlePointerLeave = () => {
    if (!motionSafeRef.current) {
      return;
    }

    gsap.to(nameSceneRef.current, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(sectionRef.current?.querySelectorAll(".hero-parallax") ?? [], {
      x: 0,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.to(cursorLightRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const handleLetterClick = (letterIndex: number) => {
    setLetterStyles((currentStyles) => ({
      ...currentStyles,
      [letterIndex]:
        letterColors[(letterIndex + Date.now()) % letterColors.length],
    }));
    setSparkleLetter(null);
    window.requestAnimationFrame(() => setSparkleLetter(letterIndex));
    speakName();
  };

  const speakName = () => {
    if (!("speechSynthesis" in window) || isSpeakingRef.current) {
      return;
    }

    isSpeakingRef.current = true;
    speechDelayRef.current = window.setTimeout(() => {
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find((voice) =>
        [
          "female",
          "zira",
          "samantha",
          "victoria",
          "karen",
          "moira",
          "tessa",
          "veena",
          "heera",
          "google uk english female",
        ].some((voiceName) => voice.name.toLowerCase().includes(voiceName)),
      );
      const utterance = new SpeechSynthesisUtterance(name);

      utterance.voice = preferredVoice ?? null;
      utterance.rate = 0.9;
      utterance.pitch = 1.25;
      utterance.onend = () => {
        isSpeakingRef.current = false;
      };
      utterance.onerror = () => {
        isSpeakingRef.current = false;
      };

      window.speechSynthesis.speak(utterance);
      speechDelayRef.current = null;
    }, 180);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate flex min-h-screen w-screen flex-col overflow-hidden bg-[#f7f6ef] px-6 pb-32 pt-8 text-zinc-950 sm:px-10"
    >
      <div
        ref={cursorLightRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/60 blur-3xl opacity-0"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-20 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-30 h-40 bg-gradient-to-b from-white to-transparent"
      />

      <header className="hero-top flex items-start justify-between gap-6">
        <div className="hero-status text-left text-zinc-900">
          <p className="text-3xl font-black leading-none tracking-tight sm:text-4xl">
            {time || "00:00"}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
            Local
          </p>
        </div>

        <div className="hero-status flex items-center gap-4 text-sm text-zinc-900 sm:gap-5">
          <a
            aria-label="GitHub"
            href="https://github.com/Divyanshu7611"
            target="_blank"
            className="transition hover:-translate-y-1 hover:text-amber-500"
          >
            <ImGithub />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/divyanshu-sharma-7aaa15203"
            target="_blank"
            className="transition hover:-translate-y-1 hover:text-amber-500"
          >
            <BsLinkedin />
          </a>
          <a
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            className="transition hover:-translate-y-1 hover:text-amber-500"
          >
            <FaInstagram />
          </a>
          <a
            aria-label="X"
            href="https://x.com"
            target="_blank"
            className="transition hover:-translate-y-1 hover:text-amber-500"
          >
            <BsTwitterX />
          </a>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/"
            target="_blank"
            className="transition hover:-translate-y-1 hover:text-amber-500"
          >
            <BsWhatsapp />
          </a>
        </div>
      </header>

      <div
        aria-hidden="true"
        className="hero-parallax floating-symbol absolute right-[31%] top-[29%] text-2xl text-zinc-400 sm:text-3xl"
      >
        ♘
      </div>
      <div
        aria-hidden="true"
        className="hero-parallax floating-symbol absolute left-[15%] top-[41%] hidden text-2xl text-zinc-300 sm:block"
      >
        ✦
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[34%] z-0 h-32 overflow-visible text-zinc-300 sm:top-[33%] sm:h-56">
        <svg
          aria-hidden="true"
          className="h-full w-full overflow-visible sm:hidden"
          preserveAspectRatio="none"
          viewBox="0 0 900 130"
        >
          <defs>
            <path
              id="tech-snake-path-mobile"
              d="M -180 70 C 40 42 170 42 300 68 S 540 98 690 66 S 900 42 1080 70"
            />
          </defs>
          <text className="fill-zinc-300 text-[10px] font-semibold uppercase tracking-[0.24em]">
            <textPath
              className="tech-snake-text"
              href="#tech-snake-path-mobile"
              startOffset="0%"
            >
              {`${orbitText} - ${orbitText} - ${orbitText}`}
            </textPath>
          </text>
        </svg>

        <svg
          aria-hidden="true"
          className="hidden h-full w-full overflow-visible sm:block"
          preserveAspectRatio="none"
          viewBox="0 0 1400 230"
        >
          <defs>
            <path
              id="tech-snake-path"
              d="M -260 120 C 20 5 210 5 365 110 S 665 215 840 110 S 1120 5 1350 110 S 1620 210 1800 90"
            />
          </defs>
          <text className="fill-zinc-300 text-[11px] font-semibold uppercase tracking-[0.3em]">
            <textPath
              className="tech-snake-text"
              href="#tech-snake-path"
              startOffset="0%"
            >
              {`${orbitText} - ${orbitText} - ${orbitText}`}
            </textPath>
          </text>
        </svg>
      </div>

      <main className="relative mx-auto grid flex-1 place-items-center py-8 sm:py-12">
        <div
          ref={nameSceneRef}
          className="relative flex flex-col items-center text-center [transform-style:preserve-3d]"
        >
          <div className="hero-note hero-parallax relative mb-7 h-32 w-32 overflow-hidden rounded-full border-[6px] border-white bg-zinc-100 shadow-[0_25px_70px_rgba(24,24,27,0.16)] sm:h-40 sm:w-40">
            <Image
              src="/img.jpg"
              alt="Divyanshu Sharma"
              fill
              priority
              sizes="(min-width: 640px) 160px, 128px"
              className="object-cover"
            />
          </div>

          <h1
            aria-label={`Hey, I am ${name}`}
            className="select-none font-black uppercase leading-[0.82] text-zinc-950"
          >
            <span className="name-word block -rotate-3 text-[11vw] tracking-[-0.09em] text-zinc-950 sm:text-[8.5vw] lg:text-[5.8rem] xl:text-[7rem]">
              {firstName.split("").map((letter, letterIndex) => (
                <span
                  key={`${firstName}-${letter}-${letterIndex}`}
                  ref={(node) => {
                    if (node) {
                      nameLetterRefs.current[letterIndex] = node;
                    }
                  }}
                  onClick={() => handleLetterClick(letterIndex)}
                  style={{ color: letterStyles[letterIndex] }}
                  className="relative inline-block cursor-pointer [transform-style:preserve-3d] transition-colors duration-300"
                >
                  {letter}
                  {sparkleLetter === letterIndex && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 block"
                    >
                      <span className="absolute -left-2 top-1 h-3 w-3 animate-ping rounded-full bg-amber-300" />
                      <span className="absolute -right-1 top-3 h-2 w-2 animate-ping rounded-full bg-blue-400 [animation-delay:120ms]" />
                      <span className="absolute bottom-2 left-1/2 h-2.5 w-2.5 animate-ping rounded-full bg-pink-400 [animation-delay:220ms]" />
                      <span className="absolute -top-2 right-1/3 h-2 w-2 animate-ping rounded-full bg-emerald-400 [animation-delay:320ms]" />
                      <span className="absolute left-1/3 top-1/2 text-2xl text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]">
                        ✦
                      </span>
                    </span>
                  )}
                </span>
              ))}
            </span>
            <span
              key={currentSurname}
              className="surname-word name-word block min-h-[0.9em] rotate-[-4deg] text-[10.5vw] tracking-[-0.06em] text-zinc-500 sm:text-[8vw] lg:text-[5.2rem] xl:text-[6.5rem]"
            >
              {currentSurname}
            </span>
          </h1>

          <div className="hero-note mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-zinc-500 sm:text-base">
            Full-stack focused developer managing frontend, backend, optimized
            APIs, and reliable infrastructure for fast, scalable web products.
          </div>

          <a
            href="/divyanshu-cv.pdf"
            download
            className="hero-note group mt-7 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/55 p-2 pl-5 text-xs font-black uppercase tracking-[0.22em] text-zinc-700 shadow-[0_18px_60px_rgba(24,24,27,0.12)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-zinc-950 hover:bg-white/80"
          >
            <span>Download CV</span>
            <span className="hidden rounded-full border border-zinc-200 bg-[#f7f6ef] px-3 py-2 text-[10px] text-zinc-400 sm:inline-flex">
              PDF
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-zinc-950 text-white transition group-hover:bg-amber-400 group-hover:text-zinc-950">
              <BsDownload size={16} />
            </span>
          </a>
        </div>
      </main>

   
    </section>
  );
}
