import React from "react";
import { Link } from "react-router-dom";
import styles from './navbar.module.css';

const Navbar1 = () => {
  return (
    
    <div>
      <div className={styles.topnav}>
      <a className={styles.brand}>Restaurant Dashboard</a>
        <Link className={styles.navtxt} to="/menu">
          Menu
        </Link>
      </div>
    </div>
  );
};
export default Navbar1;