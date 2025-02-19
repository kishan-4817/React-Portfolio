import { useMemo } from 'react';

function useBlogFilter(posts, searchQuery, category) {
  return useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || post.category === category;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, category]);
}

export default useBlogFilter; 