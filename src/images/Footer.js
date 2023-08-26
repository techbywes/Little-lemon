import React from "react";
import "./Footer.css";
import footer_log from "../images/footer_logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_logo">
          <img
            className="footer_logo_icon"
            src={footer_log}
            alt="footer logo"
          />
        </div>

        <div className="footer_menu_links_div">
          <div className="link_1">
            <h3 className="links_title">Doormart Nav</h3>
            <ul>
              <li>
                <a href="#">Home</a>
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
          </div>
          <div className="link_2">
            <h3 className="links_title">Contact</h3>
            <ul>
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Phone Number</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
          <div className="link_3">
            <h3 className="links_title">Social Media Links</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Messenger</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
