import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
    link: "#",
    details: "A full-stack e-commerce platform with real-time inventory management, payment processing, and user authentication.",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    ],
    category: "Full Stack"
  },
  {
    title: "AI Image Generator",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    link: "#",
    details: "An AI-powered image generation tool that creates unique artwork based on text prompts using machine learning.",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ],
    category: "AI/ML"
  },
  {
    title: "Task Management App",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop&q=60",
    link: "#",
    details: "A collaborative task management application with real-time updates, team features, and progress tracking.",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    ],
    category: "Web App"
  },
  {
    title: "Fitness Tracker",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
    link: "#",
    details: "A comprehensive fitness tracking application with workout planning, progress visualization, and nutrition tracking.",
    techStack: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    ],
    category: "Mobile App"
  } 
];

const Projects = () => {
  return (
    <div className="relative py-16">
      {/* Gradient Effects */}
      <div className="absolute -top-[20rem] right-0 w-[40rem] h-[40rem] bg-indigo-500/30 blur-[8rem] pointer-events-none" />
      <div className="absolute -bottom-[20rem] left-0 w-[40rem] h-[40rem] bg-purple-500/30 blur-[8rem] pointer-events-none" />

      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-2">Featured Projects</h2>
          <p className="text-gray-400">A collection of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

