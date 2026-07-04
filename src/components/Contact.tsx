"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        autoReplySent?: boolean;
      };

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setStatus({
        type: "success",
        message:
          result.autoReplySent === false
            ? "Message sent, but the visitor confirmation email could not be delivered."
            : "Message sent. I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Message could not be sent. Please email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#f7f6ef] px-4 py-4 text-zinc-950 sm:px-8 sm:py-6 lg:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.28),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.9),transparent_26%),radial-gradient(circle_at_50%_88%,rgba(24,24,27,0.1),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-20 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex items-center justify-between gap-4 sm:mb-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-zinc-600 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-zinc-950 hover:text-zinc-950"
          >
            <FaArrowLeft size={11} />
            Home
          </a>
          <div className="hidden items-center gap-4 text-zinc-700 sm:flex">
            <a
              aria-label="GitHub"
              href="https://github.com/Divyanshu7611"
              target="_blank"
              className="transition hover:-translate-y-1 hover:text-amber-500"
            >
              <FaGithub />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/divyanshu-sharma-7aaa15203"
              target="_blank"
              className="transition hover:-translate-y-1 hover:text-amber-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="grid items-center gap-7 pb-24 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.95fr_1.05fr] lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.38em] text-amber-500 sm:mb-5 sm:tracking-[0.45em]">
              Get Services
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-zinc-950 sm:text-8xl sm:leading-[0.82] lg:text-[8rem]">
              Let&apos;s Build
              <span className="block rotate-[-2deg] text-zinc-500">
                Something
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:mt-8 sm:text-base sm:leading-8">
              Need frontend, backend, optimized APIs, infrastructure, or a full
              product build? Tell me everything in the message and it will land
              directly in my Gmail inbox.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 42, rotateX: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/45 p-4 shadow-[0_34px_120px_rgba(24,24,27,0.14)] backdrop-blur-3xl sm:rounded-[2rem] sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.22))]"
            />
            <div className="mb-6 sm:mb-7">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-500 sm:tracking-[0.35em]">
                Contact Me
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-zinc-950 sm:text-5xl">
                Tell me about the work
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-950 outline-none backdrop-blur-xl transition focus:border-zinc-950 sm:py-4"
                  placeholder="Your name"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-950 outline-none backdrop-blur-xl transition focus:border-zinc-950 sm:py-4"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-950 outline-none backdrop-blur-xl transition focus:border-zinc-950 sm:py-4"
                placeholder="Share scope, timeline, stack, goals, budget, links..."
              />
            </label>

            {status && (
              <p
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-bold ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ y: -3 }}
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-zinc-950 px-6 py-4 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-amber-400 hover:text-zinc-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
              <FaPaperPlane size={13} />
            </motion.button>

          
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;



