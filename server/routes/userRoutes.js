const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const SECRET_KEY = 'a2f4bb131dab50a281286cf94efd2989ef0e24ea18d010bd735ee213f7837133';

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
