import React from "react";
import "./hero.css";
import NavBar from "../componentes/Navbar/NavBar";
import CardHero from "../componentes/Card/CardHero";
import BannerNaruto from "../componentes/Bannernaruto/BannerNaruto";

export default function Hero() {
  return (
    <div className="body-box">
      <NavBar />
      <CardHero />
      <BannerNaruto />
    </div>
  );
}
