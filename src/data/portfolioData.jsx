import React from 'react';
import { FaJava, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaAngular, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiC, SiSpringboot, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiHibernate, SiOracle, SiGnubash } from 'react-icons/si';

export const portfolioData = {
  hero: {
    name: "Ajay Singh",
    role: "Software Development Engineer",
    description: "Based in Hyderabad, India. Experienced Software Engineer specializing in high-performance APIs, microservices, and system design. Currently building scalable solutions at Goldman Sachs.",
    actions: [
      { text: "Check out my work", href: "#projects", primary: true },
      { text: "Contact Me", href: "#contact", primary: false }
    ]
  },
  about: {
    title: "About Me",
    description: [
      "I am Ajay Singh, a Software Development Engineer with extensive experience in building high-performance, scalable applications. My expertise lies in backend development using Java, Spring Boot, and Node.js, as well as frontend technologies like Angular.",
      "With a strong background in Data Structures, Algorithms, and System Design, I have successfully delivered critical solutions at major financial institutions like Goldman Sachs and Bank of New York. I specialize in optimizing APIs, streamlining workflows, and implementing microservices architectures.",
      "Beyond core development, I have a passion for Machine Learning and Deep Learning, having worked on projects involving Convolutional Neural Networks (CNNs) and Generative Adversarial Networks (GANs)."
    ],
    skills: [
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
    ]
  },
  experience: [
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
  ],
  projects: [
    {
      title: 'CaptionBot',
      description: 'Applied a merger model for image captioning to generate concise 1-line descriptions. Employed YOLO for precise object detection (95% accuracy) and added an audio feature to narrate descriptions and object locations.',
      tech: ['Machine Learning', 'YOLO', 'Image Processing'],
      github: 'https://github.com/badgujjarajay',
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
  ],
  contact: {
    title: "Get In Touch",
    subtitle: "Let's Connect",
    description: "I'm currently based in Hyderabad, India, and working at Goldman Sachs. I'm always open to discussing new technologies, system design challenges, or potential collaborations.",
    email: "badgujjarajay@gmail.com",
    social: {
      github: "https://github.com/badgujjarajay",
      linkedin: "https://www.linkedin.com/in/badgujjarajay/"
    }
  },
  footer: {
    name: "Ajay Singh",
    text: "Built with React, Tailwind CSS, and Framer Motion."
  },
  navbar: {
    title: "Ajay Singh",
    links: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ]
  }
};
