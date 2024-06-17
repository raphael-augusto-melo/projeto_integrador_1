import React, { useEffect, useState } from "react";
import { ButtonEntEnt } from "../../components_pix3/ButtonEntEnt";
import { Group } from "../../components_pix3/Group";
import "./style.css";

export const TelaPix3 = () => {
  const [beneficiario, setBeneficiario] = useState(null);
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const beneficiarioData = localStorage.getItem('beneficiario');
    if (beneficiarioData) {
      setBeneficiario(JSON.parse(beneficiarioData));
    }

    const transferValue = localStorage.getItem('transferValue');
    if (transferValue) {
      setValor(transferValue);
    }

    const transferDate = localStorage.getItem('transferDate');
    if (transferDate) {
      setData(transferDate);
    }
  }, []);

  const handleConfirmarClick = async () => {
    if (beneficiario && valor && data) {
      try {
        console.log('Enviando dados:', {
          chave: beneficiario.chave,
          valor: parseFloat(valor),
          data: data
        });
        const response = await fetch('http://localhost:3000/api/transfer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            chave: beneficiario.chave,
            valor: parseFloat(valor),
            data: data
          })
        });
  
        const result = await response.json();
        console.log('Response:', response);
        console.log('Result:', result);
  
        if (response.ok) {
          alert('Transferência realizada com sucesso');
          window.location.href = "/TelaInicial";
        } else {
          alert(result.message || 'Não foi possível realizar a transferência');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível realizar a transferência');
      }
    } else {
      alert('Dados insuficientes para realizar a transferência');
    }
  };
  
  
  return (
    <div className="tela-pix3">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/U4XUnq0U/img/rectangle-49.png" />
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/U4XUnq0U/img/rectangle-49.png" />
          <div className="div" />
          <div className="rectangle-2" />
          <div className="text-wrapper">Confirme a transferência:</div>
          <div className="text-wrapper-2">Área Pix</div>
          <Group className="group-29" property1="default" />
          <img className="contacts" alt="Contacts" src="https://c.animaapp.com/U4XUnq0U/img/contacts@2x.png" />
          <div className="text-wrapper-3">CEUBank</div>
          <div className="text-wrapper-4">
            {beneficiario ? beneficiario.name : "Nome do Beneficiário"}
          </div>
          <div className="chave-chave-do">
            {beneficiario ? `Chave: ${beneficiario.chave}` : "Chave: {'{'}chave_do_beneficiario{'}'}"}
          </div>
          <div className="text-wrapper-5">{data}</div>
          <div className="text-wrapper-6">Data de Transferência:</div>
          <div className="r-valor">
            R${valor}
          </div>
          <div className="text-wrapper-7">Valor a ser depositado:</div>
          <ButtonEntEnt className="button-ent-ent-inactive" frameClassName="button-ent-ent-instance" text="Confirmar" onClick={handleConfirmarClick} />
          <img className="US-dollar" alt="Us dollar" src="https://c.animaapp.com/U4XUnq0U/img/us-dollar@2x.png" />
          <img className="schedule" alt="Schedule" src="https://c.animaapp.com/U4XUnq0U/img/schedule@2x.png" />
          <img className="line" alt="Line" src="https://c.animaapp.com/U4XUnq0U/img/line-27@2x.png" />
          <img className="img" alt="Line" src="https://c.animaapp.com/U4XUnq0U/img/line-28@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default TelaPix3;
