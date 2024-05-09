//Importar express y la conexion a la db
require('dotenv').config();
const express = require('express');
const connectDb = require('./db/db');

//Creacion de una instacia de express

//Importamos las rutas
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const cacheRoutes = require('./routes/cacheRoute');
const bullRoutes = require('./routes/bullRoute');
const app = express();
const PORT = 3010;
const Arena = require('bull-arena');
const Bull = require('bull');
const { queues } = require('./workers/queues');

const arenaConfig = Arena(
  {
    Bull,
    queues,
  },
  {
    basePath: '/arena',
    disableListen: true,
  },
);

//Middleware

app.use(express.json());

//Rutas de autenticacion

app.use('/api/auth', authRoutes);

//Rutas de usuarios

app.use('/api/users', userRoutes);

//Rutas del usuario actual

app.use('/api/session', sessionRoutes);

// Rutas de cache test
app.use('/api/cache', cacheRoutes);

// Rutas de bull test
app.use('/api/bull', bullRoutes);

// Rutas de bull-arena
app.use(arenaConfig);

//Iniciamos la DB

connectDb();

//Inicializacion del servidor

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto: ' + PORT);
});
