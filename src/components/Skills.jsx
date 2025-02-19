import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../framer-config';
import SectionHeader from './design/SectionHeader';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: "/icons/react.svg",
        level: 90,
        color: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        level: 85,
        color: "#000000"
      },
      {
        name: "TailwindCSS",
        icon: "/icons/tailwind.svg",
        level: 95,
        color: "#38B2AC"
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        level: 80,
        color: "#3178C6"
      }
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "/icons/nodejs.svg",
        level: 85,
        color: "#339933"
      },
      {
        name: "Python",
        icon: "/icons/python.svg",
        level: 80,
        color: "#3776AB"
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        level: 75,
        color: "#47A248"
      },
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        level: 70,
        color: "#336791"
      }
    ]
  }
];

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700/50"
    >
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          <div className="w-full bg-dark-700 rounded-full h-2 mt-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ 
                backgroundColor: skill.color,
                width: `${skill.level}%`
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiency levels"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} variants={fadeIn}>
              <h2 className="text-2xl font-bold text-white mb-6">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills; 