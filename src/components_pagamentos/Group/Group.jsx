/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style_group_pag.css";

export const Group = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <a href="/TelaInicial"
      className={`group ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group">
        <div className={`ellipse ${state.property1}`} />
        <img
          className="left-arrow"
          alt="Left arrow"
          src={
            state.property1 === "variant-2"
              ? "https://c.animaapp.com/7cEc4kU9/img/left-arrow-1@2x.png"
              : "https://c.animaapp.com/7cEc4kU9/img/left-arrow-2@2x.png"
          }
        />
      </div>
    </a>
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

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
