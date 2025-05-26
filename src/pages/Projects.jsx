import React from "react";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Projects = () => (
  <>
    <Header />
    <div className="min-h-screen bg-[var(--background)] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my latest work and development projects
          </p>
        </motion.div>
      </main>
    </div>
    <Footer />
  </>
);

export default Projects;
