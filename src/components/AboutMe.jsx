import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../framer-config';

function AboutMe() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideIn}>
            <img 
              src="/path-to-your-image.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a passionate frontend developer with a keen eye for design and 
              user experience. I specialize in creating responsive, performant web 
              applications using modern technologies.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full"
              >
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-500 hover:bg-blue-500/10 px-6 py-2 rounded-full"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
