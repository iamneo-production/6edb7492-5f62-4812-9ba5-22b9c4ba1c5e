import React, { useState } from "react";
import "./delivery.css";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../NavBar/Header";
import OrderPlaced from "./OrderPlaced";

function OrderForm() {
  const {price} = useParams();
  let totalCost = price;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOnlinePayment = (event) => {
    setPaymentMethod(event.target.value);
    navigate(`/payment/${totalCost}`);
  } 

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the order placement logic here

    // Reset the form fields
    setName("");
    setPhone("");
    setAddress("");
    setCity("");
    setZip("");
    setPaymentMethod("");

    // Display the success message and confetti
    setOrderPlaced(true);
  };

  const isOrderDisabled =
    !name || !phone || !address || !city || !zip || !paymentMethod;

  return (
    <div className="whole-content">
      <Header />
      <div className="del-container">
        <form onSubmit={handleSubmit} className="del-form-container">
          <h2 style={{ textAlign: "center" }}>Delivery Address</h2>

          {/* Delivery address form fields */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          ></textarea>

          <div className="del-flex">
            <div className="del-input-box">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
              />
            </div>

            <div className="del-input-box">
              <label htmlFor="zip">ZIP Code:</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
                required
              />
            </div>
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "45px" }}>
            Mode of Payment
          </h2>
          <input
            type="radio"
            id="cod"
            name="onlinepayment"
            value="cod"
            checked={paymentMethod === "onlinepayment"}
            onChange={handleOnlinePayment}
          />
        <div className="cod-label-container">
            <label htmlFor="cod" className="del-radio-option">
              Online Payment
            </label>
          </div>
          <br/>
          <br/> 

          <input
            type="radio"
            id="cod"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={handlePaymentChange}
            required
          />
          <div className="cod-label-container">
            <label htmlFor="cod" className="del-radio-option">
              Cash on Delivery (COD)
            </label>
          </div>
          <br />
          <br />
          <div className="button-container">
            <button
              type="submit"
              disabled={isOrderDisabled}
              className={isOrderDisabled ? "" : "enabled-button"}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>

      {orderPlaced && <OrderPlaced />}
    </div>
  );
}

export default OrderForm;