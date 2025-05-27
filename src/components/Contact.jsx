import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaPhone, FaWhatsapp, FaInstagram, FaDiscord, FaTelegram,
  FaMedium, FaDev, FaStackOverflow, FaYoutube
} from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: "https://github.com/yourusername", 
      label: "GitHub",
      color: "hover:text-[#333]",
      gradient: "from-[#333] to-[#24292e]",
      description: "Check out my code"
    },
    { 
      icon: <FaLinkedin />, 
      url: "https://linkedin.com/in/yourusername", 
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
      gradient: "from-[#0077B5] to-[#00a0dc]",
      description: "Connect professionally"
    },
    { 
      icon: <FaTwitter />, 
      url: "https://twitter.com/yourusername", 
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
      gradient: "from-[#1DA1F2] to-[#0d8bd9]",
      description: "Follow my updates"
    },
    { 
      icon: <FaInstagram />, 
      url: "https://instagram.com/yourusername", 
      label: "Instagram",
      color: "hover:text-[#E1306C]",
      gradient: "from-[#E1306C] to-[#833AB4]",
      description: "See my work"
    },
    { 
      icon: <FaDiscord />, 
      url: "https://discord.gg/yourusername", 
      label: "Discord",
      color: "hover:text-[#7289DA]",
      gradient: "from-[#7289DA] to-[#5865F2]",
      description: "Join my community"
    },
    { 
      icon: <FaTelegram />, 
      url: "https://t.me/yourusername", 
      label: "Telegram",
      color: "hover:text-[#0088cc]",
      gradient: "from-[#0088cc] to-[#00a2ff]",
      description: "Chat with me"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-white" />,
      title: "Email",
      content: "kishandhandhukiya8gmail.com",
      link: "mailto:kishandhandhukiya8gmail.com",
      gradient: "from-blue-500 to-purple-500",
      description: "Get in touch"
    },
    {
      icon: <FaPhone className="text-white" />,
      title: "Phone",
      content: "+91 9737576146",
      link: "tel:+919737576146",
      gradient: "from-purple-500 to-pink-500",
      description: "Call me"
    },
    {
      icon: <FaWhatsapp className="text-white" />,
      title: "WhatsApp",
      content: "+91 9737576146",
      link: "https://wa.me/919737576146",
      gradient: "from-green-500 to-teal-500",
      description: "Message me"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mkgrlerk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 relative overflow-visible">
      {/* Gradient Background */}
      <div className="absolute bottom-0 right-[-300px] w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/40 via-blue-400/20 to-blue-300/10 rounded-full blur-3xl -z-10 translate-y-1/4"></div>
      
      <div className="container mx-auto max-w-screen-xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm ${
                      formStatus === "submitting"
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </div>

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center"
                  >
                    Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info and Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-transparent transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`p-3 rounded-full border-2 border-white/20 bg-gradient-to-r ${info.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 hover:border-transparent transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -2 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`text-2xl ${social.color} transition-all duration-300 group-hover:scale-110 mb-1`}>
                        {social.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </h3>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-0.5">
                        {social.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;