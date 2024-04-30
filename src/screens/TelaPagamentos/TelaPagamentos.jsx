import React from "react";
import { ExtInactive } from "../../components/ExtInactive";
import { Group } from "../../components/Group";
import "./style.css";

export const TelaPagamentos = () => {
  return (
    <div className="tela-pagamentos">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Forma de Pagamento</div>
          <div className="saldo-dispon-vel">
            Saldo Disponível: ${"{"}saldo_disponivel{"}"}
          </div>
          <div className="text-wrapper-2">Valor do Boleto</div>
          <div className="valor-do-boleto">
            ${"{"}valor_do_boleto{"}"}
          </div>
          <ExtInactive className="button-ext" text="Avançar" />
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-3">Banco</div>
          <div className="text-wrapper-4">Beneficiário</div>
          <div className="text-wrapper-5">Pagador</div>
          <div className="text-wrapper-6">Código de Barras</div>
          <div className="overlap-3">
            <div className="text-wrapper-7">Vencimento</div>
            <p className="p">Data de Vencimento do Bol.</p>
          </div>
          <div className="text-wrapper-8">Nome do Banco</div>
          <div className="text-wrapper-9">Nome do Beneficiário</div>
          <div className="text-wrapper-10">Nome do Pagador</div>
          <p className="text-wrapper-11">Num do código de barras</p>
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-12">Dados do Boleto</div>
          <img className="bank" alt="Bank" src="https://c.animaapp.com/6N5EKTt8/img/bank@2x.png" />
          <img className="customer" alt="Customer" src="https://c.animaapp.com/6N5EKTt8/img/customer@2x.png" />
          <img
            className="coin-in-hand"
            alt="Coin in hand"
            src="https://c.animaapp.com/6N5EKTt8/img/coin-in-hand@2x.png"
          />
          <img className="barcode" alt="Barcode" src="https://c.animaapp.com/6N5EKTt8/img/barcode@2x.png" />
          <img className="schedule" alt="Schedule" src="https://c.animaapp.com/6N5EKTt8/img/schedule@2x.png" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-13">Pagamentos</div>
          <Group className="group-29" property1="default" />
        </div>
        <div className="text-wrapper-14">Dados Gerais</div>
      </div>
    </div>
  );
};
