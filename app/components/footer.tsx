import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Adekunle Itunuoluwa. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://twitter.com/itunutechgirl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#dfbd67] transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/adekunle-itunuoluwa-043618252" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#dfbd67] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://github.com/itunugirl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#dfbd67] transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <div>
          <a 
            href="mailto:itunuoluwafelicia@gmail.com" 
            className="text-white hover:text-[#dfbd67] transition duration-300"
            aria-label="Contact Email"
          >
            itunuoluwafelicia@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
