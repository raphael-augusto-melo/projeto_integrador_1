// server/routes/rotas.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../database'); // Importa a conexão com o banco de dados

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || 'a2f4bb131dab50a281286cf94efd2989ef0e24ea18d010bd735ee213f7837133';

// Rota de Registro
router.post('/register', async (req, res) => {
  const { name, cpf, rg, email, telefone, endereco, renda, senha } = req.body;

  if (!name || !cpf || !rg || !email || !telefone || !endereco || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const [results] = await connection.promise().query('SELECT * FROM tb_usuarios WHERE cpf = ? OR email = ?', [cpf, email]);
    if (results.length > 0) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await connection.promise().query('INSERT INTO tb_usuarios (name, cpf, rg, email, telefone, endereco, renda, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, cpf, rg, email, telefone, endereco, renda, hashedPassword]);

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error: err });
  }
});

// Rota de Login
router.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const [results] = await connection.promise().query('SELECT * FROM tb_usuarios WHERE cpf = ?', [cpf]);
    if (results.length === 0) {
      return res.status(400).json({ message: 'CPF ou senha inválidos' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({ message: 'CPF ou senha inválidos' });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao conectar com o servidor' });
  }
});

// Middleware de autenticação
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido.' });
    req.user = user;
    next();
  });
};

// Endpoint para obter saldo
router.get('/saldo', authenticateToken, async (req, res) => {
  try {
    const [results] = await connection.promise().query('SELECT saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);
    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const { saldo } = results[0];
    res.json({ saldo });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter saldo' });
  }
});

module.exports = router;
