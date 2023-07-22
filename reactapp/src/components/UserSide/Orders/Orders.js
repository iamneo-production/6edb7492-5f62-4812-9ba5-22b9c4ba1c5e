import React, { useState, useEffect } from "react";
import "./Orders.css";
import axios from "axios";

const Orders = () => {
  
  return (
    <div  style={{ backgroundColor: "#060606" }}>

      <center>
      <div className="adminbody">
        <h2 className="title">Orders</h2>
        <div className="table-container">
          <center><table className="color-border-table" style={{ width: '900px' }}>
            <thead>
              <tr>
                <th style={{ width: '50px' }}>S.no</th>
                <th style={{ width: '70px' }}>Order ID</th>
                <th style={{ width: '120px' }}>Customer Name</th>
                <th style={{ width: '80px' }}>Total cost</th>
                <th style={{ width: '120px' }}>Ordered Date</th>
                <th style={{ width: '120px' }}>Ordered Time</th>
                <th style={{ width: '70px' }}>Status</th>
                <th style={{ width: '200px' }}><center>Action</center></th>
              </tr>
            </thead>
            <tbody style={{fontSize:"15px"}}>
                  <td>1</td>
                  <td>12</td>
                  <td>abcd</td>
                  <td>xyz</td>
                  <td>200</td>
                  <td>12.00</td>
                  <td>Delivered</td>
                  <td ><center>
                    <button className="reorderbutton">
                      Reorder
                    </button></center>
                  </td>
            </tbody>
          </table></center>
        </div>
      </div>
      </center>
    </div>
  );
};
export default Orders;
