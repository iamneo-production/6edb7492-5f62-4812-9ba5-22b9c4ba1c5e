import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const OwnerRegister = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const navigate=useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleSubmit  = async(e) => {
      console.log(pass.length);
      if(pass.length<8)
      {
          alert("Password must have atleast 8 characters");
      }
      else{
      e.preventDefault();
      await axios.post("http://localhost:8090/restaurantregistration",
      {
      
          restaurantName: name,
          restaurantLocation : location,
          restaurantEmail : email,
          restaurantPassword : pass,
          }).then((res) =>
          {
              if(res.data == "Email Exists")
              {
                  alert("Email exists");
              }
              else{
                  alert("Restaurant Registation Successfully");
                  navigate('/ownerlogin');
              }
          });
      }
  }

    const handleClose = () => {
        setShowLoginForm(false);
      };
    
      if (!showLoginForm) {
        return null; // Hide the login form container
      }
        
    

    return (
        <div className="login-overlay">
        <div className="auth-form-container">
        <span className="close-button" onClick={handleClose}>
        <a href="#"><i className="fa-solid fa-xmark" ></i></a>
        </span>
            <h2>Restaurant Registration</h2>
          
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Restaurant Name" required/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
            <label htmlFor="password">Location</label>
            <input value={location} name="location" onChange={(e) => setLocation(e.target.value)} id="Restaurant Location" placeholder="location of Restruant" required/>
            <label htmlFor="location">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required/>
            <button type="submit" className="btn"> Register</button>  
        </form>
      </div>
    </div>
    )
}
export default OwnerRegister;