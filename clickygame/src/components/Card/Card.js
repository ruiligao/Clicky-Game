import React from "react";
import "./Card.css";
//pass the image into each card so all 12 are rendered
const Card = props => (
  <div className="card click-item" aria-label="click-item" onClick={() => props.imageClick(props.id)}>
    <div className="img-container">
      <img className="image" alt="cartoon" src={props.image} id={props.id} />
    </div>
  </div>
);

export default Card;