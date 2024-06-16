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
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

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
    res.status(500).json({ message: 'Erro ao obter saldo' });6
  }
});

// Endpoint para buscar usuário por CPF, e-mail ou telefone
router.post('/buscarUsuario', authenticateToken, async (req, res) => {
  const { chave } = req.body;

  if (!chave) {
    return res.status(400).json({ message: 'Chave é obrigatória' });
  }

  try {
    const [results] = await connection.promise().query(
      'SELECT id, name, cpf, email, telefone, saldo FROM tb_usuarios WHERE cpf = ? OR email = ? OR telefone = ?',
      [chave, chave, chave]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ usuario: results[0] });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuário', error: err });
  }
});


// Endpoint para transferir dinheiro
router.post('/transfer', authenticateToken, async (req, res) => {
  const { chave, valor } = req.body;

  if (!chave || !valor) {
    return res.status(400).json({ message: 'Chave do destinatário e valor da transferência são obrigatórios' });
  }

  try {
    // Verificar se o usuário tem saldo suficiente
    const [remetenteResults] = await connection.promise().query('SELECT saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);
    if (remetenteResults.length === 0) {
      return res.status(404).json({ message: 'Usuário remetente não encontrado' });
    }

    const remetenteSaldo = remetenteResults[0].saldo;
    if (remetenteSaldo < valor) {
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }

    // Verificar se o destinatário existe
    const [destinatarioResults] = await connection.promise().query(
      'SELECT id, saldo FROM tb_usuarios WHERE cpf = ? OR email = ? OR telefone = ?',
      [chave, chave, chave]
    );
    if (destinatarioResults.length === 0) {
      return res.status(404).json({ message: 'Usuário destinatário não encontrado' });
    }

    const destinatario = destinatarioResults[0];

    // Iniciar uma transação
    const conn = await connection.promise().getConnection();
    await conn.beginTransaction();

    try {
      // Atualizar saldo do remetente
      await conn.query('UPDATE tb_usuarios SET saldo = saldo - ? WHERE id = ?', [valor, req.user.id]);

      // Atualizar saldo do destinatário
      await conn.query('UPDATE tb_usuarios SET saldo = saldo + ? WHERE id = ?', [valor, destinatario.id]);

      // Commitar a transação
      await conn.commit();

      res.status(200).json({ message: 'Transferência realizada com sucesso' });
    } catch (err) {
      // Rollback em caso de erro
      await conn.rollback();
      res.status(500).json({ message: 'Erro ao realizar transferência', error: err });
    } finally {
      conn.release();
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao conectar com o servidor', error: err });
  }
});

module.exports = router;
