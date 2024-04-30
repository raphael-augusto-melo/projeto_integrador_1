/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style_inp_EsqSenha3.css";

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
    case "blur":
      return {
        ...state,
        property1: "default-state",
      };
    default:
      return state;
  }
}

export const SenhaInputField = ({ className, text = "Senha", maxLength }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: "default-state",
    value: "",
  });

  return (
    <div className={`input-field_EsqSenha3 ${state.property1} ${className}`}>
      <input
        className="element"
        type="password"
        maxLength={maxLength}
        value={state.value}
        onChange={(e) => dispatch({ type: "change", value: e.target.value })}
        onFocus={() => dispatch({ type: "click" })}
        onBlur={() => {
          if (state.value === "") {
            dispatch({ type: "blur" });
          }
        }}
      />
      {state.property1 === "default-state" && state.value === "" && (
        <div className="default-text">{text}</div>
      )}

      {state.property1 === "active-state" && (
        <div className="overlap-group">
          {/* Componentes PropertyDefault não omitidos para brevidade */}
        </div>
      )}
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
    case "blur":
      return {
        ...state,
        property1: "default-state",
      };
    default:
      return state;
  }
}

SenhaInputField.propTypes = {
  property1: PropTypes.oneOf(["default-state", "active-state"]),
  text: PropTypes.string,
};
