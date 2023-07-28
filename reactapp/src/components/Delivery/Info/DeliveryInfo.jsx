import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import styles from './DeliveryInfo.module.css';

const DeliveryInfo = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({}); // Initialize as an empty object
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/order?id=${id}`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setOrders(res.data[0]);
        } else {
          setOrders({}); // Set empty object if data is not an array or empty
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelivered = (id) => {
    axios.put(`${baseUrl}/order/status?id=${id}&status=Delivered&did=${localStorage.id}`)
      .then((res) => {
        console.log(res.data);
        navigate(-1);
      }).catch((err) => console.log(err))
  }

  return (
    <div>
      <div className={styles.box}>
      <h2>Order Details</h2>
        <form>
          <div>
            <label htmlFor="name">Customer Name</label>
            <input
              className={styles.text}
              type="text"
              name="name"
              value={orders.customerName || ""} // Provide a default empty string value
            />
            <label htmlFor="daddress">Delivery Address</label>
            <input
              type="text"
              className={styles.text}
              name="daddress"
              value={orders.deliveryAddress || ""} // Provide a default empty string value
            />
            <label htmlFor="ordertime">Order Time</label>
            <input
              type="text"
              name="ordertime"
              className={styles.text}
              value={
                orders.deliveryTime
                  ? new Date(orders.deliveryTime).toLocaleTimeString()
                  : "" // Provide a default empty string value
              }
            />
            <label htmlFor="restaurantname">Restaurant Name</label>
            <input
              type="text"
              name="restaurantname"
              className={styles.text}
              value={orders.restaurantName || ""} // Provide a default empty string value
            />
            <label htmlFor="restaurantLocation">Restaurant Address</label>
            <input
              type="text"
              className={styles.text}
              name="restaurantLocation"
              value={orders.restaurantLocation || ""} // Provide a default empty string value
            />
            <label htmlFor="items">Item</label>
            {Array.isArray(orders.items) && orders.items.length > 0 ? (
              // Check if orders.items is an array and not empty before mapping
              orders.items.map((item, index) => (
                <tr key={index}>
                  <td><input type="text" className={styles.text} name="restaurantLocation" value={item.name+" - "+item.quantity}/></td>
                </tr>
              ))
            ) : (
              <p>No items available.</p>
            )}

            <label htmlFor="totalCost">Total Cost</label>
            <input
              type="text"
              name="totalCost"
              className={styles.text}
              value={orders.totalCost || ""} // Provide a default empty string value
            />
          </div>
          <button onClick={() => handleDelivered(orders.id)} className={styles.savebutton}>
              Order Delivered
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInfo;