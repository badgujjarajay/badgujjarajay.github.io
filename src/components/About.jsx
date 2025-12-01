import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaAngular, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiC, SiSpringboot, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiHibernate, SiOracle, SiGnubash } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-orange-600" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
    { name: 'Hibernate', icon: <SiHibernate className="text-gray-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
    { name: 'SQL / Oracle', icon: <SiOracle className="text-red-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
    { name: 'System Design', icon: <FaDatabase className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I am Ajay Singh, a Software Development Engineer with extensive experience in building high-performance, scalable applications. My expertise lies in backend development using Java, Spring Boot, and Node.js, as well as frontend technologies like Angular.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With a strong background in Data Structures, Algorithms, and System Design, I have successfully delivered critical solutions at major financial institutions like Goldman Sachs and Bank of New York. I specialize in optimizing APIs, streamlining workflows, and implementing microservices architectures.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Beyond core development, I have a passion for Machine Learning and Deep Learning, having worked on projects involving Convolutional Neural Networks (CNNs) and Generative Adversarial Networks (GANs).
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Core Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className="text-4xl transition-transform group-hover:scale-110 duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
