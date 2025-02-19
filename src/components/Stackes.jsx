import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../framer-config';
import skills from '../data/skills.json';

function Stacks() {
  return (
    <section className="py-20 bg-gray-800">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={fadeIn}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-500 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Stacks;
