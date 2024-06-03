const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.use(express.json());

router.post('/register', async (req, res) => {
  const { name, cpf, rg, email, telefone, endereco, renda, senha } = req.body;

  if (!name || !cpf || !rg || !email || !telefone || !endereco || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const userExists = await User.findOne({ where: { [Sequelize.Op.or]: [{ cpf }, { email }] } });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já cadastrado' });
    }

    await User.create({ name, cpf, rg, email, telefone, endereco, renda, senha });
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

router.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const user = await User.findOne({ 
      where: { cpf },
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclui as colunas createdAt e updatedAt da seleção
    });

    if (!user) {
      return res.status(400).json({ message: 'CPF ou senha inválidos' });
    }

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
      return res.status(400).json({ message: 'CPF ou senha inválidos' });
    }

    // Se as credenciais estiverem corretas, gere o token JWT
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });

    // Retorne apenas o token JWT no corpo da resposta
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao conectar com o servidor' });
  }
});

module.exports = router;
