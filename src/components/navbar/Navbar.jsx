import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbarMainContainer">
      {/* Left Section: Logo */}
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Spotify Logo"
        />
      </div>

      {/* Middle Section: Search Bar */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="What do you want to play?"
          className="navbar-search-input"
        />
        <button className="navbar-search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zm-5.242 1.1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
          </svg>
        </button>
      </div>

      {/* Right Section: Links */}
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          Premium
        </a>
        <a href="#" className="navbar-link">
          Support
        </a>
        <a href="#" className="navbar-link">
          Download
        </a>
        <span className="navbar-divider">|</span>
        <a href="#" className="navbar-link">
          Install App
        </a>
        <a href="#" className="navbar-link">
          Sign up
        </a>
        <button className="navbar-login-button">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;