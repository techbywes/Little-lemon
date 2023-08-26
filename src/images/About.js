import React from "react";
import "./About.css";
import About_pic1 from "../images/About_pic1.png";
import About_pic2 from "../images/About_pic2.png";

function About() {
  return (
    <>
      <div className="general_container">
        <div className="left_text_div">
          <h2 className="about_title">Little Lemon</h2>
          <p className="about_country">Chicago</p>
          <div className="about_description">
            <p className="about_descrip_texxt_">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate consequatur architecto, a placeat modi, quisquam
              sapiente consectetur ipsum magni id dolores aliquam et eaque
              dignissimos, provident non tempora consequuntur quidem!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate consequatur architecto, a placeat modi, quisquam
              sapiente consectetur ipsum magni id dolores aliquam et eaque
              dignissimos, provident non tempora consequuntur quidem!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate consequatur architecto, a placeat modi, quisquam
              sapiente consectetur ipsum magni id dolores aliquam et eaque
              dignissimos, provident non tempora consequuntur quidem!
            </p>
          </div>
        </div>

        <div className="right_images_div">
          <div className="image_1">
            <img
              className="about_image___"
              src={About_pic1}
              alt="About_image"
            />
          </div>
          <div className="image_2">
            <img
              className="about_image___ place_ontop"
              src={About_pic2}
              alt="About_image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
