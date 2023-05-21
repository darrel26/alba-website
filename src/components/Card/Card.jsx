import React from "react";
import "./Card.css";

export default function Card({ iconPath, cardCategory, cardTitle, cardText }) {
  return (
    <div className="card">
      <div className="card-icon-container">
        <img src={iconPath} alt={iconPath} />
      </div>
      <div className="card-body">
        {cardCategory ? <p className="card-category">{cardCategory}</p> : ""}
        <h1 className="card-title">{cardTitle}</h1>
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  );
}
