import React from "react";
import Date from "../../utils/Date";
import { MdOutlineLocalHospital } from "react-icons/md";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="footer-extra">
          <div className="newsletter">
            <p>subscribe to our newsletter</p>
            <form action="">
              <input type="email" placeholder="johndoe@example.com" />
            </form>
            <button type="submit">subscribe</button>
          </div>
          <div className="extralinks">
            <ul>
              <li>
                {" "}
                <Link to="/" className="linkf">
                  home
                </Link>
              </li>
              <li>
                <Link to="/Services" className="linkf">
                  services
                </Link>
              </li>
              <li>
                <Link to="/Pharmacy" className="linkf">
                  pharmacy
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/Contact" className="linkf">
                  contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="logo">
            <Link to="/" className="logolink">
              <h2>medics hub</h2>
              <div className="iconHeader">
                <MdOutlineLocalHospital />
              </div>
            </Link>
          </div>
        </div>
        <div className="footerNav">
          <div className="FooterLinks">
            <Icons
              twitterUrl={"twitter.com"}
              fbUrl={"facebook.com"}
              instaUrl={"instagram.com"}
            />
          </div>
          <div className="Footertext">
            <p> &copy;2024 all rights reserved. miriam mugure wachira </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
