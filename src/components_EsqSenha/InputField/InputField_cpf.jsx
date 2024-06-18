import PropTypes from "prop-types";
import React from "react";
import "./style_inp_EsqSenha.css";

export const InputFieldCPFEsq = ({ property1 = "default-state", className, keyFieldClassName, text, value, name, maxLength, onChange }) => {
  return (
    <div className={`input-field_EsqSenha ${property1} ${className}`}>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        maxLength={maxLength}
        className={`element ${property1 === "active-state" ? "active" : ""}`}
        placeholder={property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputFieldCPFEsq.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  keyFieldClassName: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
