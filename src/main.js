import React from "react";
import "./main.css";
import Menu from "./specialMenu";
import Testimonial from "./Testimonial";

function Main() {
  return (
    <>
      <main>
        <div className="specials_text_btn_div">
          <h2>This Weeks Specials!</h2>
          <button>Online Menu</button>
        </div>
        <Menu/>
        <Testimonial/>
      </main>
    </>
  );
}

export default Main;
