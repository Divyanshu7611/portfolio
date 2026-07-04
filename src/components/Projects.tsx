"use client";

import type { CSSProperties, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Codify",
    category: "EdTech",
    liveUrl: "https://codify-teal.vercel.app",
    githubUrl: "https://github.com/Divyanshu7611/codify-edtech",
    description:
      "Course marketplace where students can purchase courses and creators can upload, sell, and manage learning content with authentication, payments, chat, and assessments.",
    stack: ["React", "Express", "Socket.io", "Razorpay", "JWT", "MongoDB"],
  },
  {
    title: "VRental",
    category: "Rental Platform",
    liveUrl: "https://www.vrental.in",
    githubUrl: "https://github.com/Divyanshu7611/vrental",
    description:
      "Apartment rental platform where owners can list properties and users can discover nearby rentals, send interest requests, and interact through secure flows.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Cloudinary"],
  },
  {
    title: "HeyZizz",
    category: "E-commerce",
    liveUrl: "https://heyzizz.com/",
    githubUrl: "https://github.com/Divyanshu7611/zizz-gummy",
    description:
      "Production e-commerce storefront for gummies with product discovery, cart flows, checkout experience, and a polished responsive shopping interface.",
    stack: ["Next.js", "TypeScript", "Shopify", "GraphQL", "Algolia", "Nginx"],
  },
  {
    title: "THAR '24",
    category: "College Tech Fest",
    liveUrl: "https://thar24.vercel.app",
    githubUrl: "https://github.com/Divyanshu7611/Thar24",
    description:
      "Official college tech fest website with immersive themed UI, event discovery, registrations, and a high-energy experience for participants.",
    stack: ["Next.js", "Tailwind CSS", "Animations", "Event Platform"],
  },
  {
    title: "YoungMK NGO",
    category: "Nonprofit",
    liveUrl: "https://www.youngmk.com",
    githubUrl: "https://github.com/Divyanshu7611/youngmk_ngo",
    description:
      "NGO website focused on communicating impact, programs, and community initiatives through a clean, accessible, and responsive web presence.",
    stack: ["Next.js", "React", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio",
    liveUrl: "https://portfolio-divyanshus-projects-7c3eb08c.vercel.app/",
    githubUrl: "",
    description:
      "Personal portfolio showcasing full-stack experience, selected projects, interactive visuals, and a refined presentation of engineering work.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
];

const runningLine = [
  "Products",
  "APIs",
  "UI Systems",
  "Databases",
  "Payments",
  "Deployments",
  "Auth",
  "Performance",
];

type Project = (typeof projects)[number];

function InteractiveProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    event.currentTarget.style.setProperty("--x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--y", `${y * 100}%`);
    rotateX.set((0.5 - y) * 14);
    rotateY.set((x - 0.5) * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        {
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
          "--x": "50%",
          "--y": "50%",
        } as CSSProperties
      }
      className="group relative flex min-h-[25rem] flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-6 text-left shadow-[0_24px_80px_rgba(24,24,27,0.08)] backdrop-blur-2xl transition-shadow hover:shadow-[0_38px_130px_rgba(24,24,27,0.18)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--x) var(--y), rgba(251,191,36,0.34), rgba(255,255,255,0.2) 24%, transparent 48%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: "-140%" }}
        whileHover={{ x: "240%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-200/70 blur-3xl transition duration-500 group-hover:scale-150"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-white blur-3xl transition duration-500 group-hover:scale-150"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.44)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.44)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
      />

      <div className="relative mb-8 flex items-start justify-between gap-4 [transform:translateZ(42px)]">
        <motion.div
          className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-sm font-black text-white"
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
          transition={{ duration: 0.45 }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>
        <span className="rounded-full border border-white/80 bg-[#f7f6ef]/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 shadow-sm backdrop-blur-xl">
          {project.category}
        </span>
      </div>

      <h3 className="relative text-3xl font-black tracking-[-0.06em] text-zinc-950 [transform:translateZ(54px)]">
        {project.title}
      </h3>
      <p className="relative mt-5 text-sm leading-7 text-zinc-600 [transform:translateZ(36px)]">
        {project.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2 [transform:translateZ(48px)]">
        {project.stack.map((tool, toolIndex) => (
          <motion.span
            key={tool}
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ delay: toolIndex * 0.015 }}
            className="rounded-full border border-white/80 bg-[#f7f6ef]/80 px-3 py-1 text-[11px] font-bold text-zinc-500 shadow-sm backdrop-blur-xl"
          >
            {tool}
          </motion.span>
        ))}
      </div>

      <div className="relative mt-auto flex flex-wrap gap-3 pt-8 [transform:translateZ(58px)]">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-amber-400 hover:text-zinc-950"
        >
          Live
          <FaExternalLinkAlt size={11} />
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-zinc-950 backdrop-blur-xl transition hover:-translate-y-1 hover:border-zinc-950"
          >
            GitHub
            <FaGithub size={13} />
          </a>
        )}
        <span
          aria-hidden="true"
          className="ml-auto hidden h-11 w-11 place-items-center rounded-full border border-white/80 bg-white/50 text-zinc-400 backdrop-blur-xl transition group-hover:translate-x-1 group-hover:bg-zinc-950 group-hover:text-white sm:grid"
        >
          <FaArrowRight size={14} />
        </span>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#f7f6ef] px-4 pb-32 pt-16 text-zinc-950 sm:px-8 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(24,24,27,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.055)_1px,transparent_1px)] bg-[size:54px_54px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-white blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-20 -z-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-amber-500">
            Selected Work
          </p>
          <h2 className="mt-5 text-5xl font-black uppercase tracking-[-0.07em] text-zinc-950 sm:text-7xl lg:text-8xl">
            Projects
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
            A collection of full-stack products across edtech, rentals,
            commerce, event platforms, nonprofit work, and portfolio systems.
          </p>
        </div>

        <div className="relative left-1/2 mb-12 w-screen -translate-x-1/2 overflow-hidden border-y border-white/70 bg-white/35 py-5 shadow-[0_20px_90px_rgba(24,24,27,0.12)] backdrop-blur-3xl">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f7f6ef] to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f7f6ef] to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/4 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-amber-200/45 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-1/4 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-white blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            className="relative flex min-w-max gap-4 px-4 text-xs font-black uppercase tracking-[0.28em] text-zinc-500"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...runningLine, ...runningLine, ...runningLine].map(
              (item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-white/70 bg-white/55 px-5 py-2 shadow-sm backdrop-blur-xl"
                >
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <InteractiveProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
