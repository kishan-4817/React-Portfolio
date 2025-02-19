import { motion } from 'framer-motion';
import { fadeIn } from '../framer-config';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stackes from '../components/Stackes';
import Experience from '../components/Experiance';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      
      {/* Stats Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <About />
      <Services />
      <Stackes />
      <Experience />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
