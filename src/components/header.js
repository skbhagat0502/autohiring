import React from "react";
import ReactDOM from "react-dom";
function Header() {
  return (
    <div className="top-section">
      <div className="navbar">
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        <button className="button-nav">Get In Touch</button>
      </div>
      <div className="left-section">
        <h1 className="discover">
          Discover the <span>Best</span> Food and Drinks
        </h1>
        <p className="naturally">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="button">Explore Now!</button>
      </div>

      <div className="image-section">
        <img className="image" src="images/Rectangle.png" />
        <img className="vector" src="images/vector.png" />
      </div>
    </div>
  );
}
export default Header;
