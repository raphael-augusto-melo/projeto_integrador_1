/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CriaInactive = ({ className, frameClassName, divClassName, text = "Criar conta" }) => {
  return (
    <div className={`cria-inactive ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className={`criar-conta ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

CriaInactive.propTypes = {
  text: PropTypes.string,
};
