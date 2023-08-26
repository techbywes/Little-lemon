import React from "react";
import "./specialMenu.css";
import salad from "./images/greek-salad.png";
import bruchetta from "./images/Bruchetta.png";
import Lemon_dessert from "./images/Lemon-dessert.png";
import deliveryVan from "./images/delivery-man.png";

function specialMenu() {
  return (
    <>
      <div className="main_general_div">
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
                chicago style feta cheese, garnished with crunchy garlic.
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
        <div className="general_container">
          <div className="image_text_price_div">
            <img className="menu_img" src={bruchetta} alt="" />

            <div className="title_price_div__">
              <h3>Bruchetta</h3>
              <p>$5.99</p>
            </div>

            <div className="description_div">
              <p className="description_text">
                Our Bruchetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
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
        <div className="general_container">
          <div className="image_text_price_div">
            <img className="menu_img" src={Lemon_dessert} alt="" />

            <div className="title_price_div__">
              <h3>Lemon Dessert</h3>
              <p>$5.00</p>
            </div>

            <div className="description_div">
              <p className="description_text">
                This comes straight from grandmas's recipe book. every last
                ingredient has been sourced and is as authentic as can be
                imagined.
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
      </div>
    </>
  );
}

export default specialMenu;
