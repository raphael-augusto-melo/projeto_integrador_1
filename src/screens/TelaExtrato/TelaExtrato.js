import React, { useEffect, useState } from "react";
import { Group } from "../../components_extratos/Group";
import { PropertyDefaultWrapper } from "../../components_extratos/PropertyDefaultWrapper";
import "./style_extrato.css";

export const TelaExtrato = () => {
  const [transfers, setTransfers] = useState([]);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const fetchTransfers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/extrato', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const result = await response.json();
        if (response.ok) {
          setTransfers(result.transferencias);
          const saldoNumerico = parseFloat(result.saldo) || 0; // Converter saldo para número ou usar 0 se não for possível converter
          setSaldo(saldoNumerico);
        } else {
          alert('Erro ao buscar transferências');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor');
      }
    };

    fetchTransfers();
  }, []);

  const groupTransfersByDate = (transfers) => {
    return transfers.reduce((acc, transfer) => {
      const date = new Date(transfer.data).toLocaleDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(transfer);
      return acc;
    }, {});
  };

  const groupedTransfers = groupTransfersByDate(transfers);

  return (
    <div className="tela-extrato">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Extratos</div>
          <Group className="group-29" property1="default" />
        </div>
        <div className="overlap-2">
          <p className="ag-CC">
            Ag. : 1234 <br />
            CC. : 12345678-9
          </p>
          <img className="line" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-16@2x.png" />
          <div className="text-wrapper-2">Saldo da conta corrente:</div>
          <p className="r">
            <span className="span">R$</span>
            <span className="text-wrapper-3">{saldo.toFixed(2)}</span>
          </p>
        </div>
        <div className="overlap-3">
          <div className="overlap-4">
            <img className="img" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-17.png" />
            <img className="print" alt="Print" src="https://c.animaapp.com/286wyEAW/img/print@2x.png" />
            <PropertyDefaultWrapper className="group-19" frameClassName="group-instance" property1="default" />
            <PropertyDefaultWrapper className="group-19-instance" frameClassName="group-instance" property1="default" text="Débitos" />
            <PropertyDefaultWrapper className="design-component-instance-node" frameClassName="group-instance" property1="default" text="Créditos" />
          </div>
          <img className="PDF" alt="Pdf" src="https://c.animaapp.com/286wyEAW/img/pdf@2x.png" />
        </div>
        <div className="overlap-5">
          <img className="line-2" alt="Line" src="https://c.animaapp.com/286wyEAW/img/line-18.png" />
          <div className="frame-2">
            {Object.entries(groupedTransfers).map(([date, transfers], index) => (
              <div key={index} className="date-group">
                <div className="transfer-date">{date}</div>
                {transfers.map((transfer, idx) => (
                  <div key={idx} className="transfer-container">
                    <div className="transfer-detail">
                      <p>{transfer.tipo === 'envio' ? `Pix enviado para ${transfer.destinatario_nome}` : `Pix recebido de ${transfer.remetente_nome}`}</p>
                      <p className={transfer.tipo === 'envio' ? 'valor-negativo' : 'valor-positivo'}>
                        R${Number(transfer.valor).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="text-wrapper-16">Busque pela data</div>
        <img className="expand-arrow" alt="Expand arrow" src="https://c.animaapp.com/286wyEAW/img/expand-arrow@2x.png" />
      </div>
    </div>
  );
};

export default TelaExtrato;
