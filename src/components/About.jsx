import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95 },
  { name: 'Database', icon: <FaDatabase />, level: 85 },
  { name: 'Problem Solving', icon: <FaCode />, level: 90 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* About Text */}
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-space-300 to-space-500 text-transparent bg-clip-text"
              initial={{ x: -50 }}
              animate={inView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ x: -50 }}
              animate={inView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm a passionate full-stack developer with a keen eye for creating elegant solutions. 
              With expertise in modern web technologies, I transform complex problems into simple, 
              beautiful, and intuitive designs.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-400 leading-relaxed"
              initial={{ x: -50 }}
              animate={inView ? { x: 0 } : { x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My journey in web development started 5 years ago, and since then, 
              I've worked on various projects that have helped me master both frontend 
              and backend technologies.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-space-500/10 hover:border-space-500/30 transition-colors group"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl text-space-400 group-hover:text-space-300 transition-colors">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">{skill.name}</h3>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-space-400 to-space-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Numbers */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-dark-800/30 backdrop-blur-sm rounded-xl border border-space-500/10"
            >
              <h3 className="text-3xl font-bold text-space-400 mb-2 animate-glow">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 