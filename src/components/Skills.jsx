import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "React",
    icon: "/images/tech/react.svg",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: "/images/tech/javascript.svg",
    category: "Language"
  },
  {
    name: "TypeScript",
    icon: "/images/tech/typescript.svg",
    category: "Language"
  },
  {
    name: "Node.js",
    icon: "/images/tech/nodejs.svg",
    category: "Backend"
  },
  {
    name: "Python",
    icon: "/images/tech/python.svg",
    category: "Language"
  },
  {
    name: "Git",
    icon: "/images/tech/git.svg",
    category: "Tools"
  },
  {
    name: "Docker",
    icon: "/images/tech/docker.svg",
    category: "DevOps"
  },
  {
    name: "MongoDB",
    icon: "/images/tech/mongodb.svg",
    category: "Database"
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tech/tailwind.svg",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "/images/tech/nextjs.svg",
    category: "Frontend"
  },
  {
    name: "WordPress",
    icon: "/images/tech/wordpress.svg",
    category: "CMS"
  },
  {
    name: "Shopify",
    icon: "/images/tech/shopify.svg",
    category: "E-commerce"
  }
];

const SkillCard = ({ icon, name, category }) => {
  return (
    <div className="group relative flex items-center gap-4 px-6 py-3 rounded-full border border-gray-200/20 bg-gray-950/[.02] hover:bg-gray-950/[.05] dark:border-gray-50/10 dark:bg-gray-50/[.05] dark:hover:bg-gray-50/[.10] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 mx-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <div className="relative h-8 w-8 flex items-center justify-center">
          <img 
            className="h-6 w-6 object-contain transition-all duration-300 group-hover:brightness-110" 
            alt={name} 
            src={icon}
            onError={(e) => {
              console.error(`Failed to load image for ${name}: ${icon}`);
              e.target.src = "/images/tech/placeholder.svg";
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {category}
        </span>
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
    </div>
  );
};

export default function Skills() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          My technical expertise and tools I work with
        </p>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="marquee-line items-center w-full">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
            {skills.map((skill) => (
              <SkillCard key={`${skill.name}-duplicate`} {...skill} />
            ))}
          </div>
          <div className="marquee-line-reverse items-center w-full">
            {skills.map((skill) => (
              <SkillCard key={`${skill.name}-reverse`} {...skill} />
            ))}
            {skills.map((skill) => (
              <SkillCard key={`${skill.name}-reverse-duplicate`} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}