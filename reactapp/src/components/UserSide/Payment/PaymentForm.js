
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PaymentForm() {
  const { price } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    initiatePayment();
  }, [price]);

  const initiatePayment = () => {
    const amount = parseFloat(price);

    if (isNaN(amount)) {
      alert('Please enter a valid amount');
    } else {
      var options = {
        key: 'rzp_test_l1uxwqJEDMNkS9',
        key_secret: 'kcjEhI7oMmZGMzr06qLh4WC3',
        amount: amount * 100,
        currency: 'INR',
        name: 'FOODLE_PROJECTS',
        description: 'For testing purpose',
        handler: function (response) {
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
          navigate('/orderplaced');
        },
        notes: {
          address: 'Chennai',
        },
        theme: {
          color: '#3399cc',
        },
      };

      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return null; // We don't render anything as the payment will be initiated directly
}

export default PaymentForm;
