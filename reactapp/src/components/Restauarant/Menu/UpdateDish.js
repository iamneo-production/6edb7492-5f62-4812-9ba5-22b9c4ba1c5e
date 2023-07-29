import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";
import { baseUrl } from "../../API/Api";
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";
const UpdateDish = () => {
  let navigate = useNavigate();
  const { rid,id } = useParams();


  useEffect(() => {
    axios
      .get(`${baseUrl}/menu-item?id=${id}`)
      .then((res) => {
        console.log(res.data);
        setDish({name:res.data[0].name,description:res.data[0].description,price:res.data[0].price,tags:res.data[0].tags,restaurantId: rid,id:id});
      })
      .catch((err) => console.log(err));
  }, []);

  const [dish, setDish] = useState({
    name: "",
    description: "",
    price: "",
    tags: "",
    restaurantId: rid,
    id:id
  });

  const { name, description, price, tags } = dish;

  const onInputChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(dish);
    await axios.put(`${baseUrl}/menu-item`, dish)
      .then((res) => { 
        console.log(res.data);
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Restaurantheader/>
      <div className={styles.box}>
        <h2>Update Dish</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label className='labl' htmlFor="name">Name</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the dish name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label className="labl" htmlFor="description">Cuisine</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the cuisine"
              name="description"
              value={description}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label className='labl' htmlFor="price">Price</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the price"
              name="price"
              value={price}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label className='labl' htmlFor="tags">Tags</label>
            <input
              type="text"
              className={styles.text}
              placeholder="Enter the tags"
              name="tags"
              value={tags}
              onChange={onInputChange}
            />
          </div>
          <div>
            {/* Image upload logic */}
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
