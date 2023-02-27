import { useRef } from "react";
import React from "react";
import axios from "axios";
import "./forminput.css";
import CasillaRegistro from "../Casillaregistro/CasillaRegistro";

export default function FormInput() {
  let name = useRef();
  let mail = useRef();
  let password = useRef();

  async function handleSubmit(event) {
    event.preventDefault();

    let data = {
      [name.current.name]: name.current.value,
      [mail.current.name]: mail.current.value,
      [password.current.name]: password.current.value,
    };
    console.log(data);
    let url = "http://localhost:8000/users";
    try {
      await axios.post(url, data);
    } catch (error) {
      console.log("Ocurrio un Error");
    }
  }

  return (
    <form className="form-register" onSubmit={handleSubmit}>
      <CasillaRegistro
        legend="Name"
        parentRef={name}
        type="text"
        id="name"
        required
        name="name"
      >
        <img src="./images/profile.png" className="prof-icon" alt="" />
      </CasillaRegistro>

      <CasillaRegistro
        legend="Email"
        parentRef={mail}
        type="mail"
        id="mail"
        required
        name="mail"
      >
        <img src="./images/@.png" className="mail-icon" alt="" />
      </CasillaRegistro>

      <CasillaRegistro
        legend="Password"
        parentRef={password}
        type="password"
        id="password"
        required
        name="password"
      >
        <img src="./images/lock1.png" className="lock-icon" alt="" />
      </CasillaRegistro>

      <CasillaRegistro
        legend="Confirm password"
        type="password"
        id="confirm"
        required
        name="confirm"
      >
        <img src="./images/lock1.png" className="lock-icon" alt="" />
      </CasillaRegistro>
      <div className="checkbox-form">
        <input type="checkbox" />
        <label htmlFor="">Send notification to my email</label>
      </div>
      <input type="submit" className="sign-up" value="sing up" />
    </form>
  );
}
