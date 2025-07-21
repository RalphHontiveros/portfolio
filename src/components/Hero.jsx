import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import {
  Code,
  Palette,
  Cpu,
  PenTool,
  Layers,
  Zap,
  Terminal,
  Settings,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Cpu },
  { name: "ReactJS", icon: PenTool },
  { name: "TailwindCSS", icon: Terminal },
  { name: "Bootstrap", icon: Layers },
  { name: "Axios", icon: Zap },
  { name: "jQuery", icon: Settings },
];

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const marqueeRef = useRef(null);
  const animationFrame = useRef(null);
  const lastTimestamp = useRef(null);
  const offsetX = useRef(0);
  const speed = 60; // pixels per second

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const animateMarquee = (timestamp) => {
    if (!lastTimestamp.current) lastTimestamp.current = timestamp;
    const delta = (timestamp - lastTimestamp.current) / 1000; // in seconds
    lastTimestamp.current = timestamp;

    offsetX.current -= speed * delta;

    const el = marqueeRef.current;
    if (!el) return;

    const contentWidth = el.scrollWidth / 3;
    if (Math.abs(offsetX.current) >= contentWidth) {
      offsetX.current += contentWidth;
    }

    el.style.transform = `translateX(${offsetX.current}px)`;
    animationFrame.current = requestAnimationFrame(animateMarquee);
  };

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animateMarquee);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  const pauseMarquee = () => {
    cancelAnimationFrame(animationFrame.current);
  };

  const resumeMarquee = () => {
    lastTimestamp.current = null;
    animationFrame.current = requestAnimationFrame(animateMarquee);
  };

  return (
    <div className="relative bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300 overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-4 py-1 text-sm font-semibold uppercase tracking-wide bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full shadow-sm"
        >
          Front-End Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Ralph Hontiveros
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          I create responsive and interactive web interfaces using modern
          front-end tools like
          <span className="font-semibold text-blue-600 dark:text-blue-300"> ReactJS</span>,
          <span className="font-semibold text-blue-600 dark:text-blue-300"> TailwindCSS</span>, and
          <span className="font-semibold text-blue-600 dark:text-blue-300"> Axios</span>.
        </motion.p>

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

        {/* Scroll Down Icon */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronsDown className="w-6 h-6 text-blue-600 dark:text-blue-300" />
        </motion.div>

        {/* Infinite Marquee */}
<div className="mt-10 w-full overflow-hidden relative">
  {/* Side Fades */}
  <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

  {/* Marquee Content */}
  <div
    ref={marqueeRef}
    className="flex w-max gap-4 sm:gap-6 md:gap-8 px-4 sm:px-10 py-4 sm:py-6 will-change-transform select-none"
    onMouseEnter={pauseMarquee}
    onMouseLeave={resumeMarquee}
  >
    {[...skills, ...skills, ...skills].map((skill, index) => (
      <div
        key={index}
        className="group relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-transparent bg-white/10 dark:bg-white/5 backdrop-blur-lg text-gray-900 dark:text-white font-medium shadow-[inset_0_0_4px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:border-blue-400 transition-all duration-300 hover:scale-105"
      >
        <div className="p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-600 text-white dark:from-blue-600 dark:to-blue-400 shadow-md group-hover:rotate-[15deg] transition-transform duration-300">
          <skill.icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="text-xs sm:text-sm md:text-base">{skill.name}</span>
      </div>
    ))}
  </div>
</div>

      </section>
    </div>
  );
}
