import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "hello@yourname.com",
    link: "mailto:hello@yourname.com"
  },
  {
    icon: <FaPhone />,
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    content: "New York, NY",
    link: "https://maps.google.com"
  }
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-space-300 to-space-500 text-transparent bg-clip-text"
              >
                Get in Touch
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 max-w-lg"
              >
                Have a project in mind? Let's talk about how we can work together to bring your ideas to life.
              </motion.p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: -50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-dark-800/50 backdrop-blur-sm border border-space-500/10 hover:border-space-500/30 transition-colors group"
                >
                  <div className="text-2xl text-space-400 group-hover:text-space-300 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                    <p className="text-lg text-gray-200">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-space-500/20 to-transparent opacity-20 blur-2xl" />
            <div className="relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-2xl border border-space-500/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-space-500/10 focus:border-space-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-space-500/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-space-500/10 focus:border-space-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-space-500/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-space-500/10 focus:border-space-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-space-500/20 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-space-400 to-space-600 text-white rounded-lg font-medium hover:from-space-500 hover:to-space-700 transition-colors focus:outline-none focus:ring-2 focus:ring-space-500/20 focus:ring-offset-2 focus:ring-offset-dark-900"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 