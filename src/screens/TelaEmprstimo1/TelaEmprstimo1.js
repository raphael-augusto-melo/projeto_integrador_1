import React, { useState } from "react";
import { CriaInactive } from "../../components_emp1/CriaInactive";
import { Group } from "../../components_emp1/Group";
import { InputField } from "../../components_emp1/InputField";
import "./style_emp1.css";

const TelaEmprstimo1 = () => {
  return (
    <div className="tela-emprstimo_emp1">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper">Empréstimos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Vamos encontrar as melhores ofertas de empréstimo para o seu perfil</p>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Renda</div>
        <div className="overlap-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">

              <div className="text-wrapper-5">Informe sua renda mensal:</div>
              <InputField
                className="input-field-instance"
                keyFieldClassName="design-component-instance-node"
                property1="default-state"
                text="Renda"
              />
            </div>
          </div>
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
