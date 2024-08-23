const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hola desde el servidor Express!');
});

// Configuración para las rutas de la API de Grimoire
const grimoireRoutes = require('./routes/grimoire');
app.use('/api/grimoire', grimoireRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});