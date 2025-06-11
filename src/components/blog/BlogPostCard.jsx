import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPostCard = ({ post }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group relative bg-[var(--secondary)]/20 backdrop-blur-sm rounded-xl overflow-hidden border border-[var(--secondary)]/30 hover:border-[var(--primary)]/30 transition-all duration-300 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[var(--primary)] text-[var(--foreground)] text-sm rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
          {post.title}
        </h2>
        
        <p className="text-[var(--foreground)]/70 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-[var(--foreground)]/60 mt-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[var(--primary)] text-[var(--foreground)] rounded-lg hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-[var(--primary)]/0 group-hover:border-[var(--primary)]/30 rounded-xl transition-colors duration-300 pointer-events-none" />
    </motion.article>
  );
};

export default BlogPostCard; 