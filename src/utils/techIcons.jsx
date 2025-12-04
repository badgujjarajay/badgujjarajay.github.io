import React from 'react';
import { FaJava, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaAngular, FaLinux, FaDocker, FaAws, FaBrain, FaNetworkWired, FaProjectDiagram, FaObjectGroup, FaLayerGroup, FaGitlab } from 'react-icons/fa';
import { SiCplusplus, SiC, SiSpringboot, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiHibernate, SiOracle, SiGnubash, SiRedis, SiApachekafka, SiMongodb, SiMysql, SiJenkins, SiReact, SiCodechef, SiCodeforces, SiLeetcode, SiApachehadoop, SiApachespark } from 'react-icons/si';

export const techIcons = {
  // Core Skills
  "Data Structures and Algorithms": <FaProjectDiagram className="text-purple-600" />,
  "Databases": <FaDatabase className="text-blue-500" />,
  "OOPs": <FaObjectGroup className="text-yellow-600" />,
  "Design Patterns": <FaLayerGroup className="text-indigo-500" />,
  "System Design": <FaDatabase className="text-blue-500" />, // Reusing DB icon or can use another

  // Back-end Development
  "Spring Framework": <SiSpringboot className="text-green-500" />,
  "Spring Boot": <SiSpringboot className="text-green-500" />,
  "Hibernate": <SiHibernate className="text-gray-500" />,
  "NodeJS": <FaNodeJs className="text-green-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "SQL": <SiMysql className="text-blue-500" />, // Default to MySQL or generic
  "Oracle DB": <SiOracle className="text-red-500" />,
  "Linux": <FaLinux className="text-black" />,

  // Big Data
  "Apache Hadoop": <SiApachehadoop className="text-yellow-500" />,
  "Apache Spark": <SiApachespark className="text-orange-500" />,
  "HDFS": <SiApachehadoop className="text-yellow-600" />, // Using Hadoop icon as proxy
  "MapReduce": <FaProjectDiagram className="text-blue-400" />, // Using generic diagram icon
  "Apache Kafka": <SiApachekafka className="text-black" />,

  // Programming Languages
  "C": <SiC className="text-blue-500" />,
  "C++": <SiCplusplus className="text-blue-700" />,
  "Java": <FaJava className="text-orange-600" />,
  "Python": <FaPython className="text-yellow-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Shell Script": <SiGnubash className="text-gray-700 dark:text-gray-300" />,

  // Others
  "HTML": <SiHtml5 className="text-orange-600" />,
  "CSS": <SiCss3 className="text-blue-600" />,
  "Angular": <FaAngular className="text-red-600" />,
  "Machine Learning": <FaBrain className="text-pink-500" />,
  "Deep Learning": <FaBrain className="text-pink-600" />,
  "Neural Networks": <FaNetworkWired className="text-purple-500" />,
  "Git": <FaGitAlt className="text-orange-500" />,
  "GitLab": <FaGitlab className="text-orange-600" />,
  "GitHub": <FaGitAlt className="text-black dark:text-white" />,

  // Legacy/Unused (keeping just in case)
  "ReactJS": <SiReact className="text-blue-400" />,
  "ExpressJS": <FaNodeJs className="text-gray-500" />,
  "NoSQL": <SiMongodb className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-500" />,
  "MySQL": <SiMysql className="text-blue-500" />,
  "Redis": <SiRedis className="text-red-600" />,
  "Docker": <FaDocker className="text-blue-500" />,
  "AWS": <FaAws className="text-orange-500" />,
  "Jenkins": <SiJenkins className="text-gray-700" />,
  "CodeChef": <SiCodechef className="text-brown-500" />,
  "Codeforces": <SiCodeforces className="text-blue-500" />,
  "LeetCode": <SiLeetcode className="text-orange-500" />,
};
