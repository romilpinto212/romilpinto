import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi! Im 
         <br /> <span className="info-name">Romil L. Pinto</span>.
         <br /> A 4rth year BSCS Student.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/romil.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;