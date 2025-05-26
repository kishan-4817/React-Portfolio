import React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/Profile.jpg";
import { Meteors } from "../components/magicui/meteors";
import { BorderBeam } from "../components/magicui/border-beam";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
    <section className="bg-[var(--background)] text-[var(--foreground)] py-12 md:py-32">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              I'm Kishan
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 md:mb-12">
              A passionate web developer with a strong focus on creating beautiful and functional web applications. I have a strong background in HTML, CSS, JavaScript, React, Redux, and Node.js. I'm also well-versed in various tools such as Git, Webpack, and Babel. I'm always looking for new challenges and opportunities to improve my skills.
            </p>
            <Link to="/about" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded hover:scale-105 transition-transform duration-300">
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center z-50">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 pointer-events-none w-full">
              <BorderBeam size={200} duration={6} colorFrom="#ffaa40" colorTo="#9c40ff" />
            </div>
            <img
              src={Profile}
              alt="Kishan's Portfolio"
              className="w-full h-auto rounded-lg shadow-lg relative z-0 p-2"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={30} minDelay={0.2} maxDelay={1.2} minDuration={2} maxDuration={10} angle={215} />
      </div>
    </section>
    </>
  );
};

export default Hero;
