import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style_inp_emp1.css";

export const InputField = ({ className, text = "Renda Mensal" }) => {
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
    <div className={`input-field_emp1 ${state.property1} ${className}`}>
      <input
        className="key-field"
        type="text"
        pattern="[0-9]*" // Aceita apenas números
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
    default:
      return state;
  }
}

InputField.propTypes = {
  property1: PropTypes.oneOf(["default-state", "active-state"]),
  text: PropTypes.string,
};
