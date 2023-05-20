import React from "react";
import NumberOfSales from "../../../components/NumberOfSales/NumberOfSales";
import "./ProductsBanner.css";

const salesData = [
  { number: 1000, sales: "Designs" },
  { number: 30, sales: "Products" },
  { number: 58, sales: "Website Developments" },
];

export default function ProductsBanner() {
  return (
    <div className="products-banner-container">
      <h1>
        Our Progress Comes with a Collaboration Between Creativity, Ideas, and
        Technology
      </h1>
      <div className="number-of-sales">
        {salesData.map(({ number, sales, id }) => (
          <NumberOfSales key={id} number={number} sales={sales} />
        ))}
      </div>
    </div>
  );
}
