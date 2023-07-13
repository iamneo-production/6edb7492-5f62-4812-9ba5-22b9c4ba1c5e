import React from 'react'
import "./body.css";


const Body = () => {
  return (
    <div className="body">
      <div className='image'>
        <a href='/' className="Bg">
        <img src={require('../../assets/bg-4.jpg')}  alt="" />
        </a>
        </div>
        <div className='text'>
            <h1>Foodle</h1>
            <br/>
            <br/>
            <h6>Find the best restraunts and cafes and<br/> explore more about food!!!</h6>
        </div>
      
        <p style={{paddingTop:"600px"}}>...Dine well, and you’ll be able to think well, sleep well, and live well...</p>


        
          <h2 style={{paddingTop:"850px"}}>Explore our Food</h2></div>
    
    

             
  )
}

export default Body
