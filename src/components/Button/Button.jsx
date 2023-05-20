import React from "react";
import "./Button.css";

export default function Button({ content }) {
  return (
    <a href="" className="btn-cta">
      {content}
    </a>
  );
}
