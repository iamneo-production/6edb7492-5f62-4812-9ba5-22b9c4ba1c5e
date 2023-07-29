import React, { useState } from "react";
import Header from "../NavBar/Header";
import { useLocation, useHistory } from "react-router-dom";
import './Review.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
const Review = ({ restaurantName }) => {
  
    const [ratings, setRatings] = useState([]);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable for success message
  
    const handleAddRating = (rating) => {
      const updatedRatings = [...ratings, rating];
      setRatings(updatedRatings);
      setRating(rating);
    };
    const { id } = useParams();
  
  
    const handleAddReview = () => {
      if (inputValue.trim() !== '' && name.trim() !== '') {
        setInputValue('');
        setName('');
        setIsSubmitted(true); // Set the form submission success flag to true
        setTimeout(() => {
          setIsSubmitted(false); // Hide the success message after a few seconds (if needed)
        }, 3000); // Change the time (in milliseconds) to control how long the message is displayed
      }
    };
  
    const handleRatingHover = (rating) => {
      setHoveredRating(rating);
    };
  
    const handleRatingLeave = () => {
      const mostRecentRating = ratings[ratings.length - 1];
      setHoveredRating(mostRecentRating);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      handleAddReview();
      
      
      const data = {
        "name": name,
        "rating": rating,
        "review": inputValue
      }
      axios.post(`http://localhost:8080/restaurant/review?restaurantId=${id}`, data)
        .then((response) => { 
          console.log(response.data);
          // Add any logic needed after successful form submission
        })
        .catch((err) => console.log(err))
      
    };
    console.log(name);
    console.log(inputValue);
    console.log(rating);
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        const starClassName = i <= (hoveredRating || ratings[ratings.length - 1]) ? 'star filled' : 'star';
        stars.push(
          <span
            key={i}
            className={starClassName}
            onClick={() => handleAddRating(i)}
            onMouseEnter={() => handleRatingHover(i)}
            onMouseLeave={handleRatingLeave}
          >
            ★
          </span>
        );
      }
      return stars;
    };
  
    return (
      <div className="box-ctn">
        <div className="form-box">
          <h2 className="titlestyle">Ratings and Reviews page</h2>
          <div className="form-ctn">
            {isSubmitted ? (
              <div className={`popup ${isSubmitted ? "popup--visible" : ""}`}>
                <div className="popup-content">
                  <p>Review submitted successfully!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                  className='i-tag'
                  required
                />
                <label htmlFor="rating">Rate:</label>
                <div className="stars-container">{renderStars()}</div>
                <label htmlFor="review">Write a Review:</label>
                <textarea
                  id="review"
                  name="review"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Write your review here"
                  className='u-review'
                  required
                />
                <button type="submit" className='s-btn'>Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Review;