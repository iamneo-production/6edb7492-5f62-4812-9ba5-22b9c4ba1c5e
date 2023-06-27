import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";
// import "./bootstrap/dist/css/bootstrap.min.css";
// import Navbar1 from "./components/layout/Navbar1";

const Home = () => {
  const [dishes, setdishes] = useState([]);
  const location=useLocation();
  const id=location.state?.id;
  const [images, setImages] = useState(null);
  console.log(id);

  useEffect(() => {
    loadDishes();
  }, []);

  const loadDishes = async () => {
    const result = await axios.get(`http://localhost:8090/dishes/${id}`);
    setdishes(result.data);
    console.log(result.data);
  };

  const deleteDishes=async (id)=>{
    await axios.delete(`http://localhost:8090/dish/${id}`)
    loadDishes()
  }
  return (
    <div className={styles.contain}>
      <div className={styles.py}>
          <a className={styles.brand}>
            Customize Menu
          </a>
          <Link className={styles.addbutton} to={`/adddish/${id}`}>Add Dish</Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to={`/adddish/${id}`}>Add Dish</Link>
        </div> */}
      {/* <div className="py-4"> */}
      <table className={styles.shadowtable}>
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Cuisine</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, index) => (
              <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{dish.name}</td>
                <td>{dish.cuisine}</td>
                <td>{dish.price}</td>
                {/* <td>{setImages(`data:image/jpeg;base64, ${dish.dimage.imageData}`)}</td> */}
                <td><img className={styles.dimage} src={`data:image/jpeg;base64, ${dish.image.body}`}/></td>
                {/* <td>{console.log(dish.dimage.imageData)}</td> */}
                <td>
                    <Link className={styles.viewbutton} to={`/viewdish/${dish.id}`}>View</Link>
                    <Link className={styles.updatebutton} to={`/updatedish/${dish.id}`}>Update</Link>
                    <button className={styles.deletebutton}
                    onClick={()=>deleteDishes(dish.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
