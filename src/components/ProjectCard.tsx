"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative group overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-900 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:shadow-2xl"
    >
      {/* Image Section with Overlay */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 bg-white dark:bg-gray-900">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-green-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
          {description}
        </p>

        {/* View Project Button */}
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gray-600 text-white font-semibold transition-all duration-300 shadow-lg hover:bg-green-700 hover:shadow-xl focus:ring-4 focus:ring-green-300"
          whileHover={{ scale: 1.05 }}
        >
          🚀 View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
