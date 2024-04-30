import React from "react";
import { ButtonEntEnt } from "../../components_pix7/ButtonEntEnt";
import { DropdownMenu } from "../../components_pix7/DropdownMenu";
import { Group } from "../../components_pix7/Group";
import "./style.css";

export const TelaPix7 = () => {
  return (
    <div className="tela-pix7">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/qezPjsE0/img/rectangle-3.png" />
          <div className="rectangle-2" />
          <div className="text-wrapper-2">Remover chave pix</div>
          <p className="p">Escolha o tipo de chave abaixo:</p>
          <div className="text-wrapper-3">Área Pix</div>
          <div className="rectangle-3" />
          <Group className="group-29" property1="default" />
          <ButtonEntEnt className="button-ent-ent-inactive" frameClassName="button-ent-ent-instance" text="Remover" />
          <DropdownMenu
            className="dropdown-menu-instance"
            option="default"
            text="Selecione para remover"
            visibleOptions={false}
          />
        </div>
      </div>
    </div>
  );
};
export default TelaPix7;