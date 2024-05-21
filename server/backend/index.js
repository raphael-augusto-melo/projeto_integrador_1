const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

// Configuração do middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração das rotas
app.use('/api', router);

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
