/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const EntInactive = ({ className, frameClassName, divClassName }) => {
  return (
    <div className={`ent-inactive ${className}`}>
      <div className={`div-wrapper ${frameClassName}`}>
        <a className={`text-wrapper ${divClassName}`} href="/TelaInicial">Entrar</a>
      </div>
    </div>
  );
};
