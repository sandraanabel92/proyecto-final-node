//Importar Mongoose para crear la conexion a a DB de mongoDB

const mongoose = require('mongoose');

//Establecemos la URL de la base de datos == DB

const mongoDBURL = process.env.MONGO_URI;

//Funcion para conectarse a la DB
function connectDB() {
  return new Promise((res, rej) => {
    //Conectar a la base de datos usando la URL proporcionada
    mongoose
      .connect(mongoDBURL)
      .then(() => {
        console.log('Conexion a la base de datos establecida correctamente');
        //Si la conexion es exitosa resolvemos la promesa-
        res();
      })
      .catch((err) => {
        //Si hay un error al conectar, imprimir el error y rechazar la promesa
        console.error('Erro al conectar a la base de datos', err);
        rej(err);
      });
  });
}

//Exportamos la funcion de la conexion a la base de datos para poder utilizarla en  el app.js
module.exports = connectDB;
