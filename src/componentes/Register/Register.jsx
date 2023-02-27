import React from "react";
import "./register.css";
import FormRegister from "../Form/FormRegister";

export default function Register() {
  return (
    <div className="cont-register">
      <FormRegister />
      <div className="cont-town">
        <img src="./images/Town.png" className="Town-img" alt="Town" />
      </div>
    </div>
  );
}
