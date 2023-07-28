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
import ProfilePage from './components/UserSide/ProfilePage/ProfilePage'
import AdminDashboard from './components/Admin/AdminDashboard';
import DeliveryHome from './components/Delivery/Home/DeliveryHome';
import DeliveryInfo from './components/Delivery/Info/DeliveryInfo';
import DeliveryNav from './components/Delivery/Delivery Navbar/DeliveryNav';
import DeliveryProfile from './components/Delivery/Profile/DeliveryProfile';
import DeliveryOrder from './components/Delivery/Delivery Orders/DeliveryOrder';
import OrderForm from './components/UserSide/DeliveryPage/OrderForm';
import Orders from './components/UserSide/Orders/Orders';
import Review from './components/UserSide/Review/Review';
import LandingNav from './components/FoodlePortal/LandingNavbar/LandingNav';
import PaymentForm from './components/UserSide/Payment/PaymentForm';
import OrderPlaced from './components/UserSide/DeliveryPage/OrderPlaced';
import RestaurantReviews from './components/Restauarant/Home/RestaurantReviews';
import ContactFile from './components/UserSide/Support/ContactForm/ContactFile';
import Chatbot from './components/UserSide/Support/ContactForm/Bot/Chatbot';
import Header from './components/UserSide/NavBar/Header';
import TopBrandRestaurants from './components/UserSide/HomePage/TopBrandRestaurants';

   const App = () => {
  return (
   <>
    <Router> 
        <Routes>
                  {/* landing page  */}
          <Route exact path="/" element={<><LandingNav/><Body/><div style={{paddingTop:"100px"}}></div><HeroSlider/><Footer/></>} />
          <Route exact path="/about" element={<><LandingNav/><HeroSlider/></>} />
          <Route exact path="/contactus" element={<><LandingNav/><div style={{paddingTop:"150px"}}></div><Footer/></>} />
          <Route exact path="/login" element={<><LandingNav/><Login /><HeroSlider/><Footer/></>} />
          <Route exact path="/register" element={<><LandingNav/><Register /><HeroSlider/><Footer/></>} />

                  {/* resturant side  */}
          <Route exact path="/restauranthome" element={<><RestaurantHome /></>} />
          <Route exact path="/addrestaurant" element={<><AddRestaurant /></>} />
          <Route exact path="/updaterestaurant" element={<><UpdateRestaurant /></>} />
          <Route exact path="/adddish/:id" element={<><AddDish /></>} />
          <Route exact path="/dish" element={<><DishHome /></>} />
          <Route path="/dish/:id"  element={<><DishHome /></>} />
          <Route exact path="/res/:rid/updatedish/:id" element={<><UpdateDish /></>} />
          <Route exact path="/restaurantreviews" element={<><RestaurantReviews /></>} />
                  
          {/* user side  */}
          <Route exact path="/user" element={<TopBrandRestaurants />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/checkout/:price"  element={ <OrderForm/> } />
          <Route exact path="/vieworder" element={<Orders/>} />
          <Route exact path="/review/:id" element={<Review/>} />
          <Route exact path="/payment/:price" element={<PaymentForm />} />
          <Route exact path="/orderplaced" element={<OrderPlaced />} />
          <Route exact path="/support" element={<><Header/><ContactFile /><Chatbot/></>} />


          {/* admin side */}
            <Route exact path="/admin" element={<AdminDashboard/>} />
            <Route exact path="/deliverynav" element={<DeliveryNav/>} />

          {/* {Delivery Side} */}
          <Route exact path="/deliveryhome" element={<DeliveryHome/>} />
          <Route exact path="/dprofile" element={<DeliveryProfile/>} />
          <Route exact path="/deliverynav" element={<DeliveryNav/>} />
          <Route exact path="/viewdorder" element={<DeliveryOrder/>} />
          <Route exact path="/deliveryinfo/:id" element={<DeliveryInfo/>} />

          </Routes>
      </Router>
      
   </>
  );
}

export default App;