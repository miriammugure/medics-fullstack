import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdOutlineLocalHospital } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="headerContainer">
        <div className="navLinks">
          <ul>
            <li>
              {" "}
              <Link to="/" className="link">
                home
              </Link>
            </li>
            <li>
              <Link to="/Services" className="link">
                services
              </Link>
            </li>
            <li>
              <Link to="/Pharmacy" className="link">
                pharmacy
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Contact" className="link">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/" className="logol">
            <h2>medics hub</h2>
            <div className="iconHeader">
              <MdOutlineLocalHospital />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
