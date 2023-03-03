import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ csrfToken }) => {
  const apiUrl = 'http://localhost:8000/api';

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    short_description: '',
    long_description: '',
    image_path: null,
  });

  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage && (selectedImage.type === 'image/jpeg' || selectedImage.type === 'image/png')) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image_path: selectedImage,
      }));
      setError(false);
      setErrorText('');
    } else {
      setError(true);
      setErrorText('Please select a valid image file (JPG or PNG)');
      setFormData((prevFormData) => ({
        ...prevFormData,
        image_path: null,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.title.trim() === '' ||
      formData.long_description.trim() === '' ||
      formData.short_description.trim() === '' ||
      formData.category.trim() === '' ||
      !formData.image_path
    ) {
      setError(true);
      setErrorText('Please fill all fields and upload an image');
    } else {
      setError(false);
      setLoading(true);

      try {
        const { title, category, short_description, long_description, image_path } = formData;

        const formDataToSend = new FormData();
        formDataToSend.append('title', title);
        formDataToSend.append('category', category);
        formDataToSend.append('short_description', short_description);
        formDataToSend.append('long_description', long_description);
        formDataToSend.append('image_path', image_path);

        const response = await axios.post(`${apiUrl}/posts/add`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data);

        setFormData({
          title: '',
          category: '',
          short_description: '',
          long_description: '',
          image_path: null,
        });

        const imageUrl = response.data.imageUrl; // Get the URL of the uploaded image

        // Do something with the image URL, such as displaying it to the user or storing it in state
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='container w-100 h-50 pt-5 mt-5 sticky editor'>
    {error && (
      <div className='error_field'>
        <span className='error_text'>{errorText}</span>
      </div>
    )}
    <h1>Admin Form</h1>

    <form onSubmit={handleSubmit} className='admin-form' encType='multipart/form-data'>
      <input type='hidden' name='_csrf' value={csrfToken} />

      <div className='my-2'>
        <label htmlFor='title'>Title </label>
        <input
          id='title'
          type='text'
          value={formData.title}
          maxLength={40}
          onChange={handleInputChange}
          placeholder='Post title...'
          name='title'
        />
      </div>

      <div className='my-2'>
        <label htmlFor='category'>Category </label>
        <input
          id='category'
          type='text'
          value={formData.category}
          onChange={handleInputChange}
          placeholder='Post category...'
          name='category'
        />
      </div>

      <div className='my-2'>
        <label htmlFor='shortDescription'>Short Description </label>
        <input
          id='shortDescription'
          type='text'
          value={formData.short_description}
          onChange={handleInputChange}
          maxLength={70}
          placeholder='70 characters only'
          name='short_description'
        />
      </div>

      <div className='my-2'>
        <label htmlFor='longDescription'>Description</label>
        <div style={{ height: 'auto' }}>
          <ReactQuill
            value={formData.long_description}
            onChange={(value) => setFormData({ ...formData, long_description: value })}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
            name='long_description'
          />
        </div>
      </div>

      <div>
        <label htmlFor='image_path'>Image:</label>
        <input
          type='file'
          id='image_path'
          accept='image/*'
          onChange={handleImageChange}
        />
      </div>
      {formData.image_path && (
        <div>
          <img src={URL.createObjectURL(formData.image_path)} alt='Selected image' />
        </div>
      )}

      <button className='my-2' type='submit' disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  </div>
);
  };      
              
              export default PostForm;