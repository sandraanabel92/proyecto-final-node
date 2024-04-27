//Importar express, rutas de usuario y la conexion a la db

const express = require("express")
const userRoutes = require("./routes/userRoutes")
const connectDb = require("./db/db")

//Creacion de una instacia de express

const app = express()
const PORT = 3010   

//Middleware

app.use(express.json())

//Rutas

//app.use("/api/users", userRoutes)

//Iniciamos la DB

connectDb()

//Inicializacion del servidor

app.listen(PORT,() =>{
    console.log("Servidor corriendo en el puerto: " +PORT)
})