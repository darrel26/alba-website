import React from "react";
import Card from "../../../components/Card/Card";
import Container from "../../../components/Container/Container";
import "./PortofolioSection.css";
import Button from "../../../components/Button/Button";

const portofolioData = [
  {
    iconPath: "https://albatech.id/Asset/Portofolio/Ilios.png",
    cardCategory: "Mobile apps",
    cardTitle: "ILIOS app (B2B E-commerce)",
    cardText:
      "Has a unique selling point where not all companies offer applications for sales, data collection and management",
  },
  {
    iconPath: "https://albatech.id/Asset/Portofolio/Home%20and%20living.png",
    cardCategory: "Website development",
    cardTitle: "Home and Living",
    cardText:
      "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.",
  },
  {
    iconPath: "https://albatech.id/Asset/Portofolio/Hippo.png",
    cardCategory: "Website development",
    cardTitle: "Hippo",
    cardText:
      "Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
  },
];

export default function PortofolioSection() {
  const fadeText = "Portofolio";
  const title =
    "The software that we build takes our clients to the next level";
  return (
    <Container size={"xl"}>
      <div className="portofolio-section">
        <p>{fadeText}</p>
        <h1>{title}</h1>
        <div className="portofolio-card-container">
          {portofolioData.map((portofolio, index) => (
            <Card key={index} {...portofolio} />
          ))}
        </div>
        <Button content={"Learn more"} />
      </div>
    </Container>
  );
}
