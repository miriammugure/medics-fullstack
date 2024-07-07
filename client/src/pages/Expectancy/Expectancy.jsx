import React, { useState } from "react";
import Booking from "../../components/Booking/Booking";
import Bmi from "../../components/BMI/Bmi";
import dueImg from "../../assets/expectant.png";
import "./Expectancy.css";

function Expectancy() {
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const calculateDueDate = () => {
    if (startDate) {
      const start = new Date(startDate);
      const due = new Date(start.getTime());
      due.setMonth(due.getMonth() + 9);

      const formattedDueDate = due.toISOString().split("T")[0];
      setDueDate(formattedDueDate);
    }
  };
  return (
    <div>
      <div className="expectancyContainer">
        <Bmi />
        <div className="dueDate">
          <div className="dueImg">
            <img src={dueImg} alt="an image of an expectant mother" />
          </div>
          <div className="dueForm">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="dueGroup">
                <label htmlFor="pregnancyStart">Start date:</label>
                <input
                  type="date"
                  id="pregnancyStart"
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>

              <button type="button" onClick={calculateDueDate}>
                See due date
              </button>

              <div className="dueGroup">
                <label htmlFor="dueDate">Due date:</label>
                <input type="text" id="dueDate" value={dueDate} readOnly />
              </div>
            </form>
          </div>
        </div>
        <Booking />
      </div>
    </div>
  );
}

export default Expectancy;
