import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import HeroSlider from '../FoodlePortal/About/HeroSlider';
// import {Link} from 'react-scroll'




const Navbar = () => {

   
    
  return (
<>
  <header className="header">
    <a href='#' className="logo">
    <img src={require('../assets/Foodle.png')} alt="Foodle" />

    </a>
    <nav className="navbar">


        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        
          <Link to="/about">About</Link> {/* spy={true} smooth={true} */}
        </li>
        <li>
        
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
        
          <Link to="/Review">Review</Link>
        </li>
        <li>
          <Link to="/login">Login/SignUp</Link>
        </li>

      </ul>
       
    </nav>

   
     
    


    


         
        

  </header>
            
  
  
  </>
  );
};

export default Navbar