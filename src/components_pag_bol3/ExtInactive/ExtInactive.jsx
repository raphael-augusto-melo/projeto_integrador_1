/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ExtInactive = ({ className, text = "Ver extrato" }) => {
  return (
    <a href="/TelaInicial" className={`ext-inactive ${className}`}>
      <div className="ver-extrato">{text}</div>
    </a>
  );
};

ExtInactive.propTypes = {
  text: PropTypes.string,
};
