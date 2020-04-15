import React from "react";
import { Link } from "react-router-dom";
import weather from "../img/weather.png";
import gatorTrader from "../img/gatorTrader.png";

const PortfolioPage = () => (
  <div>
    <div className="portfolio--container">
      <div className="portfolio--container__item portfolio--container__left "></div>
      <div className=" portfolio--container__text">Portfolio</div>
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
            <Link to="/education" className="col-1-of-3--container--item__text">
              Education
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
        {/** skill */}
        <div className="row">
          <div className="col-2-of-3--container">
            <ul className="col-2-of-3--container--list">
              <li className="col-2-of-3--container--list__1">Java</li>
              <li className="col-2-of-3--container--list__2"> JavaScript</li>
              <li className="col-2-of-3--container--list__3">React</li>
              <li className="col-2-of-3--container--list__4">NodeJs</li>
              <li className="col-2-of-3--container--list__5">MySql</li>
              <li className="col-2-of-3--container--list__6">Git</li>
              <li className="col-2-of-3--container--list__7">Html</li>
              <li className="col-2-of-3--container--list__8">Sass</li>
            </ul>
          </div>
        </div>

        {/**  projects */}
        <div className="row">
          <div className="col-1-of-3 project--container--item">
            <a href="https://sun-forecast-application.herokuapp.com/">
              <img src={weather} alt="project" className="img__1" />
            </a>
          </div>
          <div className="col-1-of-3 project--container--item">
            <img src={gatorTrader} alt="project" className="img__2" />
          </div>
          <div className="col-1-of-3 project--container--item">
            <img src={weather} alt="project" className="img__3" />
          </div>

          {/**  projects */}
          <div className="row">
            <div className="col-1-of-3 project--container--item1">
              <img src={weather} alt="project" className="img__4" />
            </div>
            <div className="col-1-of-3 project--container--item1">
              <img src={weather} alt="project" className="img__5" />
            </div>
            <div className="col-1-of-3 project--container--item1">
              <img src={weather} alt="project" className="img__6" />
            </div>
          </div>

          <div className="row">
            <p className="caption">More to come ...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioPage;
