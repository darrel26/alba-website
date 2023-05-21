import React from "react";
import "./Container.css";

export default function Container({ size, children }) {
  return <div className={`container container-${size}`}>{children}</div>;
}
