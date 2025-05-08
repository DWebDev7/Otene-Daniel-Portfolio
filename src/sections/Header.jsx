import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-100/95 border-2  border-gray-900 p-3 m-3 shadow-md fixed z-50 w-[95vw] rounded-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-2">
        <h1 className="text-2xl font-bold">Otene Daniel</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
        <div className="md:hidden block text-6xl">
          =
        </div>
      </div>
    </header>
  );
};

export default Header;
