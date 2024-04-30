import React from "react";
import { CriaInactive } from "../../components_EsqSenha2/CriaInactive";
import { Group } from "../../components_EsqSenha2/Group";
import { InputFieldCod } from "../../components_EsqSenha2/InputField";
import "./style_EsqSenha2.css";

export const TelaEsqSenha2 = () => {
  return (
    <div className="esq-senha2">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper">Código SMS</div>
          <div className="text-wrapper-2">Recuperação de senha:</div>
          <p className="p">Preencha os códigos recebidos em seu email e em seu telefone: (XX)XXXX-1111</p>
          <CriaInactive
            className="button-cria-conta"
            divClassName="design-component-instance-node"
            frameClassName="cria-inactive-instance"
            text="Seguinte"
          />
          <InputFieldCod
            className="input-field-instance"
            keyFieldClassName="input-field-2"
            property1="default-state"
            text="Código"
            maxLength={6}
          />
          <InputFieldCod
            className="input-field-3"
            keyFieldClassName="input-field-2"
            property1="default-state"
            text="Código"
            maxLength={6}
          />
          <div className="text-wrapper-3">Código e-mail</div>
        </div>
        <a href="/TelaEsqSenha" className="overlap-2">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/gEMRkGWd/img/ceubank2-1@2x.png" />
          <Group className="group-29" property1="default" />
        </a>
      </div>
    </div>
  );
};

export default TelaEsqSenha2;