import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import styles from './DeliveryProfile.module.css';
import DeliveryNav from '../Delivery Navbar/DeliveryNav';

const DeliveryProfile = () => {
    const [data,setData]=useState([]);
    const [city,setCity]=useState([]);
    const navigate = useNavigate();
    const initialState = {
        form: {
          id:localStorage.id,  
          name: localStorage.name,
          phone: localStorage.phone,
          password: "",
          address: {
            street: localStorage.street,
            state: localStorage.state,
            city: localStorage.address,
            zipCode: localStorage.zipCode
            }
          }
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

    const [formData, setFormData] = useState(initialState.form);    

    const handleSubmit  = async(e) => {
        e.preventDefault(); 
        console.log(formData);
        axios.put(`${baseUrl}/api/auth`, formData)
          .then(res => {
            localStorage.setItem("name", formData.name);
            localStorage.setItem("phone", formData.phone);
            localStorage.setItem("street", formData.address.street );
            localStorage.setItem("address", formData.address.city );
            localStorage.setItem("state", formData.address.state );
            localStorage.setItem("zipCode", formData.address.zipCode );
            navigate(-1);
          } )
          .catch(err => console.log(err))
      }  

    return(
      <div>
        <DeliveryNav />
        <div>
            <div className={styles.box}>
      <h2>Order Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className={styles.text}
              type="text"
              name="name"
              onChange={handleInputChange}
              value={formData.name} // Provide a default empty string value
            required/>
            <label htmlFor="phone">Delivery Address</label>
            <input
              type="text"
              className={styles.text}
              name="phone"
              onChange={handleInputChange}
              value={formData.phone} // Provide a default empty string value
              required/>

            <label htmlFor="state">State</label>
            <select value={formData.address.state} onChange={(e)=>handleStateChange(e)} className={styles.text} id="state" name="address.state" required>
            <option value=''>Select Your State</option>
            {states?.map((item,index)=>
            <option key={index} value={item}>{item}</option>
            )}
            </select>

            <label htmlFor="city">City</label>
            <select value={formData.address.city} onChange={handleInputChange} className={styles.text} id="city" name="address.city"  required> 
            <option value=''>Select Your City</option>
            {city !=='Select City' && city?.map((item,index)=>
            <option key={index} value={item?.name}>{item?.name}</option>
            )}
            </select>

          <label htmlFor="password">Change Password</label>
            <input
              type="password"
              name="password"
              placeholder="****"
              className={styles.text}
              onChange={handleInputChange}
              value={formData.password || ""} // Provide a default empty string value
            required/>
          </div>
          <button type="submit" className={styles.savebutton}>
              Save Changes
          </button>
        </form>
      </div>
    </div>
    </div>
    );
}
export default DeliveryProfile;