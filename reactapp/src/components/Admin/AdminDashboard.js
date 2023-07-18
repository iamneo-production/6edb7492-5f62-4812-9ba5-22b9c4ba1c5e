// import React, { useState, useEffect } from "react";
// import "./AdminDashboard.css";
// import axios from "axios";
// import Header from "../UserSide/NavBar/Header";

// const AdminDashboard = () => {
//   const [users, setusers] = useState([]);
//   const [resturants, setresturants] = useState([]);
//   const [orders, setorders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8090/api/auth/users")
//       .then((response) => {
//         console.log(response.data);
//         setusers(response.data.filter((user) => user.role === "user"));
//         setresturants(
//           response.data.filter((user) => user.role === "restaurant")
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     axios
//       .get("http://localhost:8090/order")
//       .then((response) => {
//         console.log(response.data);
//         setorders(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:8090/api/auth?id=${id}`)
//       .then((response) => {
//         console.log(response.data);
//         const newusers = users.filter((user) => user.id !== id);
//         setusers(newusers);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleDeleteResturant = (id) => {
//     axios
//       .delete(`http://localhost:8090/api/auth?id=${id}`)
//       .then((response) => {
//         console.log(response.data);
//         const newresturants = resturants.filter((user) => user.id !== id);
//         setresturants(newresturants);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div  style={{ backgroundColor: "#060606" }}>
//       <Header />
//       <center>
//       <div className="adminbody">
//         <h2 className="title">Admin Dashboard</h2>
//         <div className="table-container">
//           <a className="brand">Foodle Users</a>
//           <table className="color-border-table">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>
//                     <button
//                       onClick={() => handleDelete(user.id)}
//                       className="deletebutton"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="table-container">
//           <a className="brand">Foodle Restaurants</a>
//           <table className="color-border-table">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {resturants.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>
//                     <button
//                       onClick={() => handleDeleteResturant(user.id)}
//                       className="deletebutton"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="table-container">
//           <a className="brand">Foodle Orders</a>
//           <table className="color-border-table">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Order ID</th>
//                 <th>Customer</th>
//                 <th>Cost</th>
//                 <th>Ordered Date</th>
//                 <th>Ordered Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, index) => (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{order.id}</td>
//                   <td>{order.customerName}</td>
//                   <td>{order.totalCost}</td>
//                   <td>{new Date(order.deliveryTime).toLocaleDateString()}</td>
//                   <td>{new Date(order.deliveryTime).toLocaleTimeString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* <div className="table-container">
//           <a className="brand">Foodle Delivery Person</a>
//           <table className="color-border-table">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
             
//                   <td>1</td>
//                   <td>abc</td>
//                   <td>abc@gmail.com</td>
//                   <td>1234567890</td>
//                   <td>
//                     <button
                     
//                       className="deletebutton"
//                     >
//                       Delete
//                     </button>
//                   </td>
               
              
//             </tbody>
//           </table>
//         </div> */}
//       </div>
//       </center>
//     </div>
//   );
// };
// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import Header from "../UserSide/NavBar/Header";
import { baseUrl } from "../API/Api";
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}api/auth/users`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.filter((user) => user.role === "user"));
        setRestaurants(
          response.data.filter((user) => user.role === "restaurant")
        );
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

  return (
    <div className="admin-dashboard" style={{ backgroundColor: "#060606" }}>
      <Header />
      <center>
        <div className="admin-body">
          <h2 className="admin-title">Admin Dashboard</h2>
          <div className="table-container">
            <a className="brand">Foodle Users</a>
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

          <div className="table-container">
            <a className="brand">Foodle Restaurants</a>
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

          <div className="table-container">
            <a className="brand">Foodle Orders</a>
            <table className="border-table">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-container">
           <a className="brand">Foodle Delivery Person</a>
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
             
                   <td>1</td>
                   <td>abc</td>
                   <td>abc@gmail.com</td>
                   <td>1234567890</td>
                   <td>
                     <button
                     
                       className="deliver-deletebutton"
                     >
                       Delete
                     </button>
                   </td>
               
              
             </tbody>
           </table>
         </div> 
          
        </div>
      </center>
    </div>
  );
};

export default AdminDashboard;