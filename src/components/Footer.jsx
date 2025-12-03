import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { footer } = portfolioData;

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {footer.name}. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          {footer.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
