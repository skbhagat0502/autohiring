import React from "react";
import ReactDOM from "react-dom";
import CardComponent from "./cardcomponent";
import cardDetails1 from "../cardDetails1";
import cardDetails2 from "../cardDetails2";

function createCard(cardDetail) {
  return (
    <CardComponent
      key={cardDetail.id}
      imgURL={cardDetail.imgURL}
      foodItem={cardDetail.foodItem}
      description={cardDetail.description}
    />
  );
}

function Card() {
  return (
    <div className="card-section">
      <h2>Latest Articles</h2>
      <div className="card-row">{cardDetails1.map(createCard)}</div>
      <div className="card-row">{cardDetails2.map(createCard)}</div>
    </div>
  );
}
export default Card;
