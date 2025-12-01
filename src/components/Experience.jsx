import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Goldman Sachs',
      role: 'Software Development Engineer',
      period: 'Sep 2025 - Present | Hyderabad, TG',
      description: 'Currently working as a Software Development Engineer, contributing to high-impact financial software solutions.',
    },
    {
      company: 'Bank of New York',
      role: 'Software Development Engineer',
      period: 'Jul 2022 - Aug 2025 | Pune, MH',
      description: 'Developed high-performance APIs for real-time stock market pricing (8ms latency) within a microservice architecture. Streamlined critical cron jobs saving 10+ hours/week. Developed the Intraday Updates system and contributed to real-time production configuration tools for high availability.',
    },
    {
      company: 'Samsung Research',
      role: 'Software Engineer Intern',
      period: 'Jan 2022 - Jun 2022 | Noida, UP',
      description: 'Executed machine learning tasks for Landmark Detection and Game Genre Recognition (87% accuracy). Engineered scripts for dataset annotation and integrated ML models into Samsung TV for real-time predictions.',
    },
     {
      company: 'JC Bose University of Science and Technology, YMCA',
      role: 'Bachelor of Technology in IT',
      period: 'Aug 2018 - May 2022 | Faridabad, HR',
      description: 'Graduated with a focus on Information Technology. Built a strong foundation in Data Structures, Algorithms, and System Design.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Experience & Education</h2>

          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-0 md:pl-0 md:grid md:grid-cols-1 md:gap-12 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6 md:ml-0 md:mb-0 md:flex md:items-start group">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 group-hover:bg-blue-500 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-600 rounded-full dark:bg-blue-300 group-hover:bg-white"></div>
                </span>

                <div className="md:flex-1 md:pl-10">
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role} <span className="hidden md:inline mx-2 text-gray-400">|</span> <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.period}</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
