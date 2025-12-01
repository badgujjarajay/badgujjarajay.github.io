import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I'm currently based in Hyderabad, India, and working at Goldman Sachs. I'm always open to discussing new technologies, system design challenges, or potential collaborations.
              </p>

              <div className="flex flex-col gap-4">
                <a href="mailto:badgujjarajay@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  <FaEnvelope size={24} />
                  <span>badgujjarajay@gmail.com</span>
                </a>
              </div>

              <div className="flex gap-6 mt-6">
                <a href="https://github.com/badgujjarajay" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/badgujjarajay/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
