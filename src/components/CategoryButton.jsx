import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CategoryButton = ({ handleCategoryClick }) => {

  const location = useLocation();
  const category = location.pathname.split('/')[2]; // get the category from the URL

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch the posts for the specified category and set the state

    fetch(`http://localhost:8000/api/posts?category=${category}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [category]);

  return (
    <div>
    <header className="blog-header border rounded container-fluid">
    <div>
      <div className=" container">
        <nav className="nav nav-menu d-flex justify-content-between">
          
          <Link to="/category/pork"><button className='menu-link'>Pork</button></Link>
          <Link to="/category/beef"><button className='menu-link'>Beef</button></Link>
          <Link to="/category/fish"><button className='menu-link'>Fish</button></Link>
          <Link to="/category/chicken"><button className='menu-link '>Chicken</button></Link>
          <Link to="/category/vegetables"><button className='menu-link'>Vegetables</button></Link>
          <Link to="/category/desserts"><button className='menu-link'>Desserts</button></Link>
          <Link to="/category/destinations"><button className='menu-link'>Food Destinations</button>
          </Link>

      </nav>
      </div>
      </div>
    </header>
    </div>
  );
};

export default CategoryButton;
