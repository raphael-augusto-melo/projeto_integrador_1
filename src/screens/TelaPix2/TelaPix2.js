// TelaPix2.js
import React, { useEffect, useState } from "react";
import { ButtonEntEnt } from "../../components_pix2/ButtonEntEnt";
import { Group } from "../../components_pix2/Group";
import { InputFieldValor, InputFieldData } from "../../components_pix2/InputField_pix2";
import "./style_telapix2.css";

export const TelaPix2 = () => {
  const [beneficiario, setBeneficiario] = useState(null);

  useEffect(() => {
    const beneficiarioData = localStorage.getItem('beneficiario');
    if (beneficiarioData) {
      setBeneficiario(JSON.parse(beneficiarioData));
    }
  }, []);

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
          <InputFieldValor 
            className="rectangle-4" 
            text={"R$0,00"}
          />
          <InputFieldData
            className="rectangle-5"
            text={"DD/MM/AAAA"}
            maxLength={8}
          />
          <div className="text-wrapper-6">Digite o valor</div>
          <div className="text-wrapper-7">Pagar na data</div>
          <div className="rectangle-6" />
          <div className="text-wrapper-8">Saldo Disponível</div>
          <div className="r-saldo-disp">
            R${"{saldo_disp}"}
          </div>
          <img className="line" alt="Line" src="https://c.animaapp.com/2ViQC4uw/img/line-26.png" />
          <ButtonEntEnt className="button-ent-ent-inactive" />
        </div>
      </div>
    </div>
  );
};

export default TelaPix2;
