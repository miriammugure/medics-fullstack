import React from "react";
import "./Doctors.css";
import Icons from "../../../components/Icons/Icons";
import doc1 from "../../../assets/doc1.jpg";
import doc2 from "../../../assets/doc2.jpg";
import doc3 from "../../../assets/doc3.jpg";
import doc4 from "../../../assets/doc4.jpg";
import doc5 from "../../../assets/doc5.jpg";
import Title from "../../../components/Title/Title";
function Doctors() {
  return (
    <div>
      <div className="doctorsContainer">
        <Title title="what do our doctors have to say" />
        <div className="actualDoctors">
          <div className="doctors">
            <div className="doctorImage">
              <img src={doc1} alt="image of a doctor" />
            </div>
            <div className="doctorInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iure recusandae doloremque quis ut sapiente!
              </p>
              <div className="iconBox">
                <Icons fbUrl="facebook.com" />
                <Icons instaUrl="instagram.com" />
              </div>
            </div>
          </div>

          <div className="doctors">
            <div className="doctorImage">
              <img src={doc5} alt="image of a doctor" />
            </div>
            <div className="doctorInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iure recusandae doloremque quis ut sapiente!
              </p>

              <div className="iconBox">
                <Icons fbUrl="facebook.com" />
                <Icons twitterUrl="twitter.com" />
              </div>
            </div>
          </div>

          <div className="doctors">
            <div className="doctorImage">
              <img src={doc4} alt="image of a doctor" />
            </div>
            <div className="doctorInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iure recusandae doloremque quis ut sapiente!
              </p>

              <div className="iconBox">
                <Icons fbUrl="facebook.com" />
                <Icons twitterUrl="twitter.com" />
              </div>
            </div>
          </div>
          <div className="doctors">
            <div className="doctorImage">
              <img src={doc3} alt="image of a doctor" />
            </div>
            <div className="doctorInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iure recusandae doloremque quis ut sapiente!
              </p>

              <div className="iconBox">
                <Icons fbUrl="facebook.com" />
                <Icons instaUrl="instagram.com" />
              </div>
            </div>
          </div>
          <div className="doctors">
            <div className="doctorImage">
              <img src={doc2} alt="image of a doctor" />
            </div>
            <div className="doctorInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                iure recusandae doloremque quis ut sapiente!
              </p>
              <div className="iconBox">
                <Icons fbUrl="facebook.com" />
                <Icons instaUrl="instagram.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
