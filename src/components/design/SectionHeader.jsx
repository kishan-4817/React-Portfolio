import { motion } from 'framer-motion';
import { fadeIn } from '../../framer-config';

function SectionHeader({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      variants={fadeIn}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mb-4"
      />
      <h2 className="text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-dark-300 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionHeader; 