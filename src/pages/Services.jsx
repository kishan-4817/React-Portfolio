import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../framer-config';
import SectionHeader from '../components/design/SectionHeader';
import { CodeIcon, DesignIcon, SpeedIcon } from '../components/design/Icons';

const services = [
  {
    icon: <CodeIcon />,
    title: "Web Development",
    description: "Building scalable web applications with modern technologies",
    features: [
      "Custom React Applications",
      "Full-Stack Development",
      "API Integration",
      "Performance Optimization"
    ],
    price: "Starting at $2,500",
    gradient: "from-primary-500 to-secondary-500"
  },
  {
    icon: <DesignIcon />,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces",
    features: [
      "User Research",
      "Wireframing",
      "Visual Design",
      "Prototyping"
    ],
    price: "Starting at $1,800",
    gradient: "from-secondary-500 to-accent-purple"
  },
  {
    icon: <SpeedIcon />,
    title: "Digital Marketing",
    description: "Helping businesses grow their online presence",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media",
      "Analytics & Reporting"
    ],
    price: "Starting at $1,200",
    gradient: "from-accent-purple to-primary-500"
  }
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -10 }}
      className="relative bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
    >
      {/* Gradient Border */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
      
      <div className="relative p-8 border border-dark-700/50">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center mb-6">
          <div className="text-primary-400">
            {service.icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {service.title}
        </h3>
        
        <p className="text-dark-300 mb-6">
          {service.description}
        </p>

        <ul className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-dark-200">
              <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-white">
            {service.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-medium`}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive solutions to help your business thrive in the digital world"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>

        {/* Process Section */}
        <div className="mt-32">
          <SectionHeader
            title="Our Process"
            subtitle="A streamlined approach to delivering exceptional results"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mt-12"
          >
            {[
              {
                number: "01",
                title: "Discovery",
                description: "Understanding your needs and project requirements"
              },
              {
                number: "02",
                title: "Planning",
                description: "Creating a detailed roadmap for project success"
              },
              {
                number: "03",
                title: "Development",
                description: "Building your solution with the latest technologies"
              },
              {
                number: "04",
                title: "Launch",
                description: "Deploying and ensuring everything runs smoothly"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary-500/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-300">
                  {step.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full border-t-2 border-dashed border-primary-500/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
