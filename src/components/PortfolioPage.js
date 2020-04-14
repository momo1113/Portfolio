import React from "react";
import { Link } from "react-router-dom";

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
            <Link
              to="/"
              className="col-1-of-3--container--item__text"
              exact={true}
            >
              Home
            </Link>
          </div>
          <div className="col-1-of-3--container--item">
            <Link
              to="/education"
              className="col-1-of-3--container--item__text"
              exact={true}
            >
              Education
            </Link>
          </div>
          <div className="col-1-of-3--container--item">
            <Link
              to="/contact"
              className="col-1-of-3--container--item__text"
              exact={true}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="col-2-of-3">je;l</div>
    </div>
  </div>
);

export default PortfolioPage;
