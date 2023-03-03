import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar';
import MenuImages from './components/MenuImages'
import CategoryBlog from './components/CategoryBlog'
import Contact from './components/Contact'
import About from './components/About'
import Pork from './components/Pork'
import Fish from './components/Fish'
import Beef from './components/Beef'
import Chicken from './components/Chicken'
import Vegetables from './components/Vegetables'
import Desserts from './components/Desserts'
import Footer from './components/Footer'

import List from './pages/Home/Blog/List'
import Blog from './pages/Home/Blog/Blog'
import PostForm from './admin/PostForm'
import AdminHome from './admin/AdminHome'
import BlogPost from './pages/Home/Blog/BlogPost'

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/list" element={<List />} />
        <Route path="/form" element={<PostForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/category" element={<CategoryBlog />} />
        <Route path="/menuimages" element={<MenuImages />} />
        <Route path="/post/:id" element={<BlogPost />} />

        {/* CATEGORIES */}
        
        <Route path="/category/chicken" element={<Chicken />} />
        <Route path="/category/pork" element={<Pork />} />
        <Route path="/category/beef" element={<Beef />} />
        <Route path="/category/fish" element={<Fish />} />
        <Route path="/category/desserts" element={<Desserts />} />
        <Route path="/category/vegetables" element={<Vegetables />} />
        
          
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;

