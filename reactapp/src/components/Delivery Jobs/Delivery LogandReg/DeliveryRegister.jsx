import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const DeliveryRegister = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [data,setData]=useState([]);
    const [city,setCity]=useState([]);
    const [selstate,setSelState]=useState('');
    const [selcity,setSelCity]=useState('');
    const [liceno,setLiceno]=useState('');
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
      else{
      e.preventDefault();
      await axios.post("http://localhost:8080/registeremployee",
      {
      
          empName: name,
          empPhone : phone,
          empEmail : email,
          empPassword : pass,
          empState: selstate,
          empCity: selcity,
          empLiceno: liceno,
          }).then((res) =>
          {
              if(res.data == "Email Exists")
              {
                  alert("Email exists");
              }
              else{
                  alert("Job Registation Successfully");
                  navigate('/deliverylogin');
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
            <h2>Register</h2>
          
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Full Name" required/>
            <label htmlFor="phone">Mobile Number</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}type="tel" placeholder="Contact Number" id="phone" name="phone" required/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
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
            <label htmlFor="liceno">Your License Number</label>
            <input value={liceno} onChange={(e) => setLiceno(e.target.value)}type="text" placeholder="License Number" id="liceno" name="liceno" required/>
            <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>


    )
}
export default DeliveryRegister;