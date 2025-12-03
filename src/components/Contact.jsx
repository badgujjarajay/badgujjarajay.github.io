import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { socialIcons, socialColors, socialLabels } from '../utils/socialIcons';

const Contact = () => {
  const { social, contactDescription } = portfolioData;

  // Filter out keys that don't have icons or aren't meant for display if needed
  // For now, we assume all keys in social match keys in socialIcons
  const socialKeys = Object.keys(social);

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
            {contactDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {socialKeys.map((key) => {
               // Handle special case for email which needs mailto:
               const href = key === 'email' ? `mailto:${social[key]}` : social[key];
               const icon = socialIcons[key];
               const colorClass = socialColors[key] || "group-hover:bg-blue-600";
               const label = socialLabels[key] || key.charAt(0).toUpperCase() + key.slice(1);

               if (!icon) return null;

               return (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : "_blank"}
                  rel={key === 'email' ? undefined : "noopener noreferrer"}
                  className="flex flex-col items-center group"
                >
                  <div className={`w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg ${colorClass} transition-colors duration-300`}>
                    {icon}
                  </div>
                  <span className={`mt-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300`}>{label}</span>
                </a>
               );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
