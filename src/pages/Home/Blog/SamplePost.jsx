import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SamplePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const Api_url = 'http://localhost:8000/api/';

  const getPost = async (id) => {
    try {
      const response = await axios.get(`${Api_url}posts/${id}`);
      const post = response.data.data;
      post.image_path = `${Api_url}storage/app/${post.image_path}`;
      setPost(post);
    } catch (error) {
      console.error(error);
      console.log(post);
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
            <div>
            <img src={`${Api_url}storage/app/${post.image_path}`} className="w-100 h-80 rounded my-4" alt=""/>

            </div>
            <h2>{post.title}</h2>
            <div className='Row'>
              <p>Author: {post.author}</p>
              <p>Category: {post.category}</p>
            </div>
          </div>
          <p>{post.long_description}</p>
        </div>
        <h4>Please leave a comment.</h4>
      </div>
    </div>
  );
};

export default SamplePost;