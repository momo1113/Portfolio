import React from "react";
import { Link } from "react-router-dom";
import profile from "../img/profile_pic.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import email from "../img/mail.png";

const ContactPage = () => (
  <div className="contact">
    {/* header */}
    <div className="header">
      <div className="header--item">
        <Link to="" className="header--item__text">
          Home
        </Link>
      </div>

      <div className="header--item">
        <Link to="/education" className="header--item__text">
          Education
        </Link>
      </div>

      <div className="header--item">
        <Link to="/portfolio" className="header--item__text">
          Portfolio
        </Link>
      </div>
    </div>

    {/* pictures */}
    <div className="info--container">
      <img src={profile} alt="self-profile" className="info--container__pic" />
    </div>

    {/* social media */}
    <div className="social--container">
      <a href="https://www.linkedin.com/in/momo-sun-626766179/">
        <img
          src={linkedin}
          alt="linkedin"
          className="social--container__item social--container__linkedin"
        />
      </a>
      <a href="https://github.com/momo1113">
        <img
          src={github}
          alt="github"
          className=" social--container__item social--container__github"
        />
      </a>
      <a href={`mailto: mosun1113@gmail.com`}>
        <img
          src={email}
          alt="gemail"
          className=" social--container__item social--container__email"
        />
      </a>
    </div>
  </div>
);

export default ContactPage;
