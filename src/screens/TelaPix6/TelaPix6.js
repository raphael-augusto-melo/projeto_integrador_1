import React from "react";
import { ButtonEntEnt } from "../../components_pix6/ButtonEntEnt";
import { Group } from "../../components_pix6/Group";
import "./style.css";

export const TelaPix6 = () => {
  return (
    <div className="tela-pix6">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/RF2dJsYi/img/rectangle-49.png" />
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/RF2dJsYi/img/rectangle-49.png" />
          <div className="div" />
          <div className="text-wrapper-2">Banco do contato</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-3">Adicionado aos Favoritos</div>
          <div className="text-wrapper-4">Área Pix</div>
          <Group className="group-29" property1="default" />
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/RF2dJsYi/img/contacts@2x.png" />
          <div className="text-wrapper-5">Nome do contato</div>
          <div className="text-wrapper-6">Chave pix do contato</div>
          <ButtonEntEnt className="button-ent-ent-inactive" />
        </div>
      </div>
    </div>
  );
};

export default TelaPix6;