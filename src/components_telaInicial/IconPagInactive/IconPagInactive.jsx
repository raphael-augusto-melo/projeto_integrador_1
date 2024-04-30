/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const IconPagInactive = ({ className }) => {
  return (
    <div className={`icon-pag-inactive ${className}`}>
      <div className="rectangle" />
      <div className="text-wrapper-4">Pagamentos</div>
      <img className="barcode" alt="Barcode" src="https://c.animaapp.com/v0SxTu3L/img/barcode-1@2x.png" />
    </div>
  );
};
