import React, { useState } from "react";
import "./Bmi.css";
import Title from "../Title/Title";
import bmiimg from "../../assets/bmi.jpeg";

function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0 || height < 0 || weight < 0) {
      alert("Enter a valid number");
    } else {
      let bmiCalculator = (weight / (height * height)).toFixed(2);
      setResult(bmiCalculator);
      interpretBmi(bmiCalculator);
    }
  };

  const interpretBmi = (bmi) => {
    if (bmi < 18.5) {
      setInterpretation(" You are underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setInterpretation(" Normal weight");
    } else if (bmi >= 25 && bmi < 29.9) {
      setInterpretation("You are overweight");
    } else {
      setInterpretation("You are obese");
    }
  };
  return (
    <div>
      <div className="bmiContainer">
        <form className="bmiform" onSubmit={handleBmi}>
          <Title title="calculate your BMI here" />
          <div className="inputs">
            <div className="bmigrp">
              <label htmlFor="weight">Weight (KG)</label>
              <input
                type="number"
                placeholder="49"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="bmigrp">
              <label htmlFor="height">Height (M)</label>
              <input
                type="number"
                placeholder="1.3"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>

          <div className="flex">
            <button>calculate bmi</button>
            <div className="results">
              <p>Your BMI is: {result}</p>
              <p>{interpretation}</p>
            </div>
          </div>
        </form>
        <div className="bmiimg">
          <img src={bmiimg} alt="image a person measuring weight" />
        </div>
      </div>
    </div>
  );
}

export default Bmi;
