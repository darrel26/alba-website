import React from "react";
import Container from "../../../components/Container/Container";
import Petik from "../../../assets/icon/Petik.svg";
import Dot from "../../../assets/icon/Dot.svg";
import ColoredDot from "../../../assets/icon/Dot-colored.svg";

import "./TestimonialSection.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonialsData = [
  {
    reviewTitle: "Amazing People",
    review:
      '"They are people who are not only following the tasks, but can work as a team. Together."',
    userName: "Matthijs Piest",
    userPosition: "COO at WieBeetaltWat",
  },
  {
    reviewTitle: "Amazing People",
    review:
      '"They are people who are not only following the tasks, but can work as a team. Together."',
    userName: "Matthijs Piest",
    userPosition: "COO at WieBeetaltWat",
  },
  {
    reviewTitle: "Amazing People",
    review:
      '"They are people who are not only following the tasks, but can work as a team. Together."',
    userName: "Matthijs Piest",
    userPosition: "COO at WieBeetaltWat",
  },
  {
    reviewTitle: "Amazing People",
    review:
      '"They are people who are not only following the tasks, but can work as a team. Together."',
    userName: "Matthijs Piest",
    userPosition: "COO at WieBeetaltWat",
  },
  {
    reviewTitle: "Partnership Approach",
    review:
      '"We felt like we had a true partner throughout the process. They were clearly interested in our long-term success."',
    userName: "Matthijs Piest",
    userPosition: "COO at WieBeetaltWat",
  },
];

export default function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <p>Testimonials</p>
      <h1>What clients love in working with Albatech Team</h1>
      <div className="testimonials">
        <img src={Petik} alt="petik" className="petik" />
        <img src={Dot} alt="petik" className="dot" />
        <img src={ColoredDot} alt="petik" className="colored-dot" />
        <img src={Petik} alt="petik" className="petik-flipped" />
        <Container size={"xl"}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Container>
      </div>
    </div>
  );
}
