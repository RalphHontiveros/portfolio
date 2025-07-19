export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-transparent py-16 px-6 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Project Card 1 */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 text-left bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Task Manager App
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A Kanban-style app built with React, Context API, and Tailwind. Add,
            edit, and drag tasks across boards.
          </p>
          <a
            href="https://your-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 text-left bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Weather Forecast App
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A real-time weather app using the OpenWeatherMap API with clean UI
            and error handling.
          </p>
          <a
            href="https://your-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 text-left bg-white dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Portfolio Website
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My personal portfolio built with React and Tailwind CSS to showcase
            projects and skills.
          </p>
          <a
            href="https://your-demo-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
