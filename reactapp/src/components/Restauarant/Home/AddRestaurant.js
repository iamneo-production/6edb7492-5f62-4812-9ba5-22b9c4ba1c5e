import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import styles from "./style.module.css";
import { Form, Button } from 'react-bootstrap';

const AddRestaurant = () => {
    let navigate=useNavigate()
  const [restaurant, setRestaurant] = useState({
    restaurantName: "",
    restaurantLocation: "",
    restaurantContact: "",
    restaurantEmail: "",
  });
  const { restaurantName, restaurantLocation, restaurantContact,restaurantEmail } = restaurant;
  const [file, setFile] = useState(null);


  const onInputChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(restaurant);
    const formData = new FormData();
    formData.append("restaurantName", restaurant.restaurantName);
    formData.append("restaurantLocation", restaurant.restaurantLocation);
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
    await axios.post("http://localhost:8080/restaurant/create", formData, config);
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
      <div className={styles.box}>
        <h2>Add Restaurant</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the dish name"
                name="restaurantName"
                value={restaurantName}
                onChange={(e) => onInputChange(e)}
              />
      
              <label htmlFor="address">Address</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the Address"
                name="restaurantLocation"
                value={restaurantLocation}
                onChange={(e) => onInputChange(e)}
              />
    
              <label htmlFor="Phone">Contact number</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the contact number"
                name="restaurantContact"
                value={restaurantContact}
                onChange={(e) => onInputChange(e)}
            />

            <label htmlFor="Email">Email</label>
            <input
              type={"text"}
              className={styles.text}
              placeholder="Enter the Email"
              name="restaurantEmail"
              value={restaurantEmail}
              onChange={(e) => onInputChange(e)}
            />
            
            
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
