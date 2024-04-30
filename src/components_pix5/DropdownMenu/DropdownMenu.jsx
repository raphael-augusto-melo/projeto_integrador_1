import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style.css";

export const DropdownMenu = ({ option, visibleOptions, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    option: option || "default",
    visibleOptions: visibleOptions || false,
  });

  const handleOptionClick = (selectedOption) => {
    dispatch({ type: "select", option: selectedOption });
    if (state.visibleOptions) {
      dispatch({ type: "close" });
    }
  };

  const toggleDropdown = () => {
    dispatch({ type: "toggleVisible" });
  };

  return (
    <div
      className={`dropdown-menu ${state.visibleOptions ? "visible-options" : ""} ${className}`}
      onClick={toggleDropdown} // Remova esta linha
    >
      <div className="CPF">
        {/* Renderiza o texto da opção selecionada */}
        {state.option === "one" && <>CPF</>}

        {state.option === "two" && <>Telefone</>}

        {state.option === "default" && <>Selecione a opção</>}

        {state.option === "three" && <>Email</>}
      </div>
      <img
        className="vector"
        alt="Vector"
        src={
          state.visibleOptions
            ? "https://c.animaapp.com/ZYMf7N0F/img/vector-1-7@2x.png"
            : "https://c.animaapp.com/ZYMf7N0F/img/vector-1-8@2x.png"
        }
      />
      {state.visibleOptions && (
        <div className="lista-de-opcoes">
          {/* Adiciona onClick handlers para cada opção */}
          <div className={`option ${state.option}`} onClick={() => handleOptionClick("one")}>
            <div className="text-wrapper">CPF</div>
          </div>
          <div className={`option-wrapper ${state.option}`} onClick={() => handleOptionClick("two")}>
            <div className="option-2">Telefone</div>
          </div>
          <div className={`div-wrapper ${state.option}`} onClick={() => handleOptionClick("three")}>
            <div className="option-3">Email</div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleVisible":
      return {
        ...state,
        visibleOptions: !state.visibleOptions,
      };
    case "select":
      return {
        ...state,
        option: action.option,
      };
    default:
      return state;
  }
}