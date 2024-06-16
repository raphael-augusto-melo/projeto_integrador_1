import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style_input_pix.css";

export const InputField = ({ property1 = "default-state", className, keyFieldClassName, text, value, onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div className={`input-field_pix ${isActive ? "active-state" : property1} ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`element ${isActive ? "active" : ""}`}
        placeholder={isActive ? "" : text}
      />
    </div>
  );
};

InputField.propTypes = {
  property1: PropTypes.oneOf(["default-state", "active-state"]),
  className: PropTypes.string,
  keyFieldClassName: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
