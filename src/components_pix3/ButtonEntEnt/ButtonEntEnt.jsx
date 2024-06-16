import PropTypes from "prop-types";
import React from "react";
import "./style_but_pix3.css";

export const ButtonEntEnt = ({ className, frameClassName, text = "Avançar", onClick }) => {
  return (
    <div className={`button-ent-ent_pix3 ${className}`} onClick={onClick}>
      <div className={`frame ${frameClassName}`}>
        <div className="avan-ar">{text}</div>
      </div>
    </div>
  );
};

ButtonEntEnt.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,  // Adicionado para garantir que a função onClick seja passada
};
