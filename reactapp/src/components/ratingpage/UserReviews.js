import React from "react";

const UserReviews = ({ reviews }) => {
    return (
      <div>
        <h3>User Reviews</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default UserReviews;