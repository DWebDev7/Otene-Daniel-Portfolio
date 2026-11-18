import { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';

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
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-lg text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:bg-purple-500 ${isVisible ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0"}`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;