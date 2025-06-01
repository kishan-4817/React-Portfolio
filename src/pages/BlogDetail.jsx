import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Share2, Heart, MessageCircle, Bookmark, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import blogData from "../data/blogData.json";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const foundPost = blogData.posts.find((p) => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
          <h1 className="text-2xl text-gray-400">Post not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
        type="article"
        author={post.author}
        datePublished={post.date}
        dateModified={post.date}
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
          {/* Back Button */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-[var(--primary)] text-[var(--foreground)] rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-[var(--foreground)]/60 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-invert max-w-none bg-[var(--secondary)]/20 backdrop-blur-sm rounded-2xl border border-[var(--secondary)]/30 p-8">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[var(--secondary)]/30 text-[var(--foreground)]/70 rounded-full text-sm hover:bg-[var(--primary)]/20 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Engagement Bar */}
              <div className="mt-8 flex items-center justify-between p-4 bg-[var(--secondary)]/20 backdrop-blur-sm rounded-xl border border-[var(--secondary)]/30">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 ${
                      isLiked ? 'text-red-500' : 'text-[var(--foreground)]/60'
                    } hover:text-red-500 transition-colors`}
                  >
                    <Heart className="h-5 w-5" />
                    <span>{likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[var(--foreground)]/60 hover:text-[var(--primary)] transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span>Comment</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleBookmark}
                    className={`${
                      isBookmarked ? 'text-yellow-500' : 'text-[var(--foreground)]/60'
                    } hover:text-yellow-500 transition-colors`}
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleShare}
                    className="text-[var(--foreground)]/60 hover:text-[var(--primary)] transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-4"
            >
              {/* Author Card */}
              <div className="bg-[var(--secondary)]/20 backdrop-blur-sm rounded-xl border border-[var(--secondary)]/30 p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=your-name"
                    alt={post.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{post.author}</h3>
                    <p className="text-[var(--foreground)]/60">Web Developer & Writer</p>
                  </div>
                </div>
                <p className="text-[var(--foreground)]/70">
                  Passionate about web development and sharing knowledge through writing.
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-[var(--secondary)]/20 backdrop-blur-sm rounded-xl border border-[var(--secondary)]/30 p-6">
                <h3 className="text-xl font-semibold mb-4 text-[var(--foreground)]">Related Posts</h3>
                <div className="space-y-4">
                  {blogData.posts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-[var(--foreground)]/60">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail; 