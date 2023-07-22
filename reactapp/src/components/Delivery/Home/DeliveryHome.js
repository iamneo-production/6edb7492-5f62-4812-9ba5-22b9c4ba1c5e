import React, { useState, useEffect } from "react";
import "./DeliveryHome.css";
import axios from "axios";
import DeliveryNav from '../Delivery Navbar/DeliveryNav';

const DeliveryHome = () => {
  
  return (
    <div  style={{ backgroundColor: "#060606" }}>
      <DeliveryNav />
      <center>
      <div className="adminbody">
        <h2 className="title">Customer Orders</h2>
        <div className="table-container">
          <center><table className="color-border-table" style={{ width: '900px' }}>
            <thead>
              <tr>
                <th style={{ width: '50px' }}>S.no</th>
                <th style={{ width: '70px' }}>Order ID</th>
                <th style={{ width: '120px' }}>Customer Name</th>
                <th style={{ width: '150px' }}>Restaurant Name</th>
                <th style={{ width: '80px' }}>Total cost</th>
                <th style={{ width: '130px' }}>Delivery Address</th>
                <th style={{ width: '200px' }}><center>Action</center></th>
              </tr>
            </thead>
            <tbody style={{fontSize:"15px"}}>
                  <td>1</td>
                  <td>12</td>
                  <td>abcd</td>
                  <td>xyz</td>
                  <td>200</td>
                  <td>xyzzsdfhsfsjkldfnakesaijedeja lskaklsdfhjflkasdn fawiehjiawfawjkehjk awehfjahi4trflkew kawje;lkjklawje</td>
                  <td >
                    <button className="acceptbutton">
                      Accept
                    </button>
                    <button className="statusbutton">
                      Delivered
                    </button>
                  </td>
            </tbody>
          </table></center>
        </div>
      </div>
      </center>
    </div>
  );
};
export default DeliveryHome;
