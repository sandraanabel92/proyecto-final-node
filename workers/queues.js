'use strict';
require('dotenv').config();
const Queue = require('bull');

let redis = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
};

const { testJob: myJobWorker } = require('./workers');

const testJob = new Queue('my-job', {
  redis,
});

testJob.process(1, (job, done) => myJobWorker(job, done));

const queues = [
  {
    name: 'my-job',
    hostId: 'Job de test de configuracion',
    redis,
  },
];

module.exports = {
  testJob,
  queues,
};
