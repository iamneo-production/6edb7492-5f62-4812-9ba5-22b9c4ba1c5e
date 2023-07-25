import React from 'react'
import { useState } from 'react';

const Review = () => {
  const [ratings, setRatings] = useState([]);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [averageRating, setAverageRating] = useState(0);

  const handleAddRating = (rating) => {
    const updatedRatings = [...ratings, rating];
    setRatings(updatedRatings);
  };
  const calculateAverage = () => {
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    const average = sum / ratings.length || 0;
    setAverageRating(average.toFixed(2));
  };
  

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleAddReview();

   
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
    <>
    <div className="container" style={{backgroundColor:'white'}}>
      <div className="form-box">
        <h2>Ratings and Reviews page</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              className='comment'
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="rating">Rate:</label>
            <div className="stars-container">{renderStars()}</div>
            <label htmlFor="review">Write a Review:</label>
            <textarea
              id="review"
              name="review"
              className='commenttxt'
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Write your review here"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
)};

export default Review