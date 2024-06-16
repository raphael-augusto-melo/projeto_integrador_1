const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const connection = require('./database'); // Ajuste o caminho conforme necessário
const authRoutes = require('./routes/rotas.js'); // Importa as rotas de autenticação

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Para lidar com requisições URL-encoded

// Rotas
app.use('/api', authRoutes); // Prefira agrupar todas as rotas sob um prefixo comum, como /api

// Função para processar transferências pendentes
const processPendingTransfers = async () => {
  try {
    const [pendingTransfers] = await connection.promise().query('SELECT * FROM tb_transferencias WHERE status = "PENDING" AND data <= CURDATE()');
    
    for (const transfer of pendingTransfers) {
      const { id, remetente_id, destinatario_id, valor } = transfer;

      await connection.promise().beginTransaction();
      try {
        await connection.promise().query('UPDATE tb_usuarios SET saldo = saldo - ? WHERE id = ?', [valor, remetente_id]);
        await connection.promise().query('UPDATE tb_usuarios SET saldo = saldo + ? WHERE id = ?', [valor, destinatario_id]);
        await connection.promise().query('UPDATE tb_transferencias SET status = "COMPLETED" WHERE id = ?', [id]);
        await connection.promise().commit();
      } catch (err) {
        await connection.promise().rollback();
        console.error('Erro ao processar transferência:', err);
      }
    }
  } catch (err) {
    console.error('Erro ao buscar transferências pendentes:', err);
  }
};

// Agendar a execução a cada hora
cron.schedule('0 * * * *', () => {
  console.log('Verificando transferências pendentes...');
  processPendingTransfers();
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
