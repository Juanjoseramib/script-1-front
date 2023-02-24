import React from "react";

export default function ButtonHero(props) {
  return (
    <button className={props.style} onClick={props.onClick}>
      {props.text || props.children}
    </button>
  );
}
