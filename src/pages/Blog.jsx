import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/blog/BlogPostCard";
import SEO from "@/components/SEO";
import blogData from "../data/blogData.json";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogData.posts);
  }, []);

  return (
    <>
      <SEO 
        title="Blog"
        description="Explore our collection of articles about web development, React, TypeScript, and modern web technologies. Find tutorials, best practices, and insights."
        keywords="web development, React, TypeScript, CSS, programming, tutorials, blog"
        type="website"
      />
      <Header />
      <div className="min-h-screen bg-[var(--background)] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <main className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Blog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
              Thoughts, tutorials, and insights about web development and technology
            </p>
            
            {/* Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-4 py-2 rounded-full bg-[var(--primary)] text-[var(--foreground)] hover:opacity-90 transition-opacity cursor-pointer">
                All
              </button>
              <button className="px-4 py-2 rounded-full bg-[var(--secondary)]/20 text-[var(--foreground)] hover:bg-[var(--secondary)]/30 transition-colors cursor-pointer">
                React
              </button>
              <button className="px-4 py-2 rounded-full bg-[var(--secondary)]/20 text-[var(--foreground)] hover:bg-[var(--secondary)]/30 transition-colors cursor-pointer">
                TypeScript
              </button>
              <button className="px-4 py-2 rounded-full bg-[var(--secondary)]/20 text-[var(--foreground)] hover:bg-[var(--secondary)]/30 transition-colors cursor-pointer">
                CSS
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id}
                className="cursor-pointer"
              >
                <BlogPostCard post={post} />
              </Link>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-6">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-[var(--secondary)]/20 border border-[var(--secondary)]/30 focus:border-[var(--primary)]/50 outline-none text-[var(--foreground)]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[var(--primary)] text-[var(--foreground)] rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
