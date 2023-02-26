import React from "react";
import "./hero.css";
import NavBar from "../Navbar/NavBar";
import CardHero from "../Card/CardHero";
import BannerNaruto from "../Bannernaruto/BannerNaruto";

export default function Hero() {
  return (
    <div className="body-box">
      <NavBar />
      <CardHero />
      <BannerNaruto />
    </div>
  );
}
