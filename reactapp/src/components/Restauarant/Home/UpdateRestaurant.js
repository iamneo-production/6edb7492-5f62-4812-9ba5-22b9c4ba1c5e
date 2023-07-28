import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";

import { baseUrl } from "../../API/Api";
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";

const UpdateRestaurant = ({ UpdateRestaurant, setUpdate, refresh , setRefresh }) => {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);

  const [restaurant, setRestaurant] = useState({
    restaurantId: UpdateRestaurant.restaurantId,
    restaurantName: UpdateRestaurant.restaurantName,
    restaurantLocation: UpdateRestaurant.restaurantLocation,
    restaurantContact: UpdateRestaurant.restaurantContact,
    
  });

  const {restaurantId ,restaurantName, restaurantLocation, restaurantContact } = restaurant;

  const onInputChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('restaurantId', restaurantId);
    formData.append('restaurantName', restaurantName);
    formData.append('restaurantLocation', restaurantLocation);
    formData.append('restaurantContact', restaurantContact);
    formData.append('file', file);
    console.log(formData);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      await axios.put(`${baseUrl}/restaurant`, formData, config);
      handleCancel();
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCancel = () => {
    setUpdate(false);
  };

  return (
    <div>
      <Restaurantheader/>
      <div className={styles.box}>
        <h2>Add Restaurant</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the dish name"
              name="restaurantName"
              value={restaurantName}
              onChange={onInputChange}
              required/>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the Address"
              name="restaurantLocation"
              value={restaurantLocation}
              onChange={onInputChange}
              required/>

            <label htmlFor="Phone">Contact number</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the contact number"
              name="restaurantContact"
              value={restaurantContact}
              onChange={onInputChange}
              required/>

            <label htmlFor="file">File:</label>
            <input required type="file" id="file" onChange={handleFileChange} />
          </div>
          <button type="submit" className={styles.savebutton}>
            Save
          </button>
          <Link className={styles.cancelbutton} onClick={handleCancel}>
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
