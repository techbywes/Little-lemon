import React from "react";
import "./Hero.css";
import Hero_image from "./images/Hero_image.png";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="left_div">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            provident ipsum accusamus ducimus minima reiciendis? Doloremque
            veritatis velit neque eligendi dignissimos.
          </p>
          <button>Reserve A Table</button>
        </div>
        <div>
          <img src={Hero_image} alt="Hero-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
