//Importar express y la conexion a la db

const express = require("express")
const connectDb = require("./db/db")

//Creacion de una instacia de express

//Importamos las rutas
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes")

const app = express()
const PORT = 3010   

//Middleware

app.use(express.json())

//Rutas de autenticacion

app.use("/api/auth", authRoutes)

//Rutas de usuarios

app.use("/api/users", userRoutes)

//Rutas del usuario actual

app.use("/api/session", sessionRoutes)

//Iniciamos la DB

connectDb()

//Inicializacion del servidor

app.listen(PORT,() =>{
    console.log("Servidor corriendo en el puerto: " +PORT)
})