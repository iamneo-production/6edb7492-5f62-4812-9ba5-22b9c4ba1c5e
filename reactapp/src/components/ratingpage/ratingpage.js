import React, { useState } from 'react';
import axios from 'axios';
import AverageRating from './components/AverageRating';
import UserReviews from './components/UserReviews';
import './rating.css';

const RatingForm = () => {
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleAddRating = (rating) => {
    const updatedRatings = [...ratings, rating];
    setRatings(updatedRatings);
  };

  const handleAddReview = () => {
    if (inputValue.trim() !== '') {
      const updatedReviews = [...reviews, inputValue];
      setReviews(updatedReviews);
      setInputValue('');
    }
  };

  const calculateAverage = () => {
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length || 0;
    setAverageRating(average.toFixed(2));
  };

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleAddReview();
    calculateAverage();
  
    try {
      await axios.post("https://localhost:8081/api/rating-review", {
        rating: ratings[ratings.length - 1],
        review: reviews[reviews.length - 1]
      });
  
      console.log("Rating and review sent to the server");
    } catch (error) {
      console.error("Error sending rating and review:", error);
    }
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
    <div className="container">
      <div className="form-box">
        <h2>Ratings and Reviews page</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="rating">Rate:</label>
            <div className="stars-container">{renderStars()}</div>
            <label htmlFor="review">Write a Review:</label>
            <textarea
              id="review"
              name="review"
              value={inputValue}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <AverageRating averageRating={averageRating} />
        <UserReviews reviews={reviews} />
      </div>
    </div>
  );
};

export default RatingForm;
