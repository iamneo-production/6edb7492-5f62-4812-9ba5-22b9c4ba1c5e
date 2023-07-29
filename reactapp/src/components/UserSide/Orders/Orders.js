import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import Header from "../NavBar/Header";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../API/Api";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`${baseUrl}/order`).then((res) => {
      console.log(res.data);
      console.log(localStorage.getItem("id"));
      setOrders(res.data.filter((order) => order.customerId == localStorage.getItem("id")));
      console.log(res.data.filter((order) => order.customerId == localStorage.getItem("id")));
    }).catch((err) => { 
      console.log(err);
    })
  
  },[])

  const handelOrder = (Reorder) => {
    console.log(Reorder);
    let Newitems = Reorder.items.map(item => { 
      return { 
        description: item.description,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        tags: item.tags,
      }
    })
    let newOrder = {
      customerId: Reorder.customerId,
      customerName: Reorder.customerName,
      status: "Pending",
      totalCost: Reorder.totalCost,
      restaurantName: Reorder.restaurantName,
      restaurantLocation: Reorder.restaurantLocation,
      items: Newitems,
      deliveryAddress: Reorder.deliveryAddress,
    }
    axios.post(`${baseUrl}/order`, newOrder ).then((res) => {
      console.log(res.data);
      window.location.reload(false);
      setRefresh(!refresh);
    }).catch((err) => { 
      console.log(err);
    })
  }
  
  return (
    <div  style={{ backgroundColor: "#060606" }}>
<Header />
      <center>
      <div className="adminbody">
        <h2 className="title">Orders</h2>
        <div className="table-container">
          <center><table className="color-border-table" style={{ width: '1200px' }}>
            <thead>
              <tr>
                <th style={{ width: '50px' }}>S.no</th>
                <th style={{ width: '120px' }}>Restaurant Name</th>
                <th style={{ width: '200px' }}>Restaurant Location</th>
                <th style={{ width: '250px' }}>Items</th>
                <th style={{ width: '80px' }}>Total cost</th>
                <th style={{ width: '120px' }}>Ordered Date</th>
                <th style={{ width: '120px' }}>Delivery Name</th>
                <th style={{ width: '120px' }}>Delivery Contact</th>
                <th style={{ width: '70px' }}>Status</th>
                <th style={{ width: '200px' }}><center>Action</center></th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "15px" }}>
                {
                  
                  orders.map((order, index) => (
                    
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.restaurantName}</td>
                      <td>{order.restaurantLocation}</td>
                      <td>{Array.isArray(order.items) && order.items.length > 0 ? (
                        // Check if orders.items is an array and not empty before mapping
                        order.items.map((item, index) => (
                            <>{item.name+" - "+item.quantity}<br></br></>
                        ))
                      ) : (
                        <p>No items available.</p>
                      )}</td>
                      <td>{order.totalCost}</td>
                      <td>{new Date(order.deliveryTime).toLocaleDateString()}</td>
                      <td>{order.deliveryName ? order.deliveryName : "none"}</td>
                      <td>{order.delivreyPhone ? order.delivreyPhone : "none"}</td>
                      <td>{order.status}</td>
                      <td ><center>
                        <button onClick={() => handelOrder(order)} className="reorderbutton">
                          Reorder
                        </button></center>
                      </td>
                     </tr>
                  ))
                }
            </tbody>
          </table></center>
        </div>
      </div>
      </center>
    </div>
  );
};
export default Orders;