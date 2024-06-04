const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../database'); // Importa a conexão com o banco de dados

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || 'a2f4bb131dab50a281286cf94efd2989ef0e24ea18d010bd735ee213f7837133';

// Rota de Registro
router.post('/register', async (req, res) => {
  const { name, cpf, rg, email, telefone, endereco, renda, senha } = req.body;

  // Validação básica
  if (!name || !cpf || !rg || !email || !telefone || !endereco || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  // Verificar se o usuário já existe
  const checkUserQuery = 'SELECT * FROM tb_usuarios WHERE cpf = ? OR email = ?';
  connection.query(checkUserQuery, [cpf, email], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro no servidor', error: err });
    }
    if (results.length > 0) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Adicionar novo usuário
    const insertUserQuery = 'INSERT INTO tb_usuarios (name, cpf, rg, email, telefone, endereco, renda, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(insertUserQuery, [name, cpf, rg, email, telefone, endereco, renda, hashedPassword], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao registrar usuário', error: err });
      }
      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    });
  });
});

// Rota de Login
router.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const checkUserQuery = 'SELECT * FROM tb_usuarios WHERE cpf = ?';
    connection.query(checkUserQuery, [cpf], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Erro no servidor', error: err });
      }
      if (results.length === 0) {
        return res.status(400).json({ message: 'CPF ou senha inválidos' });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(senha, user.senha);
      if (!isMatch) {
        return res.status(400).json({ message: 'CPF ou senha inválidos' });
      }

      // Se as credenciais estiverem corretas, gere o token JWT
      const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

      // Retorne apenas o token JWT no corpo da resposta
      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao conectar com o servidor' });
  }
});

module.exports = router;
