/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BlinkingCursor } from "../BlinkingCursor";
import "./style.css";

export const PropertyDefault = ({
  className,
  blinkingCursorPropertyCursorOn = "https://c.animaapp.com/U9iR2F0f/img/blinking-cursor-26@2x.png",
}) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="value-field">{""}</div>
      <BlinkingCursor
        className="blinking-cursor-instance"
        property1="cursor-ON"
        propertyCursorOn={blinkingCursorPropertyCursorOn}
      />
    </div>
  );
};

PropertyDefault.propTypes = {
  blinkingCursorPropertyCursorOn: PropTypes.string,
};
