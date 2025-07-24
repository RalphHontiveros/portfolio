import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ProfilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl px-6 sm:px-10 md:px-14 py-10 sm:py-14 w-full max-w-6xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* === Animated Profile Picture === */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full flex-shrink-0 group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-500 blur-sm opacity-50 group-hover:animate-spin-slow transition-all duration-700" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-neutral-900 shadow-2xl z-10">
              <img
                src={ProfilePic}
                alt="Ralph Hontiveros"
                className="w-full h-full object-cover transition duration-500"
              />
            </div>
          </motion.div>

          {/* === Text Section === */}
          <div className="text-left flex-1 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-400"
            >
              About Me
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-400"
            >
              <Typewriter
                words={[
                  "Front-End Developer",
                  "UI/UX Designer",
                  "React Enthusiast",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-800 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide space-y-5"
            >
              <p>
                Hi! I’m a dedicated{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Front-End Developer
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  UI/UX Designer
                </span>{" "}
                passionate about creating clean, responsive, and user-friendly
                web interfaces. I enjoy combining design and code to deliver
                smooth, intuitive user experiences.
              </p>
              <p>
                I specialize in technologies like{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  React, Tailwind CSS, and JavaScript
                </span>
                , and I always aim for accessible, performant, and scalable
                solutions.
              </p>
              <p>
                Right now, I'm expanding my knowledge in backend development
                using{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Node.js, Express, and MySQL/MongoDB
                </span>
                . My ultimate goal is to become a{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Full Stack Developer
                </span>{" "}
                capable of building complete, end-to-end web applications.
              </p>
              <p>
                I'm continuously learning and refining my craft to stay ahead in
                this ever-evolving field.
              </p>
              <p className="text-center font-semibold italic text-blue-600 dark:text-blue-400">
                Let’s build something great together!
              </p>
            </motion.div>

            <blockquote className="mt-6 italic text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
              “Design is not just what it looks like and feels like. Design is
              how it works.” – Steve Jobs
            </blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 text-center sm:text-left"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-blue-600 text-white text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <span className="relative z-10">Let’s Connect</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-white/30 transition duration-300"></span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
