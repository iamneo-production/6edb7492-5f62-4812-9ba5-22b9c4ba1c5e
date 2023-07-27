import React, { useState } from "react";
import Header from "../NavBar/Header";
import { useLocation, useHistory } from "react-router-dom";
import './Review.css';

const Review = ({ restaurantName }) => {
  const [ratings, setRatings] = useState([]);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [averageRating, setAverageRating] = useState(0);
  const [rating, setRating] = useState(0);


  const handleAddRating = (rating) => {
    const updatedRatings = [...ratings, rating];
    setRatings(updatedRatings);
    setRating(rating);
  };
  const calculateAverage = () => {
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length || 0;
    setAverageRating(average.toFixed(2));
  };
  const { id } = useParams();
  

  const handleAddReview = () => {
    if (inputValue.trim() !== '' && name.trim() !== '') {
      setInputValue('');
      setName('');
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
console.log(rating);
console.log(inputValue);
console.log(name);
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
       

      })
      .catch((err) => console.log(err))

   
  };

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
        <h2>Ratings and Reviews page</h2>
        <div className="form-ctn">
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
        </div>
      </div>
    </div>
  );
};

export default Review;