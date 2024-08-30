import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We Are Offering 15+ Online Document Services ( AadharCard ,PanCard ...)</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: sbsahane23@gmail.com</p>
          <p>Phone: 8999280563</p>
          <p>Address:Pune,MH,India,422601</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sagar Sahane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
