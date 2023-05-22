import React from "react";
import Button from "../../../components/Button/Button";
import HeroImage from "../../../assets/hero-banner-img.png";

import "./HeroSection.css";
import Container from "../../../components/Container/Container";

export default function HeroSection() {
  const title = "Build or scale up";
  const subtitle = "your development team";
  const description = "in weeks, not months";
  const buttonText = "Book Now";

  return (
    <Container size={"xl hero-section"}>
      <div className="hero-section-container">
        <div className="left-section">
          <h1 className="bold-font">{title}</h1>
          <h1 className="lighter-font">{subtitle}</h1>
          <div className="description-container">
            <div className="line-shape" />
            <p>{description}</p>
          </div>
          <Button content={buttonText} />
        </div>
        <div className="right-section">
          <div className="image-container">
            <img src={HeroImage} alt="hero-img" />
          </div>
        </div>
      </div>
    </Container>
  );
}
