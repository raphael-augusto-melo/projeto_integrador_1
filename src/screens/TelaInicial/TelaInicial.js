import React from "react";
import { ExtInactive } from "../../components_telainicial/ExtInactive";
import { Frame } from "../../components_telainicial/Frame";
import { IconPagInactive } from "../../components_telainicial/IconPagInactive";
import { VerFatInactive } from "../../components_telainicial/VerFatInactive";
import "./style.css";

export const TelaInicial = () => {
  return (
    <div className="tela-inicial">
      <div className="div-2">
        <div className="overlap">
          <p className="r">
            <span className="span">R$</span>
            <span className="text-wrapper-4"> -467,69</span>
          </p>
          <div className="overlap-group">
            <p className="p">
              <span className="span">R$</span>
              <span className="text-wrapper-4"> 5.601,15</span>
            </p>
            <div className="text-wrapper-5">Fatura atual</div>
          </div>
          <div className="overlap-2">
            <p className="r-2">
              <span className="span">R$</span>
              <span className="text-wrapper-4"> 398,85</span>
            </p>
            <div className="text-wrapper-6">Limite disponível</div>
          </div>
          <div className="text-wrapper-7">Saldo Disponível</div>
          <p className="conta-corrente">
            <span className="span">C</span>
            <span className="text-wrapper-4">onta </span>
            <span className="span">C</span>
            <span className="text-wrapper-4">orrente</span>
          </p>
          <p className="cart-o-de-cr-dito">
            <span className="span">C</span>
            <span className="text-wrapper-4">artão de </span>
            <span className="span">C</span>
            <span className="text-wrapper-4">rédito</span>
          </p>
          <img className="line" alt="Line" src="https://c.animaapp.com/dLRYJhiQ/img/line-9@2x.png" />
          <img className="img" alt="Line" src="https://c.animaapp.com/dLRYJhiQ/img/line-10.png" />
          <img className="wallet" alt="Wallet" src="https://c.animaapp.com/dLRYJhiQ/img/wallet@2x.png" />
          <img className="debit-card" alt="Debit card" src="https://c.animaapp.com/dLRYJhiQ/img/debit-card@2x.png" />
          <div className="text-wrapper-8">Acesso Rápido</div>
          <img className="forward" alt="Forward" src="https://c.animaapp.com/dLRYJhiQ/img/forward@2x.png" />
          <img className="back" alt="Back" src="https://c.animaapp.com/dLRYJhiQ/img/back@2x.png" />
          <ExtInactive className="button-ext" />
          <div className="button-icon-pix">
            <div className="img-wrapper">
              <img className="image-2" alt="Image" src="https://c.animaapp.com/dLRYJhiQ/img/image-9-1@2x.png" />
            </div>
            <div className="text-wrapper-9">Pix</div>
          </div>
          <div className="button-icon-ext">
            <div className="img-wrapper">
              <img className="list-view" alt="List view" src="https://c.animaapp.com/dLRYJhiQ/img/list-view-1@2x.png" />
            </div>
            <div className="text-wrapper-10">Extratos</div>
          </div>
          <VerFatInactive className="button-ver-fat" />
          <IconPagInactive
            barcode="https://c.animaapp.com/dLRYJhiQ/img/barcode-1@2x.png"
            barcodeClassName="icon-pag-inactive-instance"
            className="button-icon-pag"
          />
          <Frame
            className="frame-25"
            image="https://c.animaapp.com/dLRYJhiQ/img/image-11-2@2x.png"
            imageClassName="frame-instance"
          />
          <div className="group">
            <div className="coin-in-hand-wrapper">
              <img
                className="coin-in-hand"
                alt="Coin in hand"
                src="https://c.animaapp.com/dLRYJhiQ/img/coin-in-hand-2@2x.png"
              />
            </div>
            <div className="text-wrapper-11">Empréstimo</div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="group-wrapper">
                <div className="group-2">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-12">Transferências</div>
                </div>
              </div>
              <div className="group-3" />
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="rectangle-4" />
          <img className="male-user" alt="Male user" src="https://c.animaapp.com/dLRYJhiQ/img/male-user@2x.png" />
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/dLRYJhiQ/img/ceubank2-2@2x.png" />
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-13">Início</div>
            </div>
          </div>
          <div className="group-4">
            <div className="frame-2">
              <div className="text-wrapper-14">Extrato</div>
            </div>
          </div>
          <div className="group-5">
            <div className="frame-3">
              <div className="text-wrapper-15">Pagamentos</div>
            </div>
          </div>
          <div className="group-6">
            <div className="frame-4">
              <div className="text-wrapper-16">Transferências</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TelaInicial;