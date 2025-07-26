import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 px-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-center md:text-left">
          &copy; {new Date().getFullYear()} Ralph Hontiveros. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RalphHontiveros"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ralph-hontiveros-849053368"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
