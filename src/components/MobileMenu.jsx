import React, { useState, useEffect } from "react";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGit, FaWhatsapp, FaWhatsappSquare, FaPhone, FaTwitter } from "react-icons/fa";

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

  return (
    <div
      className={`fixed left-0 right-0 mx-2 mt-2 max-w-2xl py-10 px-5 shadow-2xl bg-white rounded-xl z-50 transform transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
    >
      <div className="my-4 border-2 rounded-2xl  border-gray-500 hover:bg-purple-700  text-gray-500 hover:text-white p-2 text-center duration-500 ease-in-out">
        <a href="#" className="flex justify-center items-center text-xl font-medium text-center gap-3">Whatsapp <FaWhatsapp /></a>
      </div>
      <div className="my-4 border-2 rounded-2xl  border-gray-500 hover:bg-purple-700  text-gray-500 hover:text-white p-2 text-center duration-500 ease-in-out">
        <a href="#" className="flex justify-center items-center text-xl font-medium text-center gap-3">LinkedIn <FaLinkedin /></a>
      </div>
      <div className="my-4 border-2 rounded-2xl  border-gray-500 hover:bg-purple-700  text-gray-500 hover:text-white p-2 text-center duration-500 ease-in-out">
        <a href="#" className="flex justify-center items-center text-xl font-medium text-center gap-3">Twitter <FaTwitter /></a>
      </div>
      <div className="my-4 border-2 rounded-2xl  border-gray-500 hover:bg-purple-700  text-gray-500 hover:text-white p-2 text-center duration-500 ease-in-out">
        <a href="#" className="flex justify-center items-center text-xl font-medium text-center gap-3">Phone <FaPhone /></a>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon }) => (
  <button className="bg-black px-2 py-1 rounded-full text-gray-900 flex justify-center align-middle">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`bi bi-${icon}`}></i>
    </a>
  </button>
);

export default MobileMenu;
