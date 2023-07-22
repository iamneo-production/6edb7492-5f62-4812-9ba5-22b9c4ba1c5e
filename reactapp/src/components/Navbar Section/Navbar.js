import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import logo from './logo.jpeg';
import HeroSlider from '../FoodlePortal/About/HeroSlider';
// import {Link} from 'react-scroll'




const Navbar = () => {

   
    
  return (
<>
  <header className="header">
  <img src={logo} alt="Logo" style={logoStyle} />
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

const logoStyle = {
  width: '100px',
  height: '100px',
  marginRight: '10px',
  border: '5px solid red',
  marginTop:'15px',
  marginBottom:'15px',
};

export default Navbar;