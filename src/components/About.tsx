"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto px-6 py-16 text-center text-gray-200"
    >
      <h2 className="text-3xl font-bold text-green-400 mb-6">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-300">
        I am a Full Stack Developer skilled in Next.js, React.js, TypeScript,
        Node.js, and MongoDB, with a focus on building scalable and
        high-performance web applications. Currently pursuing a B.Tech in
        Computer Science Engineering at RTU Kota (CGPA: 9.4), I have worked as a
        Full Stack Developer Intern at Search N Play Infotech, optimizing
        applications with SSR and SSG for better performance. My projects
        include StudyNotion (EdTech platform), Vrental (rental marketplace), a
        task management system, a QR-based attendance system, and the THAR-24
        technical fest website with a Space Wars theme. I have experience in
        state management (Redux Toolkit, Zustand), cloud services (Firebase,
        Vercel, Cloudinary), and database management (MongoDB, PostgreSQL,
        Prisma). I have solved 250+ DSA problems on LeetCode & GFG, contributed
        to 30+ GitHub repositories, and served as a Placement Coordinator at RTU
        Kota, organizing 10+ placement drives. Open to new opportunities, I
        strive for efficiency, scalability, and seamless user experiences.
      </p>
    </motion.section>
  );
};

export default AboutMe;
