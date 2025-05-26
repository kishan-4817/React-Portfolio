const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language"
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Language"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database"
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend"
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    category: "CMS"
  },
  {
    name: "Shopify",
    icon: "https://cdn.simpleicons.org/shopify/white",
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
              if (name === "Shopify") {
                e.target.src = "https://cdn.worldvectorlogo.com/logos/shopify.svg";
              }
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
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills & Technologies</h2>
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