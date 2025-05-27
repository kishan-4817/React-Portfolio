import React from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects.json";

const Projects = () => {
  const { projects } = projectsData;
  
  return (
    <div className="relative py-16">
      {/* Gradient Effects */}
      <div className="absolute -top-[20rem] right-0 w-[40rem] h-[40rem] bg-indigo-500/30 blur-[8rem] pointer-events-none" />

      <div className="container mx-auto max-w-screen-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my recent work and development projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-sm font-medium text-gray-200 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.details}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <img
                      key={techIndex}
                      src={tech}
                      alt="Tech Stack"
                      className="h-5 w-5 opacity-70 hover:opacity-100 transition-opacity"
                      title={tech.split('/').pop().split('.')[0]}
                    />
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

