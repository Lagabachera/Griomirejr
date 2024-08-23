const express = require('express');
const router = express.Router();

// Ruta para análisis de texto
router.post('/analyze', (req, res) => {
  const { text } = req.body;
  // Lógica para analizar texto con Grimoire API
  res.json({ message: 'Texto recibido', text });
});

module.exports = router;