import React, { useState } from 'react';

const CategoryBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('fish');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div></div>
  )
};

export default CategoryBlog;