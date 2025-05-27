import React from 'react';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const posts = [
    '/blogs/blog1.md',
      '/blogs/blog2.md',
    'blogs/blog3.md',
  ];

  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((file, index) => (
        <BlogPost key={index} file={file} />
      ))}
    </div>
  );
};

export default Blog;
