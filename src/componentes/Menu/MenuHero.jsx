import React from "react";
import "./menuhero.css";

export default function MenuHero({ onClick }) {
  return (
    <div className="menu-desplegable">
      <div className="header-burguer-menu" onClick={onClick}>
        <img
          src="./images/Union.png"
          className="close-icon"
          alt="burguer-menu"
        />
      </div>
      <button>Read</button>
      <button>Log in</button>
      <button>Register</button>
    </div>
  );
}
