import React from "react";
import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import "./CTASection.css";

export default function CTASection() {
  return (
    <Container size={"xl"}>
      <div className="cta-section">
        <h4>Is software important for your business?</h4>
        <h1>Build it with Albatech</h1>
        <Button content="Consultation Now" />
      </div>
    </Container>
  );
}
