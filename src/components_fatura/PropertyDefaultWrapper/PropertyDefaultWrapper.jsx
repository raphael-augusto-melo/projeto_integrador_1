/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({ className, frameClassName, text = "Todos" }) => {
  return (
    <a href="/TelaExtrato" className={`property-default-wrapper ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className="todos">{text}</div>
      </div>
    </a>
  );
};

PropertyDefaultWrapper.propTypes = {
  text: PropTypes.string,
};
