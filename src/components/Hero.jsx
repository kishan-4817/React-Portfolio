import React from "react";
import { Link } from "react-router-dom";
import { Meteors } from "../components/magicui/meteors";
import { BorderBeam } from "../components/magicui/border-beam";
import { motion } from "framer-motion";
import ResumeDownload from "./ResumeDownload";

const Hero = () => {
  return (
    <>
    <section className="relative bg-[var(--background)] text-[var(--foreground)] py-12 md:py-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center md:justify-between relative z-10">
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
              A passionate web developer with a strong focus on creating beautiful and functional web applications. I have a strong background in HTML, CSS, JavaScript, React, and Shopify. I'm also well-versed in various tools such as Git, Webpack, and Babel. I'm always looking for new challenges and opportunities to improve my skills.
            </p>
            <div className="flex items-center gap-4">
              <Link to="https://calendly.com/kishandhandhukiya8/30min" target="_blank" className="bg-[var(--primary)] text-[var(--foreground)] py-3 px-6 rounded hover:scale-110 transition-transform duration-300">
                Let's Connect
              </Link>
              <ResumeDownload />
            </div>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center z-50">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 -translate-y-1/2 top-1/2">
              <div className="absolute inset-0 bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#2400ff_0deg,#0087ff_67.5deg,#6c279d_198.75deg,#1826a3_251.25deg,#3667c4_301.88deg,#691eff_1turn)] blur-[10rem] opacity-85" />
            </div>
            
            <div className="absolute inset-0 pointer-events-none w-full">
              <BorderBeam size={200} duration={6} colorFrom="#ffaa40" colorTo="#9c40ff" />
            </div>
            <img
              src="/Profile.jpg"
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
