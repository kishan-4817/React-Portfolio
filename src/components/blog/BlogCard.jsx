import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/dateFormat';

function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-dark-700/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm font-medium bg-primary-500/90 text-white rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>

        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-400 mb-4">{post.excerpt}</p>

        <div className="flex items-center gap-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-gray-400">{post.author.role}</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default BlogCard; 