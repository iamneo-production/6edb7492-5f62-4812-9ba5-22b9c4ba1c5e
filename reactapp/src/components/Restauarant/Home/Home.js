import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";
import UpdateRestaurantcomp from "./UpdateRestaurant";
import Restaurantheader from '../../UserSide/NavBar/Restaurantheader';
import { baseUrl } from "../../API/Api";

const Home = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const location=useLocation();
  const id=location.state?.id;
  console.log(id);
  const [refresh, setRefresh] = useState(false);
  const [update, setUpdate] = useState(false);
  const [UpdateRestaurant, setUpdateRestaurant] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/restaurant/all`)
      .then((response) => { 
        setRestaurant(response.data)
    }).catch((err) => console.log(err));
  }, [refresh]);


  const deleteRestaurant=async (id)=>{
    console.log(id);
    await axios.delete(`${baseUrl}/restaurant?id=${id}`)
      .then((response) => { 
        console.log(response.data);
        setRefresh(!refresh);
      })
      .catch((error) => { console.log(error) })
    console.log(restaurant, " resy");
  }

  const handleUpdate = (restaurant) => { 
    setUpdate(true);
    setUpdateRestaurant(restaurant);
  }

  if(update){
    return <UpdateRestaurantcomp UpdateRestaurant={UpdateRestaurant} setUpdate={setUpdate} refresh={refresh} setRefresh={setRefresh}  />
  }
  if (!update) {
    return (
      <>
         <Restaurantheader />
      <div className={styles.contain}>
      <div className={styles.py}>
          <a className={styles.brand}>
            Restaurants Home
          </a>
          <Link className={styles.addbutton} to={`/addrestaurant`}>Create Restaurant</Link>
      <table className={styles.shadowtable}>
          <thead>
            <tr>
              <th scope="col">Restaurant Id</th>
              <th scope="col">Restaurant Name</th>
              <th scope="col">Restaurant Location</th>
              <th scope="col">Restaurant Contact No.</th>
              <th scope="col">Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {restaurant && restaurant.map((restaurant, index) => (
               
                <>
                  { restaurant.userId == localStorage.id &&
                    <tr>
                      <th scope="row" key={index}>{ restaurant.restaurantId }</th>
                      <td>{restaurant.restaurantName}</td>
                      <td>{restaurant.restaurantLocation}</td>
                      <td>{restaurant.restaurantContact}</td>
                      <td>
                        {restaurant.image && restaurant.image.body && (
                          <img
                            src={`data:${restaurant.image.headers['Content-Type'][0]};base64,${restaurant.image.body}`}
                            alt="Restaurant Image" 
                            style={{ height: '100px', width : '100px'}}
                          />
                        )}
                      </td>
                      <td>
                        <Link className={styles.updatebutton} onClick={() => handleUpdate(restaurant)} >Update</Link>
                        <button className={styles.deletebutton} onClick={() => deleteRestaurant(restaurant.restaurantId)}>Delete</button>
                        <Link className={styles.updatebutton} to={`/dish/${restaurant.restaurantId}`}  >Customize Menu</Link>
                        <Link className={styles.updatebutton} to="/restaurantreviews">Reviews</Link>
                      </td>
                    </tr>
                  }
              </>
                  
            ))}
          </tbody>
        </table>
      </div>
        </div>
        </>
    )
  }
};

export default Home;
