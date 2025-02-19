import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../framer-config';
import { useState } from 'react';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "/testimonials/sarah.jpg",
      content: "Working with this team was an absolute pleasure. They delivered our project on time and exceeded all expectations.",
      rating: 5
    },
    {
      name: "Mark Williams",
      role: "Founder at DesignCo",
      image: "/testimonials/mark.jpg",
      content: "The attention to detail and creative solutions provided were exceptional. Highly recommend their services!",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Marketing Director",
      image: "/testimonials/emily.jpg",
      content: "Their expertise in both design and development helped us create a website that truly stands out.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about our work.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={`bg-gray-800 rounded-lg p-8 ${
                  activeIndex === index ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials; 