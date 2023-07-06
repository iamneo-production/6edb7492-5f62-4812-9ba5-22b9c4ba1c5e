import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";
import { Form} from 'react-bootstrap';
import { baseUrl } from "../API/Api";

const UpdateDish = () => {
    let navigate=useNavigate()
    const {id} = useParams()

  const [dish, setdish] = useState({
    name: "",
    cuisine: "",
    price: "",
  });

  const { name, cuisine, price } = dish;

  const onInputChange = (e) => {
    setdish({ ...dish, [e.target.name]: e.target.value });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  useEffect(()=>{
    loadDish();
  },[]);

  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('productImage', selectedImage);
    formData.append('mainId',id);
    formData.append('name',name);
    formData.append('cuisine',cuisine);
    formData.append('price',price);
    if(selectedImage!=null)
    {
    await axios.put(`${baseUrl}/dish`,formData)
    navigate(-1)}
    else
    {
      alert("Update Image!");
    }
  };

  const loadDish = async ()=>{
    const result=await axios.get(`${baseUrl}/dish/${id}`)
    setdish(result.data)
  }
  
  return (
    <div>
        <div className={styles.box}>
        <h2>Update Dish</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div>
              <label htmlFor="Name">
                Name
              </label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the dish name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Cuisine">
                Cuisine
              </label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the cuisine"
                name="cuisine"
                value={cuisine}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="Price">
                Price
              </label>
              <input
                type={"text"}
                className={styles.text}
                placeholder="Enter the price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
            <Form>
              <Form.Group>
                <Form.Label>Select Image:</Form.Label>
                <Form.Control className={styles.text} type="file" onChange={handleImageChange} required/>
              </Form.Group>
              {/* <Button variant="primary" onClick={handleImageUpload} disabled={!selectedImage}>
                Upload
              </Button> */}
            </Form>
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

export default UpdateDish;
