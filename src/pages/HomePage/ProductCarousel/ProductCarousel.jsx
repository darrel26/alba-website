import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import Container from "../../../components/Container/Container";

const productsData = [
  {
    id: 1,
    name: "Hippo",
    imageUrl: "https://albatech.id/Asset/Home/Client/Hippo.png",
  },
  {
    id: 2,
    name: "Home and Living ",
    imageUrl: "https://albatech.id/Asset/Home/Client/Home%20and%20Living.png",
  },
  {
    id: 3,
    name: "Ilios",
    imageUrl: "https://albatech.id/Asset/Home/Client/Ilios.png",
  },
  {
    id: 4,
    name: "Dio Living",
    imageUrl: "https://albatech.id/Asset/Home/Client/Dio%20Living.png",
  },
  {
    id: 5,
    name: "Melandas",
    imageUrl: "https://albatech.id/Asset/Home/Client/Melandas.png",
  },
  {
    id: 6,
    name: "SUN Education Group",
    imageUrl: "https://albatech.id/Asset/Home/Client/Sun%20Edu.png",
  },
];

export default React.memo(function ProductCarousel() {
  const carouselItem = productsData.map((product) => (
    <div key={product.id} className="carousel-item">
      <img src={product.imageUrl} alt={product.name} />
    </div>
  ));

  return (
    <Container size={"xl"}>
      <Carousel items={carouselItem} />
    </Container>
  );
});
