import React from 'react';
import { FaJava, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaAngular, FaLinux, FaDocker, FaAws, FaBrain, FaNetworkWired, FaProjectDiagram, FaObjectGroup, FaLayerGroup } from 'react-icons/fa';
import { SiCplusplus, SiC, SiSpringboot, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiHibernate, SiOracle, SiGnubash, SiRedis, SiApachekafka, SiMongodb, SiMysql, SiJenkins, SiReact, SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';

export const techIcons = {
  // Languages
  "Java": <FaJava className="text-orange-600" />,
  "Python": <FaPython className="text-yellow-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "NodeJS": <FaNodeJs className="text-green-500" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  "C": <SiC className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "HTML": <SiHtml5 className="text-orange-600" />,
  "CSS": <SiCss3 className="text-blue-600" />,
  "Shell Script": <SiGnubash className="text-gray-700 dark:text-gray-300" />,

  // Frameworks & Libraries
  "Spring Boot": <SiSpringboot className="text-green-500" />,
  "Spring Framework": <SiSpringboot className="text-green-500" />,
  "Hibernate": <SiHibernate className="text-gray-500" />,
  "Angular": <FaAngular className="text-red-600" />,
  "ReactJS": <SiReact className="text-blue-400" />,
  "ExpressJS": <FaNodeJs className="text-gray-500" />,

  // Databases & Tools
  "SQL": <SiMysql className="text-blue-500" />,
  "NoSQL": <SiMongodb className="text-green-500" />,
  "Oracle": <SiOracle className="text-red-500" />,
  "SQL / Oracle": <SiOracle className="text-red-500" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "MySQL": <SiMysql className="text-blue-500" />,
  "Redis": <SiRedis className="text-red-600" />,
  "Kafka": <SiApachekafka className="text-black" />,
  "Docker": <FaDocker className="text-blue-500" />,
  "AWS": <FaAws className="text-orange-500" />,
  "Git": <FaGitAlt className="text-orange-500" />,
  "GitHub": <FaGitAlt className="text-black dark:text-white" />,
  "Jenkins": <SiJenkins className="text-gray-700" />,
  "System Design": <FaDatabase className="text-blue-500" />,
  "Linux": <FaLinux className="text-black" />,

  // Core & Others
  "Data Structures": <FaProjectDiagram className="text-purple-600" />,
  "Algorithms": <FaProjectDiagram className="text-purple-600" />,
  "Data Structures and Algorithms": <FaProjectDiagram className="text-purple-600" />,
  "OOPs": <FaObjectGroup className="text-yellow-600" />,
  "Design Patterns": <FaLayerGroup className="text-indigo-500" />,
  "Machine Learning": <FaBrain className="text-pink-500" />,
  "Deep Learning": <FaBrain className="text-pink-600" />,
  "Neural Networks": <FaNetworkWired className="text-purple-500" />,

  // Socials (using techIcons for convenience if needed, though usually handled separately)
  "CodeChef": <SiCodechef className="text-brown-500" />,
  "Codeforces": <SiCodeforces className="text-blue-500" />,
  "LeetCode": <SiLeetcode className="text-orange-500" />,
};
