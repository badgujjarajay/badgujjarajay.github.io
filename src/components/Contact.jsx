import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { social } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-6">Let's Connect</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm currently based in Hyderabad, India, and working at Goldman Sachs. I'm always open to discussing new technologies, system design challenges, or potential collaborations.
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${social.email}`}
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                <FaEnvelope className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">Email</span>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg group-hover:bg-gray-900 transition-colors duration-300">
                <FaGithub className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300">GitHub</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                <FaLinkedin className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-700 dark:group-hover:text-blue-400">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
