import React from "react";
import { Group } from "../../components_emp4/Group";
import "./style_emp4.css";

export const TelaEmprstimo4 = () => {
  return (
    <div className="tela-emprstimo_emp4">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Empréstimos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Resumo da simulação do seu empréstimo de R$ 50.000,00</p>
        <div className="overlap-2">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-2">N. de parcelas</div>
              <div className="group-2" />
              <div className="text-wrapper-3">Forma de pagamento</div>
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Débito em conta</div>
                </div>
              </div>
              <div className="overlap-4">
                <div className="text-wrapper-5">Empréstimo pessoal</div>
              </div>
              <div className="text-wrapper-6">Tipo de empréstimo</div>
              <img className="line" alt="Line" src="https://c.animaapp.com/B69Fqwnj/img/line-24-1.png" />
              <img className="img" alt="Line" src="https://c.animaapp.com/B69Fqwnj/img/line-24-1.png" />
            </div>
          </div>
          <div className="text-wrapper-7">Total a pagar</div>
          <div className="group-3" />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/B69Fqwnj/img/line-24-1.png" />
          <img className="line-3" alt="Line" src="https://c.animaapp.com/B69Fqwnj/img/line-24-1.png" />
          <div className="text-wrapper-8">R$ 65,400.00</div>
          <div className="text-wrapper-9">24x de R$ 2725</div>
          <p className="text-wrapper-10">Taxa de juros mensal: 5,45%</p>
        </div>
        <a href="/TelaInicial" className="frame">
          <div className="text-wrapper-11">Tela Inicial</div>
        </a>
      </div>
    </div>
  );
};

export default TelaEmprstimo4;