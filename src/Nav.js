import React from "react";
import logo from "./images/logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/Home">
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
        </Link>

        <ul>
          <Link to="/Home">
            <li className="go_home">
              <a className="active " href="#">
                Home
              </a>
            </li>
          </Link>

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
