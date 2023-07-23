import React, { useState } from "react";
import Header from "../NavBar/Header";
import { useLocation, useHistory } from "react-router-dom";
import './Review.css';

const Review = ({ restaurantName }) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    const [showPopup, setShowPopup] = useState(false); // Add state for showing/hiding the popup

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleRatingChange = (event) => {
      const typedRating = parseFloat(event.target.value);
      setRating(typedRating);
    };
    const handlePopupClose = () => {
        // Hide the popup when the user clicks on "Close"
        setShowPopup(false);
      };
    
  
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to handle form submission, e.g., sending data to the server using axios.
        // You can use the 'comment' and 'rating' states to send the user's input to the server.
    
        // For demonstration purposes, we'll just log the values to the console after form submission.
        console.log("Submitted comment:", comment);
        console.log("Submitted rating:", rating);
    // Show the popup
    setShowPopup(true);

        
    // Show success message
    setSuccessMessage("Review submitted successfully");

        // Clear the form after submission (optional).
        setComment("");
        setRating(0);};
    const renderStars = () => {
    const starIcons = [];
    const fullStars = Math.floor(rating);
    const remainingStarValue = rating - fullStars;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starIcons.push(<i key={i} className="star fas fa-star filled" />);
      } else if (i === fullStars && remainingStarValue > 0) {
        const percentageWidth = remainingStarValue * 100;
        starIcons.push(
          <i
            key={i}
            className="star fas fa-star-half-alt filled"
            style={{ width: `${percentageWidth}%` }}
          />
        );
      } else {
        starIcons.push(<i key={i} className="star far fa-star" />);
      }
    }
    return starIcons;
  };
    return (
      <div>
        <Header />
       
        <div className="review-container">
          <h2>Review</h2>
          <h3>Name</h3>

          <div className="reviewitemname-container">
            <label className="reviewitemname">Restaurantname</label>
            
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h4>Comment</h4>
              <label className="reviewcomment"></label>
              <textarea
                id="comment"
                name="comment"
                value={comment}
                onChange={handleCommentChange}
                placeholder="Write your comment here..."
                required
              />
            </div>
            <div className="form-group">
              <label className="reviewrating">Star Rating:</label>
              <div className="star-rating-input-container">
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={rating}
                onChange={handleRatingChange}
                required
              />
              <div className="selected-rating-container">
                {renderStars()}
              </div>
            </div>
              
            </div>
            <button type="submit">Submit Review</button>
          </form>
        </div>
         {/* Conditionally render the popup message */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p >Review submitted successfully</p>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Review;
  