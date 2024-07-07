import React from "react";
import "./Booking.css";
import { FaPhone } from "react-icons/fa6";
import Title from "../Title/Title";
function Booking() {
  return (
    <div>
      <div className="bookingContainer">
        <Title title="book an appointment with us :" />
        <div className="bookingActual">
          <div className="bookingImg">
            <FaPhone />
            <p>0110638872</p>
          </div>
          <div className="bookingEmail">
            <a target="blank" href="mailto:miriammugure610@gmail.com">
              <button>book here</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
