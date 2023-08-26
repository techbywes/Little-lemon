import React from "react";
import logo from "./images/logo.png";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a className="active" href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
