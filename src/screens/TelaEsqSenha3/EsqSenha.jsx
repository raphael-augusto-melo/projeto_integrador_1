import React from "react";
import { CriaInactive } from "../../components_EsqSenha3/CriaInactive";
import { Group } from "../../components_EsqSenha3/Group";
import { SenhaInputField } from "../../components_EsqSenha3/InputField";
import "./style_EsqSenha3.css";

export const TelaEsqSenha3 = () => {
  return (
    <div className="esq-senha3">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper">Confirme sua nova senha:</div>
          <div className="text-wrapper-2">Recuperação de senha:</div>
          <div className="text-wrapper-3">Defina sua nova senha:</div>
          <CriaInactive
            className="button-cria-conta"
            divClassName="design-component-instance-node"
            frameClassName="cria-inactive-instance"
            text="Confirmar"
          />
          <SenhaInputField
            className="input-field-instance"
            keyFieldClassName="input-field-2"
            property1="default-state"
            text="Nova senha"
            maxLength={8}
          />
          <SenhaInputField
            className="input-field-3"
            keyFieldClassName="input-field-2"
            property1="default-state"
            text="Nova senha"
            maxLength={8}
          />
          <div className="text-wrapper-4">Nova senha:</div>
        </div>
        <div className="overlap-2">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/h2GKVuDP/img/ceubank2-1@2x.png" />
          <Group className="group-29" property1="default" />
        </div>
      </div>
    </div>
  );
};

export default TelaEsqSenha3;