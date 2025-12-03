import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, role, description } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            {name}
          </h1>
          <h3 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            {role}
          </h3>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
            >
              Check out my work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
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
