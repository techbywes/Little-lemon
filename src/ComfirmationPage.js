import React from "react";
import "./ComfirmationPage.css";
import Nav from "./Nav";
import Hero from "./Hero";
import checked from "./images/checked.png";

function ComfirmationPage() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="comfirm_general_container">
        <div className="success_icon_div">
          <img className="success_icon" src={checked} alt="success icon" />
        </div>
        <h2>You have successfully reserved a table</h2>
        <p>Thank you for choosing Little Lemon!</p>

        <div className="btns_div">
          <button>View</button>
          <button className="close_btn">Close</button>
        </div>
      </div>
    </>
  );
}

export default ComfirmationPage;
