import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const PostForm = () => {
  const Api_url = 'http://localhost:8000/api';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // added state for image file
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || description === '' || category === '' || !image) { // check for image
      setError(true);
      setErrorText('Fill all fields');
    } else {
      setError(false);
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('image', image); // append image to form data

        const response = await axios.post(Api_url + '/posts/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // set content type to multipart/form-data
          },
        });
        console.log(response.data);
        setTitle('');
        setCategory('');
        setDescription('');
        setImage(null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='container sticky-top bg-warning my-5'>
      {error ? (
        <div className='error_field'>
          <span className='error_text'>{errorText}</span>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Post title...'
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='Post category...'
          />
        </div>
        <div>
          <label>Description</label>
          <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onReady={ editor => {
              console.log( 'Editor is ready to use!', editor );
          } }
          onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
          />
        </div>
        <div>
          <label>Image</label>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button disabled={loading ? true : null}>Add Post</button>
      </form>
    </div>
  );
};


export default PostForm;
