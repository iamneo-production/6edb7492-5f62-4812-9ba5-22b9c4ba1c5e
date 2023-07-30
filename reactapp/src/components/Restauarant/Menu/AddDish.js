import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import styles from "./style.module.css";
import { Form, Button } from 'react-bootstrap';
import { baseUrl } from "../../API/Api";
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";

const AddDish = () => {
    let navigate=useNavigate()
  const [dish, setdish] = useState({
    name: "",
    description: "",
    price: "",
    tags:""
  });
  const [file, setFile] = useState(null);

  const {id} = useParams();
  const { name, description, price,tags } = dish;
  


  const onInputChange = (e) => {
    setdish({ ...dish, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('restaurantId', id);
    formData.append('tags', tags);
    formData.append('file', file);

    axios.post(`${baseUrl}/menu-item/create`, formData)
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((error) => { 
        console.log(error);
      })
    
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Restaurantheader/>
      <div className={styles.box}>
        <h2>Add Dish</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the dish name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
      
              <label htmlFor="Cuisine">Cuisine</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the cuisine"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
    
              <label htmlFor="Price">Price</label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
            />

            <label htmlFor="Tags">Tags</label>
            <input
              type={"text"}
              className={styles.text}
              placeholder="Enter the tags"
              name="tags"
              value={tags}
              onChange={(e) => onInputChange(e)}
            />
            
            <label htmlFor="file">File:</label>
            <input type="file" id="file" onChange={handleFileChange} />
              
              {/* <Form>
              <Form.Group>
                <Form.Label>Select Image:</Form.Label>
                <Form.Control className={styles.text} type="file" onChange={handleImageChange} />
              </Form.Group> */}
            {/* </Form> */}
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

export default AddDish;
