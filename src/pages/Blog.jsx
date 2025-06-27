import React from 'react';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const posts = [
    '/blogs/blog1/blog.md',
    '/blogs/blog2/blog.md',
    '/blogs/blog3/blog.md',
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
