import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../framer-config';

function Experience() {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      description: "Leading frontend development team, implementing modern web solutions."
    },
    {
      period: "2020 - 2022",
      role: "Frontend Developer",
      company: "Web Solutions Inc",
      description: "Developed responsive web applications using React and Next.js."
    },
    {
      period: "2019 - 2020",
      role: "Junior Developer",
      company: "Digital Agency",
      description: "Worked on various client projects using React and JavaScript."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              className="mb-8 relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
              <span className="text-blue-400">{exp.period}</span>
              <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
              <h4 className="text-gray-400 mb-2">{exp.company}</h4>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
