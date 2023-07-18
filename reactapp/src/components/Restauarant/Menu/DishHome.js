import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../API/Api";


const DishHome = () => {
  const [dishes, setdishes] = useState([]);
  const [resturant, setResturant] = useState({});
  const [refresh, setRefresh] = useState(false);

  const deleteDishes=async (id)=>{
    console.log(id);
    await axios.delete(`${baseUrl}/menu-item?menuId=${id}`)
      .then((res) => { 
        console.log(res.data);
        setRefresh(!refresh);
      }).catch((err) => console.log(err));
  }
  const { id } = useParams();
  
  useEffect(() => { 
    console.log(id);
    axios.get(`${baseUrl}/restaurant/all`)
      .then((response) => { 
        setResturant(response.data);
        console.log(response.data);
        response.data.map((rest) => { 
          if (rest.restaurantId == id) { 
            setdishes(rest.restaurantmenu);
            console.log(rest.restaurantmenu);
          }
        })
      })
      .catch((error) => { console.log(error) })
  },[refresh])

  return (

    <div className={styles.contain}>
      <div className={styles.py}>
          <a className={styles.brand}>
            Customize Menu
          </a>
          <Link className={styles.addbutton} to={`/adddish/${id}`}>Add Dish</Link>
      <table className={styles.shadowtable}>
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Cuisine</th>
              <th scope="col">Price</th>
              <th scope="col">Tags</th>
              <th scope="col">Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish, index) => (
              <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{dish.name}</td>
                <td>{dish.description}</td>
                <td>{dish.price}</td>
                <td>{dish.tags}</td>

                {dish.image && dish.image.body && (
                          <img
                            src={`data:${dish.image.headers['Content-Type'][0]};base64,${dish.image.body}`}
                            alt="Restaurant Image"
                            style={{ height: '100px', width : '100px'}}
                          />
                        )}
                <td>
                    <Link className={styles.updatebutton} to={`/res/${id}/updatedish/${dish.id}`}>Update</Link>
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

export default DishHome;
