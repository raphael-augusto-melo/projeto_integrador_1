import React, { useEffect, useState } from "react";
import axios from "axios";
import { Component } from "../../components_telainicial/Component";
import { ExtIconInactive } from "../../components_telainicial/ExtIconInactive";
import { ExtInactive } from "../../components_telainicial/ExtInactive";
import { Group } from "../../components_telainicial/Group";
import { IconPagInactive } from "../../components_telainicial/IconPagInactive";
import { PixIconInactive } from "../../components_telainicial/PixIconInactive";
import { VerFatInactive } from "../../components_telainicial/VerFatInactive";
import "./style.css";

export const TelaInicial = () => {
  const [saldo, setSaldo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("Token não encontrado. Faça login novamente.");
          return;
        }
  
        console.log('Token obtido:', token);
  
        const response = await axios.get('http://localhost:3000/api/saldo', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setSaldo(response.data.saldo);
      } catch (error) {
        console.error('Erro ao obter saldo:', error.response ? error.response.data : error.message);
        setError("Erro ao obter saldo");
      }
    };
  
    fetchSaldo();
  }, []);
  
  return (
    <div className="tela-inicial">
      <div className="div-2">
        <div className="overlap">
          <p className="r-saldo-disp">
            <span className="span">R$</span>
            <span className="text-wrapper-9">
              {" "}
              {saldo !== null ? saldo : error || "Carregando..."}
            </span>
          </p>
          <div className="overlap-2">
            <p className="r-fatura">
              <span className="span">R$</span>
              <span className="text-wrapper-9">
                {" "}
                {"{fatura}"}
              </span>
            </p>
            <div className="text-wrapper-10">Fatura atual</div>
          </div>
          <div className="overlap-3">
            <p className="r-lim-disp">
              <span className="span">R$</span>
              <span className="text-wrapper-9">
                {" "}
                {"{lim_disp}"}
              </span>
            </p>
            <div className="text-wrapper-11">Limite disponível</div>
          </div>
          <div className="text-wrapper-12">Saldo Disponível</div>
          <p className="conta-corrente">
            <span className="span">C</span>
            <span className="text-wrapper-9">onta </span>
            <span className="span">C</span>
            <span className="text-wrapper-9">orrente</span>
          </p>
          <p className="cart-o-de-cr-dito">
            <span className="span">C</span>
            <span className="text-wrapper-9">artão de </span>
            <span className="span">C</span>
            <span className="text-wrapper-9">rédito</span>
          </p>
          <img className="line" alt="Line" src="https://c.animaapp.com/v0SxTu3L/img/line-9@2x.png" />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/v0SxTu3L/img/line-10.png" />
          <img className="wallet" alt="Wallet" src="https://c.animaapp.com/v0SxTu3L/img/wallet@2x.png" />
          <img className="debit-card" alt="Debit card" src="https://c.animaapp.com/v0SxTu3L/img/debit-card@2x.png" />
          <div className="text-wrapper-13">Acesso Rápido</div>
          <a href="/TelaExtrato"> {/*botao ver ext*/}
            <ExtInactive className="button-ext" />
          </a>
          <a href="/TelaPix"> {/*Icone pix*/}
            <PixIconInactive className="button-icon-pix" image="https://c.animaapp.com/v0SxTu3L/img/image-9-1@2x.png" />
          </a>
          <a href="/TelaExtrato"> {/*Icone extrato*/}
            <ExtIconInactive className="button-icon-ext" />
          </a>
          <a href="/TelaFatura"> {/*botao ver Fatura*/}
            <VerFatInactive className="button-ver-fat" />
          </a>
          <a href="/TelaPagamentos"> {/*Icone Pagamento*/}
            <IconPagInactive className="button-icon-pag" />
          </a>
          <a href="/TelaEmprstimo2"> {/*Icone emprestimo*/}
            <Group className="group-26" />
          </a>
        </div>
        <div className="overlap-4">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/v0SxTu3L/img/ceubank2-2@2x.png" />
          <Component className="component-2" property1="male-user" />
        </div>
      </div>
    </div>
  );
};

export default TelaInicial;
