const crypto = require('crypto');

const secret = crypto.randomBytes(32).toString('hex');

console.log(secret); //f011d2ebb9a42007640f7c108dcfa702a25a0121e493cbfe423a11995f9abe4e
