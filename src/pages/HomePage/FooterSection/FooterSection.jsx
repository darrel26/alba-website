import React from "react";
import Container from "../../../components/Container/Container";
import Logo from "../../../assets/alba-logo.svg";
import LinkedIn from "../../../assets/icon/linkedin-in.svg";
import Facebook from "../../../assets/icon/facebook-f.svg";
import Instagram from "../../../assets/icon/instagram.svg";
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <Container size={"xl"}>
      <div className="footer-container">
        <div className="divider"></div>
        <div className="footer-content">
          <div className="first-column">
            <img src={Logo} alt="logo" />
            <p>
              Albatech acts as a corporate partner to help digitize their
              business to accelerate trends in remote work
            </p>
            <div className="social-media-container">
              <img src={Facebook} alt="facebook" />
              <img src={Instagram} alt="instagram" />
              <img src={LinkedIn} alt="linkedin" />
            </div>
          </div>
          <div className="second-column">
            <h3>Website</h3>
            <ul className="website-list">
              <li>About</li>
              <li>Service</li>
              <li>Portofolio</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="third-column">
            <h3>Contact</h3>
            <p>
              The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
              Kota Tangerang, Banten 15143
            </p>
            <p>
              <span>P</span> : +62 81 1889 3383
            </p>
            <p>
              <span>E</span> : info@albatech.id
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <p className="copywright">
          &copy; PT. Alba Digital Teknologi 2021 | All Rights Reserved
        </p>
      </div>
    </Container>
  );
}
