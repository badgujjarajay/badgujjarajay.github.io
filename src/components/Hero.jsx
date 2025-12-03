import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { hero } = portfolioData;

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
            {hero.name}
          </h1>
          <h3 className="text-2xl sm:text-4xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            {hero.role}
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {hero.actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={`px-8 py-3 rounded-md font-semibold transition-colors cursor-pointer ${
                  action.primary
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                    : "bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-900"
                }`}
              >
                {action.text}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
