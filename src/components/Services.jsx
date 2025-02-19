import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaDesktop, FaDatabase, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern frameworks and best practices.",
    features: ["React/Next.js", "Vue/Nuxt.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Creating robust and scalable server-side solutions with modern technologies.",
    features: ["Node.js/Express", "Python/Django", "RESTful APIs", "GraphQL"]
  },
  {
    icon: <FaMobile />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with native performance.",
    features: ["React Native", "Flutter", "iOS/Android", "PWA"]
  },
  {
    icon: <FaDesktop />,
    title: "UI/UX Design",
    description: "Designing beautiful and intuitive user interfaces with focus on user experience.",
    features: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description: "Architecting efficient and scalable database solutions for your applications.",
    features: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
  },
  {
    icon: <FaRocket />,
    title: "DevOps & Deployment",
    description: "Setting up CI/CD pipelines and managing cloud infrastructure.",
    features: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-space-300 to-space-500 text-transparent bg-clip-text"
            >
              Services & Expertise
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Comprehensive solutions to help bring your ideas to life with cutting-edge technology
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-space-500/10 hover:border-space-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-space-500/10 rounded-lg flex items-center justify-center text-2xl text-space-400 group-hover:text-space-300 transition-colors">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ x: -10, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + idx * 0.05 }}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-space-400 mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
