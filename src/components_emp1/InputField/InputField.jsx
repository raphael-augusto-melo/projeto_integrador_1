/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PropertyDefault } from "../PropertyDefault";
import "./style_inp_emp1.css";

export const InputField = ({ property1, className, keyFieldClassName, text = "Name" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-state",
  });

  return (
    <div
      className={`input-field ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`key-field ${keyFieldClassName}`}>
        {state.property1 === "default-state" && <>{text}</>}

        {state.property1 === "active-state" && (
          <div className="div">
            <PropertyDefault className="element" />
            <PropertyDefault className="property-1-default" />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="property-default-instance"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="property-1-default-instance"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="instance-node"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-2"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-3"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-4"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-5"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-6"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-7"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-8"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-9"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-10"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-11"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-12"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-13"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-14"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-15"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-16"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-17"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-18"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-19"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-20"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/property-1-cursor-on@2x.png"
              className="element-21"
            />
            <PropertyDefault
              blinkingCursorPropertyCursorOn="https://c.animaapp.com/Dv9UGHf1/img/blinking-cursor-26@2x.png"
              className="element-22"
            />
          </div>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "active-state",
      };
  }

  return state;
}

InputField.propTypes = {
  property1: PropTypes.oneOf(["default-state", "active-state"]),
  text: PropTypes.string,
};
