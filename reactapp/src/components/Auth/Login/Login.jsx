import React,{useState} from "react";
import "./Login.css";
import {json, useNavigate} from 'react-router-dom';
import axios from "axios";
import { baseUrl } from "../../API/Api";

 export const Login = () => {
    const navigate = useNavigate();
    const initialState = {
        form: {
          email: "",
          password: ""
          }
        };
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [formData, setFormData] = useState(initialState.form);    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }    

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(`${baseUrl}/api/auth/login`, formData)
            .then(res => { 
                console.log(res.data);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("id", res.data.id);
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("name", res.data.name);
                localStorage.setItem("phone", res.data.phone);
                localStorage.setItem("address", res.data.address.city );
                if (res.data.role === "restaurant" || localStorage.getItem("role") === "restaurant") {
                    navigate("/restauranthome");
                } else if (res.data.role === "user" || localStorage.getItem("role") === "user") {
                    navigate("/user");
                } else if (res.data.role === "admin" || localStorage.getItem("role") === "admin"){
                    navigate("/admin");
                }
            }).catch(err => console.log(err))
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
        <a href="/"><i className="fa-solid fa-xmark" ></i></a>
        </span>

            <h2>Login</h2>
            
            <form className="login-form" onSubmit={handleSubmit}>
                
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={handleInputChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                
                <label htmlFor="password">Password</label>
                <input value={formData.password} onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" required/>
                
                <button type="submit" className="btn">Log In</button>
                
                <button className="toggle-button" onClick={toggle }>Don't have an account? Register here.</button>
            </form>

            
            </div>
            
        </div>
    );
};

export default Login;