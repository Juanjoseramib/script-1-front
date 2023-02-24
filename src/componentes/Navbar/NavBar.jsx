import React from "react";
import "./navbar.css";
import Menux from "../../images/Menux.png";
import Logox from "../../images/Logox.png";
import { useState, useEffect } from "react";

export default function NavBar() {
  return (
    <div className="navbar-box">
      <img src={Menux} className="burguer-menu" alt="burguer-menu" />
      <img src={Logox} className="heroe-logo" alt="logo" />
    </div>
  );
}
