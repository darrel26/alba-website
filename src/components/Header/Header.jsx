import React from "react";
import Logo from "../../assets/alba-logo.svg";
import Button from "../Button/Button";
import "./Header.css";

export default function Header() {
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
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="nav-menu">{renderMenuItems()}</ul>
      <Button content={"Contact Us"} />
    </nav>
  );
}
