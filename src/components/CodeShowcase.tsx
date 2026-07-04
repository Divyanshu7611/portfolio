"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const aboutSummary = [
  "const developer = 'Divyanshu Sharma';",
  "focus = ['frontend', 'backend', 'optimized APIs'];",
  "infra = ['AWS', 'GCP', 'deployments'];",
  "mission = 'build fast, scalable web products';",
  "status = 'open to impactful work';",
];

export default function CodeShowcase() {
  const terminalText = useMemo(
    () =>
      [
        "ubuntu@portfolio:~/about$ node summary.js",
        ...aboutSummary,
        "> summary generated successfully",
      ].join("\n"),
    [],
  );
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCharCount((count) =>
        count >= terminalText.length + 80 ? 0 : count + 1,
      );
    }, 82);

    return () => window.clearInterval(interval);
  }, [terminalText]);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f7f6ef] px-4 py-14 text-zinc-950 sm:px-8 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-20 h-52 -translate-y-1/2 bg-white/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">


        <div className="grid items-stretch gap-5 [perspective:1200px] lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 48, rotateX: 12, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            whileHover={{ y: -10, rotateY: -4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.35 }}
            className="group overflow-hidden rounded-[2rem] border border-white/70 bg-[#300a24] shadow-[0_28px_100px_rgba(24,24,27,0.2)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#2c001e] to-[#4a1138] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-white/45">
                ubuntu@portfolio:~/about
              </span>
            </div>

            <div className="relative min-h-[20rem] p-5 font-mono text-sm leading-7 text-[#f8f8f2]">
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 h-20 w-20 rounded-full bg-gradient-to-br from-orange-400/30 to-transparent opacity-80 blur-2xl transition group-hover:scale-150"
              />
              <pre className="relative whitespace-pre-wrap break-words">
                <span className="text-[#8ae234]">
                  {terminalText.slice(0, Math.max(0, charCount))}
                </span>
                <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-[#f8f8f2] align-middle" />
              </pre>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 48, rotateX: 12, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            whileHover={{ y: -10, rotateY: 4 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.35 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-[0_28px_100px_rgba(24,24,27,0.12)] backdrop-blur-2xl"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-amber-200/60 blur-2xl"
            />
            <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-500">
              About Me
            </p>
            <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-zinc-950 sm:text-5xl">
              Full Stack Focused
              <span className="block text-zinc-500">Developer</span>
            </h3>
            <p className="mt-6 text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
              I manage frontend, backend, optimized APIs, and infrastructure to
              build fast, reliable, and scalable web products. I care about
              clean user experiences, stable systems, and production-ready
              delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Frontend", "Backend", "APIs", "Infra", "Deployments"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-500"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
