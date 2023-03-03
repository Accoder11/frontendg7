import React from 'react';
import bannerVid from '../../assets/video2.mp4'
import FeaturedPost from '../../components/FeaturedPost';
import MenuImages from '../../components/MenuImages';
import SingleBlog from '../../components/SingleBlog';
import Testimonials from '../../components/Testimonials';
import ImageGallery from '../../components/ImageGallery';

const Home = () => {

  return (
    <div className='container-fluid'> 

    <div className='video-banner'>
      <video id="myVideo" loop autoPlay muted>
        <source src={bannerVid} type="video/mp4" />
      </video>
     
      <div className="content">
        <h1>HAK foodblog</h1>
        <div className="container shadow-lg my-5 bg-transparent border rounded">
        <p className='blog-intro'>
          Welcome to our recipe blog website! Our goal is to provide you with a wide variety of delicious and easy-to-follow recipes that you can enjoy with your family and friends. Whether you're a seasoned cook or a beginner in the kitchen, we have something for everyone.
        </p>
        </div>

        {/* button link */}

        <a href="#recipes"><button className='btn start-btn'>View Recipes</button></a>
      </div>
      </div>
      

      <div className='container-fluid introduction '>
      </div>

      <div id="recipes">
        <MenuImages />
      </div>

      <main className="container-fluid mb-5">
        <div className='my-2'>
        <FeaturedPost />
        </div>
        <div className='my-2'>
        <SingleBlog />
        </div>
        <div className='my-2'>
        <ImageGallery />
        </div>
        <div className='my-2'>
        <Testimonials />
        </div>
      </main>
    </div>
  );
}

export default Home;