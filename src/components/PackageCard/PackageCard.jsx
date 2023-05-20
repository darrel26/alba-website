import React from "react";
import "./PackageCard.css";

export default function PackageCard({ iconPath, cardTitle, cardText }) {
  return (
    <div className="card">
      <div className="card-icon-container">
        <img src={iconPath} alt={iconPath} />
      </div>
      <div className="card-title">{cardTitle}</div>
      <div className="card-body">{cardText}</div>
    </div>
  );
}
