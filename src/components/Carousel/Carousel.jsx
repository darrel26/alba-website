import React, { useState } from "react";
import "./Carousel.css";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNumberOfPage = () => {
    let page = [];

    for (let i = 0; i <= Math.floor(items.length / 5); i++) {
      page.push(<span onClick={() => setCurrentIndex(i)}></span>);
    }

    return page;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {items.map((item) => item)}
          </div>
        </div>
      </div>
      <div className="pagination">{...getNumberOfPage()}</div>
    </div>
  );
}
