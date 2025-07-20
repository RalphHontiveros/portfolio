export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {/* Project Card 1 */}
        <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <img
              src="/images/task-manager.png"
              alt="Task Manager App"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Task Manager App
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A Kanban-style task app using React, Context API & Tailwind CSS. Features drag & drop.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-repo/task-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <img
              src="/images/weather-app.png"
              alt="Weather Forecast App"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Weather Forecast App
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A real-time weather app using OpenWeatherMap API with error handling and clean UI.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-repo/weather-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
          <div className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
            <img
              src="/images/portfolio.png"
              alt="Portfolio Website"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Portfolio Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My personal portfolio built with React and Tailwind to showcase projects and skills.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://your-demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-repo/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
