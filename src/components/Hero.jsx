import React, { useEffect, useState, useRef } from "react";
import {
  Sparkle,
  ChevronsDown,
  Code,
  Palette,
  Cpu,
  PenTool,
  Layers,
  Zap,
  Terminal,
  Settings,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Github,
  Database, // ✅ Add this line
} from "lucide-react";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

// ===== Skills List =====
const skills = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Cpu },
  { name: "ReactJS", icon: PenTool },
  { name: "TailwindCSS", icon: Terminal },
  { name: "Bootstrap", icon: Layers },
  { name: "Axios", icon: Zap },
  { name: "jQuery", icon: Settings },
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
];
const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust this to match your navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

// ===== Main Component =====
export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains("dark"));

  // Refs
  const marqueeRef = useRef(null);
  const animationFrame = useRef(null);
  const lastTimestamp = useRef(null);
  const offsetX = useRef(0);
  const canvasRef = useRef(null);

  const speed = 60;

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let points = [];

    const initPoints = () => {
      points = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const dotColor = isDarkMode ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)";
      const baseLineColor = isDarkMode ? [255, 255, 255] : [0, 0, 0];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            const opacity = 1 - dist / 120;
            ctx.strokeStyle = `rgba(${baseLineColor[0]},${baseLineColor[1]},${baseLineColor[2]},${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    initPoints();
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPoints();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDarkMode]);

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
    <div className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-500 scroll-smooth">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none" />

      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-24 text-center">
        {/* === Badge === */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 dark:from-blue-800 dark:via-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 shadow-md backdrop-blur-sm"
        >
          <Sparkle className="w-4 h-4 text-blue-500 dark:text-blue-300 animate-pulse" />
          <Typewriter
            words={["Front-End Developer", "React Enthusiast", "UI/UX Explorer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={65}
            deleteSpeed={45}
            delaySpeed={2000}
          />
        </motion.div>

        {/* === Heading === */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-6xl mx-auto text-center text-gray-900 dark:text-white tracking-tight"
        >
          Hi, I'm{" "}
          <span className="relative inline-block group">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-indigo-300">
              Ralph Hontiveros
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 opacity-40 rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>
        </motion.h1>

        {/* === Intro === */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl text-center"
        >
          I build smooth, responsive, and modern web interfaces using{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-300">ReactJS</span>,{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-300">TailwindCSS</span>, and{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-300">Axios</span>.
        </motion.p>

        {/* === Buttons === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-4 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="px-10 py-4 text-base font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-10 py-4 text-base font-bold bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full shadow-lg backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* === Social Icons === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-3xl mx-auto px-4"
        >
          {[
            { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/centpaii", label: "Instagram" },
            { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/ralph-hontiveros-849053368", label: "LinkedIn" },
            { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/hontiveros0515", label: "Twitter" },
            { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/Centpaii", label: "Facebook" },
            { icon: <Phone className="w-5 h-5" />, href: "https://wa.me/639285767289", label: "WhatsApp" },
            { icon: <Github className="w-5 h-5" />, href: "https://github.com/RalphHontiveros", label: "GitHub" }
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* === Scroll Icon === */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronsDown className="w-6 h-6 text-blue-600 dark:text-blue-300" />
        </motion.div>

        {/* === Marquee === */}
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
