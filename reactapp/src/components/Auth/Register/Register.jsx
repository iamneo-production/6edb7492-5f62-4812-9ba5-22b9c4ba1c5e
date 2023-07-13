import React, { useState,useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = (props) => {
  // const navigate=useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [data,setData]=useState([]);
  const [city,setCity]=useState([]);
  const initialState = {
  form: {
    name: "",
    email: "",
    phone: "",
    password: "",
    address: {
      street:"",
      state:"",
      city:"",
      zipCode:""
      },
    role:""
    }
  };
  const [formData, setFormData] = useState(initialState.form);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };

    // Check if the field is nested within the address object
    if (name.includes('address.')) {
      const nestedField = name.split('.')[1];
      console.log(nestedField);
      updatedFormData.address[nestedField] = value;
    } else {
      updatedFormData[name] = value;
    }

    setFormData(updatedFormData);
  };


  let Singlecountry = data.filter(item=> item.country === "India");
  let states = [...new Set(Singlecountry.map(item=> item.subcountry))]; 
  states.sort();

  useEffect(()=>{

  axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
  .then(res=> setData(res.data))
  .catch(err=>console.log(err))

  }, [])
  

  const handleStateChange=(e)=>{  
    handleInputChange(e);
    let singleCity = data.filter(item=> item.subcountry === e.target.value);
    singleCity.sort();
    setCity(singleCity);

  }
  
  const handleSubmit  = async(e) => {
    e.preventDefault(); 
    console.log(formData);
    axios.post("http://localhost:8080/api/auth/signup", formData)
      .then(res => {
        console.log(res.data);
        navigate("/login");
      } )
      .catch(err => console.log(err))
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
          <h2>SignUp</h2>
      <form className="register-form" onSubmit={handleSubmit}>
          
          <label htmlFor="name">Full Name</label>
          <input value={formData.name} name="name"  onChange={handleInputChange} id="name" placeholder="full Name" required/>

          <label htmlFor="email">Email</label>
          <input value={formData.email}  onChange={handleInputChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
          
          <label htmlFor="phone">Mobile Number</label>
          <input value={formData.phone}  onChange={handleInputChange} type="tel" placeholder="Phone number" id="phone" name="phone" required/>
          
          <label htmlFor="password">Password</label>
          <input value={formData.password}  onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" required/>
          
          <label htmlFor="address.street">Street</label>
          <input value={formData.address.street} onChange={handleInputChange} type="text" placeholder="Your Street Name" id="street" name="address.street" required/>
          
          <label htmlFor="state">Your State</label>
          <select value={formData.address.state} onChange={(e)=>handleStateChange(e)} id="state" name="address.state" required>
          <option value=''>Select Your State</option>
          {states?.map((item,index)=>
          <option key={index} value={item}>{item}</option>
          )}
          </select>
          
          <label htmlFor="city">Your City</label>
          <select value={formData.address.city} onChange={handleInputChange} id="city" name="address.city"  required> 
          <option value=''>Select Your City</option>
          {city !=='Select City' && city?.map((item,index)=>
          <option key={index} value={item?.name}>{item?.name}</option>
          )}
          </select>
          
          <label htmlFor="zipCode">Postal Code</label>
          <input value={formData.address.zipCode}  onChange={handleInputChange} type="text" placeholder="Your Pincode" id="zipCode" name="address.zipCode" required/>
          
          <label htmlFor="role">Your Role</label>
          <select value={formData.role} onChange={handleInputChange} id="role" name="role"  required> 
          <option value=''>Your Role</option>
          <option value='user'>user</option>
          <option value='admin'>admin</option>
          <option value='restaurant'>restaurant</option>
          </select>
          
          <button type="submit" className="btn">Register</button>
      </form>
    </div>
  </div>


  )  

    
        
    

    
}
export default Register;