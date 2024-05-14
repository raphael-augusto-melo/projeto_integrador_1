import React, { useReducer } from "react";
import PropTypes from "prop-types";
import "./style_Input_Login.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "click":
      return {
        ...state,
        property1: "active-state",
      };
    case "change":
      return {
        ...state,
        value: action.value,
      };
    case "blur":
      return {
        ...state,
        property1: "default-state",
      };
    default:
      return state;
  }
};

export const CPFInputField = ({ className, text = "CPF", maxLength, value, onChange }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: "default-state",
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    dispatch({ type: "change", value: onlyNumbers });
    onChange(e); // Propaga o evento onChange para o componente pai
  };

  return (
    <div className={`input-field_log ${state.property1} ${className}`}>
      <input
        className="key-field_log"
        type="text"
        maxLength={maxLength}
        value={state.value}
        onChange={handleChange}
        onFocus={() => dispatch({ type: "click" })}
        onBlur={() => {
          if (state.value === "") {
            dispatch({ type: "blur" });
          }
        }}
      />
      {state.property1 === "default-state" && state.value === "" && (
        <div className="default-text">{text}</div>
      )}

      {state.property1 === "active-state" && (
        <div className="overlap-group">
          {/* Componentes PropertyDefault não omitidos para brevidade */}
        </div>
      )}
    </div>
  );
};

export const SenhaInputField = ({ className, text = "Senha", maxLength, value, onChange }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: "default-state",
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "change", value });
    onChange(e); // Propaga o evento onChange para o componente pai
  };

  return (
    <div className={`input-field_log ${state.property1} ${className}`}>
      <input
        className="key-field_log"
        type="password"
        maxLength={maxLength}
        value={state.value}
        onChange={handleChange}
        onFocus={() => dispatch({ type: "click" })}
        onBlur={() => {
          if (state.value === "") {
            dispatch({ type: "blur" });
          }
        }}
      />
      {state.property1 === "default-state" && state.value === "" && (
        <div className="default-text">{text}</div>
      )}

      {state.property1 === "active-state" && (
        <div className="overlap-group">
          {/* Componentes PropertyDefault não omitidos para brevidade */}
        </div>
      )}
    </div>
  );
};

CPFInputField.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SenhaInputField.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default {CPFInputField, SenhaInputField};