import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-20">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl mb-8">
            I'm Kishan, a passionate web developer creating beautiful and functional web applications.
          </p>
          <Link to="/about" className="bg-[var(--primary)] text-[var(--foreground)] py-2 px-6 rounded hover:scale-105 transition-transform duration-300">
            Learn More About Me
          </Link>
        </div>
        <div className="md:w-1/2">
          {/* Your image or animation object goes here */}
          <img src="https://avatars.githubusercontent.com/u/13313234?v=4" alt="Kishan's Avatar" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
