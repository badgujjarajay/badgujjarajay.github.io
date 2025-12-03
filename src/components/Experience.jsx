import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, education } = portfolioData;

  const renderTimelineItem = (item, index, isExperience, totalItems) => {
    const isLast = index === totalItems - 1;

    return (
      <div key={index} className="relative pl-8 sm:pl-10 group">
        {/* Timeline Line */}
        {!isLast && (
          <div
            className="absolute left-[9px] sm:left-[11px] top-2 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors"
            aria-hidden="true"
          />
        )}

        {/* Dot */}
        <div
          className={`absolute left-0 sm:left-0.5 top-2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 transition-colors ${
            isExperience ? 'bg-blue-600' : 'bg-green-600'
          }`}
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-10 relative"
        >
           <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
               <div>
                 <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                   {isExperience ? item.role : item.degree}
                 </h4>
                 <h5 className={`text-base font-semibold ${isExperience ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'}`}>
                   {isExperience ? item.company : item.institution}
                 </h5>
               </div>
               <div className="text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                 {item.startDate} - {item.endDate}
                 <div className="text-xs mt-1">{item.location}</div>
               </div>
             </div>

             {item.description && item.description.length > 0 && (
               <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                 {item.description.map((desc, i) => (
                   <li key={i} className="leading-relaxed pl-1 marker:text-gray-400">
                     {desc}
                   </li>
                 ))}
               </ul>
             )}
           </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Experience & Education
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">💼</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="relative">
                {experience.map((item, index) => renderTimelineItem(item, index, true, experience.length))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🎓</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
               <div className="relative">
                {education.map((item, index) => renderTimelineItem(item, index, false, education.length))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
