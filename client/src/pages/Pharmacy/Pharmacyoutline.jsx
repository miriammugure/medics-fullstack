import React from "react";
import "./Pharmacy.css";
import { useState } from "react";
function Pharmacyoutline({ image, name, price }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };
  const handleMessage = () => {
    alert(`you have bought ${count} ${name}`);
  };

  return (
    <div>
      <div className="medCard">
        <div className="medImg">
          <img src={image} alt={`an image of ${name}`} />
        </div>
        <div className="nameprice">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className="btncard">
          <button onClick={handleMessage}>buy now</button>
        </div>
        <div className="medCart">
          <div className="btncart">
            <button onClick={handleIncrement}>+</button>
          </div>

          <div className="btncart">
            <p>{count}</p>
          </div>
          <div className="btncart">
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacyoutline;
