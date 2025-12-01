import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">Hello, I'm</h2>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Ajay Singh
          </h1>
          <h3 className="text-2xl sm:text-4xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            Software Development Engineer
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10">
            Based in Hyderabad, India. Experienced Software Engineer specializing in high-performance APIs, microservices, and system design. Currently building scalable solutions at Goldman Sachs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
            >
              Check out my work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-md font-semibold hover:bg-blue-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
