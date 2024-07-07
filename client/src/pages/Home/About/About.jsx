import React from "react";
import "./About.css";
import { BsHospital } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa";
import { LuCheckCircle } from "react-icons/lu";
import aboutImg from "../../../assets/about.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="topAbout">
          <div className="topContainer">
            <div className="aboutIcon">
              <BsHospital />
            </div>
            <div className="aboutNumber">850</div>
            <div className="aboutText">
              <p>patient's beds</p>
            </div>
          </div>
          <div className="topContainer">
            <div className="aboutIcon">
              <FaPeopleGroup />
            </div>
            <div className="aboutNumber">2500+</div>
            <div className="aboutText">
              <p>patients</p>
            </div>
          </div>
          <div className="topContainer">
            <div className="aboutIcon">
              <FaUserDoctor />
            </div>
            <div className="aboutNumber">750</div>
            <div className="aboutText">
              <p>doctors & nurses</p>
            </div>
          </div>
          <div className="topContainer">
            <div className="aboutIcon">
              <FaMedal />
            </div>
            <div className="aboutNumber">18</div>
            <div className="aboutText">
              <p> experience years </p>
            </div>
          </div>
        </div>
        <div className="bottomAbout">
          <div className="aboutImage">
            <img src={aboutImg} alt="an image of a doctor" />
          </div>
          <div className="aboutInfo">
            <div className="aboutTitle">
              <h4>about our hospital</h4>
            </div>
            <div className="aboutText">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex at
                deleniti similique perferendis. Debitis ut, quod ipsum deserunt
                odio voluptatibus!
              </p>
            </div>
            <div className="aboutcta">
              <div className="ctabox">
                <div className="ctabox1">
                  <div className="ctaIcon">
                    <LuCheckCircle />
                  </div>
                  <div className="ctaText">
                    <a href="/Register">browse our website</a>
                  </div>
                </div>

                <div className="ctabox1">
                  <div className="ctaIcon">
                    <LuCheckCircle />
                  </div>
                  <div className="ctaText">
                    <a href="/Contact">make an appointment</a>
                  </div>
                </div>

                <div className="ctabox1">
                  <div className="ctaIcon">
                    <LuCheckCircle />
                  </div>
                  <div className="ctaText">
                    <a href="/Contact">visit us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="aboutBtn">
              <button type="button">
                <Link to="/Contact" className="light">
                  Know more
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
