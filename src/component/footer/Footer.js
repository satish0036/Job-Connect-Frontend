import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Displaying the copyright information with the current year */}
        <p>&copy; {new Date().getFullYear()} JobConnect. All* rights reserved.</p>
         {/* Creating a div for footer links */}
        <div className="footer-links">
         
          <a href="#s"><Link to="/disclaimer">Disclaimer</Link></a>
          <a href="#s"><Link to="/contact">Contact Us</Link></a>
          <a href="https://www.linkedin.com/in/satish0036kumar/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt='img' width="20px" /></a>
          <a href="https://github.com/satish0036/" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='img' width="20px" /></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
