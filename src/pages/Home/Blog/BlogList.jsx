import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogList(props) {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/posts?category=${category}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [category]);

  let counter = 0;

  return (
    <div>
    <div className="card my-5">
        <div className="card-header fw-bold">
            <h2>Latest Blog Post</h2>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col my-3 blog-list">
                {posts.map(post => (
        <div key={post.id}>{++counter}
          <Link to={`/category/${category}/${post.id}`}>. {post.title}</Link>
        </div>
      ))}
</div>
</div>
</div>
</div>
</div>
  )
}

export default BlogList;