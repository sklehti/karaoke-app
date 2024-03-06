import React from "react";
import { KeyProps } from "../types";

const KeyClass = ({ keyValue, setKeyValue, error }: KeyProps) => {
  return (
    <div className="field-layout">
      <div>
        <label htmlFor="keyValue">Sävellaji*</label>
        <div
          className="alert-text"
          style={
            error && keyValue === null
              ? { display: "initial" }
              : { display: "none" }
          }
        >
          Valitse sävellaji!
        </div>
      </div>

      <div
        id="keyValue"
        className={
          error && keyValue === null ? "btn-group btn-group-alert" : "btn-group"
        }
        role="group"
      >
        <button
          className={
            keyValue === "-2"
              ? "btn-group-button button-focus"
              : "btn-group-button"
          }
          type="button"
          value="-2"
          onClick={() => setKeyValue("-2")}
        >
          -2
        </button>
        <button
          className={
            keyValue === "-1"
              ? "btn-group-button button-focus"
              : "btn-group-button"
          }
          type="button"
          value="-1"
          onClick={() => setKeyValue("-1")}
        >
          -1
        </button>
        <button
          className={
            keyValue === "0"
              ? "btn-group-button button-focus"
              : "btn-group-button"
          }
          type="button"
          value="0"
          onClick={() => setKeyValue("0")}
        >
          0
        </button>
        <button
          className={
            keyValue === "+1"
              ? "btn-group-button button-focus"
              : "btn-group-button"
          }
          type="button"
          value="+1"
          onClick={() => setKeyValue("+1")}
        >
          +1
        </button>
        <button
          className={
            keyValue === "+2"
              ? "btn-group-button button-focus"
              : "btn-group-button"
          }
          type="button"
          value="+2"
          onClick={() => setKeyValue("+2")}
        >
          +2
        </button>
      </div>
    </div>
  );
};

export default KeyClass;
