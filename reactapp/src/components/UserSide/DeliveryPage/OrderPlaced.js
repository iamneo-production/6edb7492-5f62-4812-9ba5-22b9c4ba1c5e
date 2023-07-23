// import React, { useState, useEffect,useNavigate } from 'react';
// import Confetti from 'react-confetti';

// function OrderPlaced() {
//     const navigate = useNavigate();
//   const [showConfetti, setShowConfetti] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowConfetti(false);
//     }, 30000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleBackHome = () => {
//     navigate("/user");
//   };

//   return (
//     <div className="del-overlay">
//       <div className="centered-container">
//         <div className="del-popup">
//           {showConfetti && (
//             <Confetti
//               width={window.innerWidth}
//               height={window.innerHeight}
//               recycle={false}
//               run={showConfetti}
//             />
//           )}
//           <p>Order successfully placed!</p>
//           <button onClick={
//             handleBackHome()}>Home</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderPlaced;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function OrderPlaced() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackHome = () => {
    navigate("/user");
  };

  return (
    <div className="del-overlay">
      <div className="centered-container">
        <div className="del-popup">
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              run={showConfetti}
            />
          )}
          <p>Order successfully placed!</p>
          <button onClick={handleBackHome}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;