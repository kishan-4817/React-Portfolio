import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo-vect.svg";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-[var(--secondary)] text-center">
      <div className="container mx-auto max-w-screen-xl px-4">
        <p className="text-lg">
          &copy; {new Date().getFullYear()}  Kishan
        </p>
      </div>
    </footer>
  );
}

export default Footer;


