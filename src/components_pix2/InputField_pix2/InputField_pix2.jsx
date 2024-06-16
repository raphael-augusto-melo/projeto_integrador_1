import PropTypes from "prop-types";
import React, { useReducer } from "react";
import CurrencyInput from "react-currency-input-field";
import InputMask from "react-input-mask";
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

import PropTypes from "prop-types";
import React, { useReducer } from "react";
import InputMask from "react-input-mask";
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

export const InputFieldData = ({ property1 = "default-state", className, text, maxLength, onChange }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
    value: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "change", value });
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`input-field_pix2 ${state.property1} ${className}`}>
      <InputMask
        mask="99/99/9999"
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
  onChange: PropTypes.func,
};

export const InputFieldValor = ({ property1 = "default-state", className, text, onChange }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1,
    value: "",
  });

  const handleChange = (value) => {
    dispatch({ type: "change", value });
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`input-field_pix2 ${state.property1} ${className}`}>
      <CurrencyInput
        value={state.value}
        onValueChange={handleChange}
        decimalSeparator=","
        groupSeparator="."
        prefix="R$ "
        decimalsLimit={2}
        className={`element ${state.property1 === "active-state" ? "active" : ""}`}
        placeholder={state.property1 === "default-state" ? text : ""}
      />
    </div>
  );
};

InputFieldValor.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

// Repita para os outros tipos de campos (Nome completo, Telefone, RG, Estimativa de Renda Mensal, Endereço)...

export default  InputFieldData; InputFieldValor;

