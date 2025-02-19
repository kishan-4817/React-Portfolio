import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../framer-config';
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of web development services including custom React development, UI/UX design, full-stack development, and website optimization."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A typical website project takes 4-8 weeks from start to finish, while smaller projects might take 2-3 weeks."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and performing optimally."
    },
    {
      question: "What is your design process?",
      answer: "Our design process includes discovery, wireframing, design mockups, client feedback and revisions, and final implementation. We ensure close collaboration throughout."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we can help set up and manage hosting for your website, ensuring optimal performance and security."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-900 p-4 rounded-lg flex justify-between items-center text-left hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-400 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-800"
              >
                <p className="p-4 text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;
