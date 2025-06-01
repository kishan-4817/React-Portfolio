import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logo-vect.svg";
import navigationData from "../data/navigation.json";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navLinks } = navigationData;
  const location = useLocation();

  const handleMenuClick = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleScrollToSection = (e, to) => {
    e.preventDefault();
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-4 border-b border-[var(--secondary)] relative bg-[var(--background)] z-20"
    >
      <div className="container mx-auto flex justify-between items-center text-[var(--foreground)] max-w-screen-xl px-4">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10" /> Kishan
          </Link>
        </motion.h1>
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {navLinks.map(({ name, to }, index) => (
              <motion.li 
                key={to} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                {to.startsWith('#') ? (
                  <a 
                    href={to}
                    onClick={(e) => handleScrollToSection(e, to)}
                    className="transition-colors hover:text-[var(--primary)]"
                  >
                    {name}
                  </a>
                ) : (
                  <Link 
                    to={to} 
                    className="transition-colors hover:text-[var(--primary)]"
                  >
                    {name}
                  </Link>
                )}
                <motion.span 
                  className="absolute bottom-[-3px] left-0 z-0 h-[3px] w-full rounded-t-full bg-[var(--primary)]"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.a 
          href="#contact" 
          onClick={(e) => handleScrollToSection(e, '#contact')}
          className="bg-[var(--primary)] text-[var(--foreground)] py-2 px-4 rounded cursor-pointer transition duration-300 hover:scale-110 hidden md:block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
        <motion.div 
          className="md:hidden flex items-center" 
          onClick={handleMenuClick}
          whileTap={{ scale: 0.95 }}
        >
          <button className="relative w-8 h-8 rounded-full" aria-label="Toggle menu" aria-expanded={menuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>

      <motion.div 
        className={`md:hidden transition-all duration-300 absolute top-[75px] left-0 w-full z-10 bg-[var(--background)] ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        initial={false}
        animate={{ 
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-left space-y-4 px-8 py-4">
          {navLinks.map(({ name, to }, index) => (
            <motion.li 
              key={to} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {to.startsWith('#') ? (
                <a 
                  href={to}
                  onClick={(e) => handleScrollToSection(e, to)}
                  className="text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  {name}
                </a>
              ) : (
                <Link 
                  to={to} 
                  className="text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
                >
                  {name}
                </Link>
              )}
              <motion.span 
                className="absolute bottom-[-3px] left-0 z-0 h-[3px] w-full rounded-t-full bg-[var(--primary)]"
                initial={{ opacity: 0, scaleX: 0 }}
                whileHover={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
