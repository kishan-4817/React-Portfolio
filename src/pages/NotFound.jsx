import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-space-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.25,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random() * 0.5 + 0.25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-space-300 via-space-500 to-space-700 text-transparent bg-clip-text mb-8"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-200">
            Lost in Space
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            The page you're looking for has drifted into deep space. 
            Let's get you back to familiar territory.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-space-500 text-white rounded-lg hover:bg-space-600 transition-colors group"
          >
            <FaHome className="mr-2 group-hover:animate-bounce" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-space-500 text-space-400 rounded-lg hover:bg-space-500/10 transition-colors group"
          >
            <FaSearch className="mr-2 group-hover:animate-pulse" />
            Search Site
          </Link>
        </motion.div>

        {/* Planet Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="mt-12"
        >
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-space-300 via-space-500 to-space-700 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-dark-900" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-space-300/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 