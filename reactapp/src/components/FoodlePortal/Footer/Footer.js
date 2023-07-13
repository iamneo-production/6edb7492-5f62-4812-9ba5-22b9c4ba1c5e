import React from 'react';
import './footer.css';
import '../../assets/applestore.png';
import '../../assets/playstore.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Order Now</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            
          </ul>
        
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>
            Phone: +1 123-456-7890
          </p>
          <p>
            Email: info@foodle.com
          </p>
        </div>
        <div className="footer-icons">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="app-download">
    <a href="{playstore}" target="_blank" rel="noopener noreferrer">
      <img src={require('../../assets/playstore.png')} alt="Download on Play Store" />
      </a>
    
    <a href="{applestore}" target="_blank" rel="noopener noreferrer">
      <img src={require('../../assets/apple1.png')} alt="Download on App Store" />
      </a>
  
  </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Foodle. All rights reserved.</p>
      </div>
      <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Foodle™ Ltd. All rights reserved.
          </p>
    </footer>
  );
};

export default Footer;