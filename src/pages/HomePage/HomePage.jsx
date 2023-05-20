import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import PackageSection from "./PackageSection/PackageSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PackageSection />
    </div>
  );
}
