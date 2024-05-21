import React, { useState } from "react";
import axios from "axios";
import { CriaInactive } from "../../components_cadastro/CriaInactive_cadastro";
import { InputFieldName, InputFieldCPF, InputFieldERM, InputFieldEmail, InputFieldEndereco, InputFieldRG, InputFieldTelefone, InputFieldSenha } from "../../components_cadastro/InputField_cadastro";
import "../style_cadastro.css";

export const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    rg: "",
    email: "",
    telefone: "",
    endereco: "",
    renda: "",
    senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log('Resposta do servidor:', response.data); // Para depuração
      alert(response.data.message);
      if (response.data.message === "Usuário registrado com sucesso") {
        window.location.href = "/"; // Redirecionar para a página de login após o registro bem-sucedido
      }
    } catch (error) {
      console.error('Erro na requisição:', error); // Para depuração
      alert(error.response.data.message);
    }
  };

  return (
    <div className="cadastro">
      <div className="div">
        <div className="overlap">
          <form onSubmit={handleSubmit}>
            <div className="text-wrapper-2">CPF *</div>
            <div className="text-wrapper-3">E-mail *</div>
            <div className="text-wrapper-4">Nome completo *</div>
            <div className="overlap-2">
              <div className="text-wrapper-5">Telefone *</div>
              <InputFieldSenha
                className="input-field-Senha"
                keyFieldClassName="design-component-instance-node"
                property1="default-state"
                text="Senha"
                maxLength={8}
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
              <InputFieldTelefone
                className="input-field-instance"
                keyFieldClassName="design-component-instance-node"
                property1="default-state"
                text="Telefone"
                maxLength={11}
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
            <div className="text-wrapper-6">RG *</div>
            <div className="text-wrapper-7">Estimativa de Renda Mensal</div>
            <div className="text-wrapper-8">Endereço *</div>
            <div className="text-wrapper-9">Preencha as seguintes informações:</div>
            <div className="text-cad">Senha *</div>
            <CriaInactive
              className="button-cria-conta"
              divClassName="button-cria-conta-2"
              frameClassName="cria-inactive-instance"
              type="submit"
            />
            <InputFieldName
              className="input-field-2"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputFieldERM
              className="input-field-3"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="Renda"
              name="renda"
              value={formData.renda}
              onChange={handleChange}
            />
            <InputFieldEndereco
              className="input-field-4"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="Endereço"
              maxLength={50}
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
            />
            <InputFieldCPF
              className="input-field-5"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="CPF"
              maxLength={11}
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
            />
            <InputFieldRG
              className="input-field-6"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="RG"
              maxLength={7}
              name="rg"
              value={formData.rg}
              onChange={handleChange}
            />
            <InputFieldEmail
              className="input-field-7"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </form>
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
