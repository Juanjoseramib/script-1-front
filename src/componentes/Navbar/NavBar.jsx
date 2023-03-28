import React from "react";
import "./navbar.css";
import MenuHero from "../Menu/MenuHero.jsx";
import { useState } from "react";

export default function NavBar() {
  const [render, setRender] = useState(false);
  
  function handleRender() {
    setRender(!render);
  }
  return (
    <div className="navbar-box">
      <img
        onClick={handleRender}
        src="./images/Menux.png"
        className="burguer-menu"
        alt="burguer-menu"
      />
      {render ? <MenuHero onClick={handleRender} /> : null}
      <img src="./images/Logox.png" className="heroe-logo" alt="logo" />
    </div>
  );
}
