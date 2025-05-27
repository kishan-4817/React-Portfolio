import React from "react";
import logo from "../assets/logo-vect.svg";
import navigationData from "../data/navigation.json";
import socialData from "../data/social.json";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const { quickLinks } = navigationData;
  const { socialLinks } = socialData;

  return (
    <footer className="relative py-16">
      <div className="container max-w-screen-xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <span className="text-2xl font-bold text-white">Kishan</span>
              </div>
              <p className="text-gray-400">
                Building digital experiences that make a difference. Full-stack developer passionate about creating elegant solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300">
                      {social.icon === "github" && <FaGithub className="text-xl" />}
                      {social.icon === "linkedin" && <FaLinkedin className="text-xl" />}
                      {social.icon === "twitter" && <FaTwitter className="text-xl" />}
                      {social.icon === "instagram" && <FaInstagram className="text-xl" />}
                      {social.icon === "discord" && <FaDiscord className="text-xl" />}
                      {social.icon === "telegram" && <FaTelegram className="text-xl" />}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Contact
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:kishandhandhukiya8gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      kishandhandhukiya8gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+919737576146"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      +91 9737576146
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Kishan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


