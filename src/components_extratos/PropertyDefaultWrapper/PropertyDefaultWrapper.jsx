/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const PropertyDefaultWrapper = ({ property1, className, frameClassName, text = "Todos" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link
      className={`property-default-wrapper ${className}`}
      to="/TelaFatura"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`frame property-1-${state.property1} ${frameClassName}`}>
        <div className="todos">{text}</div>
      </div>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  text: PropTypes.string,
};
