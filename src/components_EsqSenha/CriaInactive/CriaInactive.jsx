/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CriaInactive = ({ className, frameClassName, divClassName, text = "Criar conta" }) => {
  return (
    <a href="/TelaEsqSenha2" className={`cria-inactive1 ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className={`criar-conta ${divClassName}`}>{text}</div>
      </div>
    </a>
  );
};

CriaInactive.propTypes = {
  text: PropTypes.string,
};
