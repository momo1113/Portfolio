import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => (
  <div>
    {/* header */}
    <div className="header">
      <div className="header--item">
        <Link to="" className="header--item__text">
          Home
        </Link>
      </div>

      <div className="header--item">
        <Link to="" className="header--item__text">
          Education
        </Link>
      </div>

      <div className="header--item">
        <Link to="" className="header--item__text">
          Portfolio
        </Link>
      </div>
    </div>

    {/* pictures */}

    <div>
      <div>
        <img></img>
      </div>
      <div></div>
    </div>
  </div>
);

export default ContactPage;
