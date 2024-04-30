import React from "react";
import { CriaInactive } from "../../components_emp2/CriaInactive";
import { Group } from "../../components_emp2/Group";
import { InputFieldValor } from "../../components_emp2/InputField_emp2";
import "./style_emp2.css";

export const TelaEmprstimo2 = () => {
  return (
    <div className="tela-emprstimo_emp2">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Empréstimos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Vamos encontrar as melhores ofertas de empréstimo para o seu perfil</p>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Valor desejado</div>
        <div className="overlap-2">
          <div className="qual-o-valor-que-wrapper">
            <p className="qual-o-valor-que">
              Qual o valor que deseja pegar emprestado? <br />
              Simule até R$100.000,00
            </p>
          </div>
          <InputFieldValor
           className="rectangle-4"
           text={"R$0,00"} />
        </div>
        <CriaInactive
          className="button-cria-conta"
          divClassName="design-component-instance-node"
          frameClassName="cria-inactive-instance"
          text="Simular empréstimo"
        />
      </div>
    </div>
  );
};

export default TelaEmprstimo2;