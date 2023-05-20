import React from "react";
import "./NumberOfSales.css";

export default function NumberOfSales({ number, sales }) {
  return (
    <div className="number-of-sales-item">
      <h2>{number}+</h2>
      <p>{sales}</p>
    </div>
  );
}
