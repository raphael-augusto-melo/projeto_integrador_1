import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format, endOfMonth } from 'date-fns';
import { Group } from "../../components_emp3/Group";
import "./style_emp3.css";

export const TelaEmprstimo3 = () => {
  const location = useLocation();
  const { valorEmprestimo } = location.state || { valorEmprestimo: "R$0,00" };

  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [valorEditado, setValorEditado] = useState(valorEmprestimo);
  const [numParcelas, setNumParcelas] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setValorEditado(e.target.value);
  };

  const handleNumParcelasChange = (e) => {
    setNumParcelas(parseInt(e.target.value));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleEmprestimo = async () => {
    try {
        const valorEmCentavos = parseFloat(valorEditado.replace(/[^\d,-]/g, '').replace(',', '.')) || 0;
        const valorFinal = (valorEmCentavos / 100).toFixed(2);

        const response = await fetch("http://localhost:3000/api/emprestimo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                valor: valorFinal,
                numParcelas,
                dataParcela: selectedDate,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Empréstimo realizado com sucesso!");
            window.location.href = "/TelaInicial"; // Corrigir redirecionamento
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Erro ao realizar o empréstimo:", error);
        alert("Erro ao realizar o empréstimo");
    }
};


  const valorEmCentavos = parseFloat(valorEditado.replace(/[^\d]/g, "")) || 0;
  const valorParcela = (valorEmCentavos / numParcelas / 100).toFixed(2);

  const parcelasOptions = Array.from({ length: 24 }, (_, i) => i + 1).map((num) => (
    <option key={num} value={num}>
      {num}x de R$ {(valorEmCentavos / num / 100).toFixed(2)}
    </option>
  ));

  const today = new Date();
  const lastDayOfMonth = endOfMonth(today);
  const formattedToday = format(today, 'yyyy-MM-dd');
  const formattedLastDay = format(lastDayOfMonth, 'yyyy-MM-dd');

  return (
    <div className="tela-emprstimo_emp3">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Empréstimos</div>
          <Group className="group-29" property1="default" />
        </div>
        <p className="p">Vamos encontrar as melhores ofertas de empréstimo para o seu perfil</p>
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Conferir empréstimo</div>
        <div className="overlap-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="overlap-3">
                <div className="expand-arrow-wrapper">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={formattedToday}
                    max={formattedLastDay}
                    className="date-dropdown"
                  />
                </div>
                <p className="text-wrapper-4">Escolha a data da primeira parcela</p>
              </div>
              <div className="text-wrapper-5">Simular empréstimo de</div>
              <div className="group-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={valorEditado}
                    onChange={handleChange}
                    onBlur={toggleEditing}
                    className="valor-input"
                  />
                ) : (
                  <div className="text-wrapper-6">{valorEditado}</div>
                )}
                <img
                  className="edit"
                  alt="Edit"
                  src="https://c.animaapp.com/FletUrB1/img/edit@2x.png"
                  onClick={toggleEditing}
                />
              </div>
              <p className="text-wrapper-7">Escolha o número de parcelas</p>
              <select value={numParcelas} onChange={handleNumParcelasChange} className="parcelas-dropdown">
                {parcelasOptions}
              </select>
              <p className="text-wrapper-9">Juros de 5,45% ao mês</p>
              <img className="line" alt="Line" src="https://c.animaapp.com/FletUrB1/img/line-24.png" />
              <img className="line-2" alt="Line" src="https://c.animaapp.com/FletUrB1/img/line-24.png" />
              <p className="text-wrapper-10">
                Ao pegar o empréstimo, você se compromete em pagar todas as parcelas. Caso não pague, um agiota irá te
                perseguir até o pagamento total da dívida.
              </p>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={toggleCheckbox}
                className="unchecked-checkbox"
              />
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleEmprestimo} className="btn-pegar-emprestado">Pegar emprestado</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaEmprstimo3;
