import React from "react";
import "./specialMenu.css";
import salad from "./images/greek-salad.png";
import deliveryVan from "./images/delivery-man.png";

function specialMenu() {
  return (
    <>
      <div className="general_container">
        <div className="image_text_price_div">
          <img className="menu_img" src={salad} alt="" />

          <div className="title_price_div__">
            <h3>Greek Salad</h3>
            <p>$12.99</p>
          </div>

          <div className="description_div">
            <p className="description_text">
              The famous greek salad of crispy lettuce.peppers,olives and our
              chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>

          <div className="delivery__text_icon_div">
            <h3>Order A Delivery</h3>
            <img
              className="delivery_icon"
              src={deliveryVan}
              alt="delivery-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default specialMenu;
