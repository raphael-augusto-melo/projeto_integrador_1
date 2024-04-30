import React from "react";
import { CadInactive } from "../../components_login/CadInactive_login";
import { EntInactive } from "../../components_login/EntInactive_login";
import { InputFieldLogin, SenhaInputField } from "../../components_login/InputField_login/index_input_login";
import "../style_login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="overlap">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/MQQsuFWg/img/ceubank2-2@2x.png" />
          <div className="text-wrapper-2">Bem vindo</div>
          <div className="text-wrapper-3">ao</div>
          <img
            className="heart-red-gradient"
            alt="Heart red gradient"
            src="https://c.animaapp.com/MQQsuFWg/img/heart-red-gradient@2x.png"
          />
          <img
            className="bent-shape-and-two"
            alt="Bent shape and two"
            src="https://c.animaapp.com/MQQsuFWg/img/bent-shape-and-two-glass-balls@2x.png"
          />
          <img
            className="dynamic-composition"
            alt="Dynamic composition"
            src="https://c.animaapp.com/MQQsuFWg/img/dynamic-composition-with-levitating-glass-balls@2x.png"
          />
          <img
            className="transparent-lenses"
            alt="Transparent lenses"
            src="https://c.animaapp.com/MQQsuFWg/img/transparent-lenses@2x.png"
          />
        </div>
        <div className="overlap-group-2">
          <div className="rectangle" />
          <InputFieldLogin
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="CPF"
            maxLength={11}
          />
          <SenhaInputField
            className="input-field-2"
            keyFieldClassName="design-component-instance-node"
            property1="default-state"
            text="Senha"
            maxLength={8}
          />
          <p className="p">Insira sua senha de 8 dígitos</p>
          <div className="text-wrapper-4">Senha</div>
          <div className="text-wrapper-5">CPF</div>
          <div className="text-wrapper-6">Acesse a sua conta</div>
          <a href="/TelaEsqSenha" >
          <div className="text-wrapper-7">Esqueci a senha</div>
          </a>
          <img
            className="levitating-gradient"
            alt="Levitating gradient"
            src="https://c.animaapp.com/MQQsuFWg/img/levitating-gradient-lens-and-pink-cylinder@2x.png"
          />
          <div className="text-wrapper-8">Não tem conta?</div>
          <CadInactive
            className="button-cad"
            criaInactiveCriaInactiveClassName="button-cad-2"
            criaInactiveDivClassName="cad-inactive-instance"
            criaInactiveFrameClassName="button-cad-3"
          />
          <EntInactive className="button-ent" divClassName="button-ent-2" frameClassName="ent-inactive-instance" />
        </div>
      </div>
    </div>
  );
};
export default Login;
