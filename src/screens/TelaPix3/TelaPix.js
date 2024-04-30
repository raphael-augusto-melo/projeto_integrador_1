import React from "react";
import { ButtonEntEnt } from "../../components_pix3/ButtonEntEnt";
import { Group } from "../../components_pix3/Group";
import "./style.css";

export const TelaPix = () => {
  return (
    <div className="tela-pix">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/U4XUnq0U/img/rectangle-49.png" />
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/U4XUnq0U/img/rectangle-49.png" />
          <div className="div" />
          <div className="rectangle-2" />
          <div className="text-wrapper">Confirme a transferência:</div>
          <div className="text-wrapper-2">Área Pix</div>
          <Group className="group-29" property1="default" />
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/U4XUnq0U/img/contacts@2x.png" />
          <div className="text-wrapper-3">Banco do beneficiário</div>
          <div className="text-wrapper-4">Nome do Beneficiário</div>
          <div className="chave-chave-do">
            Chave: {"{"}chave_do_beneficiario{"}"}
          </div>
          <div className="text-wrapper-5">DD/MM/AAAA</div>
          <div className="text-wrapper-6">Data de Transferência:</div>
          <div className="r-valor">
            R${"{"}valor{"}"}
          </div>
          <div className="text-wrapper-7">Valor a ser depositado:</div>
          <ButtonEntEnt className="button-ent-ent-inactive" frameClassName="button-ent-ent-instance" text="Confirmar" />
          <img className="US-dollar" alt="Us dollar" src="https://c.animaapp.com/U4XUnq0U/img/us-dollar@2x.png" />
          <img className="schedule" alt="Schedule" src="https://c.animaapp.com/U4XUnq0U/img/schedule@2x.png" />
          <img className="line" alt="Line" src="https://c.animaapp.com/U4XUnq0U/img/line-27@2x.png" />
          <img className="img" alt="Line" src="https://c.animaapp.com/U4XUnq0U/img/line-28@2x.png" />
        </div>
      </div>
    </div>
  );
};
