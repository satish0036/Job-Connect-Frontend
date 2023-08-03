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
          <a href="#s"><Link to="/notfound">Privacy Policy</Link></a>
          <a href="#s"><Link to="/notfound">Terms of Service</Link></a>
          <a href="#s"><Link to="/notfound">Contact Us</Link></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
