const express = require('express');
const router = express.Router();

// Simulação de um banco de dados, substituir pelo nosso banco de dados aqui
const users = [];

// Rota de Registro
router.post('/register', (req, res) => {
  const { name, cpf, rg, email, telefone, endereco, renda, senha } = req.body;

  // Validação básica
  if (!name || !cpf || !rg || !email || !telefone || !endereco || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  // Verificar se o usuário já existe
  const userExists = users.some(user => user.cpf === cpf || user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'Usuário já cadastrado' });
  }

  // Adicionar novo usuário
  users.push({ name, cpf, rg, email, telefone, endereco, renda, senha });
  res.status(201).json({ message: 'Usuário registrado com sucesso' });
});

module.exports = router;
