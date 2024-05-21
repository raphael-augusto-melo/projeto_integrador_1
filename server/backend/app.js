const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/register', authRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
