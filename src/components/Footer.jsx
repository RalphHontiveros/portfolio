export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-6 text-center transition-colors duration-300">
      <p>&copy; {new Date().getFullYear()} Ralph Hontiveros. All rights reserved.</p>
      <div className="mt-2">
        <a
          href="https://github.com/yourgithub"
          className="text-blue-600 dark:text-blue-400 hover:underline mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          className="text-blue-600 dark:text-blue-400 hover:underline mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
