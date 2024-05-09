'use strict';
require('dotenv').config();
const Queue = require('bull');

const myQueue = new Queue('myQueue', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
});

myQueue.process(async (job) => {
  console.log('Procesando tarea para el ID ', job.id);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('Tarea completada para el ID ', job.id);
});

for (let i = 0; i < 5; i++) {
  myQueue.add({ id: i });
}
