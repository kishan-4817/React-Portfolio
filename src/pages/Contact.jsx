import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../framer-config';
import socials from '../data/socials.json';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-12"
          >
            Get in Touch
          </motion.h1>

          <motion.form
            variants={slideIn}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            variants={fadeIn}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
            <div className="flex justify-center gap-6">
              {Object.entries(socials).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
