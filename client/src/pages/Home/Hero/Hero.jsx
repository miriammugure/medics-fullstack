import React from "react";
import "./Hero.css";
import heroImg from "../../../assets/her.webp";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="heroContainer">
        <div className="heroImage">
          <img src={heroImg} alt="an image of doctors" />
        </div>
        <div className="HeroInfo">
          <div className="heroText">
            {" "}
            <div className="heroIcon">
              <GiMedicines />
            </div>
            <h2>in pursuit of better medicine</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cum
              autem. Aperiam exercitationem reprehenderit aut.
            </p>
          </div>
          <div className="cta">
            <div className="cta1">
              {" "}
              <Link to="/Register" className="aboutLink">
                sign up &rarr;
              </Link>
            </div>
            <div className="cta1">
              {" "}
              <Link to="/Login" className="aboutLink">
                sign in &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
