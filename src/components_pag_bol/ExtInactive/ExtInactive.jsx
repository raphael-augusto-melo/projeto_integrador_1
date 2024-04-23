/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style_ext_bol.css";

export const ExtInactive = ({ className, text = "Ver extrato" }) => {
  return (
    <div className={`ext-inactive ${className}`}>
      <div className="ver-extrato">{text}</div>
    </div>
  );
};

ExtInactive.propTypes = {
  text: PropTypes.string,
};
