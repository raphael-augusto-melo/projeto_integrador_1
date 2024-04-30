import React from "react";
import { ExtInactive } from "../../components_pag_bol/ExtInactive";
import { Group } from "../../components_pag_bol/Group";
import "./style_pagamentos_bol.css";

export const TelaPagamentos_bol = () => {
  return (
    <div className="tela-pagamentos_bol">
      <div className="div">
        <div className="overlap">
          <div className="div-wrapper">
            <p className="text-wrapper">Digite o código do boleto aqui...</p>
          </div>
          <img
            className="barcode-approve"
            alt="Barcode approve"
            src="https://c.animaapp.com/p1WIWl95/img/barcode-approve@2x.png"
          />
          <a href="TelaPagamentos_bol2">
          <ExtInactive className="button-ext" text="Avançar" />
          </a>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-2">Pagamentos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Digite o código do boleto no campo abaixo</p>
        <div className="rectangle-bol-1" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-3">Código de barras</div>
      </div>
    </div>
  );
};

export default TelaPagamentos_bol;