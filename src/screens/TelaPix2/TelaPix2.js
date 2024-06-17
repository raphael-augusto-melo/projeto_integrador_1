import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonEntEnt } from "../../components_pix2/ButtonEntEnt";
import { Group } from "../../components_pix2/Group";
import { InputFieldValor, InputFieldData } from "../../components_pix2/InputField_pix2";
import "./style_telapix2.css";

export const TelaPix2 = () => {
  const [beneficiario, setBeneficiario] = useState(null);
  const [saldo, setSaldo] = useState(null);
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("Token não encontrado. Faça login novamente.");
          return;
        }

        const response = await axios.get('http://localhost:3000/api/saldo', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setSaldo(response.data.saldo);
      } catch (error) {
        console.error('Erro ao obter saldo:', error);
        setError("Erro ao obter saldo");
      }
    };

    fetchSaldo();

    const beneficiarioData = localStorage.getItem('beneficiario');
    if (beneficiarioData) {
      setBeneficiario(JSON.parse(beneficiarioData));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!valor || !data || !beneficiario) {
      setError("Por favor, preencha todos os campos.");
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verificar se o valor não está nulo antes de converter para número
    const valorNum = parseFloat(valor.replace(/[^\d,]/g, "").replace(",", "."));
    if (isNaN(valorNum) || valorNum <= 0) {
      setError("Valor inválido.");
      alert("Valor inválido.");
      return;
    }

    // Salvar valor da transferência e data no localStorage
    localStorage.setItem('transferValue', valorNum);
    localStorage.setItem('transferDate', data);

    // Redirecionar para a próxima tela
    window.location.href = "/TelaPix3";
  };

  return (
    <div className="tela-pix2">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/2ViQC4uw/img/rectangle-49.png" />
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/2ViQC4uw/img/rectangle-49.png" />
          <div className="div" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-2">Dados do contato</div>
          <p className="p">Informe o valor da transferência</p>
          <div className="text-wrapper-3">Área Pix</div>
          <a href="/TelaPix">
            <Group className="group-29" property1="default" />
          </a>
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/2ViQC4uw/img/contacts@2x.png" />
          <div className="text-wrapper-4">CEUBank</div>
          <div className="text-wrapper-5">
            {beneficiario ? beneficiario.name : "Nome: "}
          </div>
          <div className="chave-chave-do">
            {beneficiario ? `Chave: ${beneficiario.chave}` : "Chave: "}
          </div>
          <form onSubmit={handleSubmit}>
            <InputFieldValor 
              className="rectangle-4" 
              text={"R$0,00"}
              onChange={setValor}
            />
            <InputFieldData
              className="rectangle-5"
              text={"DD/MM/AAAA"}
              onChange={setData}
            />
            <div className="text-wrapper-6">Digite o valor</div>
            <div className="text-wrapper-7">Pagar na data</div>
            <div className="rectangle-6" />
            <div className="text-wrapper-8">Saldo Disponível</div>
            <p className="r-saldo-disp">
              <span className="span">R$
                {" "}
                {saldo !== null ? saldo : error || "Carregando..."}
              </span>
            </p>
            <img className="line" alt="Line" src="https://c.animaapp.com/2ViQC4uw/img/line-26.png" />
            <ButtonEntEnt className="button-ent-ent-inactive" text="Avançar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TelaPix2;
