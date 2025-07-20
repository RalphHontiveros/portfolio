import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read theme preference from localStorage on initial load
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          Ralph<span className="text-zinc-800 dark:text-zinc-300 font-light">.dev</span>
        </h1>

        {/* Nav Links & Toggle */}
        <ul className="flex items-center gap-6 text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-200">
          {["about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative group transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-blue-500 rounded-sm"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-blue-500 transition-all"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
