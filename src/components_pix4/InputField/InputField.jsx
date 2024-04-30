/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style_pix4.css";

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

export const InputField = ({ property1 = "default-state", className, keyFieldClassName, text }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
    value: "",
  });

  const handleChange = (event) => {
    dispatch({ type: "change", value: event.target.value });
  };

  return (
    <div className={`input-field_pix4 ${state.property1} ${className}`}>
      <input
        type="text"
        value={state.value}
        onChange={handleChange}
        className={`element ${state.property1 === "active-state" ? "active" : ""}`}
        placeholder={state.property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputField.propTypes = {
  property1: PropTypes.oneOf(["default-state", "active-state"]),
  text: PropTypes.string,
};
