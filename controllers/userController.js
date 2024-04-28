//Importar el modelo de Mongo
const User = required("../models/User")

//Funcion para obtner los usuarios
function getAllUsers(req,res){
    //metodo fin() de Mongoose para encontrar todos los usuarios

    User.find()
    .then(users => res.json(users)) //Se envia todos los usarios como respuesta
    .catch(err => {
        console.error(err)
        res.status(500).send("Error al obtener usuarios")
    })
}