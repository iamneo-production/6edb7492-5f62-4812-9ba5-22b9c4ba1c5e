import React, { useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';


export const baseUrl = "http://localhost:8090";

export const OwnerLogin = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${baseUrl}/restaurantlogin`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           password: pass,
//         }),
//       });
  
//       const data = await response.json();
  
//       if (data === "Login Failed : Enter your credentials carefully!") {
//         alert(data);
//       } else {
//         alert("Login Successful");
//         navigate("/restauranthome",{state:{id: response.data}});
//       }
//     } 
//   } ,catch (error) {
//     console.error('Error:', error.message);
//     // Handle error here
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch(`${baseUrl}/restaurantlogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: pass,
    }),
  });

  const resData = await response.json();

  if (resData === "Login Failed : Enter your credentials carefully!") {
    alert(resData);
  } else {
    alert("Login Successfull");
    navigate("/restauranthome", { state: { id: resData } });
  }
};

  

  const toggle = () => {
    navigate("/ownerregister");
  }

  const handleClose = () => {
    setShowLoginForm(false);
  };

  if (!showLoginForm) {
    return null; // Hide the login form container
  }

  return (
    <div className="login-overlay">
      <div className="auth-form-container">
        <span className="close-button" onClick={handleClose}>
          <a href="#"><i className="fa-solid fa-xmark"></i></a>
        </span>

        <h2>Restaurants Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" required />
          <button type="submit" className="btn">Log In</button>
          <button className="toggle-button" onClick={toggle}>Don't have an account? Register here.</button>
        </form>

      </div>
    </div>
  );
};

export default OwnerLogin;


// import React,{useState} from "react";
// import "./style.css";
// import axios from "axios";
// import {useNavigate} from 'react-router-dom';

// export const baseUrl = "https://8080-edbeffbdcbbfeabebeabeaeaadbdbabf.project.examly.io";


//  export const OwnerLogin = (props) => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [showLoginForm, setShowLoginForm] = useState(true);


//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         await axios.post(`${baseUrl}/restaurantlogin`,
//         {
//             email : email,
//             password : pass,
//             }).then((res) =>
//             {
//                 if(res.data == "Login Failed : Enter your credentials carefully!")
//                 {
//                     alert(res.data);
//                 }
//                 else{
//                     alert("Login Successfull");
//                     navigate("/restauranthome",{state:{id:res.data}});  //to={`/updatedish/${dish.id}`}
//                 }
//             });
//     };
 
   
//    const toggle=()=>{
//     navigate("/ownerregister");
//    }
//    const handleClose = () => {
//     setShowLoginForm(false);
//   };

//   if (!showLoginForm) {
//     return null; // Hide the login form container
//   }
    
//     return (
//         <div className="login-overlay">
//         <div className="auth-form-container">
//         <span className="close-button" onClick={handleClose}>
//         <a href="#"><i className="fa-solid fa-xmark" ></i></a>
//         </span>

//             <h2>Restaurants Login</h2>
            
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
//                 <label htmlFor="password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" required/>
//                 <button type="submit" className="btn">Log In</button>
//                 <button className="toggle-button" onClick={toggle }>Don't have an account? Register here.</button>
//             </form>
           
//             </div>
//         </div>
//     );
// };

// export default OwnerLogin;
