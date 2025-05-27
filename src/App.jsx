import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Welcome to my portfolio!</div>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
