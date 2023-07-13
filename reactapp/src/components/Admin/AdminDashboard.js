import React, { useState,useEffect } from "react";
import './AdminDashboard.css';
import axios from "axios";
import Header from '../UserSide/NavBar/Header';

const AdminDashboard = () => {

    const [users, setusers] = useState([])
    const [resturants, setresturants] = useState([])
    const [orders, setorders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/auth/users')
            .then((response) => {
                console.log(response.data);
                setusers(response.data.filter((user) => user.role === "user"));
                setresturants(response.data.filter((user) => user.role === "restaurant"));
            })
            .catch((error) => { 
                console.log(error);
            })
        axios.get("http://localhost:8080/order")
            .then((response) => {
                console.log(response.data);
                setorders(response.data);
            })
            .catch((error) => { 
                console.log(error);
            })

    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/auth?id=${id}`)
            .then((response) => {
                console.log(response.data);
                const newusers = users.filter((user) => user.id !== id);
                setusers(newusers);
            })
            .catch((error) => { 
                console.log(error);
            })
    }
    
    const handleDeleteResturant = (id) => {
        axios.delete(`http://localhost:8080/api/auth?id=${id}`)
            .then((response) => {
                console.log(response.data);
                const newresturants = resturants.filter((user) => user.id !== id);
                setresturants(newresturants);
            })
            .catch((error) => { 
                console.log(error);
            })
     }
    
  return (
      <div style={{backgroundColor:"white"}} >
            <Header />
    <h2  >Admin Dashboard</h2>
    <div className="table-container">
        <a className="brand">
            Foodle Users
        </a>
      <table className="color-border-table">
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
                      {users.map((user, index) => 
                           <tr key={index}>
                              <td>{ index+1 }</td>
                              <td>{ user.name }</td>
                              <td>{ user.email }</td>
                              <td>{ user.phone }</td>
                           <td>  
                             <button onClick={()=> handleDelete(user.id)} className="deletebutton">Delete</button>
                           </td>
                         </tr>
                      )}
        </tbody>
      </table>
    </div>


    <div className="table-container">
        <a className="brand">
            Foodle Restaurants
        </a>
      <table className="color-border-table">
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
                      {resturants.map((user, index) => 
                          <tr key={index}>
                              <td>{ index + 1}</td>
                              <td>{ user.name }</td>
                              <td>{ user.email }</td>
                              <td>{ user.phone }</td>
                            <td>  
                                <button onClick={()=> handleDeleteResturant(user.id)} className="deletebutton">Delete</button>
                            </td>
                        </tr>
            )}
          
        </tbody>
      </table>
    </div>


    <div className="table-container">
        <a className="brand">
            Foodle Orders
        </a>
      <table className="color-border-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Cost</th>
            <th>Ordered Date</th>
            <th>Ordered Time</th>              
          </tr>
        </thead>
        <tbody>
        {
                          orders.map((order, index) =>
                          <tr>
                                  <td>{ index+1 }</td>
                                  <td>{ order.id }</td>
                                  <td>{order.customerName}</td>
                                  <td>{ order.totalCost}</td>
                                  <td>{ new Date(order.deliveryTime).toLocaleDateString() }</td>
                                <td>{ new Date(order.deliveryTime).toLocaleTimeString() }</td>
                            </tr>
                          )                
          }
          
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminDashboard;