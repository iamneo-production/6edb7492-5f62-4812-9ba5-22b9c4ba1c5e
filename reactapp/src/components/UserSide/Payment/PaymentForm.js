import React, { useState } from 'react';
import './PaymentForm.css';
import { useNavigate } from 'react-router-dom';

function PaymentForm() {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === '') {
      alert('Please enter the amount');
    } else {
      var options = {
        key: 'rzp_test_Hw7hLPDFrWqFGU',
        key_secret: 'caCnUTr8dCu4oSPIDXYu4yp7',
        amount: amount * 100,
        currency: 'INR',
        name: 'FOODLE_PROJECTS',
        description: 'For testing purpose',
        handler: function (response) {
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
          navigate('/orderplaced');
        },
        notes: {
          address: 'Pollachi',
        },
        theme: {
          color: '#3399cc',
        },
      };

      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="payment-form-container">
      <h2 style={{color:'white'}}>Razorpay Payment Integration Using React</h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PaymentForm;