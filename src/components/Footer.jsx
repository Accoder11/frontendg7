import React from 'react';
import logo1 from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
    <footer>
        <div className="container-fluid">
            <div className="row p-5">
                <div className="col-lg-4 col-sm-6">
                    <div className="single-box">
                    <img src={logo1} width={100} className="mb-2" alt="sample company logo" />
                    <h2>Hak Food Blog</h2>
                    <div>
                    <p>Welcome to our recipe blog website! Our goal is to provide you with a wide variety of delicious and easy-to-follow recipes that you can enjoy with your family and friends. Whether you're a seasoned cook or a beginner in the kitchen, we have something for everyone.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single-box text-center">
                        <h2>Categories</h2>
                    <ul className='footer-links'>
                        <li><Link to="/category/pork">Pork Recipes</Link></li>
                        <li><Link to="/category/beef">Beef Recipes</Link></li>
                        <li><Link to="/category/fish">Fish Recipes</Link></li>
                        <li><Link to="/category/chicken">Chicken Recipes</Link></li>
                        <li><Link to="/category/vegetables">Vegetables Recipes</Link></li>
                        <li><Link to="/category/desserts">Desserts Recipes</Link></li>
                        
                    </ul>
                    </div>                    
                </div>
                
                <div className="col-lg-4 col-sm-6">
                    <div className="single-box">
                        <h2>Newsletter</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque earum similique fugiat nobis. Facere?</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2"><i className="fa fa-long-arrow-right"></i></span>
                        </div>
                        <h2>Follow us on</h2>
                        <p className="socials">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-dribbble"></i>
                            <i className="fa fa-pinterest"></i>
                            <i className="fa fa-twitter"></i>
                        </p>
                        <span><a className='back-arrow' href="#">Back to top<i className="fa fa-long-arrow-up arrow-up"></i></a></span>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                    <p class="m-0 text-center text-white">Copyright &copy; Hak Food Blog (Group7) {new Date().getUTCFullYear()}</p>
        </div>
        </div>
    </footer>
        </div>
    );
}

export default Footer;