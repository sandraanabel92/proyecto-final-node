'use strict';
const { testJob } = require('../workers/queues');

function testBull(req, res) {
  testJob.add();
  return res.status(200).json({
    status: 200,
    message: 'Test de job',
  });
}

module.exports = {
  testBull,
};
