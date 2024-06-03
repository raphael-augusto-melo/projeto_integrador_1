const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Importando as rotas
const userRoutes = require('./routes/userRoutes.js');
app.use('/api', userRoutes);

// Iniciando o servidor

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
