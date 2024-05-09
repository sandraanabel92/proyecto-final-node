const express = require('express');
const router = express.Router();
const redisCache = require('express-redis-cache');
const testCache = require('../controllers/cacheController');
console.log('process', process.env.REDIS_HOST);
const cache = redisCache({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  expire: +process.env.REDIS_EXPIRE,
  auth_pass: process.env.REDIS_PASSWORD,
});

router.get('/test-cache', cache.route(), testCache.getCache);
router.get('/test-fibonacci', cache.route(), testCache.fibonacci);

module.exports = router;
