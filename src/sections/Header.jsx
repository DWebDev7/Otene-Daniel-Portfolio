import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/assets/logo.png'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <MobileMenu />
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#16121f]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <div>
            <h1 className="hidden text-2xl font-bold tracking-tight sm:block">DWebDev</h1>
            <img src={logo} alt="DWebDev Logo" className="block h-10 w-10 sm:hidden" />
          </div>

          <nav className="hidden space-x-8 text-[15px] font-medium text-neutral-300 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              id="contact-button"
              className="cursor-pointer rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Contact Me
            </button>

            <button
              className="cursor-pointer text-white md:hidden"
              onClick={toggleMobileNav}
              aria-label="Toggle navigation"
            >
              {isMobileNavOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-x-0 top-0 z-40 overflow-hidden bg-[#16121f]/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${isMobileNavOpen ? 'max-h-96 border-b border-white/10' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 px-6 pb-4 pt-20">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileNavOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-neutral-200 transition hover:bg-white/5 hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;