// Importando os módulos necessários
const express = require('express');

// Criando uma instância do Express
const app = express();

// Definindo uma rota
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Definindo a porta em que o servidor vai escutar
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
