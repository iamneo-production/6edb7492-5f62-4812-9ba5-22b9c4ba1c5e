import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import "./TopBrandRestaurants.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const TopBrandRestaurants = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [viewCheckout, setViewCheckout] = useState(false);
  const [cart, setCart] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/restaurant/all')
            .then(response => {
                // console.log(response.data)
                setRestaurants(response.data)
            }).catch(error => { 
                console.log(error)
            })
            setSelectedRestaurant(null)
     
    }, [])
    
    const handleBack = () => { 
        setSelectedRestaurant(null)
    }

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantSelection = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };
  const handleAddToCart = (item) => {
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
  }



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
      }
      console.log(order, "order");
      axios.post('http://localhost:8080/order', order)
        .then(response => {
          console.log(response.data)
          setCart([])
          setViewCheckout(false)
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
          
            <button onClick={handleBackCart} >back </button>
            <h1 style={{color:"white" }} >Checkout</h1>
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                    {item.image && item.image.body && (
                          <img
                            src={`data:${item.image.headers['Content-Type'][0]};base64,${item.image.body}`}
                        alt={item.restaurantName}
                        className="item-image"
                        />
                        )}
                        <p>{item.name}</p>
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
                <span >Total Price</span>
                <span>Rs - {price}</span>
            </div>
            <br />
            {price > 0 && (
                <div className="text-center mt-3">
                    
              <button onClick={handleOrder} >
                <Link to="/checkout" style={{ color:"white" }}>Proceed to Delivery</Link>
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
            <button onClick={handleBack} style={{ color:"white" }}>back</button>
        <h2 style={{ color:"white" }}>{selectedRestaurant.restaurantName}</h2>
        <div className="items-container">
          {selectedRestaurant.restaurantmenu.map((item, index) => (
            <>
            <div key={index} className="item-card" >
              <h4>{item.name}</h4>
                  {item.image && item.image.body && (
                          <img
                            src={`data:${item.image.headers['Content-Type'][0]};base64,${item.image.body}`}
                        alt={item.restaurantName}
                        className="item-image"
                        style={{ height: "200px", width: "200px" }}
                        />
                        )}
              <p style={{ color:"black" }}>Description: {item.description}</p>
              <p style={{ color:"black" }}>Price: {item.price}</p>
              <p style={{ color:"black" }}>Tags: {item.tags}</p>
              <button onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
              <div onClick={handleCheckOut} class="for-container">
                <div  class="floating-button">Cart</div>
         </div>
            </>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Top-Brand Restaurants</h2>
      <div className="restaurant-list-horizontal">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="restaurant-card"
            onClick={() => handleRestaurantSelection(restaurant)}
          >
                {restaurant.image && restaurant.image.body && (
                          <img
                            src={`data:${restaurant.image.headers['Content-Type'][0]};base64,${restaurant.image.body}`}
                        alt={restaurant.restaurantName}
                        className="restaurant-image"
                        style={{ width: "300px", height: "150px" }}
                          />
                        )}
            <div>
              <h3>{restaurant.restaurantName}</h3>
              <p>Loaction : {restaurant.restaurantLocation}</p>
              <p>Email id : {restaurant.restaurantEmail}</p>
              <p>Contact Number : {restaurant.restaurantContact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrandRestaurants;