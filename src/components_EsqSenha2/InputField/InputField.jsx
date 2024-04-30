/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style_inp_EsqSenha2.css";

export const InputFieldCod = ({ property1 = "default-state", className, keyFieldClassName, text, maxLength }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    dispatch({ type: "change", value: onlyNumbers });
  };

  return (
    <div className={`input-field_EsqSenha2 ${state.property1} ${className}`}>
      <input
        type="text"
        maxLength={maxLength}
        value={state.value}
        onChange={handleChange}
        className={`element ${state.property1 === "active-state" ? "active" : ""}`}
        placeholder={state.property1 === "default-state" ? text : ""}
      />
    </div>
  );
};


function reducer(state, action) {
  switch (action.type) {
    case "click":
      return {
        ...state,
        property1: "active-state",
      };
      case "change":
        return {
          ...state,
          value: action.value,
        };
        default:
          return state;
        }
}

InputFieldCod.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  keyFieldClassName: PropTypes.string,
  text: PropTypes.string,
  maxLength: PropTypes.number,
};

export default InputFieldCod;