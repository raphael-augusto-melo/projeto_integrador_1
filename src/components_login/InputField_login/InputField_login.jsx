import React, { useReducer } from "react";
import PropTypes from "prop-types";
import "./style_Input_Login.css";

export const CPFInputField = ({ className, text = "CPF", maxLength }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: "default-state",
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    dispatch({ type: "change", value: onlyNumbers });
  };

  return (
    <div className={`input-field_log ${state.property1} ${className}`}>
      <input
        className="key-field_log"
        type="text"
        maxLength={maxLength}
        value={state.value}
        onChange={handleChange} // Alteração para o manipulador de eventos handleChange
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

function reducer(state, action) {
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
}

export const SenhaInputField = ({ className, text = "Senha", maxLength }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: "default-state",
    value: "",
  });

  return (
    <div className={`input-field_log ${state.property1} ${className}`}>
      <input
        className="key-field_log"
        type="password"
        maxLength={maxLength}
        value={state.value}
        onChange={(e) => dispatch({ type: "change", value: e.target.value })}
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

function reducer(state, action) {
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
}

CPFInputField.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  maxLength: PropTypes.number,
};

SenhaInputField.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  maxLength: PropTypes.number,
};
