import React, { useState, useEffect } from "react";
import "./Carousel.css";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [device, setDevice] = useState(
    window.innerWidth <= 425 ? 1 : window.innerWidth <= 768 ? 2 : 5
  );

  const handleResize = () => {
    if (window.innerWidth <= 425) {
      setDevice(5);
    } else if (window.innerWidth <= 768) {
      setDevice(4);
    } else {
      setDevice(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const getNumberOfPage = () => {
    let page = [];
    let pageSize = (items.length - 1) / device;
    console.log(pageSize);
    for (let i = 0; i <= pageSize; i++) {
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
