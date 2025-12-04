import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { techIcons } from '../utils/techIcons';

const About = () => {
  const { about, skills } = portfolioData;

  // Helper to render skill pills
  const renderSkillPill = (skillName) => {
    const icon = techIcons[skillName];
    return (
      <motion.div
        key={skillName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow-md transition-all cursor-default"
      >
        <div className="text-xl">{icon || <span className="text-gray-400 text-sm">?</span>}</div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skillName}</span>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>

          {/* Bio Text */}
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
             {Array.isArray(about) ? (
                about.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                    </p>
                ))
             ) : (
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {about}
                </p>
             )}
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Technical Skills
            </h3>

            <div className="space-y-10">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6 text-center sm:text-left border-b border-gray-200 dark:border-gray-700 pb-2 inline-block sm:block">
                    {category}
                  </h4>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                    {skillList.map((skill) => renderSkillPill(skill))}
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
