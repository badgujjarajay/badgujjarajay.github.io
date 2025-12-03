import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { techIcons } from '../utils/techIcons';

const About = () => {
  const { about, skills } = portfolioData;

  // Helper to render skill icons
  const renderSkill = (skillName) => {
    const icon = techIcons[skillName];
    return (
      <div key={skillName} className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
        <div className="text-3xl mb-2">{icon || <span className="text-gray-400">?</span>}</div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skillName}</span>
      </div>
    );
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">{about.title}</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">Core Skills</h3>

              {Object.entries(skills).map(([category, skillList]) => (
                 <div key={category} className="mb-6 last:mb-0">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-semibold">{category}</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                      {skillList.map((skill) => renderSkill(skill))}
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
