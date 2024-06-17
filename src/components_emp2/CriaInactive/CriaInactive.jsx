import PropTypes from "prop-types";
import React from "react";
import "./style_CriaInactive.css";

export const CriaInactive = ({ className, frameClassName, divClassName, text = "Criar conta", onClick }) => {
  return (
    <div className={`cria-inactive-emp2 ${className}`} onClick={onClick}>
      <div className={`frame ${frameClassName}`}>
        <div className={`criar-conta ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

CriaInactive.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
