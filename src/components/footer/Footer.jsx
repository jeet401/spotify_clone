import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footerSectionMainContainer">
      <div className="footer-preview-text">
        <span>Preview of Spotify</span>
        <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <button className="footer-signup-button">Sign up free</button>
    </div>
  );
};

export default Footer;