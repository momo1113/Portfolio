import React from "react";
import { Link } from "react-router-dom";

const Academy = () => (
  <div>
    <div className="portfolio--container">
      <div className="portfolio--container__item portfolio--container__left "></div>
      <div className=" portfolio--container__text">Education</div>
      <div className="portfolio--container__item portfolio--container__right"></div>
    </div>
    {/** grid */}

    <div className="row">
      <div className="col-1-of-3">
        <div className="col-1-of-3--container">
          <div className="col-1-of-3--container--item">
            <Link to="/" className="col-1-of-3--container--item__text">
              Home
            </Link>
          </div>
          <div className="col-1-of-3--container--item">
            <Link to="/portfolio" className="col-1-of-3--container--item__text">
              Portfolio
            </Link>
          </div>
          <div className="col-1-of-3--container--item">
            <Link to="/contact" className="col-1-of-3--container--item__text">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="col-2-of-3">
        <div className="row">
          <div className="col-2-of-3--container">
            <p className="col-2-of-3--container__school">
              San Francisco State University
              <span>2019 - present</span>
            </p>
            <p className="col-2-of-3--container__degree">
              Bachelor Of Engineering - Computer Science
            </p>
          </div>

          {/** relevant courses */}

          <div className="col-2-of-3--courses">
            <p className="col-2-of-3--courses__text">Relevant Courseworks:</p>
            <div className="col-2-of-3--courses__list">
              <ul>
                <li>Programming fundamental: Java</li>
                <li> Software Development</li>
                <li> Database Management</li>
                <li> Web Development</li>
                <li> Data Structure </li>
                <li> OOP design</li>
                <li> Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Academy;
