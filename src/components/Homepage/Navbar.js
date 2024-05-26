import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import '../../styles/homepage/Navbar.css'
// E:\Personal\web devloping projects\2024 projects\uberLikeWeb\uber-like-app\src\styles\homepage\Navbar.css


const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
  };

  return (

    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">WebsiteName</div>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {/* <a href="#Ride">Ride</a> */}
         {/* <a href="#Drive">Drive</a> */}
        {/* <a href="#contact">Contact</a> */}
        {/* <a href="#services">Services</a> */}
      </div>
      <div className="navbar-right">
        <a href="#login" className="navbar-login" onClick={toggleLoginPopup}>Login</a>
        <a href="#signup" className="navbar-signup" onClick={toggleSignupPopup}>Sign Up</a>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      {showLoginPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={toggleLoginPopup}>&times;</button>
            <h2>Login</h2>
            <p>Choose your option:</p>

            <Link to='/ride login' className="popup-button"   >Login for Ride</Link><br/>
            <Link to='/driver/login'className="popup-button">Login for Drive</Link>
          </div>
        </div>

      )}
      {showSignupPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={toggleSignupPopup}>&times;</button>
            <h2>Sign Up</h2>
            <p>Choose your option:</p>

            <Link to='/ride/signup' className="popup-button">Sign Up for Ride</Link>
            <Link to='/driver/signup' className="popup-button">Sign Up for Drive</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;