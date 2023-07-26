<<<<<<< HEAD

=======
import React, { useState, useEffect } from 'react';
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";

const RatingStars = ({ rating }) => {
  // Function to generate star elements based on the rating
  const renderStars = () => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating - fullStars >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Calculate the number of empty stars

    const stars = [];
>>>>>>> 39630bc09f656744199ed7cd2e000430518e5a2b

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} style={{ color: 'gold' }}>&#9733;</span>);
    }

    // Half star
    if (halfStar) {
      stars.push(<span key="half" style={{ color: 'gold' }}>&#9733;&#189;</span>);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} style={{ color: 'gold' }}>&#9734;</span>);
    }

    return stars;
  };

  return <span>{renderStars()}</span>;
};


const RestaurantReview = ({ reviewState }) => {
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    // Load responses from localStorage on initial render
    const storedResponses = localStorage.getItem('responses');
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    }
  }, []);

  const handleInputChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    // Add the submitted response to the responses array
    const updatedResponses = [...responses, response];
    setResponses(updatedResponses);
    // Save responses to localStorage
    localStorage.setItem('responses', JSON.stringify(updatedResponses));
    // Reset the response state after submission
    setResponse('');
  };

  return (
    <div>
      <Restaurantheader />
      <div className="restaurant1-review1" style={{ maxWidth: '700px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', marginTop: "50px" }}>
        <table style={{ width: '100%', border: '1px solid black' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Customer Name</th>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Comment</th>
<<<<<<< HEAD
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Response</th>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Ratings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Harish</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Good Restaurant</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Thank you!!</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>3</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Naveen</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Awesome dishes</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Tysm..!</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>2</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Harish</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Good Restaurant</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Thank you!!</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>4</td>
            </tr>
=======
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Rating</th>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Response</th> {/* New column for responses */}
            </tr>
          </thead>
          <tbody>
            {reviewState.map((Review, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{Review.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{Review.review}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                  <RatingStars rating={Review.rating} />
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                  {index < responses.length ? responses[index] : ''} {/* Display response if available */}
                </td>
              </tr>
            ))}
>>>>>>> 39630bc09f656744199ed7cd2e000430518e5a2b
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <textarea
          value={response}
          onChange={handleInputChange}
          placeholder="Enter your response..." 
          style={{
            width: '50%', 
            height: '100px',
            padding: '8px', 
            resize: 'vertical',
          }}
        />

      
        <button
          onClick={handleSubmit}
          style={{
            
            marginTop: '10px', 
            marginRight:'10px',
            padding: '10px 20px', 
            fontSize: '16px',
            backgroundColor: '#007bff', 
            color: '#fff', 
            borderRadius: '5px', 
            cursor: 'pointer', 
          }}
        >
          Submit 
        </button>
      </div>
    </div>
  );
};

export default RestaurantReview;
