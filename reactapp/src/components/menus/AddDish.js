import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import styles from "./style.module.css";
import { Form,Container} from 'react-bootstrap';
import { baseUrl } from "../Add Restrauants/OwnerLogin";

const AddDish = () => {
    let navigate=useNavigate()
  const [dish, setdish] = useState({
    name: "",
    cuisine: "",
    price: "",
  });
  const {id} = useParams();
  const { name, cuisine, price } = dish;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  // const handleImageUpload = () => {
    

  //   axios
  //     .post('http://localhost:8090/upload', formData)
  //     .then(() => {
  //       setSelectedImage(null);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const onInputChange = (e) => {
    setdish({ ...dish, [e.target.name]: e.target.value });
  };

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
    await axios.post(`${baseUrl}/dish`,formData)
    navigate(-1)
    }
    else
    {
      alert("Update Image!");
    }
  };

  return (
    <Container>
    <div>
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
                name="cuisine"
                value={cuisine}
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
              <Form>
              <Form.Group>
                <Form.Label>Select Image:</Form.Label>
                <Form.Control className={styles.text} type="file" onChange={handleImageChange} />
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
      </Container>
  );
};

export default AddDish;
