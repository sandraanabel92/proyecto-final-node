const jwt = require('jsonwebtoken');

//Almacenar la clave secreta

const JWT_SECRET = process.env.SECRET_JWT_KEY;

//Funcion para generar un token JWT

function generateToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  return token;
}

module.exports = {
  generateToken,
};
