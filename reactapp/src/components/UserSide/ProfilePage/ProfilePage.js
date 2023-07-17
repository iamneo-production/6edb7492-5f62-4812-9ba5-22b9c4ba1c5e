import React, { useState } from 'react';
import './ProfilePage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../NavBar/Header';
import axios from 'axios';

const ProfilePage = () => {
  const [name, setName] = useState(localStorage.name);
  const [phoneNumber, setPhoneNumber] = useState(localStorage.phone);
  const [address, setAddress] = useState(localStorage.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

    const handleSaveChanges = () => {
      setPasswordError('');
    if (password !== confirmPassword) {
      setPasswordError('Please enter the correct password.');
      return;
    }

        const payload = {
            id: localStorage.id,
            name,
            phone: phoneNumber,
            password
        }
        
      axios.put('http://localhost:8080/api/auth/user', payload)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('phone', response.data.phone);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('id', response.data.id);
          toast.success('Changes saved successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          setIsEditing(false);
        })
        .catch((error) => { 
          console.log(error);
          toast.error('Something went wrong', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        })

   
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const validatePhoneNumber = (number) => {
    if (number.length !== 10) {
      setPhoneError('Please enter a 10-digit phone number.');
    } else {
      setPhoneError('');
    }
  };

    return (
      <>
          <Header></Header>
            <div className="profile-page">
      <h2>Profile Page</h2>
      <label htmlFor="name">Name:</label>
      {isEditing ? (
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <p style={{ color:"black" }} >{localStorage.name}</p>
      )}

      <label htmlFor="phoneNumber">Phone Number:</label>
      {isEditing ? (
        <>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={(e) => validatePhoneNumber(e.target.value)}
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </>
      ) : (
        <p style={{ color:"black" }}>{localStorage.phone}</p>
      )}

                {
                    !isEditing &&
                    <>
                        <label htmlFor="address">Email Id:</label>
                        <p style={{ color:"black" }}>{localStorage.email}</p>
                    </>
      }

                
                { !isEditing &&
                    <>
                        <label htmlFor="Role">Role :</label>
                        <p style={{ color:"black" }}>{localStorage.role}</p>
                    </>
                }

      {passwordError && <p className="error-message">{passwordError}</p>}

      {isEditing ? (
        <>
          <label htmlFor="password">Change Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      ) : null}

      {isEditing ? (
        <button onClick={handleSaveChanges}>Save Changes</button>
      ) : (
        <button onClick={handleEditProfile}>Edit Profile</button>
      )}

      <ToastContainer />
            </div>
        </>
  );
};

export default ProfilePage;