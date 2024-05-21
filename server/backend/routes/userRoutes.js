const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const SECRET_KEY = 'your_secret_key'; // Use uma chave secreta mais forte e segura na produção

// Rota de login
router.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const user = await User.findOne({ where: { cpf } });
    if (!user) {
      return res.status(400).json({ message: 'CPF ou senha inválidos' });
    }

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({ message: 'CPF ou senha inválidos' });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao conectar com o servidor' });
  }
});

// Rota para registro de usuário (temporária para teste)
router.post('/register', async (req, res) => {
  const { name, cpf, rg, email, telefone, endereco, renda, senha } = req.body;
  console.log('Dados recebidos:', req.body); // Para depuração

  // Validação básica
  if (!name || !cpf || !rg || !email || !telefone || !endereco || !senha) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos obrigatórios' });
  }

  try {
    const hashedSenha = await bcrypt.hash(senha, 10);
    const sqlInsert = 'INSERT INTO users (name, cpf, rg, email, telefone, endereco, renda, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sqlInsert, [name, cpf, rg, email, telefone, endereco, renda, hashedSenha], (err, result) => {
      if (err) {
        console.error('Erro ao registrar o usuário:', err); // Para depuração
        return res.status(500).json({ message: 'Erro ao registrar o usuário' });
      }
      console.log('Usuário registrado com sucesso:', result); // Para depuração
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    });
  } catch (err) {
    console.error('Erro ao processar a senha:', err); // Para depuração
    res.status(500).json({ message: 'Erro ao registrar o usuário' });
  }
});

module.exports = router;

