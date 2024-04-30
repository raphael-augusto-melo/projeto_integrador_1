/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DropdownMenu = ({ option, visibleOptions, className, text = "Selecione a opção" }) => {
  const [state, dispatch] = useReducer(reducer, {
    option: option || "default",
    visibleOptions: visibleOptions || false,
  });

  return (
    <div
      className={`dropdown-menu visible-options-${state.visibleOptions} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="CPF">
        {state.option === "one" && <>CPF</>}

        {state.option === "two" && <>Telefone</>}

        {state.option === "default" && <>{text}</>}

        {state.option === "three" && <>Email</>}
      </div>
      <img
        className="vector"
        alt="Vector"
        src={
          state.visibleOptions
            ? "https://c.animaapp.com/qezPjsE0/img/vector-1-7@2x.png"
            : "https://c.animaapp.com/qezPjsE0/img/vector-1-8@2x.png"
        }
      />
      {state.visibleOptions && (
        <div className="lista-de-opcoes">
          <div className={`option ${state.option}`}>
            <div className="text-wrapper">CPF</div>
          </div>
          <div className={`option-wrapper ${state.option}`}>
            <div className="div">Telefone</div>
          </div>
          <div className={`div-wrapper ${state.option}`}>
            <div className="option-2">Email</div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.option === "default" && state.visibleOptions === false) {
    switch (action) {
      case "click":
        return {
          option: "default",
          visibleOptions: true,
        };
    }
  }

  if (state.option === "one" && state.visibleOptions === false) {
    switch (action) {
      case "click":
        return {
          option: "one",
          visibleOptions: true,
        };
    }
  }

  if (state.option === "one" && state.visibleOptions === true) {
    switch (action) {
      case "click":
        return {
          option: "one",
          visibleOptions: false,
        };
    }
  }

  if (state.option === "two" && state.visibleOptions === false) {
    switch (action) {
      case "click":
        return {
          option: "two",
          visibleOptions: true,
        };
    }
  }

  if (state.option === "two" && state.visibleOptions === true) {
    switch (action) {
      case "click":
        return {
          option: "two",
          visibleOptions: false,
        };
    }
  }

  if (state.option === "default" && state.visibleOptions === true) {
    switch (action) {
      case "click":
        return {
          option: "default",
          visibleOptions: false,
        };
    }
  }

  if (state.option === "three" && state.visibleOptions === false) {
    switch (action) {
      case "click":
        return {
          option: "three",
          visibleOptions: true,
        };
    }
  }

  if (state.option === "three" && state.visibleOptions === true) {
    switch (action) {
      case "click":
        return {
          option: "three",
          visibleOptions: false,
        };
    }
  }

  return state;
}

DropdownMenu.propTypes = {
  option: PropTypes.oneOf(["two", "one", "three", "default"]),
  visibleOptions: PropTypes.bool,
  text: PropTypes.string,
};

export default DropdownMenu;