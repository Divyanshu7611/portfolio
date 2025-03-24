"use client";
import { FaHome, FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GoCodespaces } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";

const FloatDock = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-full border-2 border-gray-300 shadow-lg p-3 px-6 flex gap-6">
      <button onClick={() => setActiveSection("hero")} className="hover:text-gray-400 transition">
        <FaHome size={24} />
      </button>
      <button onClick={() => setActiveSection("about")} className="hover:text-gray-400 transition">
        <FaUser size={24} />
      </button>
      <button onClick={() => setActiveSection("projects")} className="hover:text-gray-400 transition">
        <GoCodespaces size={24} />
      </button>
      <button onClick={() => setActiveSection("skills")} className="hover:text-gray-400 transition">
        <FaCode size={24} />
      </button>
      <button onClick={() => setActiveSection("contact")} className="hover:text-gray-400 transition">
        <RiContactsLine size={24} />
      </button>
    </nav>
  );
};

export default FloatDock;

