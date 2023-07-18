import React, { useState,useEffect } from "react";
import axios from "axios";
import TopBrandRestaurants from "./TopBrandRestaurants";
import "./Searchpage.css"; // Import the CSS file
import Header from "../../UserSide/NavBar/Header";
import { baseUrl } from "../../API/Api";

const RestaurantSearch = () => {
  const [locationFilter, setLocationFilter] = useState("");
  const [restaurantFilter, setRestaurantFilter] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

 

  useEffect(() => {
    axios.get(`${baseUrl}/restaurant/all`)
        .then(response => {
            console.log(response.data)
            setRestaurants(response.data)
        }).catch(error => { 
            console.log(error)
        })
 
}, [])

  const handleLocationFilterChange = (event) => {
    setLocationFilter(event.target.value);
  };
  const handleBack = () => { 
    setSelectedRestaurant(null)
}


  const handleRestaurantFilterChange = (event) => {
    setRestaurantFilter(event.target.value);
  };

  const addToCart = (item) => {
    // Implement your addToCart logic here
    console.log("Added to cart:", item);
  };

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
                        className="item-image"
                        style={{ height: "130px", width: "300px" }}
                        />
                        
      )}
        <div>
     <p style={{ color: "White" }}>{restaurant.restaurantName}</p>
<br />
<p style={{ color: "white" }}>Location: {restaurant.restaurantLocation}</p>
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
          <h3>Selected Restaurant: {restaurantName}</h3>
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