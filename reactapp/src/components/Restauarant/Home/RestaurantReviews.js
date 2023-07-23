import React, { useState, useEffect } from 'react';
import './RestaurantReviews.css';




const RestaurantReviews = () => {
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [
      {
        id: 1,
        rating: 5,
        review: 'The food was delicious and excellent .',
        response: '',
        name:"ramya"
        
      },
    ];
  });
  const [responseMap, setResponseMap] = useState(() => {
    const storedResponseData = localStorage.getItem('responseMap');
    return storedResponseData ? JSON.parse(storedResponseData) : {};
  })
  const handleResponseChange = (e, reviewId,response) => {
    console.log(e, reviewId);
    const updatedResponseMap = { ...responseMap };
    updatedResponseMap[reviewId] = e.target.value;
    console.log(updatedResponseMap);
    setResponseMap(updatedResponseMap);
  };
     

 
  const handleSubmitResponse = async (reviewId) => {
    console.log(reviewId);
    console.log(typeof(responseMap[reviewId]));
    let foodle ={};
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
      foodle = {
        ...review,
        response: responseMap[reviewId],
      };
        return foodle;
      }
      return review;
    });
    console.log("hii",foodle);
   
  };

  const renderReviews = () => {
    if (reviews.length === 0) {

      return <p>No reviews yet.</p>;
    }

    return reviews.map((review) => (
      <div key={review.id} className="review">
        
        <p  className='id'>{review.id} . {review.name}</p>
        <h3>Rating: {review.rating}</h3>
        <p>Review: {review.review}</p>
        
        {review.response && <p className="response">Response: {review.response}</p>}
        {!review.response && (
          <div>
            <>
            <textarea
              
              placeholder="Response to your customer..."
              style={{
                width:"300px",
                
                
                
              }}
              value={responseMap[review.id] || ''}
              onChange={(e) => handleResponseChange(e, review.id)}
              ></textarea>
              </>
              <button onClick={() => handleSubmitResponse(review.id)}>Submit Response</button>
          </div>
        )}
      </div>
    ));
  };
  useEffect(() => {
    localStorage.setItem('responseMap', JSON.stringify(responseMap));
  }, [responseMap]);
 
useEffect(() => {
  localStorage.setItem('reviews', JSON.stringify(reviews));
}, [reviews]);

  return (
    <>

      <p style={{
        fontWeight: "bold",
        fontSize: "40px",
        textAlign:"center"
      }}>My Ratings and Reviews</p>
       
    

      <div className="reviews-container">{renderReviews()}</div>
      
      </>
  );
  
};

export default RestaurantReviews;