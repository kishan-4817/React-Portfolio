import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../framer-config';
import BlogCard from '../components/blog/BlogCard';
import BlogSearch from '../components/blog/BlogSearch';
import BlogCategories from '../components/blog/BlogCategories';
import Newsletter from '../components/common/Newsletter';
import { BackgroundShapes } from '../components/design/Shapes';
import useBlogFilter from '../hooks/useBlogFilter';
import posts from '../data/blog.json';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredPosts = useBlogFilter(posts, searchQuery, activeCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-dark-950 to-dark-900 pt-32 pb-20">
      <BackgroundShapes />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Insights
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-400"
          >
            Thoughts, tutorials, and insights about web development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <BlogSearch 
              value={searchQuery} 
              onChange={setSearchQuery} 
            />
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid gap-8 mt-8"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <BlogCategories 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog; 