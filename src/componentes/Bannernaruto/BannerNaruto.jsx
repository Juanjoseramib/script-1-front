import React from "react";
import "./bannernaruto.css";
import naruto from "../../images/naruto.png";

export default function BannerNaruto() {
  return (
    <div className="bg-naruto">
      <img src={naruto} className="img-naruto" alt="naruto" />
      <div className="div-text-naruto">
        <p className="tittle-naruto">Live the emotion of the manga</p>
        <p className="naruto-text1">Find the perfect manga for you</p>
        <p className="naruto-text2">#MingaForever 🔥</p>
        <button className="button-naruto">Explore</button>
      </div>
    </div>
  );
}
