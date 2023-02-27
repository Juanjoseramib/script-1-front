import React from "react";
import "./formregister.css";
import FormInput from "../forminput.js/FormInput";

export default function CasillaRegister() {
  return (
    <div className="form-cont">
      <div className="text-form">
        <h3>Welcome!</h3>
        <p>
          Discover manga, manhua and manhwa, track your progress, have fun, read
          manga.
        </p>
      </div>
      <FormInput />
      <div className="google">
        <img src="./images/Google.png" alt="Google" />
        <p>Sign in with Google</p>
      </div>
      <p className="anchor">
        Already have an account? <a href="#">Log in</a>
      </p>
      <p className="anchor">
        Go back to <a href="#">Home page</a>
      </p>
    </div>
  );
}
