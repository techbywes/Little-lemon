import React from "react";
import "./Tesimonial.css";
import rating from "./images/rating.png";
import profile1 from "./images/rating_1.png";
import profile2 from "./images/rating_2.png";
import profile3 from "./images/rating_3.png";
import profile4 from "./images/rating_4.png";

function Testimonial() {
  return (
    <>
      <div className="conatine__Div">
        <div className="textimonial__div">
          <h3 className="what_clients_say">What Our Customers Say!</h3>
          <div className="flex_divv">
            <div className="general_divv">
              <div className="">
                <div className="testimonial_">
                  <img className="rating__icon" src={rating} alt="rating" />
                  <div className="rating_img__name_title">
                    <div className="img_div">
                      <img
                        className="profile__pic"
                        src={profile1}
                        alt="profile_pic"
                      />
                    </div>

                    <div className="name__occupation_div">
                      <h4>William Smith</h4>
                      <h5>Real Estate</h5>
                      <p className="testimonial_text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum nostrum eligendi consectetur fugiat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="general_divv">
              <div className="">
                <div className="testimonial_">
                  <img className="rating__icon" src={rating} alt="rating" />
                  <div className="rating_img__name_title">
                    <div className="img_div">
                      <img
                        className="profile__pic"
                        src={profile2}
                        alt="profile_pic"
                      />
                    </div>

                    <div className="name__occupation_div">
                      <h4>Sam Welly</h4>
                      <h5>Real Estate</h5>
                      <p className="testimonial_text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum nostrum eligendi consectetur fugiat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="general_divv">
              <div className="">
                <div className="testimonial_">
                  <img className="rating__icon" src={rating} alt="rating" />
                  <div className="rating_img__name_title">
                    <div className="img_div">
                      <img
                        className="profile__pic"
                        src={profile3}
                        alt="profile_pic"
                      />
                    </div>

                    <div className="name__occupation_div">
                      <h4>John Miller</h4>
                      <h5>Real Estate</h5>
                      <p className="testimonial_text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum nostrum eligendi consectetur fugiat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="general_divv">
              <div className="">
                <div className="testimonial_">
                  <img className="rating__icon" src={rating} alt="rating" />
                  <div className="rating_img__name_title">
                    <div className="img_div">
                      <img
                        className="profile__pic"
                        src={profile4}
                        alt="profile_pic"
                      />
                    </div>

                    <div className="name__occupation_div">
                      <h4>Stella willz</h4>
                      <h5>Real Estate</h5>
                      <p className="testimonial_text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum nostrum eligendi consectetur fugiat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
