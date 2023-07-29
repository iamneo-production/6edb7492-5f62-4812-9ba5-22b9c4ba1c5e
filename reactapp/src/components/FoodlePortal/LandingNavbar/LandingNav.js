import React from "react";
import { Link } from "react-router-dom";
import "./LandingNav.css";
function LandingNav() {
  return (
    <div>
      <header className="Header">
        <nav className="Navbar">
          <ul className="unorder">
            <li className="list">
              <Link className="a1" to="/">
                Home
              </Link>
            </li>
            <li className="list">
              <Link className="a1" to="/about">
                Menu
              </Link>
            </li>
            <li className="list">
              <Link className="a1" to="/contactus">
                Contact{" "}
              </Link>
            </li>

            <li className="list">
              <Link className="a1" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default LandingNav;
