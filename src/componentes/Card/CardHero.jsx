import React from "react";
import "./cardhero.css";
import Ninjax from "../../images/Ninjax.png";
import Posterx from "../../images/Posterx.png";

export default function CardHero() {
  return (
    <div className="cont-card">
      <img src={Ninjax} className="ninja-img" alt="logo" />
      <img src={Posterx} className="poster-img" alt="logo" />
      <div className="div-text-card">
        <p className="card-tittle">Trigun Stampede</p>
        <p className="text1">Manga</p>
        <p className="text2">
          TRIGUN is a popular action manga by Yasuhiro Nightow that follows the
          story of Vash Stampede, a legendary gunfighter and pacifist with a
          huge bounty on his head.
        </p>
      </div>
    </div>
  );
}
