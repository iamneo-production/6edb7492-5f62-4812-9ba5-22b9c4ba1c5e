import React, { useState, useEffect } from "react";
import "./DeliveryHome.css";
import axios from "axios";
import DeliveryNav from '../Delivery Navbar/DeliveryNav';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../API/Api";

const DeliveryHome = () => {
  
  const [orders, setorders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${baseUrl}/order`)
      .then((res) => {
        setorders(res.data);
      })
      .catch(err => console.log(err));
  }, [refresh]);
  
  const handleAccept = (id) => {
    axios.put(`${baseUrl}/order/status?id=${id}&status=Accepted&did=${localStorage.id}`)
      .then((res) => {
        console.log(res.data);
        setRefresh(!refresh)
      }).catch((err) => console.log(err))
      navigate(`/deliveryinfo/${id}`);

  }

  // const handleDelivered = (id) => {
  //   axios.put(`${baseUrl}/order/status?id=${id}&status=Delivered`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setRefresh(!refresh)
  //     }).catch((err) => console.log(err))
  // }
  
  return (
    <div  style={{ backgroundColor: "#060606" }}>
      <DeliveryNav />
      <center>
      <div className="adminbody">
        <h2 className="title">Customer Orders</h2>
        <div className="table-container">
          <center><table className="color-border-table" style={{ width: '900px' }}>
            <thead>
              <tr>
              <th style={{ width: '50px' }}>S.no</th>
                <th style={{ width: '70px' }}>Order ID</th>
                <th style={{ width: '120px' }}>Customer Name</th>
                <th style={{ width: '130px' }}>Delivery Address</th>
                <th style={{ width: '120px' }}>Restaurant Name</th>
                <th style={{ width: '130px' }}>Restaurant Address</th>
                <th style={{ width: '80px' }}>Total cost</th>
                {/* <th style={{ width: '80px' }}>Ordered Date</th> */}
                  {/* <th style={{ width: '80px' }}>Ordered Time</th> */}
                  <th style={{ width: '80px' }}>Status</th>
                <th style={{ width: '200px' }}><center>Action</center></th>
                 </tr>
            </thead>
            <tbody style={{ fontSize: "15px" }}>
            {orders.map((order, index) => {

            const inputString = order.restaurantLocation;
            const regex = /^([^,]+),\s*([^,]+),\s*([^,]+),\s*(\d+)$/;
            const match = inputString.match(regex);
            const location = match ? match[2].trim() : null;
            console.log(location,"location"); 
            const isLocationMatched = location === localStorage.address;

    const shouldDisplay =  isLocationMatched && order.status!="Delivered" && (order.deliveryExecutiveId==localStorage.id  || order.deliveryExecutiveId===null);

    return shouldDisplay ? (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{order.id}</td>
        <td>{order.customerName}</td>
        <td>{order.deliveryAddress}</td>
        <td>{order.restaurantName}</td>
        <td>{order.restaurantLocation}</td>
        {/* <td>{new Date(order.deliveryTime).toLocaleDateString()}</td>
        <td>{new Date(order.deliveryTime).toLocaleTimeString()}</td> */}
        <td>{order.totalCost}</td>
        <td>{order.status}</td>
        <td>      
        {order.status !== "Accepted" ? (
        <button className="acceptbutton" onClick={() => handleAccept(order.id)}>
          Accept
        </button>
        ) : <button className="statusbutton" onClick={() => handleAccept(order.id)}>
        Continue..    
        </button>
        }
          {/* <button className="statusbutton" onClick={() => handleDelivered(order.id)}>
            Delivered
          </button> */}
        </td>
      </tr>
    ) : (
      // If the condition is not met, you can return null or an empty fragment to avoid rendering anything for this order
      null
    );
  })}
  </tbody>
            {/* <tbody style={{fontSize:"15px"}}>
            {
                  orders.map((order, index) => (
                    
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{order.id}</td>
                      <td>{order.customerName}</td>
                      <td>{order.deliveryAddress}</td>
                      <td>{order.restaurantName}</td>
                      <td>{order.restaurantLocation}</td>
                      <td>{order.totalCost}</td>
                      <td>{order.status}</td>
                      {order.status === "Pending" || order.status === "Accepted"  ? 
                      <td >
                         
                             <button className="acceptbutton" onClick={() => handleAccept(order.id)} >
                             Accept
                           </button>
                     
                      <button className="statusbutton" onClick={() => handleDelivered(order.id)} >
                        Delivered
                      </button>
                        </td> :
                        <div className="dellbutton">
                          Delivered
                        </div>    
                      }
                    </tr>
                  ))
                  }
            </tbody> */}
          </table></center>
        </div>
      </div>
      </center>
    </div>
  );
};

export default DeliveryHome;