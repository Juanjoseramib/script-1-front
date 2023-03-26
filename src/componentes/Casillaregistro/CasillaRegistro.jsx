import React from "react";
import "./casillaregistro.css";

export default function CasillaRegistro(props) {
  return (
    <fieldset className="fieldset-form">
      <legend>{props.legend}</legend>
      <input
        ref={props.parentRef}
        type={props.type}
        id={props.id}
        name={props.name}
        required={props.required}
      />
      {props.text || props.children}
    </fieldset>
  );
}
