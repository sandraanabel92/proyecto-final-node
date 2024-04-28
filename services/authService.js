const jwt = require("jsonwebtoken")

//Almacenar la clave secreta

const JWT_SECRET = "f011d2ebb9a42007640f7c108dcfa702a25a0121e493cbfe423a11995f9abe4e"

//Funcion para generar un token JWT

function generateToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    return token
}

module.exports = {
    generateToken
}