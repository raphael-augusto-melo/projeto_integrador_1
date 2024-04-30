import React from "react";
import { ButtonEntEnt } from "../../components_pix5/ButtonEntEnt";
import { DropdownMenu } from "../../components_pix5/DropdownMenu";
import { Group } from "../../components_pix5/Group";
import { InputField } from "../../components_pix5/InputField";
import "./style.css";

export const TelaPix5 = () => {
  return (
    <div className="tela-pix5">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/ZYMf7N0F/img/rectangle-3.png" />
          <div className="rectangle-2" />
          <div className="text-wrapper-2">Adicionar chave pix</div>
          <p className="p">Escolha o tipo de chave abaixo:</p>
          <div className="text-wrapper-3">Área Pix</div>
          <div className="rectangle-3" />
          <Group className="group-29" property1="default" />
          <div className="text-wrapper-4">Insira a chave</div>
          <InputField
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Chave"
          />
          <ButtonEntEnt className="button-ent-ent-inactive" frameClassName="button-ent-ent-instance" text="Adicionar" />
          <DropdownMenu className="dropdown-menu-instance" option="default" visibleOptions={false} />
        </div>
      </div>
    </div>
  );
};
export default TelaPix5;