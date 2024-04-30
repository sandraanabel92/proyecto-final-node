//Importamos Express y creamos un router

const express = require("express")
const router = express.Router()

//importacion del controlador de authRoutes

const authController = require("../controllers/authController")

//Rutas para el Auth del  User

router.post("/login", authController.login)
router.get("/logout", authController.logout)

module.exports = router

