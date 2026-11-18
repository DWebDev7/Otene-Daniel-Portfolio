import React, { useState, useEffect } from "react";
import { FaLinkedin, FaWhatsapp, FaPhone, FaTwitter, FaGithub, FaTimes } from "react-icons/fa";

const contacts = [
  { label: "Whatsapp", href: "https://wa.me/2348138758235", icon: <FaWhatsapp /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-otene-3533412b7?trk=contact-info", icon: <FaLinkedin /> },
  { label: "Twitter", href: "https://x.com/DWebDev7", icon: <FaTwitter /> },
  { label: "Git Hub", href: "https://github.com/DWebDev7", icon: <FaGithub /> },
  { label: "Phone", href: "tel:+2348138758235", icon: <FaPhone /> },
];

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

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsVisible(false)}
      />

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsVisible(false)}
      >
        <div
          className={`relative mx-4 w-full max-w-md rounded-3xl border border-white/10 bg-[#1f1a2c] p-6 shadow-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close"
            className="absolute right-4 top-4 cursor-pointer text-xl text-[#a9a3ba] transition hover:text-white"
          >
            <FaTimes />
          </button>

          <div className="mt-8 space-y-3">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 p-3 text-lg font-medium text-neutral-200 transition duration-300 hover:border-purple-600 hover:bg-purple-600 hover:text-white"
              >
                {item.label} {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;