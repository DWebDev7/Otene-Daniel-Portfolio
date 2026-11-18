import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const socials = [
  { label: "GitHub", href: "https://github.com/DWebDev7", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-otene-3533412b7?trk=contact-info", icon: <FaLinkedin /> },
  { label: "Twitter", href: "https://x.com/DWebDev7", icon: <FaTwitter /> },
  { label: "WhatsApp", href: "https://wa.me/2348138758235", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#16121f] py-8 text-[#a9a3ba]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center text-sm sm:text-left">
          &copy; {new Date().getFullYear()} Otene Daniel. All rights reserved.
        </div>

        <div className="flex justify-center space-x-6 text-2xl sm:justify-end">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="transition duration-300 hover:text-purple-400"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;