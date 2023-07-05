import React, { useState } from 'react';
import profile from './profile';

const UserProfile = ({ user, onUsernameChange, onPasswordChange }) => {
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const toggleEditUsername = () => {
    setIsEditingUsername(!isEditingUsername);
  };

  const toggleEditPassword = () => {
    setIsEditingPassword(!isEditingPassword);
  };

  const handleUsernameSave = () => {
    onUsernameChange(newUsername);
    setIsEditingUsername(false);
  };

  const handlePasswordSave = () => {
    onPasswordChange(newPassword);
    setIsEditingPassword(false);
  };
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, City',
    avatar: 'path/to/avatar.jpg',
    orders: [
      {
        id: 1,
        date: '2023-06-20',
        total: 25.99,
      },
      {
        id: 2,
        date: '2023-06-18',
        total: 19.99,
      },
      // Add more orders as needed
    ],
  };

  return (
    
    <div className="user-profile">
        <div className='user'><UserProfile user={user} /></div>
      <h2>Welcome, {user.name}!</h2>
      <div className="user-details">
        <div className="avatar">
          <img src={user.avatar} alt="User Avatar" />
        </div>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {isEditingUsername ? (
              <input type="text" value={newUsername} onChange={handleUsernameChange} />
            ) : (
              <span>{user.name}</span>
            )}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      </div>
      <div className="edit-buttons">
        {isEditingUsername ? (
          <button onClick={handleUsernameSave}>Save</button>
        ) : (
          <button onClick={toggleEditUsername}>Edit Username</button>
        )}
        {isEditingPassword ? (
          <button onClick={handlePasswordSave}>Save</button>
        ) : (
          <button onClick={toggleEditPassword}>Change Password</button>
        )}
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

export default UserProfile;
