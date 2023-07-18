// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
import './DeliveryNav.css';

const DeliveryNav = () => {
  const profilePicUrl = 'https://img.freepik.com/free-icon/user_318-875902.jpg';
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = () => { 
    localStorage.clear();
    window.location.href = '/login';
  }

  return (
    <div className="header">
      <img src={logo} alt="Logo" style={logoStyle} />
      <div className="profile-icon" onClick={toggleOptions}>
      <Link className='log' onClick={handleLogout} >Logout</Link>
      </div>
    </div>
  );
};

const logoStyle = {
  width: '75px',
  height: '75px',
  marginRight: '10px',
  border: '5px solid red',
};

const profilePicStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
};

export default DeliveryNav;