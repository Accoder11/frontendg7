import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const API_URL = 'http://localhost:8000/api/';

  const getPost = async (id) => {
    try {
      const response = await axios.get(`${API_URL}posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost(id);
  }, [id]);

  return (
    <div className='my-5 py-5'>
      <div className='container'>
        <div className='single-post p-5'>
          <div className='row text-center'>
            <img src={`${API_URL}/storage/app/${post.image_path}`} alt={post.title} className='d-block mx-auto mb-4' style={{ maxWidth: '100%', height: 'auto' }} />


            <h2>{post.title}</h2>
            <div className='col-8'>
              <p>{post.category}</p>
            </div>
          </div>
          <p>{post.short_description}</p>
        </div>
        <h4>Please leave a comment.</h4>
      </div>
    </div>
  );
};

export default BlogPost;
