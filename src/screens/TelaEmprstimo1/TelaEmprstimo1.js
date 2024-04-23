import React from "react";
import { CriaInactive } from "../../components_emp1/CriaInactive";
import { Group } from "../../components_emp1/Group";
import { InputField } from "../../components_emp1/InputField";
import "./style_emp1.css";

export const TelaEmprstimo1 = () => {
  return (
    <div className="tela-emprstimo">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper">Empréstimos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Vamos encontrar as melhores ofertas de empréstimo para o seu perfil</p>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Renda e profissão</div>
        <div className="overlap-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <p className="text-wrapper-3">Selecione o tipo do seu trabalho</p>
              <div className="text-wrapper-4">Selecione a sua profissão</div>
              <div className="text-wrapper-5">Informe sua renda mensal</div>
            </div>
          </div>
          <img
            className="expand-arrow"
            alt="Expand arrow"
            src="https://c.animaapp.com/Dv9UGHf1/img/expand-arrow@2x.png"
          />
          <img className="forward" alt="Forward" src="https://c.animaapp.com/Dv9UGHf1/img/forward@2x.png" />
          <InputField
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Renda"
          />
        </div>
        <CriaInactive
          className="button-cria-conta"
          divClassName="button-cria-conta-2"
          frameClassName="cria-inactive-instance"
          text="Avançar"
        />
      </div>
    </div>
  );
};

export default TelaEmprstimo1;