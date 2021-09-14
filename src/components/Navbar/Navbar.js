import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        M-users
      </Link>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times " : "fas fa-bars"} />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleClick}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/users" className="nav-link" onClick={handleClick}>
            Users
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" onClick={handleClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
