import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Bachelor of Science in Computer Science",
    company: "Emilio Aguinaldo College – Cavite",
    duration: "2021 – 2025"
  },
  {
    role: "Front-End Developer",
    company: "City Information Communication and Technology Office - Trece Martires",
    duration: "Jul 2024 – Sept 2024",
    tasks: [
      "Developed Queuing Management System UI using HTML, CSS, Bootstrap, and ASP.NET.",
      "Created reusable components and responsive layouts.",
      "Collaborated with the team for flowchart, kiosk, and transaction module improvements.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2024 – Present",
    tasks: [
      "Developed portfolio websites using React and Tailwind CSS.",
      "Built RESTful APIs and backend functionality using Node.js and Express.",
      "Applied UI/UX best practices to create clean, responsive, and user-friendly designs.",
    ],
  }

];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
    >
      <div className="max-w-4xl w-full relative">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-blue-600 dark:text-blue-400 w-6 h-6" />
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-6 space-y-10 relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[30px] top-6 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800 shadow-md"></div>

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {exp.company}
              </p>

              {exp.tasks && (
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  {exp.tasks.map((task, j) => (
                    <li key={j}>{task}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
