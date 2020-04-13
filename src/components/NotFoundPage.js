import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="notfound">
    <div className="notfound--container">
      <div className="notfound--container--title">
        <p className="text1">4</p>
        <p>0</p>
        <p>4</p>
      </div>
      <div className="subtitle notfound--container--subtitle">Nothing here</div>
    </div>
    <div className="notfound--btn">
      <button className="notfound--btn__1">
        <Link className="notfound--btn__text" to="/">
          Home
        </Link>
      </button>
    </div>
  </div>
);

export default NotFoundPage;
