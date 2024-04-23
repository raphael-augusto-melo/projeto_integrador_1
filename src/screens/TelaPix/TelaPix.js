import React from "react";
import { Group } from "../../components_pix/Group";
import { InputField } from "../../components_pix/InputField_pix";
import "./style_pix.css";

export const TelaPix = () => {
  return (
    <div className="tela-pix">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/0843AwLU/img/rectangle-3.png" />
          <div className="rectangle-2" />
          <p className="text-wrapper">Para quem você vai transferir?</p>
          <div className="text-wrapper-2">Área Pix</div>
          <p className="p">Celular, CPF/CNPJ, e-mail, chave aleatória...</p>
          <div className="text-wrapper-3">Pé de pano</div>
          <div className="text-wrapper-4">Pernalonga</div>
          <div className="text-wrapper-5">Urubu do Pix</div>
          <div className="text-wrapper-6">Seu Madruga</div>
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/0843AwLU/img/contacts-5@2x.png" />
          <img className="line" alt="Line" src="https://c.animaapp.com/0843AwLU/img/line-15@2x.png" />
          <img className="img" alt="Contacts" src="https://c.animaapp.com/0843AwLU/img/contacts-5@2x.png" />
          <img className="contacts-2" alt="Contacts" src="https://c.animaapp.com/0843AwLU/img/contacts-5@2x.png" />
          <img className="contacts-3" alt="Contacts" src="https://c.animaapp.com/0843AwLU/img/contacts-5@2x.png" />
          <img className="contacts-4" alt="Contacts" src="https://c.animaapp.com/0843AwLU/img/contacts-5@2x.png" />
          <img className="contacts-5" alt="Contacts" src="https://c.animaapp.com/0843AwLU/img/contacts-5@2x.png" />
          <div className="group-2">
            <div className="text-wrapper-7">Favoritos</div>
            <img className="img-2" alt="Star" src="https://c.animaapp.com/0843AwLU/img/star@2x.png" />
          </div>
          <img className="line-2" alt="Line" src="https://c.animaapp.com/0843AwLU/img/line-14.png" />
          <img className="line-3" alt="Line" src="https://c.animaapp.com/0843AwLU/img/line-14.png" />
          <div className="group-3">
            <div className="text-wrapper-8">Contatos Recentes</div>
            <img className="img-2" alt="User account" src="https://c.animaapp.com/0843AwLU/img/user-account@2x.png" />
          </div>
          <div className="text-wrapper-9">Rodrigo Faro</div>
          <div className="agiota-quebra-joelho">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Agiota <br />
            (quebra joelho)
          </div>
          <div className="text-wrapper-10">Gerenciar</div>
          <div className="group-4">
            <div className="text-wrapper-11">Adicionar aos favoritos</div>
            <img className="plus" alt="Plus" src="https://c.animaapp.com/0843AwLU/img/plus@2x.png" />
          </div>
          <img className="settings" alt="Settings" src="https://c.animaapp.com/0843AwLU/img/settings@2x.png" />
          <InputField
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Chave pix..."
          />
          <Group className="group-29" property1="default" />
        </div>
      </div>
    </div>
  );
};

export default TelaPix;