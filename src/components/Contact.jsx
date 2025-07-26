import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        form.current.reset();
      } else {
        const errRes = await response.json();
        toast.error(`❌ Failed: ${errRes.error || "Unknown error."}`);
      }
    } catch (err) {
      console.error("Send error:", err);
      toast.error("❌ Network or server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-gray-900 dark:to-black"
    >
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-lg bg-white/80 dark:bg-gray-800/70 border border-blue-100 dark:border-gray-700 shadow-2xl rounded-3xl px-10 py-14"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 p-4 rounded-full shadow-lg">
            <Mail className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mt-6">
            Let’s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 mb-8">
            Want to work together or have a question? I’m always open to new opportunities and collaborations.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 dark:text-white resize-none placeholder-gray-500 dark:placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              } text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <p className="mt-12 text-sm text-gray-400 dark:text-gray-500">
          or message me directly on{" "}
          <a
            href="https://www.linkedin.com/in/ralphhontiveros"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
