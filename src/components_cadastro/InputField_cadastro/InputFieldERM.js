import PropTypes from "prop-types";
import React from "react";
import "./style_Input_Cadastro.css";

export const InputFieldERM = ({ property1 = "default-state", className, keyFieldClassName, text, value, name, onChange }) => {
  return (
    <div className={`input-field_cad ${property1} ${className}`}>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        className={`element ${property1 === "active-state" ? "active" : ""}`}
        placeholder={property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputFieldERM.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  keyFieldClassName: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
