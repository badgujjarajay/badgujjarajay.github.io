import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'CaptionBot',
      description: 'Applied a merger model for image captioning to generate concise 1-line descriptions. Employed YOLO for precise object detection (95% accuracy) and added an audio feature to narrate descriptions and object locations.',
      tech: ['Machine Learning', 'YOLO', 'Image Processing'],
      github: 'https://github.com/badgujjarajay', // Fallback to profile as specific link unknown
      demo: '#',
    },
    {
      title: 'Image Resolution Enhancer',
      description: 'Upscaled image quality 4x using CNNs for feature extraction and GANs for high-resolution generation. Transformed low-resolution images into high-quality outputs with precise detail preservation.',
      tech: ['Deep Learning', 'CNN', 'GAN', 'Python'],
      github: 'https://github.com/badgujjarajay',
      demo: '#',
    },
    {
      title: 'Entry Management System',
      description: 'Engineered a comprehensive visitor management system with check-in/out functionality. Built an admin dashboard for efficient management and integrated EJS for a user-friendly front-end experience.',
      tech: ['Node.js', 'ExpressJS', 'EJS', 'Admin Dashboard'],
      github: 'https://github.com/badgujjarajay',
      demo: '#',
    },
    {
      title: 'Fruits Classification',
      description: 'A Machine Learning project using Jupyter Notebooks to classify different types of fruits. Developed as part of the GeeksMan AI Squad Project.',
      tech: ['Python', 'Jupyter Notebook', 'Machine Learning'],
      github: 'https://github.com/badgujjarajay/fruits-classification',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
