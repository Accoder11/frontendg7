import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const FeaturedPost = () => {
  const [posts, setPosts] = useState([]);

  const Api_url = 'http://localhost:8000/api';

  const fetchPosts = async () => {
    try {
      const response = await axios.get(Api_url + 'posts');
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="col-md-6">
      {posts.map((post) => (
        <div key={post.id} className="p-md-4 text-white border rounded">
          <div className='row'>
            <div className="col-md-7 px-0">
              <NavLink to={`/post/${post.id}`}>
                <h2 className="fst-italic">{post.title}</h2>
                <strong className="d-inline-block mb-2 text-warning">{post.category}</strong>
              </NavLink>
              <p className="lead my-3">{post.short_description}</p>
              <p className="lead mb-0 text-white fw-bold">
                <NavLink to={`/post/${post.id}`}>Continue reading... </NavLink>
              </p>
            </div>
            <div className="col-5 d-none d-lg-block">
            <img src={'http://localhost:8000/storage/app/' + post.image_path} className="d-block w-100 h-50" preserveAspectRatio="xMidYMid slice" alt="..." />

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPost;
