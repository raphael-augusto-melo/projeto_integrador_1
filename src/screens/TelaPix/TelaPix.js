import React from "react";
import { Group } from "../../components_pix/Group";
import { InputField } from "../../components_pix/InputField";
import "./style_telapix.css";

export const TelaPix1 = () => {
  return (
    <div className="tela-pix1">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/CVAXwU6b/img/rectangle-3.png" />
          <div className="rectangle-2" />
          <p className="text-wrapper">Para quem você vai transferir?</p>
          <div className="text-wrapper-2">Área Pix</div>
          <p className="p">Celular, CPF/CNPJ, e-mail, chave aleatória...</p>
          <img className="line" alt="Line" src="https://c.animaapp.com/CVAXwU6b/img/line-15@2x.png" />
          <a href="/TelaPix2">
          <div className="text-wrapper-3">Pé de pano</div>
          <div className="text-wrapper-4">Pernalonga</div>
          <div className="text-wrapper-5">Urubu do Pix</div>
          <div className="text-wrapper-6">Seu Madruga</div>
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/CVAXwU6b/img/contacts-5@2x.png" />
          <img className="img" alt="Contacts" src="https://c.animaapp.com/CVAXwU6b/img/contacts-5@2x.png" />
          <img className="contacts-2" alt="Contacts" src="https://c.animaapp.com/CVAXwU6b/img/contacts-5@2x.png" />
          <img className="contacts-3" alt="Contacts" src="https://c.animaapp.com/CVAXwU6b/img/contacts-5@2x.png" />
          <img className="contacts-4" alt="Contacts" src="https://c.animaapp.com/CVAXwU6b/img/contacts-5@2x.png" />
          <img className="contacts-5" alt="Contacts" src="https://c.animaapp.com/CVAXwU6b/img/contacts-5@2x.png" />
          </a>
          <div className="group-2">
            <div className="text-wrapper-7">Favoritos</div>
            <img className="img-2" alt="Star" src="https://c.animaapp.com/CVAXwU6b/img/star@2x.png" />
          </div>
          <img className="line-2" alt="Line" src="https://c.animaapp.com/CVAXwU6b/img/line-14.png" />
          <img className="line-3" alt="Line" src="https://c.animaapp.com/CVAXwU6b/img/line-14.png" />
          <div className="group-3">
            <div className="text-wrapper-8">Contatos Recentes</div>
            <img className="img-2" alt="User account" src="https://c.animaapp.com/CVAXwU6b/img/user-account@2x.png" />
          </div>
          <a href="/TelaPix2">
          <div className="text-wrapper-9">Rodrigo Faro</div>
          <div className="agiota-quebra-joelho">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Agiota <br />
            (quebra joelho)
          </div>
          </a>
          <a href="/TelaPix7">
          <div className="text-wrapper-10">_</div>
          <div className="text-wrapper-13">Remover chave pix</div>
          </a>
          <div className="text-wrapper-11">Adicionar chave pix</div>
          <div className="text-wrapper-12">Gerenciar</div>
          <a href="/TelaPix4" className="group-4">
            <div className="text-wrapper-14">Adicionar aos favoritos</div>
            <img className="plus" alt="Plus" src="https://c.animaapp.com/CVAXwU6b/img/plus@2x.png" />
          </a>
          <img className="settings" alt="Settings" src="https://c.animaapp.com/CVAXwU6b/img/settings@2x.png" />
          <Group className="group-29" property1="default" />
          <a href= "/TelaPix5">
          <img className="plus-2" alt="Plus" src="https://c.animaapp.com/CVAXwU6b/img/plus-1@2x.png" />
          <div className="text-wrapper-11">Adicionar chave pix</div>
          </a>
          <InputField
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Chave pix"
          />
        </div>
      </div>
    </div>
  );
};

export default TelaPix1;