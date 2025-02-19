import { motion } from 'framer-motion';
import { fadeIn } from '../framer-config';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="py-20 bg-gray-900">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch today 
            and take the first step towards transforming your digital presence.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CTA; 