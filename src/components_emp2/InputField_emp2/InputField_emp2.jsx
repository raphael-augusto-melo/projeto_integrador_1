import PropTypes from "prop-types";
import React from "react";
import "./style_Input_emp2.css";

export const InputFieldValor = ({ property1 = "default-state", className, text, value, onChange }) => {
  const formatCurrency = (value) => {
    const onlyNumbers = value.replace(/\D/g, "");
    const numberValue = parseFloat(onlyNumbers) / 100;
    return numberValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(formatCurrency(value));
  };

  return (
    <div className={`input-field_emp2 ${property1} ${className}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={`element ${property1 === "active-state" ? "active" : ""}`}
        placeholder={property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputFieldValor.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFieldValor;
