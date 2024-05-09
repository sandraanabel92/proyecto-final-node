const express = require('express');
const router = express.Router();
const testBull = require('../controllers/bullController');

router.get('/my-job', testBull.testBull);

module.exports = router;
