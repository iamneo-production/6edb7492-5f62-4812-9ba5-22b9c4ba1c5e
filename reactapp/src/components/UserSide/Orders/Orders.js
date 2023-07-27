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
  
  }, [refresh])

  const handelOrder = (Reorder) => {
    console.log(Reorder);
    let Newitems = Reorder.items.map(item => { 
      return { 
        description: item.description,
        name: item.name,
        price: item.price,
        restaurantId: item.restaurantId,
        tags: item.tags,
      }
    })
    let newOrder = {
      customerId: Reorder.customerId,
      customerName: Reorder.customerName,
      status: "Pending",
      totalCost: Reorder.totalCost,
      items: Newitems,
      deliveryAddress: Reorder.deliveryAddress,
    }
    axios.post(`${baseUrl}/order`, newOrder ).then((res) => {
      console.log(res.data);
      navigate("/checkout")
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
          <center><table className="color-border-table" style={{ width: '900px' }}>
            <thead>
              <tr>
                <th style={{ width: '50px' }}>S.no</th>
                <th style={{ width: '70px' }}>Order ID</th>
                <th style={{ width: '120px' }}>Customer Name</th>
                <th style={{ width: '80px' }}>Total cost</th>
                <th style={{ width: '120px' }}>Ordered Date</th>
                <th style={{ width: '120px' }}>Ordered Time</th>
                <th style={{ width: '70px' }}>Status</th>
                <th style={{ width: '200px' }}><center>Action</center></th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "15px" }}>
                {
                  
                  orders.map((order, index) => (
                    
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.id}</td>
                      <td>{order.customerName}</td>
                      <td>{order.totalCost}</td>
                      <td>{new Date(order.deliveryTime).toLocaleDateString()}</td>
                      <td>{new Date(order.deliveryTime).toLocaleTimeString() }</td>
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