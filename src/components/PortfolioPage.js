import React from "react";
import { Link } from "react-router-dom";
import weather from "../img/weather.png";
import gatorTrader from "../img/gatorTrader.png";
import portfolio from "../img/portfolio.png";
import bookReview from "../img/book_review.png";
import sailGoldenGate from "../img/sailGoldenGate.png";
import form from "../img/form.png";

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
          <a href="https://portfolio-a0f44.web.app/">
            <div className="col-1-of-3 project--container--item">
              <img src={portfolio} alt="project" className="img__3" />
            </div>
          </a>

          {/**  projects */}
          <div className="row">
            <a href="https://github.com/momo1113/book-review">
              <div className="col-1-of-3 project--container--item1">
                <img src={bookReview} alt="project" className="img__4" />
              </div>
            </a>

            <a href="https://github.com/momo1113/sailGoldenGate">
              <div className="col-1-of-3 project--container--item1">
                <img src={sailGoldenGate} alt="project" className="img__5" />
              </div>
            </a>
            <a href="https://form-9e65f.web.app/">
              <div className="col-1-of-3 project--container--item1">
                <img src={form} alt="project" className="img__5" />
              </div>
            </a>
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
