import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        Hello! I'm Kishan, a passionate web developer with a love for creating
        beautiful and functional web applications. I enjoy working with modern
        technologies and continuously learning new skills.
      </p>
      <p className="text-lg mb-4">
        In my free time, I like to explore new frameworks, contribute to open
        source projects, and share my knowledge through blogging.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}

export default About;