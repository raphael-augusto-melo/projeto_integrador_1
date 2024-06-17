// Função para converter data de DD/MM/AAAA para AAAA-MM-DD
function convertDateToSQLFormat(dateString) {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
}

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

    if (!token) {
        console.log('Token não fornecido');
        return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.log('Token inválido', err);
            return res.status(403).json({ message: 'Token inválido.' });
        }
        req.user = user;
        next();
    });
};

// Endpoint para obter saldo
router.get('/saldo', authenticateToken, async (req, res) => {
    try {
        console.log('Usuário autenticado:', req.user);
        const [results] = await connection.promise().query('SELECT saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);
        if (results.length === 0) {
            console.log('Usuário não encontrado');
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const { saldo } = results[0];
        console.log('Saldo encontrado:', saldo);
        res.json({ saldo });
    } catch (err) {
        console.log('Erro ao obter saldo', err);
        res.status(500).json({ message: 'Erro ao obter saldo' });
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
  const { chave, valor, data } = req.body;

  console.log('Dados recebidos para transferência:', { chave, valor, data });

  if (!chave || !valor || !data) {
    return res.status(400).json({ message: 'Chave do destinatário, valor da transferência e data são obrigatórios' });
  }

  // Converter data para formato AAAA-MM-DD
  const formattedDate = convertDateToSQLFormat(data);

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

    // Inserir a transferência com status PENDING se a data for futura
    const status = new Date(formattedDate) > new Date() ? 'PENDING' : 'COMPLETED';

    await connection.promise().query(
      'INSERT INTO tb_transferencias (remetente_id, destinatario_id, valor, data, status) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, destinatario.id, valor, formattedDate, status]
    );

    if (status === 'COMPLETED') {
      // Atualizar saldo do remetente e do destinatário se a transferência for completada imediatamente
      await connection.promise().query('UPDATE tb_usuarios SET saldo = saldo - ? WHERE id = ?', [valor, req.user.id]);
      await connection.promise().query('UPDATE tb_usuarios SET saldo = saldo + ? WHERE id = ?', [valor, destinatario.id]);
    }

    res.status(200).json({ message: `Transferência ${status === 'PENDING' ? 'agendada' : 'realizada'} com sucesso` });
  } catch (err) {
    console.error('Erro ao conectar com o servidor', err);
    res.status(500).json({ message: 'Erro ao conectar com o servidor', error: err });
  }
});

// Endpoint para obter extrato de transferências
router.get('/extrato', authenticateToken, async (req, res) => {
  try {
      const [transferenciasResults] = await connection.promise().query(
          'SELECT * FROM tb_transferencias WHERE remetente_id = ? OR destinatario_id = ? ORDER BY data DESC',
          [req.user.id, req.user.id]
      );

      const [saldoResults] = await connection.promise().query('SELECT saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);
      if (saldoResults.length === 0) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      const { saldo } = saldoResults[0];

      res.json({ transferencias: transferenciasResults, saldo });
  } catch (err) {
      res.status(500).json({ message: 'Erro ao obter extrato', error: err });
  }
});

// Adicione este endpoint no arquivo rotas.js

// Endpoint para solicitar empréstimo
router.post('/solicitarEmprestimo', authenticateToken, async (req, res) => {
  const { valor } = req.body;

  if (!valor || valor > 30000) {
      return res.status(400).json({ message: 'Valor do empréstimo deve ser inferior ou igual a R$ 30.000,00' });
  }

  try {
      // Aqui você pode adicionar a lógica para verificar a elegibilidade do usuário para o empréstimo
      // e processar a solicitação conforme necessário

      res.status(200).json({ message: 'Empréstimo solicitado com sucesso' });
  } catch (err) {
      console.error('Erro ao solicitar empréstimo:', err);
      res.status(500).json({ message: 'Erro ao processar solicitação de empréstimo', error: err });
  }
});

module.exports = router;
