import React, { useState, useEffect } from "react";
import { Group } from "../../components_EsqSenha3/Group";
import { InputFieldEsqSenha } from "../../components_EsqSenha3/InputField";
import { InputFieldEsqSenha2 } from "../../components_EsqSenha3/InputField";
import "./style_EsqSenha3.css";

export const TelaEsqSenha3 = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userData, setUserData] = useState({ email: '', cpf: '' });

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const email = params.get('email');
        const cpf = params.get('cpf');
        setUserData({ email, cpf });
    }, []);

    const handleUpdatePassword = async () => {
        if (!newPassword || !confirmPassword) {
            alert('Erro ao acessar os campos de senha');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/update-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...userData, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Senha atualizada com sucesso!');
                window.location.href = "/"; 
            } else {
                alert(`Erro: ${data.message}`);
            }
        } catch (error) {
            alert('Erro ao atualizar senha');
        }
    };

    return (
        <div className="esq-senha3">
            <div className="div-2">
                <div className="overlap">
                    <div className="text-wrapper">Confirme sua nova senha:</div>
                    <div className="text-wrapper-2">Recuperação de senha:</div>
                    <div className="text-wrapper-3">Defina sua nova senha:</div>
                    <button
                        className="button-confirmar"
                        onClick={handleUpdatePassword}
                    >
                        Confirmar
                    </button>
                    <InputFieldEsqSenha
                        className="input-field-instance"
                        keyFieldClassName="input-field-2"
                        property1="default-state"
                        text="Nova senha"
                        value={newPassword}
                        name="newPassword"
                        maxLength={8}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <InputFieldEsqSenha2
                        className="input-field-3"
                        keyFieldClassName="input-field-2"
                        property1="default-state"
                        text="Confirmar senha"
                        value={confirmPassword}
                        name="confirmPassword"
                        maxLength={8}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="text-wrapper-4">Nova senha:</div>
                </div>
                <div className="overlap-2">
                    <img className="ceubank" alt="Ceubank" src="https://c.animaapp.com/h2GKVuDP/img/ceubank2-1@2x.png" />
                    <Group className="group-29" property1="default" />
                </div>
            </div>
        </div>
    );
};

export default TelaEsqSenha3;
