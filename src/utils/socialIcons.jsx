import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiCodechef, SiCodeforces, SiLeetcode } from 'react-icons/si';

export const socialIcons = {
  email: <FaEnvelope className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />,
  linkedin: <FaLinkedin className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />,
  github: <FaGithub className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />,
  codechef: <SiCodechef className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />,
  codeforces: <SiCodeforces className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />,
  leetcode: <SiLeetcode className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-white" />,
};

export const socialColors = {
  email: "group-hover:bg-blue-600",
  linkedin: "group-hover:bg-blue-700",
  github: "group-hover:bg-gray-900",
  codechef: "group-hover:bg-amber-700",
  codeforces: "group-hover:bg-blue-500",
  leetcode: "group-hover:bg-orange-500",
};

export const socialLabels = {
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
  codechef: "CodeChef",
  codeforces: "Codeforces",
  leetcode: "LeetCode",
};
