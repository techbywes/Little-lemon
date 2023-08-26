import React from "react";
import "./main.css";
import Menu from "./specialMenu";

function Main() {
  return (
    <>
      <main>
        <div className="specials_text_btn_div">
          <h2>This Weeks Specials!</h2>
          <button>Online Menu</button>
        </div>
        <Menu/>
      </main>
    </>
  );
}

export default Main;
