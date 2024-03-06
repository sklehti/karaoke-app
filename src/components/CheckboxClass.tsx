import React from "react";
import { CheckboxProps } from "../types";

const CheckboxClass = ({ setChecked, checked, error }: CheckboxProps) => {
  return (
    <label className="checkbox-layout">
      <input
        type="checkbox"
        id="form-checkbox"
        role="checkbox"
        checked={checked}
        onChange={({ target }) => setChecked(target.checked)}
      />
      <span
        className={
          checked === false && error ? "checkmark checkmark-alert" : "checkmark"
        }
      ></span>
      Sallin tietojen tallennuksen karaokejärjestelmään
    </label>
  );
};

export default CheckboxClass;
