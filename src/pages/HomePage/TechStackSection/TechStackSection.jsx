import React from "react";
import "./TechStackSection.css";

const stackLogo = [
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-1.svg",
    label: "aws",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-2.svg",
    label: "gcloud",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-3.svg",
    label: "angular",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-4.svg",
    label: "css3",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-5.svg",
    label: "html5",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-6.svg",
    label: "nodejs",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-7.svg",
    label: "php",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-8.svg",
    label: "python",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-9.svg",
    label: "react",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-10.svg",
    label: "ruby",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-11.svg",
    label: "mongodb",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-12.svg",
    label: "mysql",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-13.svg",
    label: "postgre",
  },
  {
    logoPath:
      "https://raw.githubusercontent.com/darrel26/alba-website/46e1a37023f7e3aaea380d75d1bd3edd93c012ef/src/assets/tech-stack/logo-14.svg",
    label: "sql-server",
  },
];

export default function TechStackSection() {
  return (
    <div className="stack-logo-container">
      {stackLogo.map(({ logoPath, label }, index) => {
        return (
          <div className="logo" key={index}>
            <img src={logoPath} alt={label} />
          </div>
        );
      })}
    </div>
  );
}
