export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-transparent py-16 px-6 text-center transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Want to work together or have a question? Feel free to reach out!
      </p>
      <a
        href="mailto:hontiverosralph00@gmail.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
      >
        Send Email
      </a>
    </section>
  );
}
