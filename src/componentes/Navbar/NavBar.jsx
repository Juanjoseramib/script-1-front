import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navbar-box">
      <img
        src="./images/Menux.png"
        className="burguer-menu"
        alt="burguer-menu"
      />
      <img src="./images/Logox.png" className="heroe-logo" alt="logo" />
    </div>
  );
}
