import React,{useState} from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./login.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


 export const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8090/customerlogin",
        {
            email : email,
            password : pass,
            }).then((res) =>
            {
                if(res.data == "Login Failed : Enter your credentials carefully!")
                {
                    alert(res.data);
                }
                else{
                    alert("Login Successfull");
                    navigate('/custhome');
                }
            });
    };
   const toggle=()=>{
    navigate("/register");
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

            <h2>Customer Login</h2>
            
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
                <button type="submit" className="btn">Log In</button>
                <button className="toggle-button" onClick={toggle }>Don't have an account? Register here.</button>

             
            </form>

            
            </div>
            
        </div>
    );
};

export default Login;
