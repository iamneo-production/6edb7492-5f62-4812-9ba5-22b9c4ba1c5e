// import React, { useState } from 'react';
// import './RestaurantReviews.css';
// import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";
// const RestaurantReview = () => {
//   const [response, setResponse] = useState('');

//   const handleInputChange = (event) => {
//     setResponse(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Add your submit logic here
//     console.log('Response submitted:', response);
//     // Reset the response state after submission (if required)
//     setResponse('');
//   };

//   return (
//     <div><Restaurantheader />
//     <div className="restaurant1-review1">
      
//       <table>
//         <thead>
//           <tr>
//             <th>Customer Name</th>
//             <th>Comment</th>
//             <th>Response</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Harish</td>
//             <td>Good Restaurant</td>
//             <td>Thankyou!!</td>
//           </tr>
//           <tr>
//             <td>Naveen</td>
//             <td>Awesome dishes</td>
//             <td>Tysm..!</td>
//           </tr> <tr>
//             <td>Harish</td>
//             <td>Good Restaurant</td>
//             <td>Thankyou!!</td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="response-input">
//         <input
//           type="text"
//           className='response'
//           value={response}
//           onChange={handleInputChange}
//           placeholder="Enter your response..."
//         />
//       </div>
//       <button type="submit" className='sbtn' onClick={handleSubmit}>Submit</button>
//     </div>
//     </div>
//   );
// };

// export default RestaurantReview;


import React, { useState } from 'react';
import Restaurantheader from "../../UserSide/NavBar/Restaurantheader";

const RestaurantReview = () => {
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log('Response submitted:', response);
    // Reset the response state after submission (if required)
    setResponse('');
  };

  return (
    <div>
      <Restaurantheader />
      <div className="restaurant1-review1" style={{ maxWidth: '700px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9' ,marginTop:"50px"}}>
        <table style={{ width: '100%', border: '1px solid black' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Customer Name</th>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Comment</th>
              <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Harish</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Good Restaurant</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Thank you!!</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Naveen</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Awesome dishes</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Tysm..!</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Harish</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Good Restaurant</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Thank you!!</td>
            </tr>
          </tbody>
        </table>
        <div className="response-input" style={{ marginTop: '20px',border:'1px solid black' }}>
          <input
            type="text"
            className='response'
            value={response}
            onChange={handleInputChange}
            placeholder="Enter your response..."
            style={{ padding: '10px', fontSize: '16px', width: '100%'}}
          />
        </div>
        <button
          type="submit"
          className='sbtn'
          onClick={handleSubmit}
          style={{ padding: '10px 20px', marginTop: '10px', fontSize: '16px' }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RestaurantReview;