import React from "react";
import { ExtInactive } from "../../components_pag_bol3/ExtInactive";
import { Group } from "../../components_pag_bol3/Group";
import "./style.css";

export const TelaPagamentos_bol3 = () => {
  return (
    <div className="tela-pagamentos_bol3">
      <div className="div">
        <div className="overlap">
          <p className="text-wrapper">Data de Vencimento do Bol.</p>
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-2">Confirmar Pagamento</div>
          <div className="text-wrapper-3">Banco</div>
          <div className="text-wrapper-4">Beneficiário</div>
          <div className="text-wrapper-5">Pagador</div>
          <div className="text-wrapper-6">Código de Barras</div>
          <div className="text-wrapper-7">Vencimento</div>
          <p className="p">Pagar com saldo da conta</p>
          <div className="text-wrapper-8">Nome do Banco</div>
          <div className="text-wrapper-9">Valor a pagar</div>
          <div className="text-wrapper-10">Valor Total do Boleto</div>
          <div className="text-wrapper-11">Nome do Beneficiário</div>
          <div className="text-wrapper-12">Nome do Pagador</div>
          <p className="text-wrapper-13">Num do código de barras</p>
          <img className="bank" alt="Bank" src="https://c.animaapp.com/W7IBlmnJ/img/bank@2x.png" />
          <img className="customer" alt="Customer" src="https://c.animaapp.com/W7IBlmnJ/img/customer@2x.png" />
          <img
            className="coin-in-hand"
            alt="Coin in hand"
            src="https://c.animaapp.com/W7IBlmnJ/img/coin-in-hand@2x.png"
          />
          <img className="barcode" alt="Barcode" src="https://c.animaapp.com/W7IBlmnJ/img/barcode@2x.png" />
          <img className="schedule" alt="Schedule" src="https://c.animaapp.com/W7IBlmnJ/img/schedule@2x.png" />
          <img className="US-dollar" alt="Us dollar" src="https://c.animaapp.com/W7IBlmnJ/img/us-dollar@2x.png" />
          <img className="bonds" alt="Bonds" src="https://c.animaapp.com/W7IBlmnJ/img/bonds@2x.png" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-14">Pagamentos</div>
          <Group className="group-29" property1="default" />
        </div>
        <div className="text-wrapper-15">Dados Gerais</div>
        <ExtInactive className="button-ext" text="Confirmar" />
      </div>
    </div>
  );
};
export default TelaPagamentos_bol3;
