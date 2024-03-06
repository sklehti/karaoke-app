import React from "react";
import { InputProps } from "../types";

const InputClass = ({ setUserName, userName, error }: InputProps) => {
  return (
    <div className="field-layout">
      <div>
        <label htmlFor="name">Nimi tai nimimerkki*</label>
        <div
          className="alert-text"
          style={
            userName.length < 2 && error
              ? { display: "initial" }
              : { display: "none" }
          }
        >
          Nimikenttä ei sa olla tyhjä!
        </div>
      </div>

      <input
        value={userName}
        onChange={({ target }) => setUserName(target.value)}
        className={
          userName.length < 2 && error
            ? " input-base-style input-base-style-alert"
            : "input-base-style"
        }
        type="text"
      />
    </div>
  );
};

export default InputClass;
