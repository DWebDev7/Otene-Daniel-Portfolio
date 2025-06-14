import React, { useState, useEffect } from "react";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGit, FaWhatsapp, FaWhatsappSquare, FaPhone, FaTwitter, FaGithub, FaTimes } from "react-icons/fa";

const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const button = document.getElementById("contact-button");
    if (button) {
      const toggleMenu = () => setIsVisible(prev => !prev);
      button.addEventListener("click", toggleMenu);

      return () => button.removeEventListener("click", toggleMenu);
    }
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <>
      {/* Dark overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-500 ${isVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsVisible(false)}
      />
      
      {/* Menu container */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative bg-gray-100 rounded-xl w-full max-w-md mx-4 p-6 shadow-2xl">
          {/* Close button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-900 hover:text-black text-2xl cursor-pointer"
          >
            <FaTimes />
          </button>
          
          {/* Menu items */}
          <div className="space-y-4 mt-8">
            <div className="border-2 rounded-2xl border-gray-500 hover:bg-purple-700 text-gray-700 hover:text-white p-3 text-center duration-500 ease-in-out">
              <a href="https://wa.me/08138758235" className="flex justify-center items-center text-xl font-medium gap-3">Whatsapp <FaWhatsapp /></a>
            </div>
            <div className="border-2 rounded-2xl border-gray-500 hover:bg-purple-700 text-gray-700 hover:text-white p-3 text-center duration-500 ease-in-out">
              <a href="https://www.linkedin.com/in/daniel-otene-3533412b7?trk=contact-info" className="flex justify-center items-center text-xl font-medium gap-3">LinkedIn <FaLinkedin /></a>
            </div>
            <div className="border-2 rounded-2xl border-gray-500 hover:bg-purple-700 text-gray-700 hover:text-white p-3 text-center duration-500 ease-in-out">
              <a href="https://x.com/DWebDev7" className="flex justify-center items-center text-xl font-medium gap-3">Twitter <FaTwitter /></a>
            </div>
            <div className="border-2 rounded-2xl border-gray-500 hover:bg-purple-700 text-gray-700 hover:text-white p-3 text-center duration-500 ease-in-out">
              <a href="https://github.com/DWebDev7" className="flex justify-center items-center text-xl font-medium gap-3">Git Hub <FaGithub /></a>
            </div>
            <div className="border-2 rounded-2xl border-gray-500 hover:bg-purple-700 text-gray-700 hover:text-white p-3 text-center duration-500 ease-in-out">
              <a href="tel:+2348138758235" className="flex justify-center items-center text-xl font-medium gap-3">Phone <FaPhone /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;