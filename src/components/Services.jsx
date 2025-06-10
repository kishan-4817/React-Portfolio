import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with React, featuring modern UI/UX design, responsive layouts, and optimal performance.",
    icon: "💻",
    features: ["React Development", "Responsive Design", "Performance Optimization", "Modern UI/UX"]
  },
  {
    title: "WordPress Development",
    description: "Professional WordPress websites with custom themes, plugins, and e-commerce functionality.",
    icon: "🌐",
    features: ["Custom Themes", "Plugin Development", "E-commerce Integration", "SEO Optimization"]
  },
  {
    title: "Shopify Development",
    description: "Custom Shopify stores with unique designs, product management, and seamless payment integration.",
    icon: "🛍️",
    features: ["Custom Themes", "Product Management", "Payment Integration", "Inventory Systems"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-16">
      {/* Gradient Effects */}
      <div className="absolute -top-[20rem] left-0 w-[40rem] h-[40rem] bg-indigo-500/30 blur-[8rem] pointer-events-none" />
      <div className="absolute -bottom-[20rem] right-0 w-[40rem] h-[40rem] bg-purple-500/30 blur-[8rem] pointer-events-none" />

      <div className="container mx-auto max-w-screen-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive web development solutions tailored to your needs, from custom applications to e-commerce platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 p-6"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400 text-sm">
                    <svg
                      className="w-4 h-4 mr-2 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 