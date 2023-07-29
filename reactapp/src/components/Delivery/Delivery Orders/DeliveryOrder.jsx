import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../API/Api";
import DeliveryNav from '../Delivery Navbar/DeliveryNav';

const DeliveryOrder = () => {
    const [orders, setOrders] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`${baseUrl}/order`).then((res) => {
          console.log(res.data);
          console.log(localStorage.getItem("id"));
          setOrders(res.data.filter((order) => order.deliveryExecutiveId == localStorage.getItem("id")));
        }).catch((err) => { 
          console.log(err);
        })
      
      }, [refresh])

    const filteredOrders = orders.filter((order) => order.deliveryExecutiveId === localStorage);  
    
    return(
      <div>
        <DeliveryNav />
        <div>
            <center>
      <div className="adminbody">
        <h2 className="title">Orders</h2>
        <div className="table-container">
          <center><table className="color-border-table" style={{ width: '900px' }}>
            <thead>
              <tr>
                <th style={{ width: '50px' }}>S.no</th>
                <th style={{ width: '70px' }}>Order ID</th>
                <th style={{ width: '120px' }}>Customer Name</th>
                <th style={{ width: '120px' }}>Restaurant Name</th>
                <th style={{ width: '80px' }}>Total cost</th>
                <th style={{ width: '120px' }}>Ordered Date</th>
                <th style={{ width: '120px' }}>Ordered Time</th>
                <th style={{ width: '70px' }}>Status</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "15px" }}>
                {
                  
                  orders.map((order, index) => (
                    
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.id}</td>
                      <td>{order.customerName}</td>
                      <td>{order.restaurantName}</td>
                      <td>{order.totalCost}</td>
                      <td>{new Date(order.deliveryTime).toLocaleDateString()}</td>
                      <td>{new Date(order.deliveryTime).toLocaleTimeString() }</td>
                      <td>{order.status}</td>
                     </tr>
                  ))
                }
            </tbody>
          </table></center>
        </div>
      </div>
      </center>
        </div>
        </div>
    );
}
export default DeliveryOrder;