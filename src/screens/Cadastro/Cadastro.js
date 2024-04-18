import React from "react";
import { CriaInactive } from "../../components_cadastro/CriaInactive";
import { InputFieldName, InputFieldCPF, InputFieldERM, InputFieldEmail, InputFieldEndereco, InputFieldRG, InputFieldTelefone } from "../../components_cadastro/InputField";
import "../style_cadastro.css";

export const Cadastro = () => {
  return (
    <div className="cadastro">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper-2">CPF *</div>
          <div className="text-wrapper-3">E-mail *</div>
          <div className="text-wrapper-4">Nome completo *</div>
          <div className="overlap-2">
          <div className="text-wrapper-5">Telefone *</div>
          <InputFieldTelefone
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Telefone"
            maxLength={11}
          />
          </div>
          <div className="text-wrapper-6">RG *</div>
          <div className="text-wrapper-7">Estimativa de Renda Mensal</div>
          <div className="text-wrapper-8">Endereço *</div>
          <div className="text-wrapper-9">Preencha as seguintes informações:</div>
          <CriaInactive
            className="button-cria-conta"
            divClassName="button-cria-conta-2"
            frameClassName="cria-inactive-instance"
          />
          <InputFieldName
            className="input-field-2"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Nome"
          />
          <InputFieldERM
            className="input-field-3"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Renda"
          />
          <InputFieldEndereco
            className="input-field-4"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Endereço"
            maxLength={50}
          />
          <InputFieldCPF
            className="input-field-5"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="CPF"
            maxLength={11}
          />
          <InputFieldRG
            className="input-field-6"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="RG"
            maxLength={7}
          />
          <InputFieldEmail
            className="input-field-7"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="E-mail"
          />
        </div>
        <div className="overlap-3">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/1zsyzmZo/img/ceubank2-1@2x.png" />
          <div className="group">
            <a className="overlap-group-2" href="/">
              <div className="ellipse" />
              <img
                className="left-arrow"
                alt="Left arrow"
                src="https://c.animaapp.com/1zsyzmZo/img/left-arrow-2@2x.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cadastro;