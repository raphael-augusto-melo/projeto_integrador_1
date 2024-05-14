import React, { useState } from "react";
import { CadInactive } from "../../components_login/CadInactive_login";
import { EntInactive } from "../../components_login/EntInactive_login";
import { CPFInputField, SenhaInputField } from "../../components_login/InputField_login/InputField_login.jsx";
import "../style_login.css";

export const Login = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // Sucesso: redirecionar ou salvar token
        localStorage.setItem("token", data.token);
        window.location.href = "/protected";
      } else {
        // Erro: mostrar mensagem de erro
        setError(data.message || "Erro ao fazer login");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
    }
  };

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
          <CPFInputField
            className="input-field-instance"
            keyFieldClassName="design-component-instance-node"
            text="CPF"
            maxLength={11}
            value={cpf}
            onChange={handleCpfChange}
          />
          <SenhaInputField
            className="input-field-2"
            keyFieldClassName="design-component-instance-node"
            text="Senha"
            maxLength={8}
            value={senha}
            onChange={handleSenhaChange}
          />
          <p className="p">Insira sua senha de 8 dígitos</p>
          <div className="text-wrapper-4">Senha</div>
          <div className="text-wrapper-5">CPF</div>
          <div className="text-wrapper-6">Acesse a sua conta</div>
          {error && <div className="error">{error}</div>}
          <button className="text-wrapper-7" onClick={handleLogin}>Entrar</button>
          <a href="/TelaEsqSenha">
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
