import React, { useState } from 'react';
import './styles.css';




const RestaurantReviews = () => {
  const [reviews, setReviews] = useState([
    {
      head:'DELIVERY 3 hours ago',
      id: 1,
      name:'John',
      title: 'Great Experience',
      content: 'The food was delicious and the service was excellent.',
      response: '',
      
      
    },
    {
      head:'DELIVERY 4 hours ago',
      id: 2,
      name:'Sarah',
      title: 'Average Food',
      content: 'The food was okay, but nothing special.',
      response: '',
     
    },
    {
      head:'DELIVERY 10 hours ago',
      id: 3,
      name: 'Charles',
      title: 'Nice Ambience',
      content: 'Ambience is very good. Staff very friendly, supportive and quite helpful. Food is good. Ample car parking space.',
      response: '',
      
    },
    {
    head:'DELIVERY 16 hours ago',
    id: 4,
    name: 'Ramya ',
    title: 'Worth it',
    content: ' Value for money and good food',
    response: '',
    
    

  },
   
  ]);
  const [responseMap, setResponseMap] = useState({});

  const handleResponseChange = (e, reviewId) => {
    const updatedResponseMap = { ...responseMap };
    updatedResponseMap[reviewId] = e.target.value;
    setResponseMap(updatedResponseMap);
  };

  const handleSubmitResponse = (reviewId) => {
    // Submit the response to the server or perform any necessary actions
    // You can send the response value along with the reviewId to the backend

    // For this example, we'll update the state directly
    let response = 'Sample response';

  // Make a GET request to the API endpoint
  fetch(`http://localhost:3000/reviews/${reviewId}/response?response=${encodeURIComponent(response)}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('Response saved successfully:', data);
      // Handle success or display an appropriate messagsse to the user
    })
    .catch((error) => {
      console.error('Error saving response:', error);
      // Handle error or display an appropriate message to the user
    });

    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return {
          ...review,
          response: responseMap[reviewId] || '',
        };
      }
      return review;
    });

    setReviews(updatedReviews);
    setResponseMap({});
  };

  const renderReviews = () => {
    if (reviews.length === 0) {

      return <p>No reviews yet.</p>;
    }

    return reviews.map((review) => (
      <div key={review.id} className="review">
        
        <p className='id'>{review.id}</p>
        <h2>Posted by: {review.name}</h2>
       
        <p className='heads'>{review.head}</p>
        <h3>{review.title}</h3>
        
        <p>{review.content}</p>
        
        {review.response && <p className="response">Response: {review.response}</p>}
        {!review.response && (
          <div>
            <>
            <textarea
              placeholder="Responce to your customer..."
              style={{
                width:"300px"
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

  return (
    <>

      <p style={{
        fontWeight: "bold",
        fontSize: "40px",
        textAlign:"center"
      }}>My Ratings and Reviews</p>
       <p className="writings1">108</p>
      <p className="writings2">Dining reviews</p>
      <p className="writings3">1200</p>
      <p className="writings4">Delivery reviews</p>
      <p className="writings5">........................</p>
      <p className="writings6">...........................</p>
      <h1 className="text-main">Dindigul Thalappakatti Restaurant</h1>
    

      <div className="reviews-container">{renderReviews()}</div>
      
      </>
  );
  
};

export default RestaurantReviews;
