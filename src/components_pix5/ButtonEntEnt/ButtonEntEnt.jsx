/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style_but_pix5.css";

export const ButtonEntEnt = ({ className, frameClassName, text = "Avançar" }) => {
  return (
    <a href="/TelaPix" className={`button-ent-ent5 ${className}`}>
      <div className={`frame ${frameClassName}`}>
        <div className="avan-ar">{text}</div>
      </div>
    </a>
  );
};

ButtonEntEnt.propTypes = {
  text: PropTypes.string,
};
