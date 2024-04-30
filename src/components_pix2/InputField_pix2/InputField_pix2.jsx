import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style_Input_pix2.css";

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

export const InputFieldData = ({ property1 = "default-state", className, text, maxLength }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    dispatch({ type: "change", value: onlyNumbers });
  };

  return (
    <div className={`input-field ${state.property1} ${className}`}>
      <input
        type="text"
        maxLength={maxLength}
        value={state.value}
        onChange={handleChange}
        className={`element ${state.property1 === "active-state" ? "active" : ""}`}
        placeholder={state.property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputFieldData.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  keyFieldClassName: PropTypes.string,
  maxLength: PropTypes.number,
  text: PropTypes.string,
};

export const InputFieldValor = ({ property1 = "default-state", className, keyFieldClassName, text }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    dispatch({ type: "change", value: onlyNumbers });
  };

  return (
    <div className={`input-field ${state.property1} ${className}`}>
      <input
        type="text"
        value={state.value}
        onChange={handleChange}
        className={`element ${state.property1 === "active-state" ? "active" : ""}`}
        placeholder={state.property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputFieldValor.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  keyFieldClassName: PropTypes.string,
  text: PropTypes.string,
};

// Repita para os outros tipos de campos (Nome completo, Telefone, RG, Estimativa de Renda Mensal, Endereço)...

export default  InputFieldData; InputFieldValor;

