import React, { useState,useEffect } from "react";
import axios from "axios";
import TopBrandRestaurants from "./TopBrandRestaurants";
import "./Searchpage.css"; // Import the CSS file
import Header from "../../UserSide/NavBar/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { baseUrl } from "../../API/Api";
const RestaurantSearch = () => {
  
  const navigate = useNavigate();
  const [locationFilter, setLocationFilter] = useState("");
  const [restaurantFilter, setRestaurantFilter] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [viewCheckout, setViewCheckout] = useState(false);
  const [cart, setCart] = useState([]);
 
  useEffect(() => {
    axios.get(`${baseUrl}/restaurant/all`)
        .then(response => {
            console.log(response.data)
            setRestaurants(response.data)
        }).catch(error => { 
            console.log(error)
        })
 
}, [])
const handleBack = () => { 
  setSelectedRestaurant(null)
}


  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleRestaurantFilterChange = (event) => {
    setRestaurantFilter(event.target.value);
  };

  const addToCart = (item) => {
    let newCart = [...cart]
    let index = newCart.findIndex(cartItem => cartItem.id === item.id)
    if (index !== -1) {
      newCart[index].quantity += 1
    } else {
      newCart.push({ ...item, quantity: 1 })
    }
    setCart(newCart)
    console.log(cart," cart");
  };
  const handleCheckOut = () => {
    setViewCheckout(true)
  };

  if (viewCheckout) { 

    const handleOrder = () => { 

      let items = cart.map(item => { 
        return { 
          description: item.description,
          name: item.name,
          price: item.price,
          restaurantId: item.restaurantId,
          tags: item.tags,
        }
      })
      let order = {
        customerId: localStorage.id,
        customerName: localStorage.name,
        deliveryAddress: localStorage.address,
        items: items,
        totalCost: price,
        status:"Pending"
      }
      console.log(order, "order");
      axios.post(`${baseUrl}/order`, order)
        .then(response => {
          console.log(response.data)
          setCart([])
          setViewCheckout(false)
          navigate(`/checkout/${price}`)
        })
        .catch(error => { 
          console.log(error)
        })
      
      
    }

    const handleBackCart = () => {
      setViewCheckout(false)
    }

    const handleChange = (item, value) => { 
      let newCart = [...cart]
      let index = newCart.indexOf(item)
      if (index !== -1) {
        newCart[index].quantity += value
        if (newCart[index].quantity === 0) {
          newCart.splice(index, 1)
        }
        setCart(newCart)
      }
    }
  
    const handleRemove = (id) => {
      let newCart = [...cart]
      let index = newCart.findIndex(item => item.id === id)
      if (index !== -1) {
        newCart.splice(index, 1)
        setCart(newCart)
      } else {
        console.log("Item not found")
      }
    }
    console.log(cart, "cart in view checkout");
    let price = 0
    cart.forEach(item => { 
      price += item.price * item.quantity
    })
    return (
      <div >
          <Header />
            <a href="#" className="navprevious navround" onClick={handleBackCart}>&#8249;</a>
            <h1 style={{color:"white", textAlign: "center",marginTop: "10px"  }} >Checkout</h1>
        <article>
            {cart.map((item) => (
                <div className="search-cart_box" key={item.id}>
                    <div className="cart_img">
                    {item.image && item.image.body && (
                          <img
                            src={`data:${item.image.headers['Content-Type'][0]};base64,${item.image.body}`}
                        alt={item.restaurantName}
                        className="item-image"
                        />
                        )}
                        <p style={{marginTop:"30px"}}>{item.name}</p>
                    </div>

                    <div>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                        <button>{item.quantity}</button>
                        <button onClick={() => handleChange(item, +1)}>+</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span style={{color:"black"}}>Total Price</span>
                <span style={{color:"black"}}>Rs - {price}</span>
            </div>
            <br />
            {price > 0 && (
               <div className="search-text-center mt-3" style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={handleOrder} className="proceed-to-delivery">
      <Link to="/checkout" style={{ color: "black", textDecoration: "none" }}>
        Proceed to Delivery
      </Link>
    </button>

             </div>
             
            )}
        </article>
    </div>
    )
  }
  if (selectedRestaurant) {
    return (
        <div>
          <Header />
          <a href="#" className="navprevious navround" onClick={handleBack}>&#8249;</a>
        <h2 style={{ color:"white" , textAlign: "center" }}>{selectedRestaurant.restaurantName}</h2>
        <div className="search-items-container">
          {selectedRestaurant.restaurantmenu.map((item, index) => (
            <>
            <div key={index} className="search-item-card" >
              <h4 style={{ color: "white" ,textAlign:"center"}}>{item.name}</h4>
                  {item.image && item.image.body && (
                          <img
                            src={`data:${item.image.headers['Content-Type'][0]};base64,${item.image.body}`}
                        alt={item.restaurantName}
                        className="search-item-image"
                        style={{ height: "200px", width: "200px" ,marginRight:"15px"}}
                        />
                        )}
              <p style={{ color:"white" ,textAlign:"center"}}>Cuisine: {item.description}</p>
              <p style={{ color:"white",textAlign:"center" }}>Price: {item.price}</p>
              <p style={{ color:"white" ,textAlign:"center"}}>Tags: {item.tags}</p>
              <button className="searchaddtocartbutton" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
             
            </>
          ))}
        </div>
        <div onClick={handleCheckOut} >
                <div  className="searchfloating-button">Cart</div>
         </div>
      </div>
    );
  }

  

  const handleSearchClick = () => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const locationMatch = restaurant.restaurantLocation
        .toLowerCase()
        .includes(locationFilter.toLowerCase());
      const restaurantMatch = restaurant.restaurantName
        .toLowerCase()
        .includes(restaurantFilter.toLowerCase());
      return locationMatch && restaurantMatch;
    });
    console.log(filteredRestaurants, "filtered done");
    // setRestaurants(filteredRestaurants)
    setFilteredRestaurants(filteredRestaurants);
    setSelectedRestaurant(null);
    setSearchClicked(true);
  };

  const handleRestaurantSelection = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const renderMenuItem = (item) => (
    <div className="horizontal">
      <div key={item.restaurantName} className="search-item-card">
        <h5>{item.name}</h5>
        {item.image && item.image.body && (
                          <img
                          src={`data:${item.image.headers['Content-Type'][0]};base64,${item.image.body}`}
                      alt={item.restaurantName}
                      className="item-image"
                      style={{ height: "200px", width: "200px" }}
                      />
                      )}
      <p style={{ color:"white" }}>Cuisine: {item.name}</p>
      <p style={{ color:"white" }}>Price: {item.price.toFixed(2)}</p>
      <button className="searchaddtocart" onClick={() => addToCart(item)}>Add to cart </button>
      </div>
            <div onClick={handleCheckOut} class="for-container">
              <div  class="search-floating-button">Cart</div>
       </div>
    </div>
  );

  const renderMenuItems = (menuItems) => (
    <div className="item-list">
      <a href="#" className="navprevious navround" onClick={handleBack}>&#8249;</a>
     
      {menuItems.map(renderMenuItem)}
    </div>
  );

  const renderRestaurant = (restaurant) => (
    <div
      key={restaurant.restaurantName}
      className="search-restaurant-card"
      onClick={() => handleRestaurantSelection(restaurant)}
    >
      
      {restaurant.image && restaurant.image.body && (
                          <img
                            src={`data:${restaurant.image.headers['Content-Type'][0]};base64,${restaurant.image.body}`}
                        alt={restaurant.restaurantName}
                        className="search-restaurant-image"
                        style={{ height: "155px", width: "250px",marginTop:"8px" }}
                        />
      )}
             <div>
     <p style={{ color: "White",fontWeight: 'bold', fontSize: '15px'  }}>{restaurant.restaurantName}</p>
<br />
<p style={{ color: "white",marginTop:"-10px" , fontSize: '15px'}}>Location: {restaurant.restaurantLocation}</p>
<Link to="/review" className="searchreviewoption">
        Review
      </Link>
      <button
    style={{
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: 'yellow',
      outline: 'none',
      marginLeft:'20px'
    }}
   
  >
    3&#9733; {/* Unicode character for a star (☆ or ★) */}
    {/* Alternatively, you can use an icon library (e.g., Font Awesome) */}
  </button>
</div>

    </div>
  );


  const renderRestaurants = (restaurantsToRender) => (
    <div className="restaurant-list">
      {restaurantsToRender.map(renderRestaurant)}
    </div>
  );

  let filteredRestaurantsContent = null;
  if (searchClicked) {
    if (selectedRestaurant) {
      console.log(selectedRestaurant,"Selected res");
      const { restaurantName, image, restaurantmenu } = selectedRestaurant;
      filteredRestaurantsContent = (
        <div>
          <h3>{restaurantName}</h3>
          {image && image.body && (
                          <img
                            src={`data:${image.headers['Content-Type'][0]};base64,${image.body}`}
                        alt={restaurantName}
                        className="item-image"
                        style={{ height: "200px", width: "200px" }}
                        />
          )}
          <h4>Menu tems</h4>
          {restaurantmenu.length === 0 ? (
            <p style={{ marginTop: '20px', color: 'white'  }}>
            No Menu Items Found.
          </p>
          ) : (
            <div>
              <h4>Menu Items</h4>
              {renderMenuItems(restaurantmenu)}
            </div>
          )}
        </div>
      );
    } else if (filteredRestaurants.length === 0) {
      filteredRestaurantsContent = <p style={{ marginTop: '20px', color: 'white'  }}>
      No Restaurant found.
    </p>
    } else {
      filteredRestaurantsContent = renderRestaurants(filteredRestaurants);
    }
  } else {
    filteredRestaurantsContent = <TopBrandRestaurants />;
  }

  return (
    <div>

      <Header></Header>
     
      <div className="search-bar">
        <label>
         <input
            type="text"
            placeholder="search by location"
            value={locationFilter}
            onChange={handleLocationFilterChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="search by restaurant"
            value={restaurantFilter}
            onChange={handleRestaurantFilterChange}
          />
        </label>
        <button className="search-button" onClick={handleSearchClick}>Search</button>
      </div>

      <div className="content">
        {selectedRestaurant ? (
          <div>
            {selectedRestaurant.restaurantmenu.length === 0 ? (
             <p style={{ marginTop: '20px', color: 'white'  }}>
             No Menu Items Found.
           </p>
            ) : (
              <div >
                 <h4 style={{ marginLeft: "50px" }}>Menu Items</h4>
                <div  >{renderMenuItems(selectedRestaurant.restaurantmenu)}</div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {filteredRestaurantsContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantSearch;