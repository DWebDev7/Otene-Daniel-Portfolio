import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 text-3xl bg-purple-700 text-white p-3 rounded-sm shadow-lg transition-all duration-300 z-50 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    >
      <div><FaArrowUp/></div>
    </button>
  );
};

export default BackToTopButton;
