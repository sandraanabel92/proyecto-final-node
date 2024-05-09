//Importamos Express y creamos un router

const express = require('express');
const router = express.Router();

//importacion del controlador de usuarios

const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

//Definiri las rutas para el CRUD de usuarios.
router.get('/', verifyToken, userController.getAllUsers); //Para obtener todos los usuarios
router.post('/', userController.createUser); //Para crear un usuario
router.put('/:id', verifyToken, userController.updatedUser); //Para actualizar un usuario
router.delete('/:id', verifyToken, userController.deleteUser); //Para eliminar un usuario

//exportacion del router
module.exports = router;
