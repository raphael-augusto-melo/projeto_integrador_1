import React from "react";
import { Group } from "../../components_emp3/Group";
import "./style_emp3.css";

export const TelaEmprstimo3 = () => {
  return (
    <div className="tela-emprstimo_emp3">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Empréstimos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Vamos encontrar as melhores ofertas de empréstimo para o seu perfil</p>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Conferir empréstimo</div>
        <div className="overlap-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="overlap-3">
                <div className="expand-arrow-wrapper">
                  <img
                    className="expand-arrow"
                    alt="Expand arrow"
                    src="https://c.animaapp.com/FletUrB1/img/expand-arrow@2x.png"
                  />
                </div>
                <div className="text-wrapper-3">1 de Abril</div>
              </div>
              <p className="text-wrapper-4">Escolha a data da primeira parcela</p>
            </div>
          </div>
          <div className="text-wrapper-5">Simular empréstimo de</div>
          <div className="group-2">
            <div className="text-wrapper-6">R$ 50.000,00</div>
            <img className="edit" alt="Edit" src="https://c.animaapp.com/FletUrB1/img/edit@2x.png" />
          </div>
          <p className="text-wrapper-7">Escolha o número de parcelas</p>
          <div className="img-wrapper">
            <img className="img" alt="Expand arrow" src="https://c.animaapp.com/FletUrB1/img/expand-arrow-1@2x.png" />
          </div>
          <div className="text-wrapper-8">24x de R$ 2725</div>
          <p className="text-wrapper-9">Juros de 5,45% ao mês</p>
          <img className="line" alt="Line" src="https://c.animaapp.com/FletUrB1/img/line-24.png" />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/FletUrB1/img/line-24.png" />
          <p className="text-wrapper-10">
            Ao pegar o empréstimo, você se compromete em pagar todas as parcelas. Caso não pague, um agiota irá te
            perseguir até o pagamento total da dívida.
          </p>
          <img
            className="unchecked-checkbox"
            alt="Unchecked checkbox"
            src="https://c.animaapp.com/FletUrB1/img/unchecked-checkbox@2x.png"
          />
        </div>
        <a href = '/TelaEmprstimo4'>
        <div className="frame">
          <div className="text-wrapper-11">Pegar emprestado</div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default TelaEmprstimo3;