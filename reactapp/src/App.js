import Navbar from './components/Navbar Section/Navbar';
import Body from './components/FoodlePortal/Home/Body';
import Login from './components/Auth/Login/Login';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSlider from './components/FoodlePortal/About/HeroSlider';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Register from './components/Auth/Register/Register';
import Footer from './components/FoodlePortal/Footer/Footer';
import RestaurantHome from './components/Restauarant/Home/Home';
import AddRestaurant from './components/Restauarant/Home/AddRestaurant';
import UpdateRestaurant from './components/Restauarant/Home/UpdateRestaurant';
import DishHome from './components/Restauarant/Menu/DishHome';
import AddDish from './components/Restauarant/Menu/AddDish';
import UpdateDish from './components/Restauarant/Menu/UpdateDish';
import RestaurantSearch from './components/UserSide/HomePage/RestaurantSearch';
import ProfilePage from './components/UserSide/ProfilePage/ProfilePage';
import AdminDashboard from './components/Admin/AdminDashboard';
import DeliveryHome from './components/Delivery/Home/DeliveryHome';
import DeliveryNav from './components/Delivery/Delivery Navbar/DeliveryNav';
import OrderForm from './components/UserSide/DeliveryPage/OrderForm';
import Orders from './components/UserSide/Orders/Orders';

   const App = () => {
  return (
   <>
    <Router> 
        <Routes>
                  {/* landing page  */}
          <Route exact path="/" element={<><Navbar/><Body/><div style={{paddingTop:"100px"}}></div><HeroSlider/><Footer/></>} />
          <Route exact path="/about" element={<><Navbar/><HeroSlider/></>} />
          <Route exact path="/contactus" element={<><Navbar/><div style={{paddingTop:"150px"}}></div><Footer/></>} />
          <Route exact path="/login" element={<><Navbar/><Login /><HeroSlider/><Footer/></>} />
          <Route exact path="/register" element={<><Navbar/><Register /><HeroSlider/><Footer/></>} />

                  {/* resturant side  */}
          <Route exact path="/restauranthome" element={<><RestaurantHome /></>} />
          <Route exact path="/addrestaurant" element={<><AddRestaurant /></>} />
          <Route exact path="/updaterestaurant" element={<><UpdateRestaurant /></>} />
          <Route exact path="/adddish/:id" element={<><AddDish /></>} />
          <Route exact path="/dish" element={<><DishHome /></>} />
          <Route path="/dish/:id"  element={<><DishHome /></>} />
          <Route exact path="/res/:rid/updatedish/:id" element={<><UpdateDish /></>} />
                  
          {/* user side  */}
          <Route exact path="/user" element={<RestaurantSearch />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/checkout"  element={ <OrderForm/> } />
          <Route exact path="/vieworder" element={<Orders/>} />


          {/* admin side */}
            <Route exact path="/admin" element={<AdminDashboard/>} />


          {/* {Delivery Side} */}
          <Route exact path="/deliveryhome" element={<DeliveryHome/>} />
          <Route exact path="/deliverynav" element={<DeliveryNav/>} />

          </Routes>
      </Router>
      
   </>
  );
}

export default App;