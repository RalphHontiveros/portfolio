import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl dark:shadow-md p-10 sm:p-14 max-w-4xl text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-teal-300 dark:to-sky-400">
          About Me
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg sm:text-xl leading-relaxed tracking-wide">
          I’m a dedicated <span className="font-semibold text-blue-600 dark:text-teal-400">Front-End Developer</span> with a passion for building elegant, responsive interfaces.
          I work with <span className="font-semibold text-blue-600 dark:text-teal-400">React</span>, <span className="font-semibold text-blue-600 dark:text-teal-400">Tailwind CSS</span>, and modern web tools to deliver clean, performant code.
          My goal is always to turn ideas into intuitive, user-friendly digital experiences.
        </p>
      </motion.div>
    </section>
  );
}
