import { useEffect, useState } from "react";

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
      className={`fixed bottom-5 right-5 text-2xl bg-orange-500 text-black p-3 rounded-sm shadow-lg transition-all duration-300 z-50 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default BackToTopButton;
