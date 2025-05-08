import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
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
        <a href="#contact" className="hover:text-">Contact</a>
      </nav>

      {/* CTA Button */}
      <div className="cursor-pointer hidden md:block border-2 border-neutral-300 px-4 py-2 rounded-xl hover:bg-white hover:border-white hover:text-purple-700 transition">
        Contact Me
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-4xl cursor-pointer">
        &#8801;
      </div>
    </div>
  </header>

  );
};

export default Header;
