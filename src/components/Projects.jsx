import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


function Slideshow({ images }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-52 bg-gray-100 dark:bg-gray-700 overflow-hidden rounded-t-2xl relative">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === index && fade ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}


export default function Projects() {
  const projects = [
    {
      title: "Appointment & Queuing System",
      desc: "A full queuing system for managing appointments and services at a health office.",
      images: [
        "/images/queue1.png",
        "/images/queue2.png",
        "/images/queue3.png",
      ],
      demo: "https://appointment-lwf-queue.onrender.com",
      stack: ["React", "Tailwind", "Queue System"],
    },
    {
      title: "Weather Forecast App",
      desc: "A real-time weather app using OpenWeatherMap API with error handling and clean UI.",
      image: "/images/weather-app.png",
      demo: "https://your-demo-link.com",
      stack: ["React", "API", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React and Tailwind to showcase projects and skills.",
      image: "/images/portfolio.png",
      demo: "https://your-demo-link.com",
      stack: ["React", "Tailwind", "Responsive"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-14 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {/* Slideshow for first project only */}
              {"images" in project ? (
                <Slideshow images={project.images} />
              ) : (
                <div className="h-52 bg-gray-100 dark:bg-gray-700 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center text-sm text-blue-600 dark:text-blue-400 gap-1">
                  <ExternalLink size={16} /> Live Demo
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
