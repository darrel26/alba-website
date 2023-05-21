import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import PackageSection from "./PackageSection/PackageSection";
import TechStackSection from "./TechStackSection/TechStackSection";
import ProductsBanner from "./ProductsBanner/ProductsBanner";
import PortofolioSection from "./PortofolioSection/PortofolioSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <PackageSection />
      <TechStackSection />
      <ProductsBanner />
      <PortofolioSection />
    </>
  );
}
