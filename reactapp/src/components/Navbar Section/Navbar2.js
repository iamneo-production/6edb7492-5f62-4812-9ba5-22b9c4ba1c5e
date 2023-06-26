import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";





const Navbar2 = () => {

   
    
  return (
<>
  <header className="header">
    <a href='#' className="logo">
    <img src={require('./assets/Foodle.png')} alt="horse" />

    </a>
    <nav className="navbar">


        <ul>
        <li>
     
          <Link to="/">Home</Link>
        </li>
        <li>
        
          <Link to="/about" spy={true} smooth={true}>About</Link>
        </li>
        <li>
        
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
        
          <Link to="/Review">Review</Link>
        </li>
        
        <li>
        
          <Link to="/ownerlogin">Restraunts Login</Link>
        </li>
        <li>
        
          <Link to="/deliverylogin">Delivery Jobs</Link>
        </li>
        <li>
        
          <Link to="/login">Customer Login</Link>
        </li>
       

      </ul>
       
    </nav>

  </header>
            
  
  
  </>
  );
};

export default Navbar2