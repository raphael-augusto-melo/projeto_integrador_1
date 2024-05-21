/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style_CriaInactive_cad.css";

export const CriaInactive = ({ className, frameClassName, divClassName, onClick }) => {
  return (
    <button className={`cria-inactive ${className}`} onClick={onClick}>
      <div className={`frame ${frameClassName}`}>
        <div className={`text-wrapper ${divClassName}`}>Criar conta</div>
      </div>
    </button>
  );
};

