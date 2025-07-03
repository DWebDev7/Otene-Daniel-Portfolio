import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
  <>
<MobileMenu />
  <header className="fixed z-50 w-full text-white bg-purple-700 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">DWebDev</h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6 hidden md:flex text-lg text-gray-200">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Projects</a>
      </nav>

      {/* CTA Button */}
      <button id="contact-button" className="cursor-pointer border-2 border-neutral-300 px-4 py-2 rounded-xl hover:bg-white hover:border-white hover:text-purple-700 transition">
        Contact Me
      </button>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-4xl cursor-pointer" onClick={toggleMobileNav}>
          {isMobileNavOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
      </button>
    </div>
  </header>
  {/* Mobile Navigation - appears when button is clicked */}
  <div className={`md:hidden fixed w-full z-40 bg-neutral-800 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileNavOpen ? 'max-h-96' : 'max-h-0'}`}>
    <nav className="flex justify-between items-center px-2 py-2 mt-18 w-1/2 mx-auto">
      <a href="#about" className="text-white hover:text-purple-600">About</a>
      <a href="#skills" className="text-white hover:text-purple-600">Skills</a>
      <a href="#projects" className="text-white hover:text-purple-600">Portfolio</a>
    </nav>  
  </div>
  </>
  );
};

export default Header;
