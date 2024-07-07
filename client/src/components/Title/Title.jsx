import React from "react";
import "./Title.css";
function Title({ title }) {
  return (
    <div>
      <div className="titleContainer">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Title;
