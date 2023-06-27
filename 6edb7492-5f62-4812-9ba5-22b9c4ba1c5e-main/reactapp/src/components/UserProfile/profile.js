import React from 'react';
import './profile.css';

const profile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>Welcome, {user.name}!</h2>
      <div className="user-details">
        <div className="avatar">
          <img src={user.avatar} alt="User Avatar" />
        </div>
        <div className="user-info">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
        </div>
      </div>
      <h3>Order History</h3>
      <ul className="order-list">
        {user.orders.map((order) => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default profile;
