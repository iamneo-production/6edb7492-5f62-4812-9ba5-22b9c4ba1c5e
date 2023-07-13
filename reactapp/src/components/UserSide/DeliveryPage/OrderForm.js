import React, { useState } from 'react';
import './delivery.css';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpMonth, setCardExpMonth] = useState('');
  const [cardExpYear, setCardExpYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [upiMethod, setUpiMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
const navigate = useNavigate();

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardExpMonthChange = (event) => {
    setCardExpMonth(event.target.value);
  };

  const handleCardExpYearChange = (event) => {
    setCardExpYear(event.target.value);
  };

  const handleCardCvvChange = (event) => {
    setCardCvv(event.target.value);
  };

  const handleUpiMethodChange = (event) => {
    setUpiMethod(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the order placement logic here

    // Reset the form fields
    setName('');
    setPhone('');
    setAddress('');
    setCity('');
    setZip('');
    setPaymentMethod('');
    setCardName('');
    setCardNumber('');
    setCardExpMonth('');
    setCardExpYear('');
    setCardCvv('');
    setUpiMethod('');
    setUpiId('');

    // Display the success message and confetti
    setOrderPlaced(true);
    setShowConfetti(true);

    // Reset orderPlaced and confetti after 3 seconds
    setTimeout(() => {
      
      setShowConfetti(false);
    }, 30000);
    };
    
    const handleBacKHome = () => {
        navigate('/user');
    }

  const isOrderDisabled = !name ||!phone || !address || !city || !zip || !paymentMethod;

  return (
    <div className='whole-content'>
      
    <div className="container">
      
      
      
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Delivery Address</h2>
        {/* Delivery address form fields */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
         <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        ></textarea>
        
        <div className='flex'>
        <div className='input-box'>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        </div>

        
        <div className='input-box'>
        <label htmlFor="zip">ZIP Code:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          required
        />
        </div>
        </div>
      </form>

      <form onSubmit={handleSubmit} className="form-container">
        <h2 style={{marginBottom:"45px"}}>Mode of Payment</h2>
        {/* Payment method form fields */}
        <input
          type="radio"
          id="card"
          name="payment"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={handlePaymentChange}
          required
        />
        <label htmlFor="card" className='radio-option'>Card Payment</label>
        <br />
        {paymentMethod === 'card' && (
          <div className='pay'>
            
            <div className='input-box'>
            <label htmlFor="cardName">Name on Card:</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={cardName}
              onChange={handleCardNameChange}
              required
            />
            </div>
            <div className='flex'>
            <div className='input-box'>
            <label htmlFor="cardNumber">Card Number:</label>
      
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
            
            </div>
            <div className='input-box'>
            <label htmlFor="cardExpMonth">Expiration Month:</label>
            <input
              type="text"
              id="cardExpMonth"
              name="cardExpMonth"
              value={cardExpMonth}
              onChange={handleCardExpMonthChange}
              required
            />
            </div>
            </div>
            <div className='flex'>
            <div className='input-box'>
            <label htmlFor="cardExpYear">Expiration Year:</label>
            <input
              type="text"
              id="cardExpYear"
              name="cardExpYear"
              value={cardExpYear}
              onChange={handleCardExpYearChange}
              required
            />
            </div>
            <div className='input-box'>
            <label htmlFor="cardCvv">CVV:</label>
            <input
              type="text"
              id="cardCvv"
              name="cardCvv"
              value={cardCvv}
              onChange={handleCardCvvChange}
              required
            />
            </div>
            </div>
            
          </div>
        )}

        <input
          type="radio"
          id="upi"
           
          name="payment"
          value="upi"
          checked={paymentMethod === 'upi'}
          onChange={handlePaymentChange}
          required
        />
        <label htmlFor="upi" className='radio-option'>UPI</label>
        <br />
        {paymentMethod === 'upi' && (
          <div className='pay'>
            <div className="flex">
              <div className="select-box">
            <label htmlFor="upiMethod">UPI Method:</label>
            <select
              id="upiMethod"
              name="upiMethod"
              value={upiMethod}
              onChange={handleUpiMethodChange}
              required
            >
              <option value="">Select UPI Method</option>
              <option value="gpay">Google Pay</option>
              <option value="paytm">Paytm</option>
            </select>
            </div>
            <div className="select-box">
            <label htmlFor="upiId">UPI ID:</label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              value={upiId}
              onChange={handleUpiIdChange}
              required
            />
            </div>
            </div>
            
          </div>
        )}

        <input
          type="radio"
          id="cod"
          name="payment"
          value="cod"
          checked={paymentMethod === 'cod'}
          onChange={handlePaymentChange}
          required
        />
        <label htmlFor="cod" className='radio-option'>Cash on Delivery (COD)</label>
        <br />
        <br />

        <button 
          type="submit"
          disabled={isOrderDisabled}
          className={isOrderDisabled ? '' : 'enabled-button'}
        ><div className="order-button">
          Place Order
          </div>
        </button>
      </form>

      {orderPlaced && (
        <div className="overlay">
        <div className="popup">
          
          {/* <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            run={showConfetti}
          /> */}
          <p>Order successfully placed!</p>
          <button onClick={() => {
            setOrderPlaced(false);
            setShowConfetti(false);
                              handleBacKHome();          
          }}>Home</button>
          </div>
        </div>
        
      )}
      
    </div>
    </div>
    
  );
}

export default OrderForm;