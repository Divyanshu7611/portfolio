"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate form submission (Replace with API or EmailJS)
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-green-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let&apos;s work together! Send me a message.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 p-6 space-y-4 bg-white/10 backdrop-blur-lg shadow-lg rounded-xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-white font-medium">Name</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-white font-medium">Email</label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-white font-medium">Message</label>
            <motion.textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-white/20 text-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full text-white font-semibold py-2 bg-gray-700 rounded-md hover:bg-green-700 transition-all disabled:bg-gray-500"
            whileHover={{ scale: 1.05 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;



