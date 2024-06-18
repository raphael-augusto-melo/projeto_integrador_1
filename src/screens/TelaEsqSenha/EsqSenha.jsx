import React, { useState } from "react";
import axios from "axios";
import { InputFieldCPFEsq, InputFieldEmail } from "../../components_EsqSenha/InputField";
import "./style_EsqSenha.css";

export const TelaEsqSenha = () => {
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, cpf); // Verificar se os valores estão sendo capturados
    try {
      const response = await axios.post("http://localhost:3000/api/verify-user", { email, cpf });
      if (response.data.token) {
        alert("Usuário encontrado, prosseguir com a alteração de senha");
        window.location.href = `/TelaEsqSenha3?email=${encodeURIComponent(email)}&cpf=${encodeURIComponent(cpf)}`;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Erro ao verificar usuário");
      }
    }
  };

  return (
    <div className="esq-senha">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper">E-mail</div>
          <div className="text-wrapper-2">Recuperação de senha:</div>
          <p className="p">Insira seu CPF para recuperação de senha:</p>
          <form onSubmit={handleSubmit}>
            <InputFieldCPFEsq
              className="input-field-instance"
              keyFieldClassName="input-field-2"
              property1="default-state"
              text="CPF"
              maxLength={11}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <InputFieldEmail
              className="input-field-3"
              keyFieldClassName="input-field-2"
              property1="default-state"
              text="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="button-cria-conta">
              Enviar código
            </button>
          </form>
          <div className="text-wrapper-3">CPF</div>
          {message && <div className="message">{message}</div>}
        </div>
        <a href="/" className="overlap-2">
          <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/U9iR2F0f/img/ceubank2-1@2x.png" />
        </a>
      </div>
    </div>
  );
};

export default TelaEsqSenha;
