/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style_bol_ina.css";

export const IconBolInactive = ({ className }) => {
  return (
    <a href="/TelaPagamentos_bol"className={`icon-bol-inactive ${className}`}>
      <div className="rectangle" />
      <div className="div">Boleto</div>
      <img className="barcode" alt="Barcode" src="https://c.animaapp.com/7cEc4kU9/img/barcode-1@2x.png" />
    </a>
  );
};
