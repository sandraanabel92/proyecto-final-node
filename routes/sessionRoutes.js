//Importamos Express y creamos un router

const express = require('express');
const router = express.Router();

//importacion del controlador de sessionRouter

const sessionController = require('../controllers/sessionController');
const verifyToken = require('../middleware/verifyToken');

//Ruta protegida para obtener informacion sobre el usuario que inicio sesion

router.get('/currentUser', verifyToken, sessionController.getCurrentUser); //Ruta protegida para obtener informacion del usuario que esta conectado actualmente.

module.exports = router;
