
import React from "react";
import PropTypes from "prop-types";
import "./style_CriaInactive_cad.css";

export const CriaInactive = ({ className, frameClassName, divClassName, text = "Criar conta", onClick }) => {
  return (
    <button className={`cria-inactive ${className}`} onClick={onClick}>
      <div className={`frame ${frameClassName}`}>
        <div className={`criar-conta ${divClassName}`}>{text}</div>
      </div>
    </button>
  );
};

CriaInactive.propTypes = {
  className: PropTypes.string,
  frameClassName: PropTypes.string,
  divClassName: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

CriaInactive.defaultProps = {
  className: "",
  frameClassName: "",
  divClassName: "",
  text: "Criar conta",
  onClick: () => {},
};
