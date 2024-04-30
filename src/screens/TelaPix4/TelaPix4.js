import React from "react";
import { ButtonEntEnt } from "../../components_pix4/ButtonEntEnt";
import { Group } from "../../components_pix4/Group";
import { InputField } from "../../components_pix4/InputField";
import "./style.css";

export const TelaPix4 = () => {
  return (
    <div className="tela-pix4">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/sYunP4yg/img/rectangle-49.png" />
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/sYunP4yg/img/rectangle-49.png" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-2">Adicionar aos Favoritos</div>
          <div className="text-wrapper-3">Área Pix</div>
          <Group className="group-29" property1="default" />
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/sYunP4yg/img/contacts@2x.png" />
          <div className="text-wrapper-4">Nome do contato</div>
          <div className="text-wrapper-5">Chave Pix do contato</div>
          <ButtonEntEnt className="button-ent-ent-inactive" />
          <InputField
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Nome"
          />
          <InputField
            className="input-field-2"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Insira a chave pix aqui..."
          />
        </div>
      </div>
    </div>
  );
};

export default TelaPix4;