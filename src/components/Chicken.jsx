import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Chicken() {
  const [posts, setPosts] = useState([]);
  const Api_url = 'http://localhost:8000/api/';

  const fetchPosts = async () => {
    try {
      const response = await axios.get(Api_url + 'posts');
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  let counter = 0;

  return (
    <div>
      <h1 className='page-title'>List of chicken recipes</h1>

      {posts
        .filter((post) => post.category === 'chicken')
        .map((post) => (
          <div key={post.id}>
            <NavLink to={`/post/${post.id}`}><h2>{++counter} : {post.title} ({post.category})</h2>
            </NavLink>
          </div>
        ))}
    </div>
  );
}

export default Chicken
