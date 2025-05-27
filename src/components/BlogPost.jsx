import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + file)
      .then(res => res.text())
      .then(setContent);
  }, [file]);

  return (
    <div className="blog-post">
      <ReactMarkdown>{content}</ReactMarkdown>
      <hr />
    </div>
  );
};

export default BlogPost;
