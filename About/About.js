import React from "react";
import Me from "../assets/faisal.png";
// import FaAward from "./react-icons/fa ";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={Me} alt="About_Image" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <artical className="about_card-txt">
                {/* <FaAward className="about_icon" /> */}
                <h5>Experience</h5>
                <small>3+ Years Working </small>
              </artical>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
