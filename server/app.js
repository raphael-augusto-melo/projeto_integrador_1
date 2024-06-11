// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/rotas.js'); // Importa as rotas de autenticação

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Para lidar com requisições URL-encoded

// Rotas
app.use('/api', authRoutes); // Prefira agrupar todas as rotas sob um prefixo comum, como /api

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
