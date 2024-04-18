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
  blinkingCursorPropertyCursorOn = "https://c.animaapp.com/MQQsuFWg/img/property-1-cursor-off@2x.png",
  blinkingCursorPropertyCursorOnClassName,
}) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="value-field">{""}</div>
      <BlinkingCursor
        className={blinkingCursorPropertyCursorOnClassName}
        property1="cursor-ON"
        propertyCursorOn={blinkingCursorPropertyCursorOn}
      />
    </div>
  );
};

PropertyDefault.propTypes = {
  blinkingCursorPropertyCursorOn: PropTypes.string,
};
