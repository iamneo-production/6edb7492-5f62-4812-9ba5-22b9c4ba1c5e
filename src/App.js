import React from "react";
import RestaurantReviews from "./RestaurantReviews";
import bg from "./back.jpg";
import logo from "./dindigul-thalappakatti-logo.png";
import foodImage from "./dindimg.jpg";
import foodImage1 from "./imgg1.jpg";
import foodImage2 from "./img3.jpg";
import foodImage3 from "./img5.jpg";
import starImage from "./Frame.png";
import starImage1 from "./star3.png";
import reviewImage1 from "./Frame2.png";
import reviewImage2 from "./Frame3.png";
import reviewImage3 from "./Frame4.png";
import reviewImage4 from "./Frame.png";


const App = () => {
  return (
    <div>
      <div className="img-container">
        <div>
          <img src={bg} alt="bg" className="bg" />
          <img src={logo} alt="Dindigul Thalappakatti Logo" className="logo" />
        </div>

        <div className="food-Img-Container">
          <div
            style={{
              background: "black",
            }}
          >
            <img src={foodImage2} alt="Food" className="food-image-3" />
           
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img src={foodImage} alt="Food" className="food-image" />
            <img src={foodImage1} alt="Food" className="food-image" />
            <img src={foodImage3} alt="Food" className="food-image-3" />
          </div>
        </div>

        <div
          className="restaurant-name"
          style={{
            pading: "10px",
            display: "block",
            margin:"20px"
          }}
        >
          <h2
            className=""
            style={{
              fontWeight: "bold",
              fontFamily: "Helvetica",
              fontSize: "35px",
              color:"black",
              position:"relative",
              top:"100%"
            }}
          >
            {" "}
            
          </h2>
          <div
            style={{
              fontFamily:"Helvetica",
              fontSize: "20px",
              color: "black",
              textAlign: "start",
              
            }}
          >
            
            <p className="address-name1">(Biriyani,South Indian,Hydrabadi)  </p>
            <p className="new"> Address: No.2 poonamalle,</p>
            <p  className="address-name">Chennai-68</p>
            <p  className="address-name">Opens - now : 11 AM - 11 PM</p>
            
          </div>
        </div>
      </div>
      <div><img src = {starImage} alt = "star" className="star-image"/></div>
      <div><img src = {starImage1} alt = "star" className="star-image2"/></div>
      <p className="writings1">108</p>
      <p className="writings2">Dining reviews</p>
      <p className="writings3">1200</p>
      <p className="writings4">Delivery reviews</p>
      <p className="writings5">........................</p>
      <p className="writings6">...........................</p>
      <h1 className="text-main">Dindigul Thalappakatti Restaurant</h1>
      <img src = {reviewImage1} alt = "review" className="revImg1"></img>
      <img src = {reviewImage2} alt = "review" className="revImg2"></img>
      <img src = {reviewImage3} alt = "review" className="revImg3"></img>
      <img src = {reviewImage4} alt = "review" className="revImg4"></img>
      <RestaurantReviews />
    </div>
      );
};

export default App;
