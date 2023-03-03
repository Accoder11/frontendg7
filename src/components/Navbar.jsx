import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


const Navbar = () => {

  // Navbar change color in scroll

  const [change, setChange] = useState('transparent')
  const [logoHeight, setlogoHeight] = useState(100)
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setChange('#a66c19')
      setlogoHeight(70)
    } else {
      setChange('transparent')
      setlogoHeight(100)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg px-3" style={{ backgroundColor: change, transition: "all 1s" }}>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" width="100" style={{ height: logoHeight, transition: "all 1s" }} class="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropbtn" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories <i className="fa fa-caret-down"></i>
              </a>
              <div className="dropdown-content" aria-labelledby="navbarDropdown">
                <Link to="/category/pork" className='down-link'>Pork</Link>
                <Link to="/category/beef" className='down-link'>Beef</Link>
                <Link to="/category/fish" className='down-link'>Fish</Link>
                <Link to="/category/chicken" className='down-link'>Chicken</Link>
                <Link to="/category/vegetables" className='down-link'>Vegetables</Link>
                <Link to="/category/desserts" className='down-link'>Desserts</Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" >Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
