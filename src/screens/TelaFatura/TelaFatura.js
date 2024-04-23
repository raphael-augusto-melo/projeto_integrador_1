import React from "react";
import { Group } from "../../components_fatura/Group";
import { PropertyDefaultWrapper } from "../../components_fatura/PropertyDefaultWrapper";
import "./style_fatura.css";

export const TelaFatura = () => {
  return (
    <div className="tela-fatura">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Fatura</div>
          <Group className="group-29" property1="default" />
        </div>
        <div className="overlap-2">
          <p className="ag-CC">
            Ag. : 1234 <br />
            CC. : 12345678-9
          </p>
          <img className="line" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-16@2x.png" />
          <div className="text-wrapper-2">Fatura do cartão</div>
          <div className="text-wrapper-3">Limite disponível</div>
          <p className="r">
            <span className="span">R$</span>
            <span className="text-wrapper-4"> 2242,80</span>
          </p>
          <p className="p">
            <span className="span">R$</span>
            <span className="text-wrapper-4"> 757,20</span>
          </p>
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <img className="img" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-17.png" />
            <img className="print" alt="Print" src="https://c.animaapp.com/uBZh7wqa/img/print@2x.png" />
            <PropertyDefaultWrapper className="group-19" frameClassName="group-instance" />
            <PropertyDefaultWrapper className="group-19-instance" frameClassName="group-instance" text="Créditos" />
            <PropertyDefaultWrapper
              className="design-component-instance-node"
              frameClassName="group-instance"
              text="Débitos"
            />
          </div>
          <img className="PDF" alt="Pdf" src="https://c.animaapp.com/uBZh7wqa/img/pdf@2x.png" />
        </div>
        <div className="overlap-5">
          <img className="line-2" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-18.png" />
          <div className="frame-2">
            <div className="frame-3">
              <div className="group-2" />
              <div className="text-wrapper-5">31 de Março</div>
            </div>
            <div className="group-wrapper">
              <div className="group-3">
                <div className="text-wrapper-6">30 de Março</div>
                <img className="calendar" alt="Calendar" src="https://c.animaapp.com/uBZh7wqa/img/calendar-2@2x.png" />
              </div>
            </div>
            <div className="text-wrapper-7">BR combustíveis</div>
            <div className="text-wrapper-8">Crédito</div>
            <div className="text-wrapper-9">-72,90</div>
            <div className="div-wrapper">
              <div className="group-3">
                <div className="text-wrapper-6">30 de Março</div>
                <img className="calendar" alt="Calendar" src="https://c.animaapp.com/uBZh7wqa/img/calendar-2@2x.png" />
              </div>
            </div>
            <div className="text-wrapper-10">Steam</div>
            <div className="text-wrapper-11">Crédito</div>
            <div className="text-wrapper-12">-250,00</div>
            <img className="line-3" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-22.png" />
            <div className="text-wrapper-13">Assaí Atacado</div>
            <div className="text-wrapper-14">Crédito</div>
            <div className="text-wrapper-15">-1800,00</div>
            <img className="line-4" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-22.png" />
            <div className="text-wrapper-16">Microsoft Store</div>
            <div className="text-wrapper-17">Crédito</div>
            <div className="text-wrapper-18">-49,90</div>
            <img className="line-5" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-22.png" />
            <div className="text-wrapper-19">Saborosa Padaria</div>
            <div className="text-wrapper-20">Crédito</div>
            <div className="text-wrapper-21">-70,00</div>
            <img className="line-6" alt="Line" src="https://c.animaapp.com/uBZh7wqa/img/line-22.png" />
          </div>
        </div>
        <div className="text-wrapper-22">Busque pela data</div>
        <img
          className="expand-arrow"
          alt="Expand arrow"
          src="https://c.animaapp.com/uBZh7wqa/img/expand-arrow@2x.png"
        />
      </div>
    </div>
  );
};

export default TelaFatura;