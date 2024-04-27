//Importar express, rutas de usuario y la conexion a la db

const express = require("express")
const userRoutes = require("./routes/userRoutes")
const db = require("./db/db")

//Creacion de una instacia de express

const app = express()
const PORT = 3010   

//Middleware

app.use(express.json())

//Rutas

//app.use("/api/users", userRoutes)

//Inicializacion del servidor

app.listen(PORT,() =>{
    console.log("Servidor corriendo en el puerto: " +PORT)
})