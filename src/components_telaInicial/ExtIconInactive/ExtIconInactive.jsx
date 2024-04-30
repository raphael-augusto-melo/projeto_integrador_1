/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ExtIconInactive = ({ className }) => {
  return (
    <div className={`ext-icon-inactive ${className}`}>
      <div className="list-view-wrapper">
        <img className="list-view" alt="List view" src="https://c.animaapp.com/v0SxTu3L/img/list-view-1@2x.png" />
      </div>
      <div className="text-wrapper-2">Extratos</div>
    </div>
  );
};
