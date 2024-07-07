import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Icons.css";
function Icons({ twitterUrl, instaUrl, fbUrl }) {
  return (
    <div>
      <div className="iconContainer">
        <div className="IconLinks">
          {twitterUrl && (
            <Link to={twitterUrl}>
              <FaXTwitter />
            </Link>
          )}
          {instaUrl && (
            <Link to={instaUrl}>
              <FaInstagram />
            </Link>
          )}
          {fbUrl && (
            <Link to={fbUrl}>
              <FaFacebookF />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Icons;
