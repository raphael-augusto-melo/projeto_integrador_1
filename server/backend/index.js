const express = require('express');
const router = express.Router();

// Rota de exemplo
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;
