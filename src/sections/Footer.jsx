import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left text-sm">
          &copy; {new Date().getFullYear()} Otene Daniel. All rights reserved.
        </div>

        <div className="flex justify-center sm:justify-end space-x-6 text-2xl">
          <a href="https://github.com/DWebDev7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-otene-3533412b7?trk=contact-info" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://x.com/DWebDev7" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://wa.me/08138758235" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaWhatsapp className="hover:text-gray-400 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
