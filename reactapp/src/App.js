import React,{ useState } from 'react';
import Navbar from './components/Navbar Section/Navbar';
import Body from './components/Body Section/Body';
import Login from './components/Login/Login';
import OwnerLogin from './components/AddRestraunts/OwnerLogin';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from "./components/pages/Home";
import AddDish from "./components/menus/AddDish";
import UpdateDish from "./components/menus/UpdateDish";
import ViewDish from "./components/menus/ViewDish";
import Navbar1 from './components/Navbar Section/Navbar1';
import Navbar2 from './components/Navbar Section/Navbar2';
import HeroSlider from './components/Body Section/hero-slider/HeroSlider';
import DeliveryLogin from "./components/Delivery Jobs/Delivery LogandReg/DeliveryLogin";
import DeliveryRegister from "./components/Delivery Jobs/Delivery LogandReg/DeliveryRegister";
import DeliveryHome from "./components/Delivery Jobs/DeliveryHome/DeliveryHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Login/Register';
import OwnerRegister from './components/AddRestraunts/OwnerRegister';
import Search from './components/Navbar Section/Search';
import Footer from './components/Footer/Footer';

   const App = () => {
  return (
   <>
    <Router>
    {/* <SearchBar/> */}
    
    <Routes>
          <Route exact path="/" element={<><Navbar/><Body/><div style={{paddingTop:"100px"}}></div><HeroSlider/><Footer/></>} />
          <Route exact path="/about" element={<><Navbar/><HeroSlider/></>} />
          <Route exact path="/contactus" element={<><Navbar/><div style={{paddingTop:"150px"}}></div><Footer/></>} />
          <Route exact path="/login" element={<><Navbar/><Login /><HeroSlider/><Footer/></>} />
          <Route exact path="/register" element={<><Navbar/><Register /><HeroSlider/><Footer/></>} />
          <Route exact path="/ownerlogin" element={<><Navbar/><OwnerLogin /><HeroSlider/><Footer/></>} />
          <Route exact path="/ownerregister" element={<><Navbar/><OwnerRegister /><HeroSlider/><Footer/></>} />
          <Route exact path="/deliverylogin" element={<><Navbar/><DeliveryLogin /><HeroSlider/><Footer/></>} />
          <Route exact path="/deliveryregister" element={<><Navbar/><DeliveryRegister /><HeroSlider/><Footer/></>} />
          <Route exact path="/deliveryhome" element={<><Navbar2/><DeliveryHome /></>} />
          <Route exact path="/search" element={<><Navbar/><Search /></>} />
          <Route exact path="/restauranthome" element={<><Navbar1/><Home /></>}/>
          <Route exact path="/adddish/:id" element={<><Navbar1/><AddDish /></>} />
          <Route exact path="/updatedish/:id" element={<><Navbar1/><UpdateDish /></>} />
          <Route exact path="/viewdish/:id" element={<><Navbar1/><ViewDish/></>} />
          </Routes>
      </Router>
      
   </>
  );
}

export default App