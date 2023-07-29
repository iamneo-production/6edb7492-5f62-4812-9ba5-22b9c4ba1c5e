import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import styles from "./style.module.css";
import { Form, Button } from 'react-bootstrap';
import { baseUrl } from "../../API/Api";
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";
const AddRestaurant = () => {
  let navigate=useNavigate()
  const [data,setData]=useState([]);
  const [city,setCity]=useState([]);
  const [state,setState]=useState();
  const [citys,setcitys]=useState();
  const [street,setstreet]=useState();
  const [zipcode,setzipcode]=useState();
  const [restaurant, setRestaurant] = useState({
    restaurantName: "",
    restaurantLocation: "",
    restaurantContact: "",
    restaurantEmail: "",
  });
  const { restaurantName, restaurantLocation, restaurantContact,restaurantEmail } = restaurant;
  const [file, setFile] = useState(null);

  useEffect(()=>{

    axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
    .then(res=> setData(res.data))
    .catch(err=>console.log(err))
  
    }, [])

  let Singlecountry = data.filter(item=> item.country === "India");
  let states = [...new Set(Singlecountry.map(item=> item.subcountry))]; 
  states.sort();
  

  const handleStateChange=(e)=>{  
    setState(e.target.value);
    let singleCity = data.filter(item=> item.subcountry === e.target.value);
    singleCity.sort();
    setCity(singleCity);

  }


  const onInputChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(restaurant);
    const formData = new FormData();
    formData.append("restaurantName", restaurant.restaurantName);
    formData.append("restaurantLocation", street+", "+citys+", "+state+", "+zipcode);
    formData.append("restaurantContact", restaurant.restaurantContact);
    formData.append("file", file);
    formData.append("userId", localStorage.getItem("id"));
    formData.append('restaurantEmail', restaurantEmail);

    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
    await axios.post(`${baseUrl}/restaurant/create`, formData, config);
    navigate(-1);
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Restaurantheader/>
      <div className={styles.box}>
        <h2>Add Restaurant</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the resturant name"
                name="restaurantName"
                value={restaurantName}
                onChange={(e) => onInputChange(e)}
                required/>
      
              {/* <label htmlFor="address">Address</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Street, City, State"
                name="restaurantLocation"
                value={restaurantLocation}
                onChange={(e) => onInputChange(e)}
              /> */}

          <label htmlFor="address.street">Street</label>
          <input value={street} onChange={(e) => setstreet(e.target.value)} type="text" className={styles.text} placeholder="Your Street Name" id="street" name="address.street" required/>
          
          <label htmlFor="state">Your State</label>
          <select className={styles.text} value={state} onChange={(e)=>handleStateChange(e)} id="state" name="address.state" required>
          <option value=''>Select Your State</option>
          {states?.map((item,index)=>
          <option key={index} value={item}>{item}</option>
          )}
          </select>
          
          <label htmlFor="city">Your City</label>
          <select className={styles.text} value={citys} onChange={(e) => setcitys(e.target.value)} id="city" name="address.city"  required> 
          <option value=''>Select Your City</option>
          {city !=='Select City' && city?.map((item,index)=>
          <option key={index} value={item?.name}>{item?.name}</option>
          )}
          </select>
          
          <label htmlFor="zipCode">Postal Code</label>
          <input className={styles.text} value={zipcode}  onChange={(e) => setzipcode(e.target.value)} type="text" placeholder="Your Pincode" id="zipCode" name="address.zipCode" required/>
    
              <label htmlFor="Phone">Contact number</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the contact number"
                name="restaurantContact"
                value={restaurantContact}
                onChange={(e) => onInputChange(e)}
                required/>

            <label htmlFor="Email">Email</label>
            <input
              type={"text"}
              className={styles.text}
              placeholder="Enter the Email"
              name="restaurantEmail"
              value={restaurantEmail}
              onChange={(e) => onInputChange(e)}
            required/>
            
            
            <label htmlFor="file">File:</label>
            <input type="file" id="file" onChange={handleFileChange} />
      
            </div>
            <button type="submit" className={styles.savebutton}>
              Save
            </button>
            <Link className={styles.cancelbutton} onClick={() => navigate(-1)}>
              Cancel
            </Link>
          </form>
      </div>
    </div>
  );
};

export default AddRestaurant;
