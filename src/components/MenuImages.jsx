import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const MenuImages = ({ handleCategoryClick }) => {

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
    <div className='container-fluid'>
    <h1 className='page-title'>Recipes</h1>
    <main>
    <div className="recipe-page">
    <div className="row text-center">
      <div className="col-lg-2">
      <Link to="/category/pork">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://www.knorr.com/content/dam/unilever/knorr_world/philippines/photography_and_pictures/an_assortment_of_different_cuts_of_pork_with_a_bottle_of_olive_oil_and_herbs_as_decorations-79600683-jpg.jpg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Pork</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/beef">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://crowdcow-images.imgix.net/https%3A%2F%2Fcrowdcow-images.imgix.net%2Fhttps%253A%252F%252Fimages.ctfassets.net%252Fjigso8mmhmq2%252F4QK3Usi0EUIq08gWAcs8KM%252Fdc639e744a58921a9757f031ebe74620%252FWestCoast_StarterPack_flat_hires.jpg%253F%3Fixlib%3Drails-2.1.4%26w%3D1200%26h%3D630%26fit%3Dcrop%26crop_type%3Dfaces%26fm%3Djpg%26auto%3Dcompress%252Cformat%26cs%3Dsrgb%26s%3D6a484d5ba0653e8114f0199ae09d0b4a?ixlib=rails-2.1.4&w=1200&h=630&fit=crop&crop_type=focalpoint&fm=jpg&auto=compress%2Cformat&cs=srgb&s=ca55be1f351555bf27db8f9aac30d596" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Beef</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/fish">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://img.freepik.com/premium-photo/raw-fish-fillet-tilapia-cutting-board-with-lemon-spices-dark-table_78677-2408.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Fish</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/chicken">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://imtyazsupermarket.com/wp-content/uploads/2022/12/chicken-biryani-cut.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Chicken</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/vegetables">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://www.verywellfit.com/thmb/P19svg6W1vnqP3MVHlvYsFqOXLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetables-f8fb6ed3521d41ef8f2b036050d9278e.jpg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Vegetables</h2></Link>
        </div>

        <div className="col-lg-2">
      <Link to="/category/desserts">
      <img className="bd-placeholder-img rounded-circle fluid" width="150" height="150" src="https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2020/03/040403035858/image2-770x679.png" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

        <h2>Desserts</h2></Link>
        </div>

    </div>
    </div>
    </main>
    </div>

  )
}

export default MenuImages;

