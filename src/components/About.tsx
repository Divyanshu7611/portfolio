"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Engineer 1",
    company: "HeyEV",
    period: "May 2025 - Present",
    type: "Current Role",
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "GCP"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Search N Play Infotech",
    period: "July 2024 - Aug 2024",
    type: "Internship",
    stack: ["Next.js", "TypeScript", "APIs", "Database Optimization", "Backend"],
  },
  {
    role: "Placement Coordinator",
    company: "Training and Placement Cell, RTU Kota",
    period: "July 2024 - Dec 2025",
    type: "Leadership",
    stack: ["Leadership", "Team Management", "Recruitment", "Operations"],
  },
];

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#f7f6ef] px-4 pb-32 pt-16 text-zinc-950 sm:px-8 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(24,24,27,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.055)_1px,transparent_1px)] bg-[size:54px_54px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-20 -z-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 text-center sm:mb-14">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-amber-500">
            Experience
          </p>
          <h2 className="text-5xl font-black uppercase tracking-[-0.07em] text-zinc-950 sm:text-7xl lg:text-8xl">
            Work Timeline
          </h2>
        </div>

        <div className="grid gap-5 [perspective:1400px] lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{
                opacity: 0,
                y: 64,
                rotateX: 16,
                scale: 0.94,
                filter: "blur(14px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              whileHover={{
                y: -12,
                rotateX: 3,
                rotateY: index % 2 === 0 ? -3 : 3,
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-6 text-left shadow-[0_24px_90px_rgba(24,24,27,0.1)] backdrop-blur-2xl transition-shadow hover:shadow-[0_34px_120px_rgba(24,24,27,0.18)]"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-amber-200/60 blur-2xl transition group-hover:scale-125"
              />
              <motion.div
                aria-hidden="true"
                initial={{ x: "-120%" }}
                whileInView={{ x: "120%" }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.18 + 0.25,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.42)_1px,transparent_1px)] bg-[size:22px_22px] opacity-45"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-24 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"
              />

              <div className="relative mb-8 flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-zinc-950 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="rounded-full border border-zinc-200 bg-[#f7f6ef] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                  {experience.type}
                </span>
              </div>

              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-amber-500">
                {experience.period}
              </p>
              <h3 className="text-2xl font-black tracking-[-0.05em] text-zinc-950">
                {experience.role}
              </h3>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                {experience.company}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-zinc-200 bg-[#f7f6ef] px-3 py-1 text-[11px] font-bold text-zinc-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
