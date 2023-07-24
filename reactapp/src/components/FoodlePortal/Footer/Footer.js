import React from 'react';
import './footer.css';
import '../../assets/applestore.png';
import '../../assets/playstore.png';
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        
          <div className='c4'>Quick Links</div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Menu</a></li>
            <li><a href="/">Order Now</a></li>
            <li><a href="/">Specials</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">Privacy</a></li>
            
          </ul>
        
        <div className="footer-info">
          <div className='c4'>Contact Us</div>
          <p className='j3' style={{marginLeft:'-20px'}}>
            Phone  : +1 123-456-7890
          </p>
          <p className='j4' style={{marginLeft:'-20px'}}>
            Email  : info@foodle.com
          </p>
        </div>
        <div className="footer-icons">
          <div className='c5' style={{marginLeft:'-20px'}}>Follow Us</div>
          <div className="social-icons">
            <a href="/" ><FaFacebook /></a>
            <a  href="/" ><FaTwitter /></a>
            <a href="/"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="app-download">
    <a href="{playstore}" target="_blank" rel="noopener noreferrer">
      <img className="dwnld" src={require('../../assets/playstore.png')} alt="Download on Play Store" />
      </a>
    
    <a href="{applestore}" target="_blank" rel="noopener noreferrer">
      <img src={require('../../assets/apple1.png')} alt="Download on App Store" />
      </a>
  
  </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Foodle. All rights reserved.</p>
      </div>
      <p className='des'>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Foodle™ Ltd. All rights reserved.
          </p>
    </footer>
  );
};

export default Footer;