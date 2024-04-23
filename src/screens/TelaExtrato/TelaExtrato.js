import React from "react";
import { Group } from "../../components_extratos/Group";
import { PropertyDefaultWrapper } from "../../components_extratos/PropertyDefaultWrapper";
import "./style_extrato.css";

export const TelaExtrato = () => {
  return (
    <div className="tela-extrato">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Extratos</div>
          <Group className="group-29" property1="default" />
        </div>
        <div className="overlap-2">
          <p className="ag-CC">
            Ag. : 1234 <br />
            CC. : 12345678-9
          </p>
          <img className="line" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-16@2x.png" />
          <div className="text-wrapper-2">Saldo da conta corrente:</div>
          <p className="r">
            <span className="span">R$</span>
            <span className="text-wrapper-3"> -467,69</span>
          </p>
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <img className="img" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-17.png" />
            <img className="print" alt="Print" src="https://c.animaapp.com/286wyEAW/img/print@2x.png" />
            <PropertyDefaultWrapper className="group-19" frameClassName="group-instance" property1="default"/>
            <PropertyDefaultWrapper
              className="group-19-instance"
              frameClassName="group-instance"
              property1="default"
              text="Débitos"
            />
            <PropertyDefaultWrapper
              className="design-component-instance-node"
              frameClassName="group-instance"
              property1="default"
              text="Créditos"
            />
          </div>
          <img className="PDF" alt="Pdf" src="https://c.animaapp.com/286wyEAW/img/pdf@2x.png" />
        </div>
        <div className="overlap-5">
          <img className="line-2" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-18.png" />
          <div className="frame-2">
            <div className="group-wrapper">
              <div className="group-2">
                <div className="text-wrapper-4">01 de Abril</div>
                <img className="calendar" alt="Calendar" src="https://c.animaapp.com/286wyEAW/img/calendar-2@2x.png" />
              </div>
            </div>
            <p className="p">Pix enviado para “Urubu do Pix”</p>
            <div className="text-wrapper-5">Débito</div>
            <div className="text-wrapper-6">-1000,00</div>
            <img className="line-3" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-21.png" />
            <p className="text-wrapper-7">Pix enviado para “Rodrigo Faro”</p>
            <div className="text-wrapper-8">Débito</div>
            <div className="text-wrapper-9">-350,00</div>
            <img className="line-4" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-21.png" />
            <p className="text-wrapper-10">Pix recebido de “Urubu do Pix”</p>
            <div className="text-wrapper-11">Débito</div>
            <div className="text-wrapper-12">500,00</div>
            <div className="div-wrapper">
              <div className="group-3">
                <div className="text-wrapper-4">31 de Março</div>
                <img className="calendar" alt="Calendar" src="https://c.animaapp.com/286wyEAW/img/calendar-2@2x.png" />
              </div>
            </div>
            <div className="text-wrapper-13">BR combustíveis</div>
            <div className="text-wrapper-14">Crédito</div>
            <div className="text-wrapper-15">-72,90</div>
            <img className="line-5" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-21.png" />
            <div className="frame-3">
              <div className="group-4">
                <div className="text-wrapper-4">30 de Março</div>
                <img className="calendar" alt="Calendar" src="https://c.animaapp.com/286wyEAW/img/calendar-2@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-16">Busque pela data</div>
        <img
          className="expand-arrow"
          alt="Expand arrow"
          src="https://c.animaapp.com/286wyEAW/img/expand-arrow@2x.png"
        />
      </div>
    </div>
  );
};

export default TelaExtrato;