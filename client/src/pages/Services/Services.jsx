import React from "react";
import Title from "../../components/Title/Title";
import service from "../../assets/about.jpg";
import maternal from "../../assets/maternal.jpg";
import paedetric from "../../assets/paedetric.jpeg";
import "./Services.css";
function Services() {
  return (
    <div>
      <div className="servicesContainer">
        <Title title={"our services"} />
        <div className="actualServices">
          {/* <div className="serviceContainer">
            <div className="serviceImage">
              <img src={paedetric} alt="an image of a doctor" />
              <div className="serviceName">
                <p>peadetric services</p>
              </div>
            </div>
            <div className="serviceInfo">
              <div className="serviceText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum ducimus corrupti modi veritatis, possimus fugiat
                  dicta. Commodi dolores illo totam cum enim laboriosam culpa
                  facilis!
                </p>
              </div>
              <div className="serviceCta">

                <a href="/Expectancy">
                <button>
                  more &rarr;</button>
                  </a>
              </div>
            </div>
          </div> */}

          <div className="serviceContainer">
            <div className="serviceImage">
              <img src={service} alt="an image of a doctor" />
              <div className="serviceName">
                <p>out-patient services</p>
              </div>
            </div>
            <div className="serviceInfo">
              <div className="serviceText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum ducimus corrupti modi veritatis, possimus fugiat
                  dicta. Commodi dolores illo totam cum enim laboriosam culpa
                  facilis!
                </p>
              </div>
              <div className="serviceCta">
                <a href="/Login">
                  <button>more &rarr;</button>
                </a>
              </div>
            </div>
          </div>

          <div className="serviceContainer">
            <div className="serviceImage">
              <img src={maternal} alt="an image of a doctor" />
              <div className="serviceName">
                <p>maternal services</p>
              </div>
            </div>
            <div className="serviceInfo">
              <div className="serviceText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum ducimus corrupti modi veritatis, possimus fugiat
                  dicta. Commodi dolores illo totam cum enim laboriosam culpa
                  facilis!
                </p>
              </div>
              <div className="serviceCta">
                <a href="/Login">
                  <button>more &rarr;</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
