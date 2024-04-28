//Importamos Express y creamos un router

const express = require("express")
const router = express.Router()

//importacion del controlador de usuarios

const userController = require("../controllers/userController")

//Definiri las rutas para el CRUD de usuarios.
router.get("/",userController.getAllUsers) //Para obtener todos los usuarios
router.post("/",userController.createUser) //Para crear un usuario
router.put("/:id",userController.updatedUser) //Para actualizar un usuario
router.delete("/:id",userController.deleteUser) //Para eliminar un usuario

//exportacion del router
module.exports = router