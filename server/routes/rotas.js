const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cron = require('node-cron');
const connection = require('../database'); // Importa a conexão com o banco de dados

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || 'a2f4bb131dab50a281286cf94efd2989ef0e24ea18d010bd735ee213f7837133';

// Função para converter data de DD/MM/AAAA para AAAA-MM-DD
function convertDateToSQLFormat(dateString) {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
}

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

router.post('/transfer', authenticateToken, async (req, res) => {
  const { chave, valor, data } = req.body;

  if (!chave || !valor || !data) {
    return res.status(400).json({ message: 'Chave do destinatário, valor da transferência e data são obrigatórios' });
  }

  const formattedDate = convertDateToSQLFormat(data);

  try {
    // Verificar saldo do remetente
    const [remetenteResults] = await connection.promise().query('SELECT saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);
    if (remetenteResults.length === 0) {
      return res.status(404).json({ message: 'Usuário remetente não encontrado' });
    }

    const remetenteSaldo = remetenteResults[0].saldo;
    if (remetenteSaldo < valor) {
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }

    // Verificar destinatário
    const [destinatarioResults] = await connection.promise().query(
      'SELECT id, saldo FROM tb_usuarios WHERE cpf = ? OR email = ? OR telefone = ?',
      [chave, chave, chave]
    );
    if (destinatarioResults.length === 0) {
      return res.status(404).json({ message: 'Usuário destinatário não encontrado' });
    }

    const destinatario = destinatarioResults[0];

    // Inserir a transferência como envio para o remetente
    await connection.promise().query(
      'INSERT INTO tabela_trans_envios (remetente_id, destinatario_id, valor, data, status) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, destinatario.id, valor, formattedDate, 'COMPLETED']
    );

    // Inserir a transferência como recebimento para o destinatário
    await connection.promise().query(
      'INSERT INTO tabela_trans_recebidos (remetente_id, destinatario_id, valor, data, status) VALUES (?, ?, ?, ?, ?)',
      [req.user.id, destinatario.id, valor, formattedDate, 'COMPLETED']
    );

    // Atualizar saldo do remetente e do destinatário
    await connection.promise().query('UPDATE tb_usuarios SET saldo = saldo - ? WHERE id = ?', [valor, req.user.id]);
    await connection.promise().query('UPDATE tb_usuarios SET saldo = saldo + ? WHERE id = ?', [valor, destinatario.id]);

    res.status(200).json({ message: 'Transferência realizada com sucesso' });
  } catch (err) {
    console.error('Erro ao realizar transferência:', err);
    res.status(500).json({ message: 'Erro ao realizar transferência', error: err });
  }
});


router.get('/extrato', authenticateToken, async (req, res) => {
  try {
    console.log('Requisição recebida para /extrato'); // Adicione este log
    const [enviosResults] = await connection.promise().query(
      'SELECT * FROM tabela_trans_envios WHERE remetente_id = ? ORDER BY data DESC',
      [req.user.id]
    );

    const [recebidosResults] = await connection.promise().query(
      'SELECT * FROM tabela_trans_recebidos WHERE destinatario_id = ? ORDER BY data DESC',
      [req.user.id]
    );

    const [saldoResults] = await connection.promise().query('SELECT saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);
    if (saldoResults.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const { saldo } = saldoResults[0];

    // Unir e ordenar os resultados por data
    const transferencias = [...enviosResults, ...recebidosResults].sort((a, b) => new Date(b.data) - new Date(a.data));

    res.json({ transferencias, saldo });
  } catch (err) {
    console.error('Erro ao obter extrato:', err); // Adicione este log
    res.status(500).json({ message: 'Erro ao obter extrato', error: err });
  }
});


// Função para agendar deduções de saldo para cada parcela
async function scheduleParcelas() {
    cron.schedule('0 0 * * *', async () => { // Executa à meia-noite todos os dias
        const today = new Date().toISOString().split('T')[0];

        try {
            const [pendingTransfers] = await connection.promise().query(
                'SELECT * FROM tb_transferencias WHERE status = ? AND data = ?', 
                ['PENDING', today]
            );

            for (const transfer of pendingTransfers) {
                // Deduzir o valor do saldo do usuário remetente
                await connection.promise().query(
                    'UPDATE tb_usuarios SET saldo = saldo - ? WHERE id = ?', 
                    [transfer.valor, transfer.remetente_id]
                );

                // Atualizar o status da transferência para COMPLETED
                await connection.promise().query(
                    'UPDATE tb_transferencias SET status = ? WHERE id = ?', 
                    ['COMPLETED', transfer.id]
                );
            }
        } catch (err) {
            console.error('Erro ao processar parcelas:', err);
        }
    });
}

scheduleParcelas();

async function agendarParcelas(userId, valorParcela, dataParcela, numParcelas) {
    const date = new Date(dataParcela);

    for (let i = 0; i < numParcelas; i++) {
        const data = new Date(date);
        data.setMonth(data.getMonth() + i); // Incrementa o mês para cada parcela

        const formattedDate = data.toISOString().split('T')[0];

        await connection.promise().query(
            'INSERT INTO tb_transferencias (remetente_id, destinatario_id, valor, data, status) VALUES (?, ?, ?, ?, ?)', 
            [userId, null, valorParcela, formattedDate, 'PENDING']
        );
    }
}

router.post('/emprestimo', authenticateToken, async (req, res) => {
  const { valor, numParcelas } = req.body;
  // Converte o valor em string para um número decimal
  const valorEmReais = parseFloat(valor.replace(/\./g, '').replace(',', '.'));

  const valorParcela = valorEmReais / numParcelas;

  try {
      const [userResults] = await connection.promise().query('SELECT renda, saldo FROM tb_usuarios WHERE id = ?', [req.user.id]);

      if (userResults.length === 0) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const user = userResults[0];

      if (user.renda <= 1000) {
          return res.status(400).json({ message: "Renda insuficiente para o empréstimo" });
      }

      // Atualizar saldo do usuário com o valor do empréstimo
      const novoSaldo = parseFloat(user.saldo) + valorEmReais;
      console.log(novoSaldo);
      await connection.promise().query('UPDATE tb_usuarios SET saldo = ? WHERE id = ?', [novoSaldo, req.user.id]);

      // Agendar parcelas
      const hoje = new Date().toISOString().split('T')[0];
      await agendarParcelas(req.user.id, valorParcela, hoje, numParcelas);

      res.status(200).json({ message: 'Empréstimo realizado com sucesso', novoSaldo });
  } catch (err) {
      console.error('Erro ao registrar o empréstimo:', err);
      res.status(500).json({ message: 'Erro ao registrar o empréstimo' });
  }
});

router.post('/verify-user', async (req, res) => {
  const { email, cpf } = req.body;
  
  console.log(email, cpf)
  if (!email || !cpf) {
      return res.status(400).json({ message: 'Email e CPF são obrigatórios' });
  }

  try {
      // Verificar se o email e CPF existem no banco de dados
      const [results] = await connection.promise().query('SELECT * FROM tb_usuarios WHERE email = ? AND cpf = ?', [email, cpf]);
      if (results.length === 0) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      // Gerar um token ou identificador único para esta solicitação (pode ser um UUID, por exemplo)
      const token = 'gerar-um-token-unico-aqui';

      // Retornar o token junto com a resposta
      res.status(200).json({ message: 'Usuário encontrado, prosseguir com a alteração de senha', token });
  } catch (error) {
      res.status(500).json({ message: 'Erro ao verificar usuário', error: error.message });
  }
});

// Endpoint para atualizar a senha
router.post('/update-password', async (req, res) => {
  const { email, cpf, newPassword } = req.body;

  if (!newPassword) {
      return res.status(400).json({ message: 'Nova senha é obrigatória' });
  }

  try {
      // Criptografar a nova senha
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Atualizar a senha no banco de dados para o usuário correspondente ao email e CPF fornecidos
      const [result] = await connection.promise().query(
          'UPDATE tb_usuarios SET senha = ? WHERE email = ? AND cpf = ?',
          [hashedPassword, email, cpf]
      );

      // Verifica se houve algum usuário atualizado
      if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Usuário não encontrado ou dados incorretos' });
      }

      res.status(200).json({ message: 'Senha atualizada com sucesso' });
  } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar senha', error: error.message });
  }
});

module.exports = router;
