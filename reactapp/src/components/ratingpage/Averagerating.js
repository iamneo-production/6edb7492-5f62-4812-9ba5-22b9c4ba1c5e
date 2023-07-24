import React from 'react'

const AverageRating = ({ averageRating }) => {
    return (
      <div>
        <h3>Average Rating: {averageRating} <span style={{color:'orange'}}>★</span></h3>
      </div>
    );
  };
  export default AverageRating; 