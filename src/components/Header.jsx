import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-vect.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Me", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
  ];

  return (
    <header className="p-4 border-b border-[var(--secondary)] relative">
      <div className="container mx-auto flex justify-between items-center text-[var(--foreground)] max-w-screen-xl px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="flex items-center gap-2"> <img src={logo} alt="Logo" className="h-10 w-10" /> Kishan </Link>
        </h1>
        <nav className="hidden md:flex items-center space-x-10">
          <ul className="flex items-center space-x-8">
            {navLinks.map(({ name, to }) => (
              <li key={to} className="relative group">
                <Link to={to} className="transition-colors hover:text-[var(--primary)]" > {name} </Link>
                <span className="absolute bottom-[-3px] left-0 z-0 h-[3px] w-full rounded-t-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-[var(--primary)] text-[var(--foreground)] py-2 px-4 rounded cursor-pointer transition duration-300 hover:scale-110 hidden md:block"> Contact Me </button>
        <div className="md:hidden flex items-center" onClick={handleMenuClick}>
          <button className="relative w-8 h-8 rounded-full" aria-label="Toggle menu" aria-expanded={menuOpen} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 absolute top-[75px] left-0 w-full z-10 bg-[var(--background)] ${ menuOpen ? "opacity-100 visible" : "opacity-0 invisible" }`} >
        <ul className="flex flex-col items-left space-y-4 px-8 py-4">
          {navLinks.map(({ name, to }) => (
            <li key={to} className="relative group">
              <Link to={to} onClick={() => setMenuOpen(false)} className="text-[var(--foreground)] transition-colors hover:text-[var(--primary)]" > {name} </Link>
              <span className="absolute bottom-[-3px] left-0 z-0 h-[3px] w-full rounded-t-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
