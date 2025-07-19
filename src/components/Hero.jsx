import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300 overflow-hidden">
      {/* Soft Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center"
      >
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-4 py-1 text-sm font-semibold uppercase tracking-wide bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full shadow-sm"
        >
          Web Developer & UI Designer
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ralph Hontiveros</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          I build high-performance, accessible, and elegant web interfaces using modern front-end tech like
          <span className="font-semibold text-blue-600 dark:text-blue-300"> React</span> and
          <span className="font-semibold text-blue-600 dark:text-blue-300"> Tailwind CSS</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 text-base sm:text-lg font-semibold bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 text-base sm:text-lg font-semibold border border-blue-600 dark:border-blue-300 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronsDown className="w-6 h-6 text-blue-600 dark:text-blue-300" />
        </motion.div>
      </section>
    </div>
  );
}
