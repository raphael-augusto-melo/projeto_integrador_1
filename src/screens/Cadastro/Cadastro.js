import React, { useState } from "react";
import axios from "axios";
import { CriaInactive } from "../../components_cadastro/CriaInactive_cadastro";
import {
  InputFieldName,
  InputFieldCPF,
  InputFieldERM,
  InputFieldEmail,
  InputFieldEndereco,
  InputFieldRG,
  InputFieldTelefone,
  InputFieldSenha
} from "../../components_cadastro/InputField_cadastro";
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Campo alterado: ${name}, Valor: ${value}`); // Adicione este log
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    console.log("Validando formulário:", formData); // Adicione este log para depuração
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.cpf) newErrors.cpf = "CPF é obrigatório";
    if (!formData.rg) newErrors.rg = "RG é obrigatório";
    if (!formData.email) newErrors.email = "Email é obrigatório";
    if (!formData.telefone) newErrors.telefone = "Telefone é obrigatório";
    if (!formData.endereco) newErrors.endereco = "Endereço é obrigatório";
    if (!formData.senha) newErrors.senha = "Senha é obrigatória";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    console.log("Dados do formulário:", formData); // Para depuração
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log('Resposta do servidor:', response.data); // Para depuração
      alert(response.data.message);
      if (response.data.message === "Usuário registrado com sucesso") {
        window.location.href = "/"; // Redirecionar para a página de login após o registro bem-sucedido
      }
    } catch (error) {
      console.error('Erro na requisição:', error); // Para depuração
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao conectar-se ao servidor");
      }
    }
  };

  return (
    <div className="cadastro">
      <div className="div">
        <div className="overlap">
          <form onSubmit={handleSubmit}>
            <div className="text-wrapper-4">Nome completo *</div>
            <InputFieldName
              className="input-field-2"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <div className="text-wrapper-5">Telefone *</div>
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
            {errors.telefone && <p className="error">{errors.telefone}</p>}
            <div className="text-wrapper-2">CPF *</div>
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
            {errors.cpf && <p className="error">{errors.cpf}</p>}
            <div className="text-wrapper-6">RG *</div>
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
            {errors.rg && <p className="error">{errors.rg}</p>}
            <div className="text-wrapper-3">E-mail *</div>
            <InputFieldEmail
              className="input-field-7"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <div className="text-wrapper-8">Endereço *</div>
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
            {errors.endereco && <p className="error">{errors.endereco}</p>}
            <div className="text-wrapper-7">Estimativa de Renda Mensal</div>
            <InputFieldERM
              className="input-field-3"
              keyFieldClassName="design-component-instance-node"
              property1="default-state"
              text="Renda"
              name="renda"
              value={formData.renda}
              onChange={handleChange}
            />
            <div className="text-cad">Senha *</div>
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
            {errors.senha && <p className="error">{errors.senha}</p>}
            <CriaInactive
              className="button-cria-conta"
              divClassName="button-cria-conta-2"
              frameClassName="cria-inactive-instance"
              type="submit"
              onClick={handleSubmit}
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
