import React from "react";
import PackageCard from "../../../components/PackageCard/PackageCard";
import "./PackageSection.css";
import Container from "../../../components/Container/Container";
import Card from "../../../components/Card/Card";

export default function PackageSection() {
  const fadeText = "Complete Package";
  const title = "From product design to software continuous delivery";
  const cardContent = [
    {
      iconPath:
        "https://raw.githubusercontent.com/darrel26/alba-website/63060e95107809633f6a97b609c063266f0ab567/src/assets/package-section/icon-website-development.svg",
      cardTitle: "Website development",
      cardText:
        "High-performance website to reach out more your potential customers",
    },
    {
      iconPath:
        "https://raw.githubusercontent.com/darrel26/alba-website/63060e95107809633f6a97b609c063266f0ab567/src/assets/package-section/icon-mobile-development.svg",
      cardTitle: "Mobile apps development",
      cardText: "To accelerate your business process",
    },
    {
      iconPath:
        "https://raw.githubusercontent.com/darrel26/alba-website/63060e95107809633f6a97b609c063266f0ab567/src/assets/package-section/icon-digital-product.svg",
      cardTitle: "Digital product design",
      cardText:
        "complete digital product creations from UX prototyping to final UI designs",
    },
    {
      iconPath:
        "https://raw.githubusercontent.com/darrel26/alba-website/63060e95107809633f6a97b609c063266f0ab567/src/assets/package-section/icon-maintenance.svg",
      cardTitle: "Maintenance",
      cardText: "Make sure your digital environment keep online and updated",
    },
    {
      iconPath:
        "https://raw.githubusercontent.com/darrel26/alba-website/63060e95107809633f6a97b609c063266f0ab567/src/assets/package-section/icon-cms-development.svg",
      cardTitle: "CMS development",
      cardText: "you can update your website content yourself",
    },
    {
      iconPath:
        "https://raw.githubusercontent.com/darrel26/alba-website/63060e95107809633f6a97b609c063266f0ab567/src/assets/package-section/icon-payment-gateway.svg",
      cardTitle: "Integrated payment gateway",
      cardText: "Simplify the payment system with just one step",
    },
  ];
  return (
    <Container size={"xl"}>
      <div className="complete-package-section">
        <p>{fadeText}</p>
        <h1>{title}</h1>
        <div className="cards-container">
          {cardContent.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </Container>
  );
}
