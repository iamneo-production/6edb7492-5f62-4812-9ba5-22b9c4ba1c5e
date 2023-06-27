import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import { baseUrl } from "../Add Restrauants/OwnerLogin";

const ViewDish = () => {
  
  const [images, setImages] = useState(null);
    const navigate = useNavigate();
    const [dish,setdish]=useState({
        name:"",
        cuisine:"",
        price:"",
        image:""
    })
    
    const {id}=useParams();

    useEffect(()=>{
        loadDish();
    })

    // useEffect(() => {
    //   axios.get('http://localhost:8080/api/image') // Replace with your Spring Boot endpoint URL
    //     .then(response => {
    //       const base64String = btoa(
    //         Array.from(new Uint8Array(response.data), byte => String.fromCharCode(byte)).join('')
    //       );
    //       setImageData(`data:image/jpeg;base64, ${base64String}`);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching image data:', error);
    //     });
    // }, []);

    const loadDish=async ()=>{
        await axios.get(`${baseUrl}/dish/${id}`)
        .then(response => {
          setdish(response.data);
          setImages(`data:image/jpeg;base64, ${dish.image.body}`);
        })
        .catch(error => {
          console.error('Error fetching image data:', error);
        });


    }
  return (
    <div className={styles.box}>
    <h2 className={styles.list}>Dish Details</h2><br/><br/>
              <div>
                  <div className={styles.list}>
                        <b>Name : </b>
                        <b className={styles.cont}>{dish.name}</b> <br/><br/>
                        <b>Cuisine : </b>
                        <b className={styles.cont}>{dish.cuisine}</b><br/><br/>
                        <b>Price : </b>
                        <b className={styles.cont}>{dish.price}</b><br/><br/>
                  </div>
                  <img src={images} className={styles.pimage} />
            </div>
          <div className={styles.buttoncontainer}> 
          <Link className={styles.homebutton} onClick={() => navigate(-1)}>Back to Home</Link>
        </div>
      </div>
  );
};

export default ViewDish;
