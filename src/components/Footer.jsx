import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/yourusername" },
  { icon: <FaTwitter />, href: "https://twitter.com/yourusername" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/yourusername" },
  { icon: <FaDribbble />, href: "https://dribbble.com/yourusername" },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/#about" },
      { name: "Projects", path: "/#projects" },
      { name: "Contact", path: "/#contact" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", path: "/#services" },
      { name: "Mobile Development", path: "/#services" },
      { name: "UI/UX Design", path: "/#services" },
      { name: "Consulting", path: "/#services" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "Sitemap", path: "/sitemap" },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="relative bg-dark-900/50 backdrop-blur-sm border-t border-space-500/10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-500/5 to-dark-900/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Link 
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-space-300 to-space-500 text-transparent bg-clip-text"
            >
              Portfolio
            </Link>
            <p className="text-gray-400 text-sm">
              Crafting digital experiences with modern technology and creative design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-800 text-gray-400 hover:text-space-400 hover:bg-dark-700 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-gray-200 font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-space-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-space-500/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-space-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-space-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
