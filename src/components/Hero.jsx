import React, { useEffect, useState, useRef } from "react";
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

// === Skill Icons with Names ===
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
  // === State & Refs ===
  const [isDarkMode, setIsDarkMode] = useState(false);
  const marqueeRef = useRef(null);
  const animationFrame = useRef(null);
  const lastTimestamp = useRef(null);
  const offsetX = useRef(0);
  const speed = 60;

  // === Theme Detection ===
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // === Marquee Animation ===
  const animateMarquee = (timestamp) => {
    if (!lastTimestamp.current) lastTimestamp.current = timestamp;
    const delta = (timestamp - lastTimestamp.current) / 1000;
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

  const pauseMarquee = () => cancelAnimationFrame(animationFrame.current);
  const resumeMarquee = () => {
    lastTimestamp.current = null;
    animationFrame.current = requestAnimationFrame(animateMarquee);
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* === Floating Code Icons === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, index) => {
          const skill = skills[index % skills.length];
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          const scale = Math.random() * 0.6 + 0.4;
          const rotate = Math.random() * 360;
          const duration = 15 + Math.random() * 25;
          const delay = Math.random() * 10;
          const blur = Math.random() * 4 + 1;
          const direction = index % 2 === 0 ? "y" : "x";
          const zIndex = Math.floor(Math.random() * 3);

          return (
            <motion.div
              key={index}
              aria-hidden="true"
              className={`absolute ${
                isDarkMode ? "text-blue-800/30" : "text-blue-500/40"
              } hover:opacity-70 transition-all duration-700 ease-in-out hover:scale-110 hover:drop-shadow-xl`}
              initial={{ [direction]: 0, scale, rotate }}
              animate={{ [direction]: ["0%", "20%", "0%"], rotate: [0, 360] }}
              transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
              style={{ left, top, zIndex, filter: `blur(${blur}px)` }}
            >
              <skill.icon className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-md" />
            </motion.div>
          );
        })}
      </div>

      {/* === Parallax Sparkles === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() * 4 + 2;
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const delay = Math.random() * 5;
          const opacity = Math.random() * 0.4 + 0.1;
          const blur = Math.random() * 2 + 0.5;
          const rotation = Math.random() > 0.5 ? [0, 360] : [360, 0];

          const colors = isDarkMode
            ? [
                "rgba(255,255,255,0.9)",
                "rgba(173, 216, 230, 0.8)",
                "rgba(255, 240, 245, 0.7)",
                "rgba(255, 250, 205, 0.6)",
              ]
            : [
                "rgba(147, 197, 253, 0.6)",
                "rgba(196, 181, 253, 0.6)",
                "rgba(253, 230, 138, 0.5)",
                "rgba(240, 240, 255, 0.7)",
              ];

          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                top,
                left,
                opacity,
                backgroundColor: color,
                filter: `blur(${blur}px)`,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }}
              animate={{
                x: [0, Math.random() * 12 - 6, 0],
                y: [0, Math.random() * 12 - 6, 0],
                rotate: rotation,
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* === Floating Symbols === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, index) => {
          const symbols = ["</>", "{}", "()", "@", "#", "<div>", "</div>", "&&", "||", "!=="];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];

          const top = `${Math.random() * 90 + 5}%`;
          const left = `${Math.random() * 90 + 5}%`;
          const rotateStart = Math.random() * 360;
          const rotateEnd = rotateStart + 60;
          const delay = Math.random() * 3;
          const duration = 10 + Math.random() * 10;
          const opacity = Math.random() * 0.4 + 0.2;
          const scaleStart = Math.random() * 0.7 + 0.7;

          const colors = isDarkMode
            ? [
                "rgba(59, 130, 246, 0.3)",
                "rgba(139, 92, 246, 0.3)",
                "rgba(34, 197, 94, 0.3)",
                "rgba(250, 204, 21, 0.3)",
              ]
            : [
                "rgba(59, 130, 246, 0.5)",
                "rgba(139, 92, 246, 0.5)",
                "rgba(34, 197, 94, 0.5)",
                "rgba(250, 204, 21, 0.5)",
              ];

          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.div
              key={`symbol-${index}`}
              className="absolute font-mono"
              style={{
                top,
                left,
                rotate: rotateStart,
                fontSize: `${Math.random() * 1.5 + 0.8}rem`,
                color,
                opacity,
                filter: "blur(0.5px) drop-shadow(0 0 2px rgba(0,0,0,0.1))",
              }}
              animate={{
                y: ["0%", "-15%", "0%"],
                rotate: [rotateStart, rotateEnd, rotateStart],
                scale: [scaleStart, scaleStart + 0.2, scaleStart],
                opacity: [opacity, opacity + 0.1, opacity],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>

      {/* === Hero Section === */}
      <section
        id="hero"
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-4 py-1 text-sm font-semibold uppercase tracking-wide bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full shadow-sm"
        >
          Front-End Developer
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">Ralph Hontiveros</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          I create responsive and interactive web interfaces using modern front-end tools like
          <span className="font-semibold text-blue-600 dark:text-blue-300"> ReactJS</span>,
          <span className="font-semibold text-blue-600 dark:text-blue-300"> TailwindCSS</span>, and
          <span className="font-semibold text-blue-600 dark:text-blue-300"> Axios</span>.
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
          <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div
            ref={marqueeRef}
            onMouseEnter={pauseMarquee}
            onMouseLeave={resumeMarquee}
            className="flex w-max gap-4 sm:gap-6 md:gap-8 px-4 sm:px-10 py-4 sm:py-6 will-change-transform select-none"
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
