import React, { useState,useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dno, setDno] = useState('');
    const [street, setStreet] = useState('');
    const [pincode, setPincode] = useState('');
    const [data,setData]=useState([]);
    const [city,setCity]=useState([]);
    const [selstate,setSelState]=useState('');
    const [selcity,setSelCity]=useState('');
    const navigate=useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(true);

    let Singlecountry = data.filter(item=> item.country === "India");
    let states = [...new Set(Singlecountry.map(item=> item.subcountry))]; 
    states.sort();

    useEffect(()=>{
      axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json").
      then(res=> setData(res.data))
      .catch(err=>console.log(err))
      },[])

      const handleStateChange=(e)=>{
        setSelState(e.target.value);     
        let singleCity = data.filter(item=> item.subcountry === e.target.value);
        singleCity.sort();
        setCity(singleCity);
      } 

    const handleSubmit  = async(e) => {
      console.log(pass.length);
      if(pass.length<8)
      {
          alert("Password must have atleast 8 characters");
      }
      else if(isNaN(dno))
      {
        alert("Door number should not have letters");
      }
      else{
      e.preventDefault();
      await axios.post("http://localhost:8080/registercustomer",
      {
      
          customerName: name,
          customerPhnno : phone,
          customerEmail : email,
          customerPassword : pass,
          customerAddress : {
           no : dno,
           street : street,
           state : selstate,
           city : selcity,
           zipcode : pincode
          }
          }).then((res) =>
          {
              if(res.data == "Email Exists")
              {
                  alert("Email exists");
              }
              else{
                  alert("Customer Registation Successfully");
                  navigate('/login');
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
            <h2>Customer Registration</h2>
          
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" required/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
            <label htmlFor="phone">Mobile Number</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}type="tel" placeholder="Phone number" id="phone" name="phone" required/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <label htmlFor="dno">Door Number</label>
            <input value={dno} onChange={(e) => setDno(e.target.value)} type="text" placeholder="Your Door Number" id="dno" name="dno" required/>
            <label htmlFor="street">Street</label>
            <input value={street} onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Your Street Name" id="street" name="street" required/>
            <label htmlFor="state">Your State</label>
            <select onChange={(e)=>handleStateChange(e)} id="state" name="state" required>
            <option value=''>Select Your State</option>
            {states?.map((item,index)=>
            <option key={index} value={item}>{item}</option>
            )}
            </select>
            <label htmlFor="city">Your City</label>
            <select value={selcity} onChange={(e) => setSelCity(e.target.value)} id="state" name="state"  required> 
            <option value=''>Select Your City</option>
            {city !=='Select City' && city?.map((item,index)=>
            <option key={index} value={item?.name}>{item?.name}</option>
            )}
            </select>
            <label htmlFor="pincode">Postal Code</label>
            <input value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" placeholder="Your Pincode" id="pincode" name="pincode" required/>
            <button type="submit" className="btn">Register</button>
            
            
              
        </form>
      </div>
    </div>


    )
}
export default Register;