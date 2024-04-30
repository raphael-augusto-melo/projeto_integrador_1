/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <div className="coin-in-hand-wrapper">
        <img
          className="coin-in-hand"
          alt="Coin in hand"
          src="https://c.animaapp.com/v0SxTu3L/img/coin-in-hand-2@2x.png"
        />
      </div>
      <div className="text-wrapper-5">Empréstimo</div>
    </div>
  );
};
