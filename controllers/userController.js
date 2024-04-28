//Importar el modelo de Mongo
const User = require("../models/User")

//Funcion para obtner los usuarios
function getAllUsers(req, res) {
    //metodo fin() de Mongoose para encontrar todos los usuarios

    User.find()
        .then(users => res.status(200).json(users)) //Se envia todos los usarios como respuesta
        .catch(err => {
            console.error(err)
            res.status(500).send("Error al obtener usuarios")
        })
}

//Funcion para creacion de un usuario
function createUser(req, res) {
    //Extraer la informacion del cuerpo de la solicitud

    const { nombre, edad, email, contraseña } = req.body

    //Creacion de un nuevo usuario con el metodo create()
    User.create({ nombre, edad, email, contraseña })
        .then(newUser => res.status(201).json(newUser))
        .catch(err => {
            console.error(err)
            res.status(500).send("Error al crear un nuevo Usuario")
        })
}

//Actualizacion del usuario
function updatedUser(req, res){

    //Obtencion del Id del usuario a actualizar
    const userId= req.params.id

    //Obtencion de los datos actualizados del body de la req
    const updatedUser= req.body

    //findByIdAndUpdate() para buscar y actualizar el usuario por ID
    User.findByIdAndUpdate(userId, updatedUser, {new:true})
    .then(user =>res.status(200).json(user))
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error al actualizar el usuario");
    })

}

//Eliminar Usuario
function deleteUser(req, res){
    const userId = req.params.id;

    //findByIdAndDelete() busca y elimina un usuario por Id
    User.findByIdAndDelete(userId)
    .then(() => res.status(204).send("Usuario eliminado correctamente"))
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error al eliminar el usuario");
    })
}

//Exportacion de las funciones

module.exports = {
    createUser,
    deleteUser,
    getAllUsers,
    updatedUser
}