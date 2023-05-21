import React, { useState } from "react";
import Logo from "../../assets/alba-logo.svg";
import Button from "../Button/Button";
import "./Header.css";
import Container from "../Container/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Service", href: "" },
    { label: "About", href: "" },
    { label: "Portofolio", href: "" },
    { label: "Blog", href: "" },
    { label: "Career", href: "" },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <li key={item.label}>
        <a href={item.href}>{item.label}</a>
      </li>
    ));
  };

  return (
    <nav>
      <Container size={"xl"}>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={`hamburger-menu${isMenuOpen ? " open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
        <ul className={`nav-menu${isMenuOpen ? " open" : ""}`}>
          {renderMenuItems()}
        </ul>
        <Button content={"Contact Us"} />
      </Container>
    </nav>
  );
}
