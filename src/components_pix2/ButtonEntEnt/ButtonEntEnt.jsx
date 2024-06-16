import React from "react";
import "./style_but_pix2.css";

export const ButtonEntEnt = ({ className }) => {
  return (
    <button type="submit" className={`button-ent-ent2 ${className}`}>
      <div className="frame">
        <div className="text-wrapper">Avançar</div>
      </div>
    </button>
  );
};
