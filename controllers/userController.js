//Importar el modelo de Mongo
const User = required("../models/User")

//Funcion para obtner los usuarios
function getAllUsers(req, res) {
    //metodo fin() de Mongoose para encontrar todos los usuarios

    User.find()
        .then(users => res.json(users)) //Se envia todos los usarios como respuesta
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
        .then(newUser => res.json(newUser))
        .catch(err => {
            console.error(err)
            res.status(500).send("Error al crear un nuevo Usuario")
        })
}