//Importamos Mongoose para definir y tener el esquema de usuario y el modelo

const mongoose = require("mongoose")
const { type } = require("os")

//Definimos el esquema de usuario utilizando el constructor de Mongoose llamado Schema.

const userSchema = new mongoose.Schema({
    nombre : {
        type: String,
        require: true  // El nombre es obligatorio
    },
    edad : {
        type: Number,
        require: true
    },
    email : {
        type : String,
        require: true,
        unique: true  //El correo electronico debe de ser unico
    },
    contraseña : {
        type: String,
        require: true

    } 
})

//Crear el modelo user utilizando el esquema definido anteriormente

const User= mongoose.model("User", userSchema)

//Exportamos el modelo User para usarlo en cualquier parte
module.exports= User