import React from "react";
import ReactDOM from "react-dom";
import createCard from "./cards";

function CardComponent(props) {
  return (
    <div className="card">
      <img src={props.imgURL} />
      <h3>{props.foodItem}</h3>
      <p>{props.description}</p>
      <button>Read More</button>
    </div>
  );
}

export default CardComponent;
