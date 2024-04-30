import React from "react";
import { CriaInactive } from "../../components_EsqSenha/CriaInactive";
import { Group } from "../../components_EsqSenha/Group";
import { InputFieldCPFEsq, InputFieldEmail } from "../../components_EsqSenha/InputField";
import "./style_EsqSenha.css";

export const TelaEsqSenha = () => {
  return (
    <div className="esq-senha">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper">E-mail</div>
          <div className="text-wrapper-2">Recuperação de senha:</div>
          <p className="p">Insira seu CPF para recuperação de senha:</p>
          <CriaInactive
            className="button-cria-conta"
            divClassName="design-component-instance-node"
            frameClassName="cria-inactive-instance"
            text="Enviar código"
          />
          <InputFieldCPFEsq
            className="input-field-instance"
            keyFieldClassName="input-field-2"
            property1="default-state"
            text="CPF"
            maxLength={11}
          />
          <InputFieldEmail
            className="input-field-3"
            keyFieldClassName="input-field-2"
            property1="default-state"
            text="E-mail"
          />
          <div className="text-wrapper-3">CPF</div>
        </div>
        <div className="overlap-2">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/U9iR2F0f/img/ceubank2-1@2x.png" />
          <Group className="group-29" property1="default" />
        </div>
      </div>
    </div>
  );
};

export default TelaEsqSenha;