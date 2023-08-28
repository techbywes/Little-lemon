import React from "react";
import "./Hero.css";
import Hero_image from "./images/Hero_image.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="left_div">
          <h1>LITTLE LEMON</h1>
          <p>Chicago</p>
          <p>
            We are fanily owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/Booking">
            <button>Reserve A Table</button>
          </Link>
        </div>
        <div>
          <img className="hero_img" src={Hero_image} alt="Hero-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
