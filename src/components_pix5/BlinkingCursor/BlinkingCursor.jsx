/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BlinkingCursor = ({
  property1,
  className,
  propertyCursorOn = "https://c.animaapp.com/ZYMf7N0F/img/property-1-cursor-on@2x.png",
}) => {
  return (
    <img
      className={`blinking-cursor ${className}`}
      alt="Property cursor ON"
      src={
        property1 === "cursor-OFF"
          ? "https://c.animaapp.com/ZYMf7N0F/img/property-1-cursor-off@2x.png"
          : propertyCursorOn
      }
    />
  );
};

BlinkingCursor.propTypes = {
  property1: PropTypes.oneOf(["cursor-ON", "cursor-OFF"]),
  propertyCursorOn: PropTypes.string,
};
