import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import DeliveryNav from "../Delivery/Delivery Navbar/DeliveryNav";
import { baseUrl } from "../API/Api";
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentSection, setCurrentSection] = useState("users");
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/auth/users`)
      .then((response) => {
        console.log(response.data,"users   ");
        setUsers(response.data.filter((user) => user.role === "user"));
        setRestaurants(
          response.data.filter((user) => user.role === "restaurant")
        );
        setDelivery(response.data.filter((user)=> user.role === "delivery" ))
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${baseUrl}/order`)
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${baseUrl}/api/auth?id=${id}`)
      .then((response) => {
        console.log(response.data);
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteRestaurant = (id) => {
    axios
      .delete(`${baseUrl}/api/auth?id=${id}`)
      .then((response) => {
        console.log(response.data);
        const newRestaurants = restaurants.filter((user) => user.id !== id);
        setRestaurants(newRestaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteDelivery = (id) => {
    axios
      .delete(`${baseUrl}/api/auth?id=${id}`)
      .then((response) => {
        console.log(response.data);
        const newDelivery = delivery.filter((user) => user.id !== id);
        setDelivery(newDelivery)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderSection = () => {
    switch (currentSection) {
      case "users":
        return (
          <div className="table-container">
            <a className="brand" style={{color:'white'}}>Foodle Users</a>
            <table className="border-table">
            <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
               </table>
          </div>
        );
      case "restaurants":
        return (
          <div className="table-container">
            <a className="brand" style={{color:'white'}}>Foodle Restaurants</a>
            <table className="border-table">
            <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{restaurant.name}</td>
                    <td>{restaurant.email}</td>
                    <td>{restaurant.phone}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteRestaurant(restaurant.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
               </table>
          </div>
        );
      case "orders":
        return (
          <div className="table-container">
            <a className="brand" style={{color:'white'}}>Foodle Orders</a>
            <table className="border-table">
            <thead>
                <tr>
                  <th>S.no</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Cost</th>
                  <th>Ordered Date</th>
                  <th>Ordered Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.totalCost}</td>
                    <td>
                      {new Date(order.deliveryTime).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(order.deliveryTime).toLocaleTimeString()}
                    </td>
                    <td>{ order.status }</td>
                  </tr>
                ))}
              </tbody>
              </table>
          </div>
        );
      case "deliveryPerson":
        return (
          <div className="table-container">
            <a className="brand" style={{color:'white'}}>Foodle Delivery Person</a>
            <table className="deliver-border-table">
             <thead>
               <tr>
                 <th>S.no</th>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Phone Number</th>
                 <th>Action</th>
               </tr>
             </thead>
              <tbody>
                
                {delivery.map((deliver, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{deliver.name}</td>
                    <td>{deliver.email}</td>
                    <td>{deliver.phone}</td>
                    <td>
                     <button
                       onClick={() => handleDeleteDelivery(deliver.id)}
                       className="deliver-deletebutton"
                     >
                       Delete
                     </button>
                   </td>
                  </tr>
                ))

                }
             </tbody>
           </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard" style={{ backgroundColor: "#060606" }}>
      <DeliveryNav />
      <center>
        <div className="admin-body">
          
          <h2 className="admin-title">Admin Dashboard</h2>
          <div className="dashboard-menu">
            <button onClick={() => setCurrentSection("users")}>Foodle Users</button>
            <button onClick={() => setCurrentSection("restaurants")}>Foodle Restaurants</button>
            <button onClick={() => setCurrentSection("orders")}>Foodle Orders</button>
            <button onClick={() => setCurrentSection("deliveryPerson")}>Foodle Delivery Person</button>
          </div>
          
          {renderSection()}
        </div>
      </center>
    </div>
  );
};

export default AdminDashboard;
