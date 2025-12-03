import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Experience & Education</h2>

          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-0 max-w-4xl mx-auto">
            {/* Experience Section */}
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 ml-6 md:ml-12 relative"
              >
                <span className="absolute -left-[33px] md:-left-[57px] flex h-4 w-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-gray-900" />

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <div className="flex flex-col md:items-end">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                         {exp.startDate} - {exp.endDate} | {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                     {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {desc}
                        </li>
                     ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education Section */}
            {education.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (experience.length + index) * 0.1 }}
                className="mb-12 ml-6 md:ml-12 relative"
              >
                <span className="absolute -left-[33px] md:-left-[57px] flex h-4 w-4 bg-green-600 rounded-full ring-4 ring-white dark:ring-gray-900" />

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <div className="flex flex-col md:items-end">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">{edu.institution}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                         {edu.startDate} - {edu.endDate} | {edu.location}
                      </span>
                    </div>
                  </div>
                   <ul className="list-disc list-inside space-y-2 mt-4">
                     {edu.description.map((desc, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {desc}
                        </li>
                     ))}
                  </ul>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
