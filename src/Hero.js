import React from "react";
import "./Hero.css";
import Hero_image from "./images/Hero_image.png";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="left_div">
          <h1>LITTLE LEMON</h1>
          <p>Chicago</p>
          <p>
            We are fanily owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button>Reserve A Table</button>
        </div>
        <div>
          <img className="hero_img" src={Hero_image} alt="Hero-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
